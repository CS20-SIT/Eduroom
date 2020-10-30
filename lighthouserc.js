module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
      headful: false,
      settings: {
        emulatedFormFactor: 'desktop',
        throttlingMethod: 'devtools',
        chromeFlags: '--window-size=1440,900',
        throttling: {
          rttMs: 40,
          throughputKbps: 10240,
          cpuSlowdownMultiplier: 1
        }
      },
      url: [
        'https://eduroom.cscms.me', 
        'https://eduroom.cscms.me/login', 
        'https://eduroom.cscms.me/register'
      ]
    },
    upload: {
      target: 'lhci',
      serverBaseUrl: 'https://lhci.cscms.me',
    },
  },
};