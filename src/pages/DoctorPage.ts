import BasePage from './BasePage';
import BrowserHelper from '../helpers/BrowserHelper'
import DataHelper from '../helpers/DataHelper';

class DoctorPage extends BasePage {

    public _doctorCard: string;
    public _scheduleBtn: string;
    public _schedulePane: string;
    public _scheduleBtnTitle: string;
    public _scheduleBtnWithCheckMark: string;
    public _scheduleTomorrowBtn: string;
    public _doctorName: string;
    public _doctorPhoto: string;

    constructor() {
        super();
        this._doctorCard = '//div[@data-test-id="doctor-card-search-results"]';
        this._scheduleBtn = '//div[@data-test-id="filters"]//button[@data-test-id="calendar-button"]';
        this._schedulePane = '//div[@data-test-id="date_select_items"]//div[@class="select-box__options"]';
        this._scheduleBtnTitle = '//div[@data-test-id="filters"]//button[@data-test-id="calendar-button"]//span//span[@class="select-box__title"]';
        this._scheduleBtnWithCheckMark = '//span[@class="select-box__options-item-active-icon"]//parent::button//span[@class="select-box__options-item-title"]';
        this._scheduleTomorrowBtn = '//button[@data-ga-value="1"]';
        this._doctorName = '//div[@data-test-id="doctor-card-search__doctor-name"]';
        this._doctorPhoto = '//div[@data-test-id="doctor-card-search__avatar"]';
    }

    get doctorCards(): WebdriverIO.ElementArray { 
        return $$(this._doctorCard);
    }

    get scheduleBtn(): WebdriverIO.Element { 
        return $(this._scheduleBtn);
    }

    get schedulePane(): WebdriverIO.Element {
        return $(this._schedulePane);
    }

    get scheduleBtnTitle(): WebdriverIO.Element {
        return $(this._scheduleBtnTitle)
    }

    get scheduleBtnWithCheckMark(): WebdriverIO.Element {
        return $(this._scheduleBtnWithCheckMark);
    }

    get scheduleTomorrowBtn(): WebdriverIO.Element {
        return $(this._scheduleTomorrowBtn);
    }

    get doctorNames(): WebdriverIO.ElementArray {
        return $$(this._doctorName);
    }

    get doctorPhotos(): WebdriverIO.ElementArray {
        return $$(this._doctorPhoto);
    }

    openPage(): void {
        super.openPage(DataHelper._doctorPageShortUrl);
    }

    getPageUrl(): string {
        return super.getUrl();
    }

    checkAreDoctorCardsDisplayed(): void {
        BrowserHelper.checkAreElementsDisplayedWithoutScrolling(this.doctorCards);
    }

    checkAreDoctorNamesDisplayed(): void {
        BrowserHelper.checkAreElementsDisplayedWithoutScrolling(this.doctorNames);
    }

    checkAreDoctorPhotosDisplayed(): void {
        BrowserHelper.checkAreElementsDisplayedWithScrolling(this.doctorPhotos);
    }

    getNumberOfDoctorCards(): number {
        return BrowserHelper.getNumberOfElements(this.doctorCards);
    }

    checkIsScheduleBtnDisplayed(): void {
        BrowserHelper.checkIsElementDisplayed(this.scheduleBtn);
    }

    checkIsSchedulePaneDisplayed(): void {
        BrowserHelper.checkIsElementDisplayed(this.schedulePane);
    }

    checkIsScheduleBtnWithCheckMarkDisplayed(): void {
        BrowserHelper.checkIsElementDisplayed(this.scheduleBtnWithCheckMark);
    }

    checkAreDoctorsDisplayed(): void {
        this.checkAreDoctorNamesDisplayed();
        this.checkAreDoctorPhotosDisplayed();
    }

    getScheduleBtnText(): string {
        return BrowserHelper.getElementText(this.scheduleBtnTitle);
    }

    getScheduleBtnWithCheckMarkText(): string {
        return BrowserHelper.getElementText(this.scheduleBtnWithCheckMark);
    }

    clickScheduleBtn(): void {
        BrowserHelper.clickElement(this.scheduleBtn);
    }

    clickScheduleTommorowBtn(): void {
        BrowserHelper.clickElement(this.scheduleTomorrowBtn);
    }

}

export default new DoctorPage()