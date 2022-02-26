

import Page from './page';

class LoginPage extends Page {

    get inputEmail() {
        return $('input#email');
    }

    get inputPassword() {
        return $('input#password');
    }

    get btnSubmit() {
        return $('button#logIn');
    }

    get needHelp() {
        return $('a.need-help')
    }

    get signUp() {
        return $('div.sign-up-trial > a')
    }

    get organizationLogin() {
        return $('#logInWithOrganization')
    }

    get goBack() {
        return $('svg.back-to-hudl-arrow')
    }

    get rememberMe() {
        return $('label.form__label--custom')
    }
    
    get mainPageLoginButton() {
        return $('div.mainnav__actions > a.mainnav__btn.mainnav__btn--primary')
    }

    get autofillUsername() {
        return $('head')
    }

    async login (username, password) {
        await this.inputEmail.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    open() {
        return super.open('login');
    }
}

export default new LoginPage();
