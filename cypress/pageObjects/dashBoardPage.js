export default class DashBoardPage {

    getNextBtn() {
        return cy.get('.Modals_next__b_DYz')
    }

    getStartCreatingBtn() {
        return cy.get('.Modals_start__NRXNC')
    }

    skipInformativeModal() {
        for (let integer = 0; integer <= 3; integer++) {
            this.getNextBtn().click()
        }
        this.getStartCreatingBtn().click()
    }

    getHeader(){
        return cy.get('h1')
    }

    getCreateNewSceneBtn() {
        return cy.get('#__next > div.Layouts_root__HPmEQ > section > div > header > button')
    }

    getSceneNameInput(){
       return cy.get('body > div.Modals_modal__UxPEy.Modals_modal--clickable__omo_O > div.Modals_new_scene-modal__BKFIo > input')
    }

    getCreateSceneBtn() {
        return cy.get('body > div.Modals_modal__UxPEy.Modals_modal--clickable__omo_O > div.Modals_new_scene-modal__BKFIo > button')
    }

    getCloseModalBtn() {
        return cy.get('.Modals_btn-close__h2Ol_')
    }

    //todo
    // getSelectLocalVideoFileBtn() {
    // }

    createNewScene(name) {
        this.getCreateNewSceneBtn().click()
        cy.get('body > div.Modals_modal__UxPEy.Modals_modal--clickable__omo_O > div.Modals_new_scene-modal__BKFIo').should('be.visible')
        this.getSceneNameInput().type(name)
        this.getCreateSceneBtn().should('be.enabled').click()

    }
}
