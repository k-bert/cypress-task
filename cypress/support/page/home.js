import {asPromise} from "../util/helper";

export function visit() {
    return cy.visit('/index.html')
}

export function selectPhonesCategory() {
    return asPromise(
        cy.get('a').contains('Phones').click()
    )
}

export function openProductPage(productName) {
    return asPromise(
        cy.get('a').contains(productName).click()
    )
}