Feature: Login

Scenario: Check if it is possible to fill in all the contact fields
Given I'm on the main IBGE page
When Click on canais de atendimento
Then Redirects to the atendimento page
When Fill in the mandatory fields
Then The fields must be empty
