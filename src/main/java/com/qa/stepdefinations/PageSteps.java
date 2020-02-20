package com.qa.stepdefinations;

import static com.qa.util.TestBase.prop;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import org.junit.Assert;

import com.qa.pages.HomePage;
import com.qa.pages.LoginPage;

import cucumber.api.java.en.Then;

public class PageSteps {

    LoginPage loginPage;
    HomePage homePage;


    @Given("^$")
    public void ex1() {
    }

    @When("^$")
    public void ex2() {
    }

    @Then("^$")
    public void ex3() {
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

    @Then("^logout the website$")
    public void validate_logged_in_username() throws InterruptedException {

        homePage.logOutLink();
        Assert.assertEquals("enes", "FARUK");
    }
}