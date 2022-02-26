import loginPage from  '../pageobjects/login.page';
import homePage from '../pageobjects/home.page';
import { USER } from '../data/credentials.js'; 

describe('Hudl Tests', () => {
    //opens a new window for all tests to allow for a consistent starting point
    before( function() {
        loginPage.open();
    });

    //happy path test to check that the form remembers my username 
    it('should should remember me', async () => {
        await loginPage.rememberMe.click()
        await loginPage.login(USER.validemail, USER.validpw); //first login
        await homePage.profileDropdown.waitForClickable();
        homePage.logout(); //logout
        await loginPage.mainPageLoginButton.click(); //click sign in from the main Hudl page
        await loginPage.inputEmail.waitForClickable(); //wait to ensure we're on the right page
        expect(await loginPage.inputEmail.getValue()).toEqual(USER.validemail); //grabs the autofilled data and validates it is correct
    });
});


