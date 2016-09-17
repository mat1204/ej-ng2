import { PruebaNgPage } from './app.po';

describe('prueba-ng App', function() {
  let page: PruebaNgPage;

  beforeEach(() => {
    page = new PruebaNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
