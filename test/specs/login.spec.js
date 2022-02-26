import loginPage from  '../pageobjects/login.page';
import homePage from '../pageobjects/home.page';
import { USER } from '../data/credentials.js'; 

describe('Hudl Tests', () => {
    //opens a new window for all tests to allow for a consistent starting point
    before( function() {
        loginPage.open();
    });

    //logs out of the app and deletes cookies so there's a consistent environment for the next test execution
    after( function() {
        homePage.logout();
        browser.deleteCookies();
    });
    
    //negative test to check that an invalid email does not successfully log the user in
    it('should not login with invalid email', async () => {
        await loginPage.login(USER.invalidemail, USER.validpw);
        await loginPage.needHelp.waitForClickable(); //not ideal, but need to wait for the home page to load
        await expect(loginPage.needHelp).toBeClickable();
    });
 
    //negative test to check that an invalid password does not successfully log the user in
    it('should not login with invalid password', async () => {
        await loginPage.login(USER.validemail, USER.invalidpw);
        await loginPage.needHelp.waitForClickable(); //not ideal, but need to wait for the home page to load
        await expect(loginPage.needHelp).toBeClickable();
    });

    //happy path test to check that an valide credentials logs the user in
    it('should login with valid credentials and open the home page', async () => {
        await loginPage.login(USER.validemail, USER.validpw);
        await homePage.profileDropdown.waitForClickable() //not ideal, but need to wait for the home page to load
        var currentUrl = await browser.getUrl();
        await expect(currentUrl).toBe('https://www.hudl.com/home');
    });
    
});


