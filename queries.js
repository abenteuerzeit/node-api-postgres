// Import environment variables
const dotenv = require('dotenv');
const { USER, HOST, DATABASE, PASSWORD, PORT } = dotenv.config().parsed;


const Pool = require('pg').Pool;
const pool = new Pool({
    user: USER,
    host: HOST,
    database: DATABASE,
    password: PASSWORD,
    port: PORT,
});

