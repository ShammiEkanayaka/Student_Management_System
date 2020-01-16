var { createPool } = require("mysql");
var pool  = createPool({
    port:process.env.DB_PORT,  
    host:process.env.DB_HOST,  
    user:process.env.DB_USER, 
    password:process.env.DB_PASS,
    database:process.env.MYSQL_DB,
    connectionLimit:10
    });  

    module.exports = pool;

/* without using .env file
var pool  = createPool({
    port:3306,  
    host:"localhost",  
    user:"root", 
    password:'',
    database:"studentms",
    connectionLimit:10
    });  

    module.exports = pool;
    */







    /* FROM
    const { createPool } = require("mysql");
const pool = createPool({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  connectionLimit: 10
});

module.exports = pool;
*/
