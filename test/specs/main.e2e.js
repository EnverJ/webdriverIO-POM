describe("count all links on then main pages", () => {
  it("Count all links", async () => {
    await browser.url("https://the-internet.herokuapp.com/");

    const listExample = $$("//ul/li");
    await expect(listExample).toBeElementsArrayOfSize({ gte: 1 }); // at least 1 item there
  });
});
