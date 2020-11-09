const pool = require('../database/db')

exports.RegisInstructor = async (req, res, next)=>{
    const data=req.body;
    await pool.query('INSERT INTO instructor(userid,biography) VALUES ($1,$2)'
    , ["08e9d239-b3f2-4db8-b29a-da99a314df92",data.bio])
    const result = await pool.query('SELECT instructorid FROM instructor WHERE userid = $1 ', ["08e9d239-b3f2-4db8-b29a-da99a314df92"])
    const id = result.rows[0].instructorid;
    await pool.query('INSERT INTO instructor_degree(instructorid,degree_name,evidence) VALUES ($1,$2,$3)'
    , [id,data.degree,'a'],
    )
    // await pool.query('INSERT INTO instructor_expert(instructorid,expertnumber,subjectname,evidence) VALUES ($1,$2,$3)'
    // , [scope_identity(),'1',data.expert,'a']
    // )
    res.status(200).json({success:true,data:data})
}
