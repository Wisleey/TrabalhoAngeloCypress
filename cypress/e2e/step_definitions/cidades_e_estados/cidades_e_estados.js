import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given("I'm on the main IBGE page", () => {
    cy.visit("https://ibge.gov.br/pt/inicio.html?lang=pt-BR")
})

When('Click on combobox', () => {
    cy.get('.chzn-single > span').click()
})

Then('Shows the search field', () => {
    cy.get('.chzn-search > input')
})

When('Type the name of the city and Click to display', () => {
    cy.get('.chzn-search > input').type('João Pessoa')
    cy.get('.active-result').click()
})

Then('Shows city data', () => {
    cy.get('#autoComplete')
})


