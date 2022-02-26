import Page from './page';

class homePage extends Page {

    get primaryTeamSwitcher() {
        return $('div.hui-primaryteamswitcher__display-name');
    }

    get profileDropdown() {
        return $('div.hui-globalusermenu')
    }

    get logoutButton() {
        return $('div.hui-globaladditionalitems.hui-globaladditionalitems--not-phone > a.hui-globalusermenu__item > span')
    }

    async logout () {
        await this.profileDropdown.click();
        await this.logoutButton.click();
    }


}

export default new homePage();
