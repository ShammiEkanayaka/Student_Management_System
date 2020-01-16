const { createPool } = require("mysql");



const pool  = createPool({
    port:process.env.DB_PORT,  
    host:process.env.DB_HOST,  
    user:process.env.DB_USER, 
    password:process.env.DB_PASS,
    database:process.env.MYSQL_DB,
    connectionLimit:10
    });  

    module.exports = pool;
    
/*

const pool  = createPool({
    port:3306,  
    host:"localhost",  
    user:"root", 
    password:'',
    database:"studentms",
    connectionLimit:10
    });  

    module.exports = pool;
    */