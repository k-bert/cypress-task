import {Alert, randomString, asPromise} from '../util/helper';

export async function createNewUserAndLogIn() {
    let username = randomString(), password = randomString()
    await this.signUp(username, password)
    await this.logIn(username, password)
    await this.checkUserLoggedIn(username)
}

export function signUp(username, password) {
    cy.on("window:alert", (str) => {
        if (!str.includes(Alert.OkUserCreated)) throw new Error(str)
    })

    return asPromise(
        cy.get('a').contains('Sign up').click()
            .get('#sign-username').invoke('val', username)
            .get('#sign-password').invoke('val', password)
            .get('button').should('be.visible').contains('Sign up').click()
    )
}

export function logIn(username, password) {
    cy.on("window:alert", (str) => {
        if (!str.includes(Alert.OkUserCreated)) throw new Error(str)
    })

    return asPromise(
        cy.get('a').contains('Log in').click()
            .get('#loginusername').invoke('val', username)
            .get('#loginpassword').invoke('val', password)
            .get('button').should('be.visible').contains('Log in').click()
    )
}

export function checkUserLoggedIn(username) {
    return asPromise(
        cy.get('#nameofuser').should('contain.text', username)
    )
}

export function openCartPage() {
    return asPromise(
        cy.get('a').contains('Cart').click()
    )
}

export function logOut() {
    return asPromise(
        cy.get('a').contains('Log out').click()
            .get('a').contains('Log in').should('be.visible')
    )
}