const pool = require('../database/db')

const { applyPatchV1 } = require('./patchV1')

if (process.argv[2] === '-i') {
    ;(async () => {
        await applyPatchV1()
      process.exit()
    })()
  }
  