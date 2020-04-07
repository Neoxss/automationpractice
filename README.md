# Jobsitychallenge - Automation Practice
This is a challenge for the QA Automation position at Jobsity.

## Instructions to set everything up
This is a mix of Protractor framework with the combination of Typescript and Cucumber. All using selenium test runner.
1. As We're going to use local standalone Selenium Server to control browsers, `Java` needs to be installed
2. Download `node.js` with `npm `
3. Use `npm init`
4. Use `webdriver-update`
5. Use `node node_modules/protractor/bin/webdriver-manager update`
6. Use `npm install -g protractor` to install the Protractor framework globally
7. Use `npm install --save-dev @types/{chai,cucumber} chai cucumber protractor-cucumber-framework ` to install the dependendices needed for chai and the cucumber framework
    If this does not work on your machine, use `npm i @types/chai @types/cucumber`
8. Install Angular CLI by using `npm install -g @angular/cli`
9. Use `protractor-multiple-cucumber-html-reporter-plugin.` to install the reporter
10. Save the dependencies for the reports `npm install multiple-cucumber-html-reporter --save` and `npm install multiple-cucumber-html-reporter --save-dev`
11. Use `npm install`
12. Run `ng e2e` and it will run all the test available on the framework.
13. The reports will be available at `*whereYouClonedTheProject*\jobsity-automationpractice\.tmp\report\index.html`
If for some reason you get an error that a module was not found, please delete the `package-lock.json` file and rerun `npm install`

Also there might be an issue if you have a a different chrome version that the current latest. For some reason Protractor only uses the latest and not the one that the user has avilable on their machines, therefore, please locate your driver in case is different at `dsk\Users\userName\AppData\Roaming\npm\node_modules\protractor\node_modules\webdriver-manager\selenium\yourChromeDriver` and change it on the `env.js` file
And also `C:\Users\Luis Delgado\AppData\Roaming\npm\node_modules\protractor\node_modules\webdriver-manager\selenium\update-config.json` needs to be updated with your driver. 

All of the spleeps added are for the sake of checking the result by the one who's gonna check the code. They can be removed if needed.
