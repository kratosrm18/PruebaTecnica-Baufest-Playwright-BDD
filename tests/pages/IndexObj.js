export class IndexPage {
  constructor(page) {
    this.page = page;
    this.botonPIM = page.locator('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[2]/a/span');
  }

  async clickPIM() {
    await this.botonPIM.click();
  }
};
