export default class SignInPage {
    navigate() {
        return cy.visit('https://video.rokoko.com/')
    }

    getHeader() {
        return cy.get('h1')
    }

    getSignUpForFreeLink() {
        return cy.get('#__next > div.Layouts_root__HPmEQ > section > section > div.AuthFlow_auth-page__content__05ub9 > form > p > a')
    }

    getSignInBtn() {
        return cy.get('#__next > div.Layouts_root__HPmEQ > section > section > div.AuthFlow_auth-page__content__05ub9 > form > div.LoginForm_button-container__dltAL > button.ButtonBrand_btn___RHc9.ButtonBrand_btn--size-md__xl_JJ.ButtonBrand_btn--color-bright-normal__G7zu2')
    }

    getContinueWithGoogleBtn() {
        return cy.get('#__next > div.Layouts_root__HPmEQ > section > section > div.AuthFlow_auth-page__content__05ub9 > form > div.LoginForm_button-container__dltAL > button.ButtonBrand_btn___RHc9.ButtonBrand_btn--size-md__xl_JJ.ButtonBrand_btn--color-bright-outline__dSRG_')
    }

    getForgotPasswordLink() {
        return cy.get('#__next section > section > div.AuthFlow_auth-page__content__05ub9 > form > a')
    }

    getEmailInput(){
        return cy.get('input[type=text]')
    }

    getPasswordInput(){
        return cy.get('input[type=password]')
    }
}
