var HomePage = require(pageObjectDir+"/homePage.js"),
    WomenPage = require(pageObjectDir+"/womenPage.js"),
    WomenTopsPage = require(pageObjectDir+"/womenTopsPage.js"),
    WomenTopsProductPage = require(pageObjectDir+"/womenTopsProductPage.js"),
    homePage = new HomePage(),
    womenPage = new WomenPage(),
    womenTopsPage = new WomenTopsPage(),
    womenTopsProductPage = new WomenTopsProductPage();

beforeAll(function () {
    browser.get(homePage.URL);
})

describe('Protractor: http://automationpractice.com', function() {
        // Otworzyć dział damski – zwalidować czy na pewno jesteśmy na odpowiedniej stronie
        
        // expect(browser.getTitle())
        //     .toEqual('Women - My Store');
        it('Check if \'Women - My Store\' page is displayed?', function () {
            homePage.womenTab.click();
            expect(browser.getTitle())
                .toEqual('Women - My Store');
        })

        // Otworzyć dział topy – zwalidowac
        it('Check if \'Tops - My Store\' page is displayed?', function () {
            womenPage.womenTopsButton.click().then(expect(browser.getTitle())
                .toEqual('Tops - My Store'));
            
        })

        // Otworzyć Faded Short Sleeve T-shirts
        it('Check if \'Faded Short Sleeve T-shirts - My Store\' page is displayed?', function () {
            womenTopsPage.fadedLongSleeveTshirt.click();
            expect(browser.getTitle())
                .toEqual('Faded Short Sleeve T-shirts - My Store');
        })
        // Na stronie produktu spawrdzić czy opis zawiera wiecej niż 8 znaków i czy stan jest „new”
        // expect(womenTopsProductPage.productDescription
        //     .getText()
        //     .length)
        //     .toBeGreaterThan(8);
        // expect(womenTopsProductPage.productCondition
        //     .getText())
        //     .toEqual('New');

        // // Dodać produkt w rozmiarze m do koszyka
        // womenTopsProductPage.sizeDropdownM.click();
        // womenTopsProductPage.addToCartButton.click();

        // Przejsc do koszyka
        // womenTopsProductPage.proceedToCheckoutButton.click();
        
        // Sprawdzić czy znajduje się tam produkt
        // https://jasmine.github.io/2.0/introduction.html

        

        
        // homePage.contactUsLink.click();
        
        // expect(browser.getCurrentUrl())
        //     .toEqual('http://automationpractice.com/index.php?controller=contact');
        // expect(contactUs.subjectHeadingDropdown.isPresent())
        //     .toBe(true);
        // expect(contactUs.sendButton.isPresent())
        //     .toBe(true);  
});