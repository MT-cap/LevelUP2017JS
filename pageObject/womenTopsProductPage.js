var WomenTopsProductPage = function(){
    this.productDescription = element(by.css('#short_description_content > p'));
    this.productCondition = element(by.css('#product_condition > span'));
    this.sizeDropdown = element(by.css('#group_1'));
    this.sizeDropdownM = element(by.cssContainingText('option', 'M'));
    this.addToCartButton = element(by.css('#add_to_cart > button > span'));
    this.proceedToCheckoutButton = element(by.linkText('Proceed to checkout'));
}
module.exports = WomenTopsProductPage;