import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given("I'm on the main IBGE page", () => {
    cy.visit("https://ibge.gov.br/pt/inicio.html?lang=pt-BR")
})

When('Click on canais de atendimento', () => {
    cy.get(':nth-child(2) > :nth-child(1) > .texto--branco').click()
    cy.get('.rodape-links > :nth-child(2) > :nth-child(1) > ul > :nth-child(1) > a').click()
})

Then('Redirects to the atendimento page', () => {
    cy.get('.conteudo__interna__titulo > h2')
})

When('Fill in the mandatory fields', () => {
    cy.get('#authorName').type('wisley')
    cy.get('#authorEmail').type('wisley@gmail.com')
    cy.get('#category').select('GEOGRAPHY')
    cy.get('#title').type('Projeto de Qualidade de Software')
    cy.get('#message').type('Este é um projeto da disciplina de Qualidade de Software')
    cy.get('.btn-danger').click()
})

Then('The fields must be empty', () => {
    cy.get('#authorName').should('have.value', '');
})