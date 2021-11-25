import { Given, Then, When } from "@wdio/cucumber-framework";
import myAccountPage from "../pageobjects/myAccount.Page";
import signInPage from "../pageobjects/signIn.Page";
import signUpPage from "../pageobjects/signUp.Page";
import randomData from "faker";
import myStore from "../testdata/mystore.json"

Given(/^This is the Home Page of MyStore$/, async () => {
    await signInPage.homePageLink()
});

When(/^I Click on Sign in$/, async () => {
    await signInPage.clickOnSIgnIn.click();
});

Then(/^I should see the Text as \"([^\"]*)\"$/, async (createanaccount) => {
    await expect(signInPage.createAccountText).toHaveText(createanaccount);
});

When(/^I enter email address it should create account$/, async () => {
    await signInPage.enteringEmailAddress.setValue(randomData.internet.email())
});

When(/^I click on create an account button$/, async () => {
    await signInPage.ClickOnCreateAccountButton.click();
});

Then(/^I should navigate and see the heading as \"([^\"]*)\"$/, async (yourpersonalinformation) => {
    await expect(signUpPage.pageHeading).toHaveText(yourpersonalinformation);
});

When(/^I enter the data in all fields as$/, async () => {

    await signUpPage.radioButton.isSelected();
    await signUpPage.firstName.setValue(myStore.firstName);
    await signUpPage.lastname.setValue(myStore.lastName);
    await signUpPage.password.setValue(myStore.password);
    await signUpPage.dobDay.selectByAttribute('value', myStore.DOB.day);
    await signUpPage.dobMonth.selectByAttribute('value', myStore.DOB.month);
    await signUpPage.dobYear.selectByAttribute('value', myStore.DOB.year);
    await signUpPage.addressFirstName.setValue(myStore.Address.addressFirstName);
    await signUpPage.addressLastName.setValue(myStore.Address.addressLastName);
    await signUpPage.address.setValue(myStore.Address.address);
    await signUpPage.city.setValue(myStore.Address.city);
    await signUpPage.state.selectByAttribute('value', myStore.Address.state);
    await signUpPage.zipCode.setValue(myStore.Address.zipcode);
    await signUpPage.country.selectByVisibleText(myStore.Address.country);
    await signUpPage.mobileNumber.setValue(myStore.Address.mobileNumber);
    await signUpPage.aliasAddress.setValue(myStore.Address.aliasAddress);
});

When(/^I click on the Register Button$/, async () => {
    await signUpPage.registerButton.click();
});

Then(/^I should be navigated to another page and can see the text as \"([^\"]*)\"$/, async (myaccount) => {
    await expect(myAccountPage.myAccountText).toHaveText(myaccount);
});