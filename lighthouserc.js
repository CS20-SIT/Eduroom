module.exports = {
  ci: {
    collect: {
      numberOfRuns: 1,
      headful: false,
      settings: {
        emulatedFormFactor: 'desktop'
      },
      url: [
        'https://eduroom.cscms.me', 
        'https://eduroom.cscms.me/login', 
        'http://eduroom.cscms.me/register'
      ]
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};