const pool = require('../database/db');

const table = `



`;

exports.createG00Table = async (req, res) => {
  try{
    await XX;
    console.log('Create GXX Table Successfully');
  } catch (err) {
    console.error(err.stack.red);
  }

}

const createTable_XX = async (req, res, next) => {
    try {
      const job = await pool.query(table);
      console.log('Create XX Successfully');
    } catch (err) {
      console.error(err.stack.red);
    }
};