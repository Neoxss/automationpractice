import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';

import { AppPage } from '../pages/automationPractice.po';
import { browser } from 'protractor';

let env = require('../env.js');

let page: AppPage;

Before(() => {
    page = new AppPage();
});

Given(/^I go to the Contact Form page$/, async () => {
    await page.homepage().then(function () {
        browser.sleep(1000);
    });
    await page.navigateToContactForm().then(function () {
        browser.sleep(1000);
    });
});

When(/^I click on Send$/, async () => {
    await page.sendContacForm().then(function () {
        browser.sleep(1000);
    });
});
// This is a workaround since there's no actual error for fields that are empty.
Then(/^It trigger an alert for the fields being blank$/, async () => {
    expect((await page.dangerAlert()).trim()).to.equal('Invalid email address.');
});

Given(/^I'm on the conctact Form page$/, async () => {
    await page.homepage().then(function () {
        browser.sleep(1000);
    });
    await page.navigateToContactForm().then(function () {
        browser.sleep(1000);
    });
});

When(/^I type an unvalid Email address$/, async () => {
    await page.contactFormEmail().sendKeys(env.userInvalidEmail).then(function () {
        browser.sleep(2000);
    });
});

When(/^I send the contact form$/, async () => {
    await page.sendContacForm().then(function () {
        browser.sleep(2000);
    });
});

Then(/^It should give me a validation for the invalid email$/, async () => {
    expect((await page.dangerAlert()).trim()).to.equal('Invalid email address.');
});

Given(/^From the conctact Form page$/, async () => {
    await page.homepage().then(function () {
        browser.sleep(1000);
    });
    await page.navigateToContactForm().then(function () {
        browser.sleep(1000);
    });
});

When(/^I type a valid Email address$/, async () => {
    await page.contactFormEmail().sendKeys(env.userEmail).then(function () {
        browser.sleep(2000);
    });
});

When(/^I send the form again$/, async () => {
    await page.sendContacForm().then(function () {
        browser.sleep(2000);
    });
});

Then(/^It should give me a validation for the Message being empty$/, async () => {
    expect((await page.dangerAlert()).trim()).to.equal('The message cannot be blank.');
});

Given(/^On the conctact Form page$/, async () => {
    await page.homepage().then(function () {
        browser.sleep(1000);
    });
    await page.navigateToContactForm().then(function () {
        browser.sleep(1000);
    });
});

When(/^I type a valid Email$/, async () => {
    await page.contactFormEmail().sendKeys(env.userEmail).then(function () {
        browser.sleep(2000);
    });
});

When(/^I type a valid Message$/, async () => {
    await page.contactFormMessage().then(function () {
        browser.sleep(2000);
    });
});

When(/^I send the form$/, async () => {
    await page.sendContacForm().then(function () {
        browser.sleep(2000);
    });
});

Then(/^It should give me a validation for the subject being empty$/, async () => {
    expect((await page.dangerAlert()).trim()).to.equal('Please select a subject from the list provided.');
});

Given(/^I'm at the conctact Form page$/, async () => {
    await page.homepage().then(function () {
        browser.sleep(1000);
    });
    await page.navigateToContactForm().then(function () {
        browser.sleep(1000);
    });
});

When(/^I attach a file$/, async () => {
    await page.contacFormUploadFile().then(function () {
        browser.sleep(2000);
    });
});

Then(/^The name on the component should be the file's name$/, async () => {
    expect((await page.contactFormfileUploaded())).to.equal('angular-protractor.png');
});


Given(/^I'm into the conctact Form page$/, async () => {
    await page.homepage().then(function () {
        browser.sleep(1000);
    });
    await page.navigateToContactForm().then(function () {
        browser.sleep(1000);
    });
});

When(/^I fill out all fields$/, async () => {
    await page.contactFormSelectSubject().then(function () {
        browser.sleep(2000);
    });
    await page.contactFormEmail().sendKeys(env.userEmail).then(function () {
        browser.sleep(2000);
    });
    await page.contactFormOrderReference().then(function () {
        browser.sleep(2000);
    });
    await page.contacFormUploadFile().then(function () {
        browser.sleep(2000);
    });
    await page.contactFormMessage().then(function () {
        browser.sleep(2000);
    });
});

When(/^I click on send$/, async () => {
    await page.sendContacForm().then(function () {
        browser.sleep(2000);
    });
});

Then(/^It should give me a a success validation$/, async () => {
    expect((await page.contactFormSuccessMessage ())).to.equal('Your message has been successfully sent to our team.');
});

