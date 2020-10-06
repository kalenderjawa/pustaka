import "core-js/stable";
import "regenerator-runtime/runtime";

describe("ESM Browser", () => {
  beforeEach(async () => {
    await page.goto(PATH, { waitUntil: "load" });
  });

  test("test HTML title", async () => {
    await expect(page.title()).resolves.toMatch(
      "Test Kalender Jawa Browser ESM version"
    );
  });
});
