
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

const getAdsType = async (req, res, next) => {
    const data = await pool.query("select case when typename='vertipic' then 'Vertical Image'"+
    "when typename='horipic' then 'Horizontal Image'"+
    "when typename='video' then 'Video' end typename from ad_type ");
    const typeList = data.rows;
    res.send(typeList);
};

const getAdsTags = async (req, res, next) => {
    const data = await pool.query("select tagname from ad_all_tag");
    const tagList = data.rows;
    res.send(tagList);
};

const getAdstoPay = async(req, res, next) => {
    const ownerid = req.user.id;
    const data = await pool.query("select * from ad where ownerid = $1 and adid = (select max(adid) from ad where ownerid = $1) and adid NOT IN (select adid from ad_payment) ",
    [ownerid])
    const lastedAds = data.rows;
    res.send(lastedAds);
};
const addAds = async (req, res, next) => {

    
    let type = req.body.adtype;
    if(type == 'Vertical Image'){ type = 2;}
    else if(type == 'Horizontal Image'){ type = 3;}
    else{
        type = 1;
    }
    const adtag = req.body.adtag;
    let adstarttime = req.body.adstartdate ;
    let adexpiretime = req.body.adexpiredate;
    const contactemail = req.body.contactemail;
    const imglocation = req.body.adimg;
    const status = "Waiting";
    const ownerid = req.user.id;


    await pool.query(
        "insert into ad(adid, type, adstarttime, adexpiretime, contactemail, filelocation, status, ownerid) values ((select count(*) from ad)+1,$1,$2,$3,$4,$5,$6,$7)",
        [type,adstarttime,adexpiretime,contactemail,imglocation,status,ownerid]
    )
    await pool.query(
        "insert into ad_tag(adid, tagid) VALUES ((select count(*) from ad),(select tagid from ad_all_tag where tagname = $1))",[adtag]
    )

    res.send({ success: true })
}

const Upload = async (req, res, next) => {
	const files = req.files
	const results = files.map((file) => {
		return { linkUrl: file.linkUrl, fieldname: file.fieldname }
	})
	res.send(results)
}
module.exports = { getAdsTags ,getAllAds, addAds, getMyAds,getAdsType,getAdstoPay,Upload} 