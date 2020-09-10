export class DataHelper {

    public _doctorPageShortUrl: string;
    public _doctorPageFullUrl: string;
    public _scheduleForTomorrow: string;
    public _scheduleForAllDays: string;
    public _scheduleAllDaysBtnTitle: string;
    public _expectedNumberOfCards: number;
    
    constructor() {
       this._doctorPageShortUrl = '/doctor';
       this._doctorPageFullUrl = 'https://docdoc.ru/doctor';
       this._scheduleForTomorrow = 'Расписание на завтра';
       this._scheduleForAllDays = 'Расписание на все дни';
       this._scheduleAllDaysBtnTitle = 'Все дни';
       this._expectedNumberOfCards = 10;
    }
 }

 export default new DataHelper()

