Feature: Cidades e Estados

Scenario: Check whether the function of displaying data about cities and states works correctly
Given I'm on the main IBGE page
When Click on combobox
Then Shows the search field
When Type the name of the city and Click to display
Then Shows city data