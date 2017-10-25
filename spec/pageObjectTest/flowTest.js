var HomePage = require(pageObjectDir+"/homePage.js"),
    ContactUs = require(pageObjectDir+"/contactUs.js"),
    homePage = new HomePage(),
    contactUs = new ContactUs();

beforeAll(function () {
    browser.get(homePage.URL);
    homePage.contactUsLink.click();
})

describe('Protractor Demo App', function() {  
    it('Check if Contact Us page is displayed?', function () {
        expect(browser.getCurrentUrl())
            .toEqual('http://automationpractice.com/index.php?controller=contact');
    })
    it('Check if Subject Heading Dropdown is displayed?', function () {
        expect(contactUs.subjectHeadingDropdown.isDisplayed()).toBeTruthy();
    })
    it('Check if Submit Button is displayed?', function () {
        expect(contactUs.sendButton.isDisplayed()).toBeTruthy();
    })
});