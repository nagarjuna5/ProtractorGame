"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const searchPage_1 = require("../pages/searchPage");
const { Given, When, Then, And } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const search = new searchPage_1.SearchPageObject();
Given(/^I open Game website$/, () => __awaiter(this, void 0, void 0, function* () {
    yield expect(protractor_1.browser.getTitle()).to.eventually.equal("GAME | Gaming Specialist For Consoles, Games & Accessories!");
}));
When(/^I type "(.*?)" in the search$/, (text) => __awaiter(this, void 0, void 0, function* () {
    yield search.searchTextBox.sendKeys(text);
}));
When(/^I click on search button$/, () => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.ENTER).perform();
}));
Then(/^I should see list of results$/, () => __awaiter(this, void 0, void 0, function* () {
    //await browser.element(by.linkText("Red Dead Redemption 2")).click();
}));
Then(/^I navigate to detail page$/, () => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.element(protractor_1.by.linkText("Red Dead Redemption 2")).click();
}));
Then(/^I should see price details$/, () => __awaiter(this, void 0, void 0, function* () {
    yield expect(protractor_1.browser.element(protractor_1.by.className("btnName")).getText()).to.eventually.equal("BUY NEW");
}));
