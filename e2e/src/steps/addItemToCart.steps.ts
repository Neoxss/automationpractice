import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';

import { AppPage } from '../pages/automationPractice.po';
import { browser } from 'protractor';

let env = require('../env.js');

let page: AppPage;

Before(() => {
    page = new AppPage();
});

Given(/^I'm at the homepage$/, async () => {
    await page.homepage().then(function () {
        browser.sleep(1000);
    });
});

When(/^I hover on one item$/, async () => {
    await page.homepageHoverItem().then(function () {
        browser.sleep(2000);
    });
});

When(/^I click on add to cart$/, async () => {
    await page.homepageAddToCart().then(function () {
        browser.sleep(2000);
    });
});

Then(/^The pop up validation should show up$/, async () => {
    expect((await page.addToCartSuccessValidation()).trim()).to.equal('Product successfully added to your shopping cart');
});

Given(/^I'm on the homepage$/, async () => {
    await page.homepage().then(function () {
        browser.sleep(1000);
    });
});

When(/^I click on any item$/, async () => {
    await page.homepageQuickView().then(function () {
        browser.sleep(2000);
    });
});

When(/^I add it to the cart$/, async () => {
    await page.addToCartQuickViewActualView().then(function () {
        browser.sleep(2000);
    });
});

Then(/^The success validation should show up$/, async () => {
    expect((await page.addToCartSuccessValidation()).trim()).to.equal('Product successfully added to your shopping cart');
});

Given(/^I am located on the homepage$/, async () => {
    await page.homepage().then(function () {
        browser.sleep(1000);
    });
});

When(/^I hover on any item$/, async () => {
    await page.homepageHoverItem().then(function () {
        browser.sleep(2000);
    });
});

When(/^I click on More$/, async () => {
    await page.homepageItemView().then(function () {
        browser.sleep(2000);
    });
});

When(/^I click on Add to Cart$/, async () => {
    await page.addToCartQuickViewActualView().then(function () {
        browser.sleep(2000);
    });
});

Then(/^It should show me the success validation$/, async () => {
    expect((await page.addToCartSuccessValidation()).trim()).to.equal('Product successfully added to your shopping cart');
});


Given(/^I perform a search for blouse/, async () => {
    await page.homepage().then(function () {
        browser.sleep(1000);
    });
    await page.searchUniqueItem().then(function () {
        browser.sleep(1000);
    });
});

When(/^I click on the List View$/, async () => {
    await page.listView().then(function () {
        browser.sleep(1000);
    });
});

When(/^I click on the Add To cart button$/, async () => {
    await page.searchAddToCart().then(function () {
        browser.sleep(1000);
    });
});

Then(/^It should show me the validation$/, async () => {
    expect((await page.addToCartSuccessValidation()).trim()).to.equal('Product successfully added to your shopping cart');
});

Given(/^I'm on the homepage screen/, async () => {
    await page.homepage().then(function () {
        browser.sleep(1000);
    });
});

When(/^I seach for an item$/, async () => {
    await page.homepage().then(function () {
        browser.sleep(1000);
    });
    await page.searchUniqueItem().then(function () {
        browser.sleep(1000);
    });
    await page.listView().then(function () {
        browser.sleep(1000);
    });
});

When(/^I add that Item to the Cart$/, async () => {
    await page.searchAddToCart().then(function () {
        browser.sleep(1000);
    });
    await page.closeSuccessValidation().then(function () {
        browser.sleep(1000);
    });
});

When(/^I click on the Cart Header$/, async () => {
    await page.goToCheckout().then(function () {
        browser.sleep(1000);
    });

});

Then(/^I should be taken to the checkout screen$/, async () => {
    expect((await page.checkoutTitle()).trim()).to.equal('Your shopping cart');
});