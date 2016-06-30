export class QuotetoxClientPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('quotetox-client-app h1')).getText();
  }
}
