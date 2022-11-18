const express = require('express');
const app = express();
const port = 3000;

var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mydb',
});

app.get('/', (req, res) => {
  pool.query(
    `INSERT INTO employees (PersonID, LastName, FirstName) 
    VALUES (1, 'Rodriguez', 'Eros')`, (err, result) => {
    if (err) throw err;
    console.log(result);
  }
  );
  res.send('hello world');
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

