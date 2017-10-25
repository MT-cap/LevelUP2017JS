var WomenPage = function(){
    this.URL = 'http://automationpractice.com/index.php?id_category=3&controller=category';
    // this.womenTopsButton = element(by.linkText('Tops'));
    this.womenTopsButton = element(By.css('#subcategories > ul > li:nth-child(1) > div.subcategory-image > a > img'));
}
module.exports = WomenPage;