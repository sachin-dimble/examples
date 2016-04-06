describe('angularjs homepage ', function() {
    it('should add form', function() {
        browser.get('http://localhost:5555/about');

        element(by.id('name')).sendKeys('firstname');
        element(by.id('unit')).sendKeys('firstunit');
        element(by.id('version')).sendKeys('firstversion');
        element(by.buttonText('Add')).click();

        element(by.id('name')).clear();
        element(by.id('unit')).clear();
        element(by.id('version')).clear();

        element(by.id('name')).sendKeys('secondname');
        element(by.id('unit')).sendKeys('secondunit');
        element(by.id('version')).sendKeys('secondversion');
        element(by.buttonText('Add')).click();

    });
});
