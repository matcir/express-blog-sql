const mysql = require("mysql2");
const credentials = {
  host: "localhost",
  user: "root",
  password: "root",
  database: "blog_db",
};

const connection = mysql.createConnection(credentials);

connection.connect((err) => {
  if (err) {
    throw err;
  }
  console.info("connection successfull");
});

module.exports = connection;
