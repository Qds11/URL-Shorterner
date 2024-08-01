import mysql from "mysql2";

const { DB_HOST, DB_USER, DB_NAME, PASSWORD } = process.env;

export const pool = mysql
  .createPool({
    host: DB_HOST,
    user: DB_USER,
    password: PASSWORD,
    database: DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  })
  .promise();
