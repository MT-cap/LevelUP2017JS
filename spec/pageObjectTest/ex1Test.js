var HomePage = require(pageObjectDir + "/homePage.js"),
    WomenPage = require(pageObjectDir + "/womenPage.js"),
    WomenTopsPage = require(pageObjectDir + "/womenTopsPage.js"),
    WomenTopsProductPage = require(pageObjectDir + "/womenTopsProductPage.js"),
    CartPage = require(pageObjectDir + "/cartPage.js"),
    homePage = new HomePage(),
    womenPage = new WomenPage(),
    womenTopsPage = new WomenTopsPage(),
    womenTopsProductPage = new WomenTopsProductPage(),
    cartPage = new CartPage(),
    price;
var isLabelLongerThan = function (isLongerThan) {
    return new Promise(function (resolve) {
        womenTopsProductPage.productDescription.getText().then(function (text) {
            resolve(text.length > isLongerThan);
        })
    });
}

beforeAll(function () {
    browser.get(homePage.URL);
})

describe('Protractor: http://automationpractice.com', function () {
    it('Check if \'Women - My Store\' page is displayed?', function () {
        homePage.womenTab.click();
        expect(browser.getTitle())
            .toEqual('Women - My Store');
    })

    it('Check if \'Tops - My Store\' page is displayed?', function () {
        womenPage.womenTopsButton.click();
        expect(browser.getTitle())
            .toEqual('Tops - My Store');

    })

    it('Check if \'Faded Short Sleeve T-shirts - My Store\' page is displayed?', function () {
        womenTopsPage.fadedLongSleeveTshirt.click();
        expect(browser.getTitle())
            .toEqual('Faded Short Sleeve T-shirts - My Store');
    })

    it('Is description longer than \'8\' characters?', function () {
        expect(isLabelLongerThan(8))
            .toBe(true);
    })

    it('Is condition \'New\'?', function () {
        expect(womenTopsProductPage.productCondition
            .getText())
            .toEqual('New');
    })

    it('Add product in \'M\' size to the basket', function () {
        womenTopsProductPage.productPrice.getText().then(function (resultatGetTextu) {
            price = resultatGetTextu;
        })
        womenTopsProductPage.sizeDropdownM.click();
        womenTopsProductPage.addToCartButton.submit();
    })

    it('Go to the basket', function () {
        womenTopsProductPage.cart.click();
        expect(browser.getTitle())
            .toEqual('Order - My Store');
    })

    it('Check if the product is in the basket', function () {
        expect(cartPage.productDescription.getText())
            .toEqual('Faded Short Sleeve T-shirts');
    })
    it('Check if the product in the basket has correct price', function () {
        expect(cartPage.unitPrice.getText())
            .toEqual(price);
    })
});