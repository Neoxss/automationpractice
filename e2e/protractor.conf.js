// import { by } from "protractor";

// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts
/**
 * @type { import("protractor").Config }
 */

var env = require('./src/env');

exports.config = {

  specs: ['./src/features/*.feature'],
  chromeDriver: (env.chromeDriverVersion),
  firefoxDriver: (env.firefoxDriverVersion),
  multiCapabilities: [{
    browserName: 'chrome',
    maxInstances: 2,
    shardTestFiles: true,
    sequential: true

  },
  // {
  //   browserName: 'firefox',
  //   maxInstances: 2,
  //   shardTestFiles: true,
  //   sequential: true
  // }
],
  resultJsonOutputFile: 'report.json',
  directConnect: true,
  restartBrowserBetweenTests: true,
  baseUrl: 'http://automationpractice.com/index.php',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: ['./src/env.ts', './src/steps/**/*.steps.ts'],
  },

  // plugins: [{

  //   package: ('protractor-multiple-cucumber-html-reporter-plugin'),
  //   options: {
  //     automaticallyGenerateReport: true,
  //     removeExistingJsonReportFile: true,
  //     pageTitle: 'Automation Test',
  //     reportName: 'Zero Bank Automation Test',
  //     customData: {
  //       title: 'Automation Test Info',
  //       data: [
  //         {label: 'Project', value: 'Zero Bank'},
  //         {label: 'Release', value: '1.0.0'},
  //         {label: 'Cycle', value: '0.0'},
  //       ]
  //     }
  //   }
  // }],
  onPrepare: async () => {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
  }
};