var WomenDressesPage = require(pageObjectDir + "/womenDressesPage.js"),
    womenDressesPage = new WomenDressesPage(),
    WomenDressesProductPage = require(pageObjectDir + "/womenDressesProductPage.js"),
    womenDressesProductPage = new WomenDressesProductPage(),

    dataHC = {
        "dress1": {
            'name' : 'Printed Dress',
            'price' : '$26.00',
            'dressSelector': womenDressesPage.dress1,
            'priceSelector' : womenDressesPage.dress1price
        },
        "dress2": {
            'name' : 'Printed Dress',
            'price' : '$50.99',
            'dressSelector': womenDressesPage.dress2,
            'priceSelector' : womenDressesPage.dress2price
        },
        "dress3": {
            'name' : 'Printed Summer Dress',
            'price' : '$28.98',
            'dressSelector': womenDressesPage.dress3,
            'priceSelector' : womenDressesPage.dress3price
        },
        "dress4": {
            'name' : 'Printed Summer Dress',
            'price' : '$30.50',
            'dressSelector': womenDressesPage.dress4,
            'priceSelector' : womenDressesPage.dress4price
        },
        "dress5": {
            'name' : 'Printed Chiffon Dress',
            'price' : '$16.40',
            'dressSelector': womenDressesPage.dress5,
            'priceSelector' : womenDressesPage.dress5price
        }
    };

beforeAll(function () {
    browser.get(womenDressesPage.URL);
})

describe('Protractor: http://automationpractice.com, ex2 - dataDriven', function () {
    using(dataHC, function(tc){
        it('Check if \'Dresses - My Store\' page is displayed?', function () {
            expect(browser.getTitle())
                .toEqual('Dresses - My Store');
        })
        it('Check if \'' + tc.name + '\' matches product description', function () {
            expect(tc.dressSelector.getText())
                .toEqual(tc.name);
        })
        it('Check if \'' + tc.price + '\' matches product price', function () {
            expect(tc.priceSelector.getText())
                .toEqual(tc.price);
        })
        it('Check if \'' + tc.name + '\' page is displayed?', function () {
            tc.dressSelector.click()
            expect(browser.getTitle())
                .toEqual('' + tc.name + ' - My Store');
        })
        it('Check if \'' + tc.name + '\' matches product description', function () {
            expect(womenDressesProductPage.productDescription.getText())
                .toEqual(tc.name);
        })
        it('Check if \'' + tc.price + '\' matches product price', function () {
            expect(womenDressesProductPage.productPrice.getText())
                .toEqual(tc.price);
        })
        it('Check if \'Dresses - My Store\' page is displayed?', function () {
            womenDressesProductPage.topMenuDresses.click();
            expect(browser.getTitle())
                .toEqual('Dresses - My Store');
        })
    })
}) 