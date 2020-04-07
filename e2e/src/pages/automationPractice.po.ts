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

  homepageHoverItem(){
    return browser.actions().mouseMove(element(by.xpath("/html/body/div/div[2]/div/div[2]/div/div[1]/ul[1]/li[1]/div/div[1]/div/a[1]/img"))).perform();
  }

  homepageAddToCart(){
    return element(by.xpath('/html/body/div/div[2]/div/div[2]/div/div[1]/ul[1]/li[1]/div/div[2]/div[2]/a[1]/span')).click();
  }

  homepageQuickView(){
    return element(by.xpath("/html/body/div/div[2]/div/div[2]/div/div[1]/ul[1]/li[1]/div/div[1]/div/a[1]/img")).click();
  }

  addToCartQuickViewActualView(){
    return element(by.name('Submit')).click();
  }

  homepageItemView(){
    return element(by.xpath('/html/body/div/div[2]/div/div[2]/div/div[1]/ul[1]/li[1]/div/div[2]/div[2]/a[2]/span')).click();
  }

  searchAddToCart(){
    return element(by.xpath('/html/body/div[1]/div[2]/div/div[3]/div[2]/ul/li/div/div/div[3]/div/div[2]/a[1]/span')).click();
  }

  addToCartSuccessValidation(){
    return element(by.css('h2')).getAttribute("textContent") as Promise<string>;
  }

  searchUniqueItem(){
     element(by.id('search_query_top')).sendKeys(env.uniqueItem);
     return  browser.actions().sendKeys(protractor.Key.ENTER).perform();
  }

  listView(){
    return (element(by.id('list'))).click();
  }

  closeSuccessValidation(){
    return element(by.xpath('/html/body/div/div[1]/header/div[3]/div/div/div[4]/div[1]/div[1]/span')).click();
  }
 
  goToCheckout(){
    return element(by.xpath('/html/body/div/div[1]/header/div[3]/div/div/div[3]/div/a')).click();
  
  }

  checkoutTitle(){
    return element(by.css('.navigation_page')).getAttribute("textContent") as Promise<string>;
  }

}
