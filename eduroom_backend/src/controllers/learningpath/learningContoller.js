const ErrorResponse = require('../../utils/errorResponse')
const pool = require('../../database/db')

exports.getPathList = async (req,res,next) => {
    const pathList = await pool.query("SELECT * FROM path");
    res.status(200).json({success:true,data:pathList.rows})
}

exports.getNodeByPath = async (req,res,next) => {
    const pathid = req.query.pathid
    const nodeList = await pool.query("SELECT * FROM path_node WHERE pathid = $1",[pathid])
    res.status(200).json({success:true,data:nodeList.rows})
}