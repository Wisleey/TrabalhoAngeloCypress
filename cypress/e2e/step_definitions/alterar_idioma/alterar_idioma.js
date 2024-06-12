import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given("I'm on the main IBGE page", () => {
    cy.visit("https://ibge.gov.br/pt/inicio.html?lang=pt-BR")
})

When('Click on the UK flag', () => {
    cy.get('.envolve_logo.mobile-only > .largura-maxima > :nth-child(1) > .header__menu--auxiliar > .mod-languages > .lang-inline > :nth-child(2) > a > img').click()

})

Then('The page is in English', () => {
    cy.get('#section_comunicados > .largura-maxima > h2').should('contain.text', 'Highlights')
})

