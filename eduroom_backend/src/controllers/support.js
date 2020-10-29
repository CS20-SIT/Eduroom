const pool = require('../database/db')

exports.getSupportForm = async (req,res,next)=>{
    const supportFormQuery = await pool.query('select * FROM "supportForm"')
    res.status(200).json({success:true, count: supportFormQuery.rowCount})
}

exports.submitForm = async (req, res, next)=>{
    const data=req.body;
    await pool.query('INSERT INTO "supportForm"(name,username,email,title,content,priority,cat,"subCat") VALUES ($1,$2,$3,$4,$5,$6,$7,$8)'
    , [data.name,data.username,data.email,data.title,data.content,data.priority,data.cat,data.subCat])
    res.status(200).json({success:true,data:data})
}
