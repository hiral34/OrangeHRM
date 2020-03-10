Feature: Invalid Logins

  Background:
    Given user is on Login page

  @LoginsTests
  Scenario Outline: To test Login page for all possible invalid login scenarios
    When User enters invalid "<username>" and "<password>"
    Then valid "<error_message>" must be displayed on the screen
    Examples:
      | username | password   | error_message             |
      |          |            | Username cannot be empty |
      | abcd     |            | Password cannot be empty |
      |          | asfsd      | Username cannot be empty  |
      | admin    | sdkfjdskfj | Invalid credentials      |
      | fsfsdf   | admin123   | Invalid credentials       |
      | admin    |            | Password cannot be empty  |
      |          | admin123   | Username cannot be empty  |
      | sdfasd   | sdkfsd     | Invalid credentials       |


