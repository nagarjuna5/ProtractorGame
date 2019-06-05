import { browser, element, by, protractor } from "protractor";
import { SearchPageObject } from "../pages/searchPage";
const { Given, When, Then, And } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const search: SearchPageObject = new SearchPageObject();
   
Given(/^I open Game website$/, async () => {
    await expect(browser.getTitle()).to.eventually.equal("GAME | Gaming Specialist For Consoles, Games & Accessories!");
});

When(/^I type "(.*?)" in the search$/, async (text) => {
    await search.searchTextBox.sendKeys(text);
});

When(/^I click on search button$/, async () => {
    await browser.actions().sendKeys(protractor.Key.ENTER).perform();
});

Then(/^I should see list of results$/, async () => {
      //await browser.element(by.linkText("Red Dead Redemption 2")).click();
});

Then(/^I navigate to detail page$/, async () => {
    await browser.element(by.linkText("Red Dead Redemption 2")).click();
});

Then(/^I should see price details$/, async () => {
    await expect(browser.element(by.className("btnName")).getText()).to.eventually.equal("BUY NEW");
});

