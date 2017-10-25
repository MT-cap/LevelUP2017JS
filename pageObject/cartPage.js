var CartPage = function(){
    this.productDescription = element(by.css('#product_1_3_0_0 > td.cart_description > p > a'));
    this.unitPrice = element(by.css('#total_product'));
}
module.exports = CartPage;