
const ErrorResponse = require("../../utils/errorResponse");
const pool = require("../../database/db");

const getAllAds = async (req, res, next) => {
    const data = await pool.query("select * from ad");
    const adList = data.rows;
    res.send(adList);
};

const getMyAds = async (req, res, next) => {
    const userid = req.body.userid;
    const data = await pool.query("select * from ad where ownerid = $1",[userid]);
    const adList = data.rows;
    res.send(adList);
};



const addAds = async (req, res, next) => {

    
    // const type = 2;
    // const adstarttime = req.body.adstarttime ;
    // const adexpiretime = req.body.adexpiretime;
    // const contactemail = req.body.contactemail;
    // const filelocation = "/testFileLocation/";
    // const status = "Waiting";
    // const ownerid = req.user.id;

    const type = 2;
    const adstarttime =  '2020-12-06 00:00:00.000000' ;
    const adexpiretime = '2022-12-06 00:00:00.000000';
    const contactemail = 'Davika@gmail.com';
    const filelocation = '/testFileLocation/';
    const status = 'Waiting';
    const ownerid = '44f8e863-226c-4bed-9556-aa6e1600d3bc';
    
    await pool.query(
        "insert into ad(adid, type, adstarttime, adexpiretime, contactemail, filelocation, status, ownerid) values ((select count(*) from ad)+1,$1,$2,$3,$4,$5,$6,$7)",
        [type,adstarttime,adexpiretime,contactemail,filelocation,status,ownerid]
    )

    res.send({ success: true })
}
module.exports = { getAllAds, addAds, getMyAds} 