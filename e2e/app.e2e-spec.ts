import { Day2Page } from './app.po';

describe('day2 App', function() {
  let page: Day2Page;

  beforeEach(() => {
    page = new Day2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
