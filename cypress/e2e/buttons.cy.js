/// <reference types="cypress" />

describe('Context: My First Tests', () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.visit('/multiple_buttons');
    })
  
    it('Check Different Button Actions', () => {
        // select a button with text
        cy.contains('Button 2').should('be.visible').click();
        cy.contains('Clicked on button two!').should('be.visible');

        // find element with class attribute and create a list then select 3rd element from the list
        cy.get('.btn.btn-primary').then(($buttons) => {
            cy.wrap($buttons).eq(2).click(); // zero indexed list now
            // in List Java, list.get(index)
            // assert the text
            cy.contains('Clicked on button three!').should('be.visible');
        })
        // you got all buttons with tagName; each method is creating me a loop
        cy.get('button').each((item, index, list) => {
            // assert length of the list, verify number of buttons
            expect(list).to.have.length(6);
            expect(item).to.have.attr("onclick");
        })

        // I will get all buttons like previous approach, get only the item then check for text of each item, if it is equal to Button 4, then click on it
        cy.get('button').each((item) => {
            if(item.text() == "Button 4"){
                cy.log(item.text());  // this command write the text at the test console
                // item.click(); // you cannot use cypress click func on jQuery element
                cy.wrap(item).click();
                cy.contains('Clicked on button four!').should('be.visible');
            }
        })


        // npx cypress run --headless -b chrome



    })
  
})