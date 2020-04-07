# Jobsitychallenge - Automation Practice
This is a challenge for the QA Automation position at Jobsity.

## Instructions to set everything up
This is a mix of Protractor framework with the combination of Typescript and Cucumber. All using selenium test runner.
1. Download `node.js` with `npm `
2. Use `npm install -g protractor` to install the Protractor framework globally
3. Use `npm install --save-dev @types/{chai,cucumber} chai cucumber protractor-cucumber-framework ` to install the dependendices needed for chai and the cucumber framework
    If this does not work on your machine, use `npm i @types/chai @types/cucumber`
4. Install Angular CLI by using `npm install -g @angular/cli`
5. Use `npm install multiple-cucumber-html-reporter` to install the reporter
6. Save the dependencies for the reports `npm install multiple-cucumber-html-reporter --save`
7. Run `ng e2e` and it will run all the test available on the framework.
8. The reports will be available soon.

~In case `I attach a file` steps failes saying that the file is not found, please update the file path located on the top of the pageObject called `automationPractice.po.ts`