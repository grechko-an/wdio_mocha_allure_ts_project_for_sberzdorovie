export default class BasePage {
    
    openPage(path: string): void {
        browser.url(path);
    }

    getUrl():string {
        let url = browser.getUrl();
        return url
    }

}