import { DemoaPage } from './app.po';

describe('demoa App', () => {
  let page: DemoaPage;

  beforeEach(() => {
    page = new DemoaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
