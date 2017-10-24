var HomePage = function(){
    this.URL = 'http://automationpractice.com/index.php';
    this.cartLabel = element(By.css(".shopping_cart"));
    this.contactUsLink = element(By.css("#contact-link"));
    this.womenTab = element(By.cssContainingText("a.sf-with-ul", "Women"));
}
module.exports = HomePage;