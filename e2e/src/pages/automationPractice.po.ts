import { browser, by, element, ExpectedConditions as EC, protractor } from 'protractor';
const path = require('path');
//Please update this to the path on your local.
const fileToUpload = '../../../../jobsity-automationpractice/angular-protractor.png';

const env = require('../env.js');

const { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(env.setDefaultTimeout);

export class AppPage {

  homepage() {
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
    browser.driver.get(env.baseUrl);
    browser.sleep(5000);
    return element(by.id('header_logo')).getAttribute("textContent") as Promise<string>;
  }

  navigateToContactForm() {
    return element(by.id('contact-link')).click();
  }

  sendContacForm() {
    var sendForm = element(by.id('submitMessage'));
    return sendForm.click();
  }

  dangerAlert() {
    return element(by.xpath('/html/body/div/div[2]/div/div[3]/div/div/ol')).getAttribute("textContent") as Promise<string>;
  }

  contactFormEmail() {
    return element(by.id('email'));
  }

  contactFormMessage() {
    var cFormMessage = element(by.id('message'));
    return cFormMessage.sendKeys(env.userContactMessage);
  }

  contacFormUploadFile() {
    var absolutePath = path.resolve(__dirname, fileToUpload);
    var fileElem = element(by.css('input[type="file"]'));
    return fileElem.sendKeys(absolutePath);
  }

  contactFormfileUploaded(){
    return element(by.css('.filename')).getAttribute("textContent") as Promise<string>;
  }

  contactFormSelectSubject(){
    element(by.id('id_contact')).click();
      return browser.actions().sendKeys(protractor.Key.ARROW_DOWN).sendKeys(protractor.Key.ENTER).perform();
  }

  contactFormOrderReference(){
    var cFormOrderReference = element(by.id('id_order'));
    return cFormOrderReference.sendKeys(env.orderId);
  }

  contactFormSuccessMessage(){
    return element(by.xpath('/html/body/div/div[2]/div/div[3]/div/p')).getAttribute("textContent") as Promise<string>;
  }
}
