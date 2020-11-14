const pool = require('../database/db');

exports.Register = async (req, res, next) => {
  const data = req.body;
  //waiting for approved user
  // const userId = '71ac8b74-11e5-465c-ae9e-41b56edbbe00';

  //already be instrcutor
  // const userId = '3c93e461-7eab-45fb-b8ce-587b47286f8c';

  //not register
  const userId = 'c3289d0e-7fbc-4880-b15f-e679f667680f';

  //check whether this user already reguster
  const userRows = await pool.query(
    'SELECT userId from instructor where userid = $1',
    [userId]
  );
  if (userRows.rowCount > 0) {
    res.status(200).json({ success: false, err: 'This user already register' });
    return;
  }

  await pool.query('INSERT INTO instructor(userid,biography) VALUES ($1,$2)', [
    userId,
    data.bio,
  ]);
  const result = await pool.query(
    'SELECT instructorid FROM instructor WHERE userid = $1 ',
    [userId]
  );
  const id = result.rows[0].instructorid;
  await pool.query(
    'INSERT INTO instructor_degree(instructorid,degree_name,evidence) VALUES ($1,$2,$3)',
    [id, data.degree, 'a']
  );
  // await pool.query('INSERT INTO instructor_expert(instructorid,expertnumber,subjectname,evidence) VALUES ($1,$2,$3)'
  // , [scope_identity(),'1',data.expert,'a']
  // )
  res.status(200).json({ success: true, data: data });
};

exports.GetProfile = async (req, res, next) => {
  //waiting fir approved user
  // const userId = '08e9d239-b3f2-4db8-b29a-da99a314df92';

  //already be instrcutor
  // const userId = '3c93e461-7eab-45fb-b8ce-587b47286f8c';

  //not register
  const userId = 'c3289d0e-7fbc-4880-b15f-e679f667680f';
  const result = await pool.query(
    'SELECT isverified from instructor where userid = $1',
    [userId]
  );
  if (result.rowCount == 0) {
    res.status(200).json({ name: 'Boyplus', role: 'student' });
  } else {
    const isverified = result.rows[0].isverified;
    res.status(200).json({ name: 'Boyplus', role: 'instructor', isverified });
  }
};

exports.GetCourses = async (req, res, next) => {
  return;
}
