export class BrowserHelper {

    clickElement(element: WebdriverIO.Element): void {
      element.waitForClickable({timeout:4000, timeoutMsg: 'element is not clickable after 4s'});
      element.click();
    }
  
    checkIsElementDisplayed(element: WebdriverIO.Element): void {
      element.waitForDisplayed({timeout:4000, timeoutMsg: 'element is not displayed'});
    }
  
    checkAreElementsDisplayedWithScrolling(elements: WebdriverIO.ElementArray): void {
      elements.forEach(element => {;
        element.scrollIntoView();
        element.waitForDisplayed({timeout:4000, timeoutMsg: 'element is not displayed'});
      })
    }
  
    checkAreElementsDisplayedWithoutScrolling(elements: WebdriverIO.ElementArray): void {
      elements.forEach(element => {;
        element.waitForDisplayed({timeout:4000, timeoutMsg: 'element is not displayed'});
      })
    }
  
    getNumberOfElements(elements: WebdriverIO.ElementArray): number {
      return elements.length;
    }
  
    getElementText(element: WebdriverIO.Element): string {
      return element.getText();
    }
  
  }
  
  export default new BrowserHelper()