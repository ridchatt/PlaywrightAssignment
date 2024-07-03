exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page=page;
        this.usernameInput = '//input[@id="user-name"]';
        this.passwordInput = '//input[@id="password"]';
        this.loginButton = '//input[@id="login-button"]';
        this.url = 'https://www.saucedemo.com/';

    }

async gotoLoginPage() {
    //await this.page.goto('https://www.saucedemo.com/');
    await this.page.goto(this.url);
}

async login(username,password) {
    await this.page.locator(this.usernameInput).fill(username);
    await this.page.locator(this.passwordInput).fill(password);
    await this.page.locator(this.loginButton).click();
}








}