import {ApiBoosterPage} from './app.po';

describe('api-booster App', function () {
  let page: ApiBoosterPage;

  beforeEach(() => {
    page = new ApiBoosterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
