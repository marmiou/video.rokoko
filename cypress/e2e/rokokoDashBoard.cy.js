import SignInPage from "../pageObjects/signInPage"
import DashBoardPage from "../pageObjects/dashBoardPage";

let signInPage= new SignInPage();

describe('Test Video Rokoko Page', () => {
    beforeEach(() => {
        signInPage.navigate();
        cy.wait(4000)
        signInPage.getHeader().should('be.visible')
        signInPage.getHeader().should('contain.text', 'Get started using your Rokoko ID');
        signInPage.getEmailInput().type("efthymioumarkella@gmail.com")
        signInPage.getPasswordInput().type('Password1234')
        signInPage.getSignInBtn().click()
    })

    it('Should create a new Scene', () => {
        let dashBoardPage = new DashBoardPage();
        cy.wait(4000)
        dashBoardPage.skipInformativeModal()
        dashBoardPage.getHeader().should('contain.text', 'MyName')
        dashBoardPage.createNewScene('SceneName')
    })
})

