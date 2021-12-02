import { Given, When, Then } from "@wdio/cucumber-framework";
import randomData from "faker";
import addressPage from "../pageobjects/cart/address.Page";
import orderConfirmationPage from "../pageobjects/cart/orderConfirmation.Page";
import paymentPage from "../pageobjects/cart/payment.Page";
import shippingPage from "../pageobjects/cart/shippingPage";
import shoppingCartPage from "../pageobjects/cart/shoppingCart.Page";
import womenSection from "../pageobjects/menu/womenSection";
import myAccountPage from "../pageobjects/myAccount.Page";
import signInPage from "../pageobjects/signIn.Page";
import signUpPage from "../pageobjects/signup/signUp.Page";
import signUp from "../testdata/signUp.json";
Given(/^This is the Home Page of MyStore$/, async () => {
    await signInPage.homePageLink()
});
When(/^I Click on Sign in$/, async () => {
    await signInPage.signIn()
});
Then(/^I should see the Text as \"([^\"]*)\"$/, async (createanaccount) => {
    await expect(signInPage.createAccountText).toHaveText(createanaccount);
});
When(/^I enter email address it should create account$/, async () => {
    await signInPage.enteringEmailAddress.setValue(randomData.internet.email())
    await signInPage.createAccount()
});
Then(/^I should navigate and see the heading as \"([^\"]*)\"$/, async (yourpersonalinformation) => {
    await expect(signUpPage.pageHeading).toHaveText(yourpersonalinformation);
});
When(/^I enter the data in all fields as$/, async () => {
    await signUpPage.clickRadio();
    await signUpPage.setFirstAndLastName(signUp.name);
    await signUpPage.enteringPassword(randomData.internet.password(8));
    await signUpPage.selectDateOfBirth(signUp.dob);
    await signUpPage.addressInfo(signUp.address);
    await signUpPage.setMobileNumber(signUp.mobileNumber)
    await signUpPage.setAliasAddress(signUp.aliasAddress)
});
When(/^I click on the Register Button$/, async () => {
    await signUpPage.clickRegister()
});
Then(/^I should be navigated to another page and can see the text as \"([^\"]*)\"$/, async (myaccount) => {
    await expect(myAccountPage.myAccountText).toHaveText(myaccount);
});
When(/^I Click Women button$/, async () => {
    await myAccountPage.womenSectionButton()
});
When(/^I Click that product to add that into Cart$/, async () => {
    await womenSection.selectingProduct()
});
Then(/^I should see the message \"([^\"]*)\"$/, async (productsuccessfullyadded) => {
    await expect(womenSection.validatingAddToCartText).toHaveText(productsuccessfullyadded)
});
When(/^I will click on proceed to Checkout$/, async () => {
    await womenSection.proceedtoCheckOut()
});
Then(/^I should navigate to the page called \"([^\"]*)\"$/, async (shoppingcartsummary) => {
    await expect(shoppingCartPage.shoppingCartHeader).toHaveTextContaining(shoppingcartsummary)
});
When(/^I click to the Proceed for Checkout$/, async () => {
    await shoppingCartPage.proceedtoCheck()
});
Then(/^I should navigate and validate the address page \"([^\"]*)\"$/, async (addresses) => {
    await expect(addressPage.addressText).toHaveText(addresses)
});
When(/^I click and proceed to Checkout$/, async () => {
    await addressPage.checkingout()
});
Then(/^I navigate to next page and validate shipping details \"([^\"]*)\"$/, async (shipping) => {
    await expect(shippingPage.shippingText).toHaveText(shipping);
});
When(/^I check the terms and proceed to Checkout button$/, async () => {
    await shippingPage.clickCheckBox()
    await shippingPage.ProceedtoCart()
});
Then(/^I should validate payments page \"([^\"]*)\"$/, async (paymentmethod) => {
    await expect(paymentPage.paymentMethodText).toHaveText(paymentmethod);
});
When(/^I Choose payment type and click Confirm Order$/, async () => {
    await paymentPage.paymentOptions();
    await paymentPage.confirmOrder();
});
Then(/^I navigate and see the Header as \"([^\"]*)\"$/, async (orderconfirmation) => {
    await expect(orderConfirmationPage.orderConfirmationHeader).toHaveText(orderconfirmation);
});