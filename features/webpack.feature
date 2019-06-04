Feature: Vist Game Website and Search

@Scenario
Scenario: Game search
  
  Given I open Game website
  When I type "Red Dead" in the search
  And I click on search button
  Then I should see list of results 
  And  I navigate to detail page
  Then I should see price details