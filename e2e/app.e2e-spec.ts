import { PrimenIssue990xPage } from './app.po';

describe('primen-issue-990x App', function() {
  let page: PrimenIssue990xPage;

  beforeEach(() => {
    page = new PrimenIssue990xPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
