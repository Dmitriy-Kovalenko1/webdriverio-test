const assert = require('assert')

describe('Register page', () => {
    it('should have the right title', () => {
        browser.url('https://stage.pasv.us/user/register')
        const title = browser.getTitle()
        assert.strictEqual(title, 'Progress Monitor')
    })
    it('should have a correct title', () => {
        const actual = $('h1').getText();
        const expected = 'User Register';
        assert(actual, expected);
    });
    //it('should have a correct description', () => {
     //   const actual = $('h1').getText();
     //   const expected = 'Profiles with fictitious or dummy data will be deleted';
     //   assert(actualH1Text, expectedH1Text);
    //});
})

