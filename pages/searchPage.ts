import { $, ElementFinder } from "protractor";

export class SearchPageObject {
    public searchTextBox: ElementFinder;
    public searchButton: ElementFinder;

    constructor() {
        this.searchTextBox = $("#search");
        this.searchButton = $("input[id='Search Button']");
    }
}