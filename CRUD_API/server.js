const express = require("express");
const bodyParser = require("body-parser");
var mysql = require('mysql');
const CONFIG = require('./app/config/db.config');
const app = express();

var connection = mysql.createConnection(CONFIG);

connection.connect();

var QUERY = 'SHOW TABLES';

connection.query(QUERY, function (error, results, fields) {
    if (error) throw error;
    for (let index = 0; index < results.length; index++) {
        const element = results[index];
        console.log(element.Tables_in_employees)
    }
});

//делаем наш парсинг в формате json
app.use(bodyParser.json());

// парсит запросы по типу: application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({ extended: true }));

//  простой response - request
app.get("/", (req, res) => {
    res.json({ message: "Это стартовая страница нашего приложения" });
});

// установить порт, и слушать запросы 
app.listen(3001, () => {
    console.log("Сервер запущен на 3001 порту");
});


