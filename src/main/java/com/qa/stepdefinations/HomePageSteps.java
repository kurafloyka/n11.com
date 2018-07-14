package com.qa.stepdefinations;

import org.junit.Assert;

import com.qa.pages.HomePage;
import com.qa.pages.LoginPage;
import com.qa.util.TestBase;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class HomePageSteps extends TestBase {

	LoginPage loginPage;
	HomePage homePage;

	@Before
	public void setup() {

		System.out.println("testing is starting");
		TestBase.initialization();
	}

	@After
	public void tearDown() throws InterruptedException {
		System.out.println("closed the browser");
		driver.quit();

	}

	@Given("^user opens browser$")
	public void user_opens_browser() {

	}

	@Then("^user is on login page$")
	public void user_is_on_login_page() {
		loginPage = new LoginPage();
		String title = loginPage.validateLoginPageTitle();
		Assert.assertEquals("n11.com - Alışverişin Uğurlu Adresi", title);

		loginPage.clickAccountLink();

	}

	@Then("^user enterss username and password$")
	public void user_enters_username_and_password() {
		String email = prop.getProperty("email");
		String password = prop.getProperty("password");
		// System.out.println(email + password);
		homePage = loginPage.login(email, password);
	}

	@Then("^user clickss on login button$")
	public void user_clicks_on_login_button() {

	}

	@Then("^home page is displayed$")
	public void home_page_is_displayed() {

	}

	@Then("^validate home page title$")
	public void validate_home_page_title() {

	}

	@Then("^logout the website$")
	public void validate_logged_in_username() throws InterruptedException {

		homePage.logOutLink();
	}
}