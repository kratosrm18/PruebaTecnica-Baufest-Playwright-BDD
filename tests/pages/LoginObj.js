export class LoginPage {
  constructor(page) {
    this.page = page;
    this.usuario = page.locator('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input');
    this.clave = page.locator('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input');
    this.botonLogin = page.locator('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button');
  }

  async accederA(url) {
    await this.page.goto(url);
  }

  async ingresarUsuario(usuario) {
    await this.usuario.fill(usuario);
  }

  async ingresarClave(clave) {
    await this.clave.fill(clave);
  }

  async clickLogin() {
    await this.botonLogin.click();
  }
};
