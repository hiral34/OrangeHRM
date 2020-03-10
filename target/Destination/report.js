$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/Resources/features/InvalidLogin.feature");
formatter.feature({
  "line": 1,
  "name": "Invalid Logins",
  "description": "",
  "id": "invalid-logins",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "To test Login page for all possible invalid login scenarios",
  "description": "",
  "id": "invalid-logins;to-test-login-page-for-all-possible-invalid-login-scenarios",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@LoginsTests"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User enters invalid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "valid \"\u003cerror_message\u003e\" must be displayed on the screen",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "invalid-logins;to-test-login-page-for-all-possible-invalid-login-scenarios;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "error_message"
      ],
      "line": 11,
      "id": "invalid-logins;to-test-login-page-for-all-possible-invalid-login-scenarios;;1"
    },
    {
      "cells": [
        "",
        "",
        "Username cannot be empty"
      ],
      "line": 12,
      "id": "invalid-logins;to-test-login-page-for-all-possible-invalid-login-scenarios;;2"
    },
    {
      "cells": [
        "abcd",
        "",
        "Password cannot be empty"
      ],
      "line": 13,
      "id": "invalid-logins;to-test-login-page-for-all-possible-invalid-login-scenarios;;3"
    },
    {
      "cells": [
        "",
        "asfsd",
        "Username cannot be empty"
      ],
      "line": 14,
      "id": "invalid-logins;to-test-login-page-for-all-possible-invalid-login-scenarios;;4"
    },
    {
      "cells": [
        "admin",
        "sdkfjdskfj",
        "Invalid credentials"
      ],
      "line": 15,
      "id": "invalid-logins;to-test-login-page-for-all-possible-invalid-login-scenarios;;5"
    },
    {
      "cells": [
        "fsfsdf",
        "admin123",
        "Invalid credentials"
      ],
      "line": 16,
      "id": "invalid-logins;to-test-login-page-for-all-possible-invalid-login-scenarios;;6"
    },
    {
      "cells": [
        "admin",
        "",
        "Password cannot be empty"
      ],
      "line": 17,
      "id": "invalid-logins;to-test-login-page-for-all-possible-invalid-login-scenarios;;7"
    },
    {
      "cells": [
        "",
        "admin123",
        "Username cannot be empty"
      ],
      "line": 18,
      "id": "invalid-logins;to-test-login-page-for-all-possible-invalid-login-scenarios;;8"
    },
    {
      "cells": [
        "sdfasd",
        "sdkfsd",
        "Invalid credentials"
      ],
      "line": 19,
      "id": "invalid-logins;to-test-login-page-for-all-possible-invalid-login-scenarios;;9"
    }
  ],
  "keyword": "Examples"
});
