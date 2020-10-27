const pool = require('../database/db');
const createUUIDExtensionQuery = `
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
`;

const createUUIDExtension = async (req, res, next) => {
    try {
      const job = await pool.query(createUUIDExtensionQuery);
      console.log('Create UUID Extension Successfully');
    } catch (err) {
      console.error(err.stack.red);
    }
};
if (process.argv[2] === '-i') {
    (async () => {
        createUUIDExtension(); 
        process.exit();
    })();
} 