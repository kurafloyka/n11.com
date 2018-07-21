$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Spring/Spring Projects/CucumberPOM/src/main/java/com/qa/features/n11.feature");
formatter.feature({
  "line": 1,
  "name": "n11.com Applications Test",
  "description": "",
  "id": "n11.com-applications-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 11990957252,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Validate n11.com Home Page Test",
  "description": "",
  "id": "n11.com-applications-test;validate-n11.com-home-page-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is on login page",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user enterss username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "logout the website",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.user_is_on_login_page()"
});
formatter.result({
  "duration": 1404952204,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_enters_username_and_password()"
});
formatter.result({
  "duration": 5542099317,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.validate_logged_in_username()"
});
formatter.result({
  "duration": 4809791917,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[enes]\u003e but was:\u003c[FARUK]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.qa.stepdefinations.HomePageSteps.validate_logged_in_username(HomePageSteps.java:39)\r\n\tat ✽.Then logout the website(D:/Spring/Spring Projects/CucumberPOM/src/main/java/com/qa/features/n11.feature:7)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 3318483646,
  "status": "passed"
});
});