@DatePicker

Feature: Check Date Picker Component Validations

  Scenario Outline: Check Invalid Date Format Functionality

    And I open "https://5e8f23e8285c40998c99a483--unruffled-murdock-945529.netlify.com/?path=/story/ai--ai" url
    When I see "Storybook" in the title
    And I click on Date Picker tab
    And I click on Inline Date Picker tab

    When I fill "<Data>" value in Inline Date Picker field
    Then I should see "<Validation Message>" for Inline Date Picker field

    Examples:

      | Data       | Validation Message                     |
      | 00000000   | Invalid Date Format                    |
      | 01/01/2101 | Date should not be after maximal date  |
      | 12/31/1899 | Date should not be before minimal date |



