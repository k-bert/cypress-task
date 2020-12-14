const uuid = require("uuid");

export const Alert = Object.freeze({

    //err
    ErrUserExists: "This user already exist",
    ErrMissingCredentials: "Please fill out Username and Password.",
    ErrWrongPassword: "Wrong password.",
    ErrNoSuchUser: "User does not exist.",

    //ok
    OkUserCreated: "Sign up successful.",
    OkProductAdded: "Product added."
})

export function randomString() {
    return uuid.v4()
}

export function expectErrorWithMessage(message) {
    cy.on('uncaught:exception', (err) => {
        expect(err.message).to.include(message)
        return false
    })
}

export function asPromise(steps) {
    return new Cypress.Promise((resolve, reject) => {
        Cypress.on('fail', rejectPromise)

        function rejectPromise(error) {
            reject(error)
            Cypress.off('fail', rejectPromise)
        }

        steps.then(resolvePromise)

        function resolvePromise(value) {
            resolve(value)
            Cypress.off('fail', rejectPromise)
        }
    })
}