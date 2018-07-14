package com.qa.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.qa.util.TestBase;

public class HomePage extends TestBase {

	@FindBy(xpath = "//*[@id=\"header\"]/div/div/div[2]/div[2]/div[2]/div[1]/a[2]")
	@CacheLookup
	WebElement userNameLabel;

	@FindBy(xpath = "//*[@id=\"header\"]/div/div/div[2]/div[2]/div[2]/div[2]/div/a[8]")
	@CacheLookup
	WebElement updateUserName;

	@FindBy(xpath = "//*[@id=\"footer\"]/div/div[8]/a[1]")
	@CacheLookup
	WebElement founderGroup;

	@FindBy(xpath = "//*[@id=\"header\"]/div/div/div[2]/div[2]/div[2]")
	@CacheLookup
	WebElement accountLink;

	@FindBy(id = "searchData")
	@CacheLookup
	WebElement searchBox;

	@FindBy(xpath = "//*[@id=\"header\"]/div/div/div[2]/div[1]/a")
	@CacheLookup
	WebElement searchBoxButton;

	@FindBy(xpath = "//*[@id=\"header\"]/div/div/div[2]/div[2]/div[2]/div[2]/div/a[9]")
	@CacheLookup
	WebElement logOut;

	// Initializing the Page Objects:
	public HomePage() {
		PageFactory.initElements(driver, this);
	}

	public String verifyHomePageTitle() {
		return driver.getTitle();
	}

	public boolean verifyCorrectUserName() {
		return userNameLabel.isDisplayed();
	}

	public void clickOnUpdateInformationLink() {
		Actions action = new Actions(driver);
		action.moveToElement(accountLink).build().perform();
		updateUserName.click();

	}

	public void clickFounderGroupLink() {
		founderGroup.click();

	}

	public void clickSearchButton(String word) {

		searchBox.sendKeys(word);
		searchBoxButton.click();
	}

	public void logOutLink() throws InterruptedException {
		Actions action = new Actions(driver);
		Thread.sleep(2000l);
		action.moveToElement(accountLink).build().perform();
		logOut.click();
	}
}
