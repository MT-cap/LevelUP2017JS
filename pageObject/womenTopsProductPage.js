var WomenTopsProductPage = function(){
    this.productDescription = element(by.css('#short_description_content > p'));
    this.productCondition = element(by.css('#product_condition > span'));
    this.sizeDropdown = element(by.options('group_1'));
    this.sizeDropdownM = element(by.cssContainingText('option', 'M'));
    this.addToCartButton = element(by.css('#add_to_cart > button > span'));
    this.proceedToCheckoutButton = element(by.css('.btn.btn-default.button.button-medium'));
    this.cart = element(by.css('#header > div:nth-child(3) > div > div > div:nth-child(3) > div > a > b'));
    this.productPrice = element(by.css('#our_price_display'));
}
module.exports = WomenTopsProductPage;