import { UnshiftPage } from './app.po';

describe('unshift App', function() {
  let page: UnshiftPage;

  beforeEach(() => {
    page = new UnshiftPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
