import { browser, element, protractor } from "protractor";
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
    //await expect(browser.actions().sendKeys(":nth-child(2) > .productHeader > h2 > a")).to.eventually.equal("Red Dead Redemption 2");
});

Then(/^I navigate to detail page$/, async () => {
     await browser.actions().sendKeys("/html/body/div[2]/main/div[1]/article[2]/div[1]/a").click();
});

Then(/^I should see price details$/, async () => {
    await browser.actions().sendKeys("/html/body/div[2]/aside/div[2]/div[1]/div/ul/li[1]/a/strong[1]");
});

