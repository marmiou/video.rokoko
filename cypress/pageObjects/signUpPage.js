export default class SignUpPage{

    getHeader(){
        return cy.get('h1')
    }

    getEmailInput(){
        return cy.get('input[name=email]')
    }

    getPasswordInput(){
        return cy.get('input[name=password]')
    }

    getSignupBtn() {
        return cy.get('button')
    }

    getErrorEmailMsg() {
        return cy.get('div.rkk-input.rkk-input--has-error span')
    }
    getErrorPassMsg(){
        return cy.get('div:nth-child(2) > span')
    }

    getNameInput(){
        return cy.get('input[name=name]')
    }

    getIndustry(value) {
        cy.get('#__next > div.Layouts_root__HPmEQ > section > section > div.AuthFlow_auth-page__content__05ub9 > form > div.SignupForms_inputs-container__vzN0X > div:nth-child(2) > div')
            .click()
            .find('#__next > div.Layouts_root__HPmEQ > section > section > div.AuthFlow_auth-page__content__05ub9 > form > div.SignupForms_inputs-container__vzN0X > div.SelectBrand_rkk-select__WrsuB.SelectBrand_rkk-select--open__U8ImP > div > ul')
            .then(el => {
                return Cypress.$.makeArray(el).map(el =>el.innerText)
            })
            .should('deep.equal', value)
    }

    getIndustryOptions(){
        return cy.get('#__next > div.Layouts_root__HPmEQ > section > section > div.AuthFlow_auth-page__content__05ub9 > form > div.SignupForms_inputs-container__vzN0X > div.SelectBrand_rkk-select__WrsuB.SelectBrand_rkk-select--open__U8ImP > div > ul')
    }

    getOrganizationSize() {
        return cy.get('#__next > div.Layouts_root__HPmEQ > section > section > div.AuthFlow_auth-page__content__05ub9 > form > div.SignupForms_inputs-container__vzN0X > div:nth-child(3) > div > div > svg > use')
    }

    getOrganizationSizeOptions(){
        return cy.get('#__next > div.Layouts_root__HPmEQ > section > section > div.AuthFlow_auth-page__content__05ub9 > form > div.SignupForms_inputs-container__vzN0X > div.SelectBrand_rkk-select__WrsuB.SelectBrand_rkk-select--open__U8ImP > div > ul')
    }

    getUsedSoftware() {
        return cy.get('#__next > div.Layouts_root__HPmEQ > section > section > div.AuthFlow_auth-page__content__05ub9 > form > div.SignupForms_inputs-container__vzN0X > div:nth-child(4) > div > div > svg > use')
    }

    getUsedSoftwareOptions() {

        return cy.get('#__next > div.Layouts_root__HPmEQ > section > section > div.AuthFlow_auth-page__content__05ub9 > form > div.SignupForms_inputs-container__vzN0X > div.SelectBrand_rkk-select__WrsuB.SelectBrand_rkk-select--open__U8ImP > div > ul')
    }

    getNextBtn() {
        return cy.get('#__next > div.Layouts_root__HPmEQ > section > section > div.AuthFlow_auth-page__content__05ub9 > form > div.SignupForms_button-container__Enq1C > button.ButtonBrand_btn___RHc9.ButtonBrand_btn--size-md__xl_JJ.ButtonBrand_btn--color-bright-normal__G7zu2')
    }

    getBackBtn() {
        return cy.get('#__next > div.Layouts_root__HPmEQ > section > section > div.AuthFlow_auth-page__content__05ub9 > form > div.SignupForms_button-container__Enq1C > button.ButtonBrand_btn___RHc9.ButtonBrand_btn--size-md__xl_JJ.ButtonBrand_btn--color-bright-outline__dSRG_')
    }

}