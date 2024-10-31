const database = require('../database/queries.js')

const searchControllerFunction = async (req, res) => {
    
    const queryResults = []
    const queryData = Object.entries(req)
    for (const entry of queryData)
    {        
        if (entry[1] != false)
        {
            // console.log(entry[1], entry[0])
            const result = await database.searchQuery(entry[1], entry[0])
            queryResults.push(result)
        }   
    }
    return queryResults[0]
    // console.log(await database.searchQuery('12/19', 'expiration_date'))
}

// product_name | product_type | quantity | expiration_date | last_ordered

module.exports = {searchControllerFunction}