var WomenDressesPage = function(){
    this.URL = 'http://automationpractice.com/index.php?id_category=8&controller=category';
    this.dress1 = element(by.xpath('//*[@id="center_column"]/ul/li[1]/div/div[2]/h5/a'));
    this.dress2 = element(by.xpath('//*[@id="center_column"]/ul/li[2]/div/div[2]/h5/a'));
    this.dress3 = element(by.xpath('//*[@id="center_column"]/ul/li[3]/div/div[2]/h5/a'));
    this.dress4 = element(by.xpath('//*[@id="center_column"]/ul/li[4]/div/div[2]/h5/a'));
    this.dress5 = element(by.xpath('//*[@id="center_column"]/ul/li[5]/div/div[2]/h5/a'));
    this.dress1price = element(by.xpath('//*[@id="center_column"]/ul/li[1]/div/div[2]/div[1]/span'));
    this.dress2price = element(by.xpath('//*[@id="center_column"]/ul/li[2]/div/div[2]/div[1]/span'));
    this.dress3price = element(by.xpath('//*[@id="center_column"]/ul/li[3]/div/div[2]/div[1]/span[1]'));
    this.dress4price = element(by.xpath('//*[@id="center_column"]/ul/li[4]/div/div[2]/div[1]/span'));
    this.dress5price = element(by.xpath('//*[@id="center_column"]/ul/li[5]/div/div[2]/div[1]/span[1]'));
}
module.exports = WomenDressesPage;