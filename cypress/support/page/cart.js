import {asPromise} from "../util/helper";

export function visit() {
    return cy.visit('/cart.html')
}

export function checkProductIsInCart(productName) {
    return asPromise(
        cy.get('td').contains(productName).should('be.visible')
    )
}

export function checkProductQuantityInCart(productName, expectedQuantity) {
    return asPromise(
        cy.get('tbody').within(() => {
            cy.get('tr').should('have.length', expectedQuantity)
        })
    )
}