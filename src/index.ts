import { errors, Page } from "playwright";

async function byPassCloudFlare(page: Page, tries = 10) {
  let success = false;
  let cf = true;
  const userTries = tries;

  while (tries > 0) {
    await page.waitForTimeout(1500);
    try {
      success = !(await page.$("#challenge-form"));
      if (success) {
        break;
      }
      for (const targetFrame of page.mainFrame().childFrames()) {
        if (
          targetFrame.url().includes("challenge") &&
          targetFrame.url().includes("turnstile")
        ) {
          try {
            const click = await targetFrame.$(
              'xpath=//input[@type="checkbox"]'
            );
            if (click) {
              await click.click();
            }
          } catch (error) {
            if (!(error instanceof errors.TimeoutError)) {
              // Frame is refreshed
              console.debug("Playwright Error:", error);
            }
          }
        }
      }
    } catch (error) {
      console.debug("Playwright Error:", error);
      success = false;
    }
    tries--;
  }

  if (tries === userTries) {
    cf = false;
  }

  return {success, cf};
}

export default byPassCloudFlare;
