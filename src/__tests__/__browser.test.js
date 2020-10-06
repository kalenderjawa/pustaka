import "core-js/stable";
import "regenerator-runtime/runtime";

describe("ESM Browser", () => {
  beforeEach(async () => {
    await page.goto(`${PATH}/index-no-esm.html`, { waitUntil: "load" });

    page.on("console", (consoleObj) => {
      if (consoleObj.type() === "log") {
        console.log(consoleObj.text());
      }
    });
  });

  
});
