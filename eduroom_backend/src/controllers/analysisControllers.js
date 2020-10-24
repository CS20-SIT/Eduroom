const pool = require('../database/db')


//Course Method

//GET Method
const getAmountOfCourse = async (req, res) => {

}

const getAmountOfSpecificCourse = async (req, res) => {
    try {
        const amountOfSpecificCourse = await pool.query('SELECT COUNT(*) as "Amount Of Course", Categories.cata_name ' +
                                                        'FROM Course_categories, Categories ' +
                                                        'GROUP BY Categories.cata_id')

        if(!amountOfSpecificCourse) 
            res.status(404).send({msg: 'Not Found'})

        res.status(200).send(amountOfSpecificCourse)
    } catch(err) {
        res.status(500).send(err.message)
    }
}

//POST Method

module.exports = {
    getAmountOfCourse,
    getAmountOfSpecificCourse
}