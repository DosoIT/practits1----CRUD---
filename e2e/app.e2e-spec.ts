import { Practits1Page } from './app.po';

describe('practits1 App', () => {
  let page: Practits1Page;

  beforeEach(() => {
    page = new Practits1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
