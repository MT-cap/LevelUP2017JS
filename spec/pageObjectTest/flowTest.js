var HomePage = require(pageObjectDir+"/homePage.js");
var ContactUs = require(pageObjectDir+"/contactUs.js");

var homePage = new HomePage();
var contactUs = new ContactUs();

describe('Protractor Demo App', function() {
    it('should have a FLOOOOOW', function() {

        browser.waitForAngularEnabled(false);

        browser.get(homePage.URL);
        homePage.contactUsLink.click();
        
        expect(browser.getCurrentUrl())
            .toEqual('http://automationpractice.com/index.php?controller=contact');
        expect(contactUs.subjectHeadingDropdown.isPresent())
            .toBe(true);
        expect(contactUs.sendButton.isPresent())
            .toBe(true);  
    });
});