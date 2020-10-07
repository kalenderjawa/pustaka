import "core-js/stable";
import "regenerator-runtime/runtime";

describe("ESM Browser", () => {
  beforeEach(async () => {
    await page.goto(`${PATH}/index.html`, { waitUntil: "load" });

    page.on("console", (consoleObj) => {
      if (consoleObj.type() !== "warning") {
        console.log(consoleObj.text());
      }
    });
  });

  test("test HTML title", async () => {
    await expect(page.title()).resolves.toMatch(
      "Test Kalender Jawa Browser ESM version"
    );
  });

});
