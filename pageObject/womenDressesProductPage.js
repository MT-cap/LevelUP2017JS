var WomenDressesProductPage = function(){
    this.productDescription = element(by.xpath('//*[@id="center_column"]/div/div/div[3]/h1'));
    this.productPrice = element(by.css('#our_price_display'));
    this.topMenuDresses = element(by.css('#block_top_menu > ul > li:nth-child(2) > a'));
}
module.exports = WomenDressesProductPage;