import { $, ElementFinder } from "protractor";

export class SearchPageObject {
    public searchTextBox: ElementFinder;
    public searchButton: ElementFinder;
    public itemText: ElementFinder;
    public detailText: ElementFinder;

    constructor() {
        this.searchTextBox = $("#search");
        this.searchButton = $("input[id='Search Button']");
        this.itemText = $("//*[@id='productContainer']/article[2]/div[1]/a");
        this.detailText = $("//*[@id='mainPDPButtons']/li[1]/a/strong[1]");
    }
}