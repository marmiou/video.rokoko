import SignInPage from '../pageObjects/signInPage'
import SignUpPage from '../pageObjects/signUpPage'

let signInPage = new SignInPage()
let signUpPage = new SignUpPage()

describe('Test Video Rokoko Page', () => {
    beforeEach(() => {
        signInPage.navigate();
        signInPage.getHeader().should('be.visible')
        signInPage.getHeader().should('contain.text', 'Get started using your Rokoko ID')
        signInPage.getSignUpForFreeLink().click()
    })

    it('Should not allow Sign Up with invalid password(no digits)',() => {
        signUpPage.getEmailInput().type('invalidSignUp@sign.com')
        signUpPage.getPasswordInput().type('NoDigitPass')
        signUpPage.getErrorPassMsg().should('have.text', 'Password must contain at least one digit')
        signUpPage.getSignupBtn().should('be.disabled')
    })

    it('Should not allow Sign Up with invalid password(no upper case letter)',() => {
        signUpPage.getEmailInput().type('invalidSignUp@sign.com')
        signUpPage.getPasswordInput().type('password1234')
        signUpPage.getErrorPassMsg().should('have.text', 'Password must contain at least 1 upper case letter')
        signUpPage.getSignupBtn().should('be.disabled')
    })

    it('Should not allow Sign Up with invalid password(shorter than 8)',() => {
        signUpPage.getEmailInput().type('invalidSignUp@sign.com')
        signUpPage.getPasswordInput().type('Pass')
        signUpPage.getErrorPassMsg().should('have.text', 'Password must be at least 8 characters long')
        signUpPage.getSignupBtn().should('be.disabled')
    })

    it('Should not allow Sign Up with invalid email',() => {
        signUpPage.getEmailInput().type('@sign')
        signUpPage.getErrorEmailMsg().should('have.text', 'Invalid email')
        signUpPage.getSignupBtn().should('be.disabled')
    })

    it('Should not allow Sign Up with empty email',() => {
        signUpPage.getEmailInput().invoke('val', '')
        signUpPage.getErrorEmailMsg().should('have.text', 'Email is required')
        signUpPage.getSignupBtn().should('be.disabled')
    })

    it('Should not allow Sign Up with empty password',() => {
        signUpPage.getEmailInput().type('invalidSignUp@sign.com')
        signUpPage.getPasswordInput().invoke('val', '')
        signUpPage.getErrorPassMsg().should('have.text', 'Password is required')
        signUpPage.getSignupBtn().should('be.disabled')
    })

    it.skip('Should Inform user to verify existing unverified account', () => {
        signUpPage.getHeader().should('contain', 'Create a Rokoko account to use Rokoko Video')
        signUpPage.getEmailInput().type('lalala@signup.com')
        signUpPage.getPasswordInput().type('Password1234')
        signUpPage.getSignupBtn().should('be.enabled').click()
        signUpPage.getNameInput().should('be.visible').type('SignUpName')
        signUpPage.getIndustry('Advertisement & communication')
        // signUpPage.getOrganizationSize().click()
        // signUpPage.getOrganizationSizeOptions().should('be.visible').select('2-10')
        // signUpPage.getUsedSoftware().click()
        // signUpPage.getUsedSoftwareOptions().should('be.visible').select('Unity')
        // signUpPage.getNextBtn().should('be.enabled').click()
    })
})
