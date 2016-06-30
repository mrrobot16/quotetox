import { QuotetoxClientPage } from './app.po';

describe('quotetox-client App', function() {
  let page: QuotetoxClientPage;

  beforeEach(() => {
    page = new QuotetoxClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('quotetox-client works!');
  });
});
