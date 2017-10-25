var WomenPage = function(){
    this.URL = 'http://automationpractice.com/index.php?id_category=3&controller=category';
    // this.womenTopsButton = element(by.linkText('Tops'));
    this.womenTopsButton = element(By.css('.submenu-container.clearfix.first-in-line-xs >li:nth-of-type(1) >a.sf-with-ul'));
}
module.exports = WomenPage;