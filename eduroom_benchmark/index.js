const fs = require("fs");
const lighthouse = require("lighthouse");
const chromeLauncher = require("chrome-launcher");
(async () => {
  const result = await fs.readFileSync("whitelist.txt", "utf-8");
  let routes = result.split("\n");
  let warning = [];

  console.log(`|Path|Performance|Accessibility|Best Practices|SEO|Average|`);
  console.log("|---|---|---|---|---|---|");

  for (let route of routes) {
    let str = "|";
    const chrome = await chromeLauncher.launch({
      chromeFlags: ["--headless", "--window-size=1440,900"],
    });
    const options = { logLevel: "silent", output: "json", port: chrome.port };
    const runnerResult = await lighthouse(
      "https://eduroom.cscms.me" + route,
      options
    );
    const result = runnerResult.lhr.categories;
    let score = 0;
    let category = Object.keys(result);
    str += `${route}|`;

    for (let el of category) {
      if (result[el].title != "Progressive Web App") {
        str += `${result[el].score * 100}|`;
        score += result[el].score * 100;
      }
    }
    if (score / 4 < 80) {
      str += "`" + score / 4 + "`|";
    } else {
      str += `${score / 4}|`;
    }
    await chrome.kill();
    console.log(str);
  }
})();
