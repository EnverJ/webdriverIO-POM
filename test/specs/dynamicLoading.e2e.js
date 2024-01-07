describe("Dynamic Loading pages", () => {
  it("Loading validation", async () => {
    await browser.url("/dynamic_loading/1");
    const startBtn = await $("//button[contains(text(),'Start')]");
    const finishBtn = await $("//h4[contains(text(),'Hello World!')]");
    const eleLoading = await $("#loading");
    await startBtn.click();
    // await browser.pause(5000);  hard waiting
    // await eleLoading.waitForDisplayed({timeout:20000}); if it take more than default waiting time
    await eleLoading.waitForDisplayed;
    await eleLoading.waitForDisplayed({ reverse: true });
    //await finishBtn.waitForDisplayed();
    await expect(await finishBtn.getText()).toEqual("Hello World!");
  });
});
