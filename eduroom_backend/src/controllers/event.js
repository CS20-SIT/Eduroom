const pool = require('../database/db')
exports.getEvent = async (req, res, next) => {

    const data = await pool.query('select * from global_event')
 
    res.status(200).json({ GorgunGetSuccess: true })
    return
}

exports.createEvent = async (req, res, next) => {
    const data = req.body;
    console.log(data);
    // await pool.query('INSERT INTO global_event(title,startdate,enddate,starttime,endtime,detail,place) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING * ',
    //     [data.title, data.startdate, data.enddate, data.starttime, data.endtime, data.detail, data.place])

    res.status(200).json({ GorgunCreateSuccess: true, data: data })
    return

}