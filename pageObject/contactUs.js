var ContactUs = function(){
    this.URL = 'http://automationpractice.com/index.php?controller=contact';
    this.contactUsLabel = element(By.css("#center_column > h1"));
    this.subjectHeadingDropdown = element(By.css("#id_contact"));
    this.sendButton = element(By.css("#submitMessage > span"));

}
module.exports = ContactUs;