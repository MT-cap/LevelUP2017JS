var WomenDressesPage = require(pageObjectDir + "/womenDressesPage.js"),
    womenDressesPage = new WomenDressesPage(),
    WomenDressesProductPage = require(pageObjectDir + "/womenDressesProductPage.js"),
    womenDressesProductPage = new WomenDressesProductPage(),
    dress1 = 'Printed Dress',
    dress2 = 'Printed Dress',
    dress3 = 'Printed Summer Dress',
    dress4 = 'Printed Summer Dress',
    dress5 = 'Printed Chiffon Dress',
    dress1price,
    dress2price,
    dress3price,
    dress4price,
    dress5price;

beforeAll(function () {
    browser.get(womenDressesPage.URL);
})

describe('Protractor: http://automationpractice.com, ex2', function () {
    it('Check if \'Dresses - My Store\' page is displayed?', function () {
        expect(browser.getTitle())
            .toEqual('Dresses - My Store');
    })
    //===test dress1===============================================================
    it('Check if \'' + dress1 + ' - My Store\' page is displayed?', function () {
        // womenDressesPage.dress1price.getText().then(function (getPrice) {
        //     dress1price = getPrice;
        // })
        dress1price = womenDressesPage.dress1price.getText();
        womenDressesPage.dress1.click();
        expect(browser.getTitle())
            .toEqual('' + dress1 + ' - My Store');
    })
    it('Check if \'' + dress1 + '\' matches product description', function () {
        expect(womenDressesProductPage.productDescription.getText())
            .toEqual(dress1);
    })
    it('Check if \'' + dress1 + '\' matches product price', function () {
        expect(womenDressesProductPage.productPrice.getText())
            .toEqual(dress1price);
    })
    it('Check if \'Dresses - My Store\' page is displayed?', function () {
        womenDressesProductPage.topMenuDresses.click();
        expect(browser.getTitle())
            .toEqual('Dresses - My Store');
    })
    //===test dress2===============================================================
    it('Check if \'' + dress2 + ' - My Store\' page is displayed?', function () {
        dress2price = womenDressesPage.dress2price.getText();
        womenDressesPage.dress2.click();
        expect(browser.getTitle())
            .toEqual('' + dress2 + ' - My Store');
    })
    it('Check if \'' + dress2 + '\' matches product description', function () {
        expect(womenDressesProductPage.productDescription.getText())
            .toEqual(dress2);
    })
    it('Check if \'' + dress2 + '\' matches product price', function () {
        expect(womenDressesProductPage.productPrice.getText())
            .toEqual(dress2price);
    })
    it('Check if \'Dresses - My Store\' page is displayed?', function () {
        womenDressesProductPage.topMenuDresses.click();
        expect(browser.getTitle())
            .toEqual('Dresses - My Store');
    })
    //===test dress3===============================================================
    it('Check if \'' + dress3 + ' - My Store\' page is displayed?', function () {
        dress3price = womenDressesPage.dress3price.getText();
        womenDressesPage.dress3.click();
        expect(browser.getTitle())
            .toEqual('' + dress3 + ' - My Store');
    })
    it('Check if \'' + dress3 + '\' matches product description', function () {
        expect(womenDressesProductPage.productDescription.getText())
            .toEqual(dress3);
    })
    it('Check if \'' + dress3 + '\' matches product price', function () {
        expect(womenDressesProductPage.productPrice.getText())
            .toEqual(dress3price);
    })
    it('Check if \'Dresses - My Store\' page is displayed?', function () {
        womenDressesProductPage.topMenuDresses.click();
        expect(browser.getTitle())
            .toEqual('Dresses - My Store');
    })
    //===test dress4===============================================================
    it('Check if \'' + dress4 + ' - My Store\' page is displayed?', function () {
        dress4price = womenDressesPage.dress4price.getText();
        womenDressesPage.dress4.click();
        expect(browser.getTitle())
            .toEqual('' + dress4 + ' - My Store');
    })
    it('Check if \'' + dress4 + '\' matches product description', function () {
        expect(womenDressesProductPage.productDescription.getText())
            .toEqual(dress4);
    })
    it('Check if \'' + dress4 + '\' matches product price', function () {
        expect(womenDressesProductPage.productPrice.getText())
            .toEqual(dress4price);
    })
    it('Check if \'Dresses - My Store\' page is displayed?', function () {
        womenDressesProductPage.topMenuDresses.click();
        expect(browser.getTitle())
            .toEqual('Dresses - My Store');
    })
    //===test dress5===============================================================
    it('Check if \'' + dress5 + ' - My Store\' page is displayed?', function () {
        dress5price = womenDressesPage.dress5price.getText();
        womenDressesPage.dress5.click();
        expect(browser.getTitle())
            .toEqual('' + dress5 + ' - My Store');
    })
    it('Check if \'' + dress5 + '\' matches product description', function () {
        expect(womenDressesProductPage.productDescription.getText())
            .toEqual(dress5);
    })
    it('Check if \'' + dress5 + '\' matches product price', function () {
        expect(womenDressesProductPage.productPrice.getText())
            .toEqual(dress5price);
    })
}) 