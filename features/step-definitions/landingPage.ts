import {Given,Then,When} from "@cucumber/cucumber";


// Given("I am on the landing page of herokuapp",async()=>{
//     await browser.url("http://the-internet.herokuapp.com/");


// })

// Then("I should see a header text (string)",async (headerText)=>{
   
//      const headerElement=$('.heading')
//     await expect(headerElement).toHaveText(headerText)
// })

Given(/^I am on the landing page of herokuapp$/, async ()=> {
    await browser.url("http://the-internet.herokuapp.com/")
  });

Then(/^I should see a header text \"([^\"]*)\"$/, async (text)=> {
    const headerText =$ ('.heading')
    await expect(headerText).toHaveText(text)
  });
  
  
When(/^I click on status code$/, async () => {

  await $('//*[@id="content"]/ul/li[42]/a').click();
});
When(/^I click on this link here$/, async () => {
  await $('//*[@id="content"]/div/p[1]/a').click();
});
Then(/^I should be navigated to \"([^\"]*)\"$/, async (headerText) => {
  const HTTP = $('h1 ');
  await expect(HTTP).toHaveText(headerText);
});
Then(/^I should see the link HTTP Status Codes$/, async () => {
  await $('li a').click();
});
Then(/^I should see the text \"([^\"]*)\"$/, async (lastupdated)=> {
  const someText = $('dt ');
  await expect(someText).toHaveText(lastupdated);
});