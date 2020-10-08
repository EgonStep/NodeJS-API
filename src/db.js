// import
const mysql = require('mysql');

// set connection
const conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

conn.connect((error) => {
    if (error) {
        throw error;
    }

    console.log(`Connected to DB: ${process.env.DB_NAME}`);
});

// export
module.exports = conn;