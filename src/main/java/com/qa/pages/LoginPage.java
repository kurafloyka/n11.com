package com.qa.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.qa.util.TestBase;

public class LoginPage extends TestBase {

	// *[@id=\"header\"]/div/div/div[2]/div[2]/div[2]/div/div/a[1]

	@FindBy(xpath = "//*[@id=\"header\"]/div/div/div[2]/div[2]/div[2]/div/div/a[1]")
	WebElement account;

	// Page Factory - OR:
	@FindBy(id = "email")
	WebElement email;

	@FindBy(id = "password")
	WebElement password;

	@FindBy(id = "loginButton")
	WebElement loginBtn;

	// Initializing the Page Objects:
	public LoginPage() {
		PageFactory.initElements(driver, this);
	}

	// Actions:
	public String validateLoginPageTitle() {
		return driver.getTitle();
	}

	public void clickAccountLink() {
		account.click();

	}

	public HomePage login(String em, String pwd) {
		email.sendKeys(em);
		password.sendKeys(pwd);

		loginBtn.click();

		return new HomePage();
	}
}
