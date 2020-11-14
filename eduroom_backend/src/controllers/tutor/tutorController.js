const pool = require('../../database/db') 

// GET
const getAvailableInstructor = async (req, res) => {
    try {
        /*
         {
            "availabilities": [[int],[int],[int],[int],[int]],
            "price": int
         }
         */
        const instructor = await pool.query("SELECT * from instructor_availaibilities")
        res.status(200).send({instructor})
    } catch (e) {
        res.status(404).send(e)
    }
}


module.exports = {getAvailableInstructor}


 