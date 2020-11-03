const pool = require('../database/db')

const { applyPatchV1 } = require('./patchV1')
const { applyPatchV2 } = require('./patchV2')


if (process.argv[2] === '-i') {
    ;(async () => {
        await applyPatchV1()
        await applyPatchV2()
      process.exit()
    })()
  }
  