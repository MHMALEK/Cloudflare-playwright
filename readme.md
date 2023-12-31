# Cloudflare Playwright

<!-- [![NPM Version](https://img.shields.io/npm/v/your-module-name.svg)](https://www.npmjs.com/package/your-module-name)
[![License](https://img.shields.io/npm/l/your-module-name.svg)](https://github.com/your-username/your-module-name/blob/main/LICENSE) -->

A Node.js module that uses Playwright and Playwright Stealth to bypass Cloudflare protection.

## Installation

```shell
npm install bypass-cloudflare
```

## Usage

Make sure to have Playwright and Playwright Stealth installed as dependencies in your project:

```
npm install playwright playwright-stealth
```
In the example, we import the necessary modules (playwright and playwright-stealth), and then we use the byPassCloudFlare function to bypass Cloudflare protection for a given Playwright page object. The function returns an object with success and cf properties indicating the success of the bypass attempt.

Please note that you'll need to have Playwright and Playwright Stealth set up and configured properly to use this module.



# API Reference



# example;
```
// playwright-extra is a drop-in replacement for playwright,
// it augments the installed playwright with plugin functionality
import { chromium } from "playwright-extra";

// Load the stealth plugin and use defaults (all tricks to hide playwright usage)
// Note: playwright-extra is compatible with most puppeteer-extra plugins
import stealth from "puppeteer-extra-plugin-stealth";
import cloudFlareRetry from ".";

// Add the plugin to playwright (any number of plugins can be added)
chromium.use(stealth());

// That's it, the rest is playwright usage as normal 😊
chromium.launch({ headless: false }).then(async (browser) => {
const page = await browser.newPage();
await page.goto("https://nowsecure.nl/", { waitUntil: "networkidle" });

<!-- load this to by pass cloudflare -->
const { cf, success } = await cloudFlareRetry(page);
await page.screenshot({ path: "stealth.png", fullPage: true });

console.log("All done, check the screenshot. ✨");
await browser.close();
});
```


# License
This project is licensed under the MIT License.

# Acknowledgments
this is basically a port of great job that has been done here: https://github.com/vvanglro/cf-clearance by @vvanglro !

# Contact
You can email me or make a pull request! I will try to help but I can't guarantee that I can fix everything regarding this repo as it's only a hobby project.

# Disclaimer

It's only a personal usage. Don't use it for illigal purposes.
