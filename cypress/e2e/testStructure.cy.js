/// <reference types="cypress" />

describe('Context: My First Tests', () => {
    before(() => {
        // runs once before all test cases in this describe block, like beforeClass in TestNG 
    })
    beforeEach(() => {
        // run before each test case, beforeMethod in TestNG
        cy.clearCookies();
    })
    after(() => {
        // similar to afterClass in TestNG, runs once after all tests finished
    })
    afterEach(() => {
        // similar to afterMethod in TestNG
    })
    it('Opening a web application', () => {
        cy.visit('/registration_form');
       
    })
})