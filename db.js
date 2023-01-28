import mysql from 'mysql';

export const db= mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:"Abu@1706",
    database:"manage",
    timezone: 'utc'
   
})