module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
      headful: false,
      settings: {
        emulatedFormFactor: 'desktop'
      },
      // staticDistDir: './eduroom_frontend',
      // startServerCommand: 'npm start',
      // startServerReadyPattern: 'started server on',
      // isSinglePageApplication: true,
      url: [
        'http://localhost:3000', 
        'http://localhost:3000/login', 
        'http://localhost:3000/register'
      ]
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
//Hello