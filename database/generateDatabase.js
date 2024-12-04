const { Pool } = require('pg')
require('dotenv').config()


const schema = `
CREATE TABLE IF NOT EXISTS food_test (id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, product_name VARCHAR ( 255 ) );
ALTER TABLE food ADD COLUMN IF NOT EXISTS product_type varchar(255); 
ALTER TABLE food ADD COLUMN IF NOT EXISTS quantity varchar(255);
ALTER TABLE food ADD COLUMN IF NOT EXISTS expiration_date varchar(255);
ALTER TABLE food ADD COLUMN IF NOT EXISTS last_ordered varchar(255);`

const schemab = 'select * from food'

console.log(process.env.HOST)

const generateDatabase = async () => {
    console.log('generating database')
    const database = new Pool({
        connectionString: process.env.POSTGREURL,
    })
    // await database.connect()
     console.log( await database.query(schema))
    // await database.end()
    return console.log('done generating table')
}
generateDatabase()

module.exports = {
    generateDatabase
}

