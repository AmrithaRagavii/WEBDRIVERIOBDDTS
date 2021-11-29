import { Given, Then, When } from "@wdio/cucumber-framework";
import myAccountPage from "../pageobjects/myAccount.Page";
import signInPage from "../pageobjects/signIn.Page";
import signUpPage from "../pageobjects/signUp.Page";
import randomData from "faker";
import myStore from "../testdata/mystore.json"
import addressPage from "../pageobjects/address.Page";
import womenSection from "../pageobjects/womenSection";
import shoppingCartPage from "../pageobjects/shoppingCart.Page";
import shipping from "../pageobjects/shipping";
import orderConfirmationPage from "../pageobjects/orderConfirmation.Page";
import payment from "../pageobjects/payment";

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
When(/^I Click Women button$/, async () => {
    await myAccountPage.clickingOnWomenSection.click()
    
});
Then(/^I should go the Subcatagories under Women$/, async () => {
    await expect(womenSection.womenHeaderElement).toHaveText("WOMEN")

});
When(/^I Click that product to actions to add that into Cart$/, async () => {
    // await womenSection.hoverOnProduct.scrollIntoView()
    // await womenSection.addToCartButton.click()
    await womenSection.addToCart()

});
Then(/^I should see the message \"([^\"]*)\"$/, async (productsuccessfullyaddedtoyourshoppingcart) => {
   // await expect(womenSection.validatingAddToCartText).toHaveText("Product successfully added to your shopping cart")
});
When(/^I click the Proceed to Checkout button$/, async () => {
    //await womenSection.clickOnProceedToCartButton.click()
});

Then(/^I should navigate to the page called \"([^\"]*)\"$/, async (shoppingcartsummary) => {
    await expect(shoppingCartPage.shoppingCartHeader).toHaveTextContaining("SHOPPING-CART SUMMARY")
    await expect(shoppingCartPage.validatingProductName).toHaveTextContaining("Faded Short Sleeve T-shirts")
    await expect(shoppingCartPage.productTotalPrice).toHaveTextContaining("$")
    await expect(shoppingCartPage.deliveryAddressText).toHaveTextContaining("DELIVERY ADDRESS")
    await expect(shoppingCartPage.invoiceAddressText).toHaveTextContaining("INVOICE ADDRESS")

});

When(/^I click to the Proceed for Checkout$/, async () => {
    await shoppingCartPage.clickingOnProductProceedToCheckOutButton.click()
});


Then(/^I should navigate the cart for checking the product and address$/, async () => {
    await expect(addressPage.addressText).toHaveText("ADDRESSES")
    await expect(addressPage.deliveryAddress).toHaveText("YOUR DELIVERY ADDRESS")
    await expect(addressPage.billingAddress).toHaveText("YOUR BILLING ADDRESS")
    await expect(addressPage.ChooseDeliveryOption).toHaveText("Choose a delivery address:")
});


When(/^I click on proceed to Checkout button$/, async () => {
    await addressPage.CheckoutButton.click()
    await addressPage.addressDropDownlist.click()
});
When(/^When I click on proceed to Checkout option$/, async()=> {
    await shoppingCartPage.clickingOnProductProceedToCheckOutButton.click()
  });


Then(/^I navigate to next page and validate shipping details$/, async () => {
    await expect(shipping.shippingText).toHaveText("SHIPPING");
    await expect(shipping.checkBoxTitle).toHaveText("Terms of service")
});
When(/^I select the check box and proceed to check out$/, async () => {
    await shipping.ProceedToCheckOutButton.click();
    await shipping.selectingCheckbox.click();
});
Then(/^I should be navigated and validate payments page$/, async () => {
    await expect(payment.paymentMethodText).toHaveText("PLEASE CHOOSE YOUR PAYMENT METHOD");
});
When(/^I click on the payment type button$/, async () => {
    await payment.clickOnPaymentOptionButton.click();
});
Then(/^I should be navigate and validate the bankwire payment page$/, async () => {
    await expect(payment.orderSummaryText).toHaveText("ORDER SUMMARY")
    await expect(payment.paymentMethodText).toHaveText("BANK-WIRE PAYMENT.");
});
When(/^I click on navigated to I confirm my order$/, async () => {
    await payment.clickOnPaymentOptionButton.click();

});
Then(/^I navigate and validate the order confirmation page$/, async () => {
    await expect(orderConfirmationPage.orderConfirmationHeader).toHaveText("ORDER CONFIRMATION");
    await expect(orderConfirmationPage.orderConfirmationDetails).toHaveText("Your order on My Store is complete.")
});


