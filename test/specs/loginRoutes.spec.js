import loginPage from  '../pageobjects/login.page';

describe('Hudl Tests', () => {
    
    //opens a new window for EACH test to allow for a consistent starting point
    beforeEach( function() {
        loginPage.open();
    });

    it('should land on correct page when hitting back', async () => {
        await loginPage.goBack.click()
        await expect(await browser.getUrl()).toBe('https://www.hudl.com/');
    });
    
    it('should land on correct page when signing up', async () => {
        await loginPage.signUp.click()
        await expect(await browser.getUrl()).toBe('https://www.hudl.com/register/signup');
    });
    
    it('should land on correct page when loging in with an Organization', async () => {
        await loginPage.organizationLogin.click()
        await expect(await browser.getUrl()).toBe('https://www.hudl.com/app/auth/login/organization');
    });
});


