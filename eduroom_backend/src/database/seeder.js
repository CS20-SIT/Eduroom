const pool = require('../database/db')

const { createCoreTable} = require('./core')
const { createG01Table } = require('./G01')
const { createG02Table } = require('./G02')
const { createG03Table } = require('./G03')
const { createG04Table } = require('./G04')
const { createG05Table } = require('./G05')
const { createG06Table } = require('./G06')
const { createG08G10Table } = require('./G08_G10')
const { createG09Table } = require('./G09')
const { createG12Table } = require('./G12')
const { createG13Table } = require('./G13')
const { createG14Table } = require('./G14')

const createUUIDExtensionQuery = `
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
`
const createUUIDExtension = async () => {
  try {
    const extension = await pool.query(createUUIDExtensionQuery)
    console.log('Create UUID Extension Successfully')
  } catch (err) {
    console.error(err)
  }
}

if (process.argv[2] === '-i') {
  ;(async () => {
    await createUUIDExtension()
    await createCoreTable()
    await createG01Table()
    await createG02Table()
    await createG03Table()
    await createG04Table()
    await createG05Table()
    await createG08G10Table()
    await createG06Table()
    await createG09Table()
    await createG12Table()
    await createG13Table()
    await createG14Table()
    process.exit()
  })()
}
