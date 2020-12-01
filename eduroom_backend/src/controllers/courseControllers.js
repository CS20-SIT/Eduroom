const pool = require('../database/db')

const getAllCourse = async (req, res) => {
    try {
        const { rows } = await pool.query(`select day,time from instructor_availabilities`)

        if(!rows)
            res.status(404).send({msg: 'Not Found'})

        res.status(200).send(rows)
    } catch(err) {
        res.status(400).send(err.message)
    }
}

module.exports = {
    getAllCourse
}