
const ErrorResponse = require("../../utils/errorResponse");
const pool = require("../../database/db");

const getAllAds = async (req, res, next) => {
    const data = await pool.query("select * from ad");
    const adList = data.rows;
    res.send(adList);
};

const getMyAds = async (req, res, next) => {
    const userid = req.body.userid;
    const data = await pool.query("select * from ad where ownerid = $1", [userid]);
    const adList = data.rows;
    res.send(adList);
};
const deleteAds= async (req, res, next) => {
    const adid = req.body.adid;
    await pool.query("delete from ad_tag where adid = $1", [adid]);
    await pool.query("delete from ad where adid = $1", [adid]);
    res.send({ success: true })
};
const getAdsType = async (req, res, next) => {
    const data = await pool.query("select case when typename='vertipic' then 'Vertical Image'" +
        "when typename='horipic' then 'Horizontal Image'" +
        "when typename='video' then 'Video' end typename from ad_type ");
    const typeList = data.rows;
    res.send(typeList);
};

const getAdsTags = async (req, res, next) => {
    const data = await pool.query("select tagname from ad_all_tag");
    const tagList = data.rows;
    res.send(tagList);
};

const getAdstoPay = async (req, res, next) => {
    const ownerid = req.user.id;
    const data = await pool.query("select firstname,lastname,adid,type,adstarttime,adexpiretime," +
        "case when extract(day from adexpiretime - adstarttime) > 0 and extract(day from adexpiretime - adstarttime)  <= 20 then extract(day from adexpiretime - adstarttime)  * 50" +
        "when extract(day from adexpiretime - adstarttime) > 20 and extract(day from adexpiretime - adstarttime)  <= 60 then extract(day from adexpiretime - adstarttime)  * 45" +
        "when extract(day from adexpiretime - adstarttime) > 60 and extract(day from adexpiretime - adstarttime)  <= 120 then extract(day from adexpiretime - adstarttime)  * 40" +
        "when extract(day from adexpiretime - adstarttime) > 120 and extract(day from adexpiretime - adstarttime)  <= 365 then extract(day from adexpiretime - adstarttime)  * 30 end price" +
        ",contactemail,filelocation from ad,user_profile where ownerid = $1 and adid NOT IN (select adid from ad_payment) and ad.ownerid=user_profile.userid ",
        [ownerid])
    const lastestAds = data.rows;
    res.send(lastestAds);
};

const getTotalAdsPrice = async (req, res, next) => {
    const ownerid = req.user.id;
    const data = await pool.query("select sum(price) as totalprice , count(*) from (select case when extract(day from adexpiretime - adstarttime) > 0 and extract(day from adexpiretime - adstarttime)  <= 20 then extract(day from adexpiretime - adstarttime)  * 50"+
    "when extract(day from adexpiretime - adstarttime) > 20 and extract(day from adexpiretime - adstarttime)  <= 60 then extract(day from adexpiretime - adstarttime)  * 45"+
    "when extract(day from adexpiretime - adstarttime) > 60 and extract(day from adexpiretime - adstarttime)  <= 120 then extract(day from adexpiretime - adstarttime)  * 40"+
    "when extract(day from adexpiretime - adstarttime) > 120 and extract(day from adexpiretime - adstarttime)  <= 365 then extract(day from adexpiretime - adstarttime)  * 30 end price from ad where ownerid = $1 and  adid NOT IN (select adid from ad_payment) ) as price",
        [ownerid])
    const lastestAds = data.rows;
    res.send(lastestAds);
};
const addAds = async (req, res, next) => {


    let type = req.body.adtype;
    if (type == 'Vertical Image') { type = 2; }
    else if (type == 'Horizontal Image') { type = 3; }
    else {
        type = 1;
    }
    const adtag = req.body.adtag;
    let adstarttime = req.body.adstartdate;
    let adexpiretime = req.body.adexpiredate;
    const contactemail = req.body.contactemail;
    const imglocation = req.body.adimg;
    const status = "Waiting";
    const ownerid = req.user.id;


    await pool.query(
        "insert into ad(adid, type, adstarttime, adexpiretime, contactemail, filelocation, status, ownerid) values ((select max(adid)+1 from ad)+1,$1,$2,$3,$4,$5,$6,$7)",
        [type, adstarttime, adexpiretime, contactemail, imglocation, status, ownerid]
    )
    await pool.query(
        "insert into ad_tag(adid, tagid) VALUES ((select max(adid) from ad),(select tagid from ad_all_tag where tagname = $1))", [adtag]
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

const AddNewAdsBills = async (req, res, next) => {
    const adlist = req.body.adlist;
    for(i = 0 ; i<adlist.length;i++){
        await pool.query(
            "insert into ad_payment(adid, receipt, datetime, amount, paymentstatus) values ($1,'',CURRENT_TIMESTAMP,$2,false);",
            [adlist[i].adid,adlist[i].price]
        )
    }
    
    res.send({ success: true })
}
const AddAdsTransaction = async (req, res, next) => {
    const adlist = req.body.adlist;
    
    for(i = 0 ; i<adlist.length;i++){
        let description = 'Ads payment of ad id#'+adlist.rows[i].adid;
        let transactionid = await pool.query("select uuid_generate_v4()");
        await pool.query(
            "insert into financial_transaction(transactionid, amount, description) values ($1,800,'Ads of userid : test')",
            [transactionid,adlist[i].price,description ]
        )
        await pool.query(
            "insert into transaction_ad(transactionid, adid) values ($1,$2)",
            [transactionid,adlist[i].adid ]
        )
        await pool.query(
            "update ad_payment set receipt = '/receiptimgpath' , datetime=CURRENT_TIMESTAMP , paymentstatus = true where adid = $1",
            [adlist[i].adid]
        )
    }
    
    res.send({ success: true })
}
module.exports = { AddNewAdsBills,AddAdsTransaction,getAdsTags, getAllAds, addAds, getMyAds, getAdsType, getAdstoPay, Upload, getTotalAdsPrice,deleteAds } 