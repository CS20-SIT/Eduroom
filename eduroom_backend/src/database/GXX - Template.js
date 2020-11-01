const pool = require('../database/db');

const table = `



`;

exports.createGXXTable = async () => {
  try{
    await createTable_XX();
    console.log('Create GXX Table Successfully');
  } catch (err) {
    console.error(err);
  }

}

const createTable_XX = async () => {
    try {
      const job = await pool.query(table);
      console.log('Create XX Successfully');
    } catch (err) {
      console.error(err);
    }
};