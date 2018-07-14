Feature: n11.com Applications Test

Scenario: Validate n11.com Home Page Test

	Given user opens browser
	Then user is on login page
	Then user enterss username and password
	Then user clickss on login button
	Then home page is displayed
	Then validate home page title
	Then logout the website