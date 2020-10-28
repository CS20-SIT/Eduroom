const fs = require('fs');
const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
(async () => {
  let str = ""
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
    str += '## '+route + '\n'
    str +=  `**URL**: https://eduroom.cscms.me${route}\n` 
    for(let el of category){
        if(result[el].title != 'Progressive Web App'){
            str += `**${result[el].title}**` + ": " + result[el].score*100 + '\n'
            score+=result[el].score*100
        }
    }
    str += "**Average**: " + score/4 + '\n'
    if(score/4 < 90){
        warning.push({url:"https://eduroom.cscms.me"+route,avg:score/4})
    }
    await chrome.kill();
  }
  if(warning.length !=0){
    console.log("# Low Performance Route")
    for(let warn of warning){
        console.log(`**${warn.url}**`+ ":  "+ '`' +warn.avg + '`')
    }
  }
  console.log('\n' + str);
})();