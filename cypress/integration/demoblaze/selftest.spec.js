import data from '../../support/util/data.json'
import * as homePage from "../../support/page/home";
import * as header from "../../support/page/header";
import {Alert, expectErrorWithMessage, randomString} from "../../support/util/helper";

describe('Self test', () => {

    const username = data.existingUser.username
    const password = data.existingUser.password

    beforeEach(() => {
        homePage.visit()
    })

    it('should fail when signing up with existing username', () => {
        expectErrorWithMessage(Alert.ErrUserExists)
        header.signUp(username, password)
    })

    it('should fail when signing up with empty password', () => {
        expectErrorWithMessage(Alert.ErrMissingCredentials)
        header.signUp(username)
    })

    it('should fail when signing up with empty username', () => {
        expectErrorWithMessage(Alert.ErrMissingCredentials)
        header.signUp(undefined, password)
    })

    it('should fail when logging  in with empty password', () => {
        expectErrorWithMessage(Alert.ErrMissingCredentials)
        header.logIn(username)
    })

    it('should fail when logging in with empty username', () => {
        expectErrorWithMessage(Alert.ErrMissingCredentials)
        header.logIn(undefined, password)
    })

    it('should fail when logging in with non-registered username', () => {
        expectErrorWithMessage(Alert.ErrNoSuchUser)
        header.logIn(randomString(), password)
    })

    it('should fail when logging in with wrong password', () => {
        expectErrorWithMessage(Alert.ErrWrongPassword)
        header.logIn(username, randomString())
    })
})