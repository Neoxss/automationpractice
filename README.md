# Jobsitychallenge - Automation Practice
This is a challenge for the QA Automation position at Jobsity.

## Instructions to set everything up
This is a mix of Protractor framework with the combination of Typescript and Cucumber. All using selenium test runner.
1. As We're going to use local standalone Selenium Server to control browsers, `Java` needs to be installed
2. Download `node.js` with `npm `
3. Use `npm init` and `npm install`
4. Use `webdriver-update`
5. Use `node node_modules/protractor/bin/webdriver-manager update`
6. Use `npm install -g protractor` to install the Protractor framework globally
7. Use `npm install --save-dev @types/{chai,cucumber} chai cucumber protractor-cucumber-framework ` to install the dependendices needed for chai and the cucumber framework
    If this does not work on your machine, use `npm i @types/chai @types/cucumber`
8. Install Angular CLI by using `npm install -g @angular/cli`
9. Use `npm install multiple-cucumber-html-reporter` to install the reporter
10. Save the dependencies for the reports `npm install multiple-cucumber-html-reporter --save`
11. Run `ng e2e` and it will run all the test available on the framework.
12. The reports will be available soon.
