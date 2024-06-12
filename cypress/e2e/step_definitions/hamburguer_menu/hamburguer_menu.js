import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given("I'm on the main IBGE page", () => {
    cy.visit("https://ibge.gov.br/pt/inicio.html?lang=pt-BR")
})

When('Click on Hamburguer menu', () => {
    cy.get('.envolve_logo.mobile-only > .largura-maxima > .nav-container > .pure-u-1 > #nav-toggle').click()
})

Then('Open Hamburguer menu', () => {
    cy.get('[idmenu="1"] > :nth-child(1)')
})