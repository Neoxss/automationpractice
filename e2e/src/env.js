module.exports  = {
    chromeDriverVersion: '../node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_80.0.3987.106.exe',
    firefoxDriverVersion: '../node_modules/protractor/node_modules/webdriver-manager/selenium/geckodriver-v0.26.0-win64.exe',
    userName:'test1',
    userPassword:'newuser123',
    userEmail:'test@gmail.com',
    userInvalidEmail: 'notAnEmail',
    userContactMessage: 'This is a message',
    orderId: '123',
    setDefaultTimeout: (180 * 1000),
    seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: 'http://automationpractice.com/index.php'
}