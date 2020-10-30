module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
      headful: false,
      settings: {
        emulatedFormFactor: 'desktop'
      },
      url: [
        'https://eduroom.cscms.me', 
        'https://eduroom.cscms.me/login', 
        'https://eduroom.cscms.me/register'
      ]
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};