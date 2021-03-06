class SignInPage {
    get clickOnSIgnIn() { return $("//a[@class='login']"); }
    get createAccountText() { return $("//h3[@class='page-subheading']"); }
    get enteringEmailAddress() { return $("//input[@id='email_create']"); }
    get ClickOnCreateAccountButton() { return $("//button[@id='SubmitCreate']"); }
    async homePageLink() { await browser.url("http://automationpractice.com/"); }
    async signIn() {
        await this.clickOnSIgnIn.click();
    }
    async createAccount() {
        await this.ClickOnCreateAccountButton.click();
    }
}
export default new SignInPage()