import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given("I'm on the main IBGE page", () => {
    cy.visit("https://ibge.gov.br/pt/inicio.html?lang=pt-BR")
})

When('Enter a city in the search field', () => {
    cy.get('#btn__busca--mobile').click()
    cy.get('.envolve_logo.mobile-only > .largura-maxima > .nav-container > .pure-u-1 > #busca > .search > .form-inline > #mod-search-searchword').type('Joao pessoa')
    cy.get('.envolve_logo.mobile-only > .largura-maxima > .nav-container > .pure-u-1 > #busca > .search > .form-inline > .button').click()
})

Then('Show the results', () => {
    cy.get('.busca__mostrando > p')
})

Then('Shows the search field', () => {
    cy.get('.chzn-search > input')
})
