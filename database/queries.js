const pool = require('./pool')

getAllItems = async () => {
    const {rows} = await pool.query('select * from food;')
    return rows
}

searchQuery = async (searchTerm, column) => {
    let searchResult
    if (column == 'id')
    {searchResult  = await pool.query("select * from food where id = ($1);"
    ,[searchTerm])}
    else if (column == 'productName')
    {searchResult  = await pool.query("select * from food where product_name ilike ($1);"
    ,[`%${searchTerm}%`])}
    else if (column == 'productType')
    {searchResult = await pool.query("select * from food where product_type ilike ($1);"
    ,[`%${searchTerm}%`])}
    else if (column === 'quantity')
    {searchResult = await pool.query("select * from food where quantity = ($1);"
    ,[searchTerm])}
    else if (column === 'expirationDate')
    {searchResult = await pool.query("select * from food where expiration_date ilike ($1);"
    ,[`%${searchTerm}%`])}
    else if (column === 'lastOrdered')
    {searchResult = await pool.query("select * from food where last_ordered ilike ($1);"
    ,[`%${searchTerm}%`])}
    else {return console.log('invalid search')}

    
    // console.log(column)
    
    

    return searchResult.rows
}

// select * from food where product_name = 'soup';

addItem = async (itemName, itemType, quantity, expirationDate, lastOrdered) => {
    const newItem = await pool.query(
        'insert into food (product_name, product_type, quantity, expiration_date, last_ordered) values (($1), ($2), ($3), ($4), ($5));'
        ,[itemName, itemType, quantity, expirationDate, lastOrdered])
        return newItem
}

updateItem = async(itemId, itemName, itemType, quantity, expirationDate, lastOrdered) => {
    return await pool.query(
    'update food set product_name = ($2), product_type = ($3), quantity = ($4), expiration_date = ($5), last_ordered = ($6) where id = ($1);'
    ,[itemId, itemName, itemType, quantity, expirationDate, lastOrdered]
    )
}

deleteItem = async(itemId) => {
    return await pool.query(
        'delete  from food where id = ($1);'
        ,[itemId]
    )
}

module.exports = {
    getAllItems,
    addItem,
    updateItem,
    deleteItem,
    searchQuery
}