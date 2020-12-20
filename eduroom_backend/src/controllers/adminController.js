const ErrorResponse = require('../utils/errorResponse')
const pool = require('../database/db')

exports.editProfile = async (req,res,next) => {
    const user = req.user;
    const data = req.body;
    if(user){
        console.log(user.role)
        await pool.query("UPDATE admin_login SET firstname =$1, lastname =$2,displayname =$3,avatart=$4",[
            data.firstname,data.lastname,data.displayname, data.avatar
        ])
    } else {
        return next(new ErrorResponse("Unauthorize",401))
    }
}
