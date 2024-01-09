import mysql from "mysql"

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Sb$pd&25",
  database: "blog_app",
})