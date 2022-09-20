const Pool = require('pg').Pool;

const pool = new Pool({
    user:'postgres',
    password:'Raisul999',
    database:'teebay',
    host:'localhost',
    port:'5432'

})

module.exports = pool;