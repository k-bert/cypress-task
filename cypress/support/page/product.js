import {Alert, asPromise} from '../util/helper'

export function addProductToCart() {
    cy.on('window:alert', (str) => {
        expect(str).to.include(Alert.OkProductAdded)
    })

    return asPromise(
        cy.contains('Add to cart').click()
    )
}