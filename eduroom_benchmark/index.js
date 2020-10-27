const fs = require('fs');
const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
(async () => {
  const result = await fs.readFileSync('whitelist.txt','utf-8')
  let routes = result.split('\n')
  let warning = []
  for(let route of routes){
    const chrome = await chromeLauncher.launch({chromeFlags: ['--headless','--window-size=1440,900']});
    const options = {logLevel: 'silent', output: 'json', port: chrome.port};
    const runnerResult = await lighthouse('https://eduroom.cscms.me'+route, options);
    const result = runnerResult.lhr.categories;
    let score = 0;
    let category = Object.keys(result)
    console.log('URL: https://eduroom.cscms.me'+route)
    for(let el of category){
        if(result[el].title != 'Progressive Web App'){
            console.log(result[el].title + ":" , result[el].score*100)
            score+=result[el].score*100
        }
    }
    console.log("Average: ",score/4)
    if(score/4 < 80){
        warning.push({url:"https://eduroom.cscms.me"+route,avg:score/4})
    }
    await chrome.kill();
  }
  if(warning.length !=0){
    console.error("\x1b[41m"+"Low Performance Route","\x1b[0m")
    console.error()
    for(let warn of warning){
        console.error("\x1b[41m"+warn.url+ ":  \x1b[1m"+ warn.avg+"\x1b[0m")
        console.error()
    }
  }
})();