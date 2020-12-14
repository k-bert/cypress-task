import data from '../../support/util/data.json'
import * as header from '../../support/page/header'
import * as homePage from '../../support/page/home'
import * as cartPage from '../../support/page/cart'
import * as productPage from '../../support/page/product'

describe('Item purchase', () => {

    const productName = data.searchProduct

    beforeEach(() => {
        homePage.visit()
    })

    it('should add item to shopping cart', async () => {
        await header.createNewUserAndLogIn()
        await homePage.selectPhonesCategory()
        await homePage.openProductPage(productName)
        await productPage.addProductToCart()
        await header.openCartPage()
        await cartPage.checkProductIsInCart(productName)
        await cartPage.checkProductQuantityInCart(productName, 1)
        await header.logOut()
    })
})