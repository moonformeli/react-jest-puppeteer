beforeEach(async () => {
  await page.goto("http://localhost:8080");
});

describe("Login", () => {
  it("Can login with correct id and pw", async done => {
    await page.screenshot({ path: "./screenshot_entry.png" });

    const id = "admin";
    const pw = "1234";

    /* put id and pw into input tags */
    await page.type("#loginInput", id);
    await page.type("#pwInput", pw);
    await page.screenshot({ path: "./screenshot_fill_inputs.png" });

    /* click login button and wait for the page to be navigated */
    await Promise.all([page.click("#loginBtn"), page.waitForNavigation()]);
    await page.screenshot({ path: "./screenshot_login_success.png" });

    /* get textConent */
    const textContent = await page.evaluate(() => {
      const root = document.getElementById("root");
      return root.textContent;
    });

    expect(textContent).toEqual("Welcome!");
    done();
  });
});
