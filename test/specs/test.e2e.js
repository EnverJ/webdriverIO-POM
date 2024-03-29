const { expect } = require("@wdio/globals");
const LoginPage = require("../pageobjects/login.page");
const SecurePage = require("../pageobjects/secure.page");

describe("My Login application", () => {
  it("should login with valid credentials", async () => {
    await LoginPage.open();

    await LoginPage.login("tomsmith", "SuperSecretPassword!");
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(
      "You logged into a secure area!"
    );
  });

  // new test cases

  it("log out from the home page", async () => {
    await SecurePage.logoutBtn.click();
    await expect(SecurePage.flashAlert).toHaveTextContaining(
      "You logged out of the secure area!"
    );
  });
});
