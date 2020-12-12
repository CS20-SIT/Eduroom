module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
      headful: false,
      settings: {
        emulatedFormFactor: 'desktop',
        throttlingMethod: 'simulate',
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
        'https://eduroom.cscms.me/register',

        'https://eduroom.cscms.me/calendar',
        'https://eduroom.cscms.me/chat',
        'https://eduroom.cscms.me/user/wishlist',
        'https://eduroom.cscms.me/user/courses',
        'https://eduroom.cscms.me/edqiz',
        'https://eduroom.cscms.me/edqiz/create',
        'https://eduroom.cscms.me/forum',
        'https://eduroom.cscms.me/support',
        'https://eduroom.cscms.me/tutor',
        'https://eduroom.cscms.me/tutor/appointment',
        'https://eduroom.cscms.me/graderSystem',
        'https://eduroom.cscms.me/graderSystem/profile',
        'https://eduroom.cscms.me/graderSystem/rank',
        'https://eduroom.cscms.me/graderSystem/contest',
        // GROUP 9
        'https://eduroom.cscms.me/coin-shop',
        'https://eduroom.cscms.me/coin-shop/StoreSticker',
      ]
    },
    upload: {
      target: 'lhci',
      serverBaseUrl: 'https://lhci.cscms.me',
    },
  },
};
