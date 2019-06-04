"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class SearchPageObject {
    constructor() {
        this.searchTextBox = protractor_1.$("#search");
        this.searchButton = protractor_1.$("input[id='Search Button']");
        this.itemText = protractor_1.$("//*[@id='productContainer']/article[2]/div[1]/a");
        this.detailText = protractor_1.$("//*[@id='mainPDPButtons']/li[1]/a/strong[1]");
    }
}
exports.SearchPageObject = SearchPageObject;
