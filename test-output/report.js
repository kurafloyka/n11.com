$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Spring/Spring Projects/CucumberPOM/src/main/java/com/qa/features/n11.feature");
formatter.feature({
  "line": 1,
  "name": "n11.com Applications Test",
  "description": "",
  "id": "n11.com-applications-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 18481049478,
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
  "name": "user opens browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user is on login page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user enterss username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clickss on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "home page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "logout the website",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.user_opens_browser()"
});
formatter.result({
  "duration": 89838753,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_is_on_login_page()"
});
formatter.result({
  "duration": 3454780513,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_enters_username_and_password()"
});
formatter.result({
  "duration": 2987337854,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 23401,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.home_page_is_displayed()"
});
formatter.result({
  "duration": 12727,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.validate_home_page_title()"
});
formatter.result({
  "duration": 13959,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.validate_logged_in_username()"
});
formatter.result({
  "duration": 5647391537,
  "status": "passed"
});
formatter.after({
  "duration": 883648416,
  "status": "passed"
});
});