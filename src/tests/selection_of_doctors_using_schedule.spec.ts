import DataHelper from 'src/helpers/DataHelper';
import DoctorPage from 'src/pages/DoctorPage';
import Reporter from "@wdio/allure-reporter";
import { assert } from 'chai';

describe('Selection of doctors using schedule', () => {

    before('setup', () => {
        Reporter.addStep('Open Doctors page')
        DoctorPage.openPage();
    });

    it('User should be able to filter schedule of docrtors based on their employment', () => {
        Reporter.addStep('Check that url is correct')
        DoctorPage.getPageUrl().should.be.equal(DataHelper._doctorPageFullUrl);

        Reporter.addStep('Check that correct number of cards with doctors are displayed');
        DoctorPage.checkAreDoctorCardsDisplayed();
        DoctorPage.getNumberOfDoctorCards().should.be.equal(DataHelper._expectedNumberOfCards);

        Reporter.addStep('Check that "Расписание" button is displayed on page and has correct title');
        DoctorPage.checkIsScheduleBtnDisplayed();
        DoctorPage.getScheduleBtnText().should.be.equal(DataHelper._scheduleForAllDays);

        Reporter.addStep('Check that after clicking on "Расписание" button schedule pane appears and it has check mark on "Все дни" button');
        DoctorPage.clickScheduleBtn();
        DoctorPage.checkIsSchedulePaneDisplayed();
        DoctorPage.getScheduleBtnWithCheckMarkText().should.be.equal(DataHelper._scheduleAllDaysBtnTitle);

        Reporter.addStep('Check that after clicking on "Завтра" button "Расписание" button has correct title');
        DoctorPage.clickScheduleTommorowBtn();
        DoctorPage.checkIsScheduleBtnDisplayed();
        DoctorPage.getScheduleBtnText().should.be.equal(DataHelper._scheduleForTomorrow);
        DoctorPage.getPageUrl().should.be.equal(DataHelper._doctorPageFullUrl);

        Reporter.addStep('Check that correct number of cards are displayed and doctors available for tomorrow are displayed too')
        DoctorPage.checkAreDoctorCardsDisplayed();
        DoctorPage.getNumberOfDoctorCards().should.be.equal(DataHelper._expectedNumberOfCards);
        DoctorPage.checkAreDoctorsDisplayed();
    });
});