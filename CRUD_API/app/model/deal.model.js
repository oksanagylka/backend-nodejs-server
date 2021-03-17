const mysql = require("mysql");

  const dbConfig = require("../config/db.config.js");
  // создаем соединение с нашей базой данных

  const connection = mysql.createConnection({

    host: dbConfig.HOST,

    user: dbConfig.USER,

    password: dbConfig.PASSWORD,

    database: dbConfig.DB

  });
  // открываем наше соединение с базой данных

  connection.connect(err => {

    if (err) throw error;

    console.log("успешно соединено с базой данных");

  });
  module.exports = connection;

   //экспортируем наше соединение
// конструктор нашего дела

  const Deal = function(deal) {

    this.text = deal.text;
    this.inner_key = deal.inner_key;


  };

  //у нашей модели будут функции, с помощью которых можно осуществлять все операции CRUD, которые были озвучены в начале статьи:

  Deal.create = (newDeal, result) => {

    sql.query("INSERT INTO TODO SET ?", newDeal, (err, res) => {

      //операция вставки из SQL

      if (err) {

        console.log("error: ", err);

        result(err, null);

        //немного бедная обработка ошибок, но на первое время 
хватит

        return;

      }

      console.log("Дело сделано", { id: res.insertId, ...newDeal
});

      result(null, { id: res.insertId, ...newDeal });

    });

  };
Deal.findById = (dealId, result) => {

sql.query(`SELECT * FROM TODO WHERE id = ${dealId}`, (err, res) => {

if (err) {

console.log("error: ", err);

result(err, null);

return;

}


if (res.length) {

console.log("найдено дело: ", res[0]);

result(null, res[0]);

return;

}


// когда ничего не удалось найти

result({ kind: "not_found" }, null);

});

};


Deal.getAll = result => {

sql.query("SELECT * FROM TODO", (err, res) => {

if (err) {

console.log("error: ", err);

result(null, err);

return;

}


console.log("deals: ", res);

result(null, res);

});

};


Deal.updateById = (id, deal, result) => {

sql.query(

"UPDATE TODO SET text =? WHERE id = ?",

[deal.text, id],

(err, res) => {

if (err) {

console.log("error: ", err);

result(null, err);

return;

}


if (res.affectedRows == 0) {

result({ kind: "not_found" }, null);

return;

}


console.log("Обновлено дело ", { id: id, ...deal });

result(null, { id: id, ...deal });

}

);

};


Deal.remove = (id, result) => {

sql.query("DELETE FROM TODO WHERE id = ?", id, (err, res) => {

if (err) {

console.log("error: ", err);

result(null, err);

return;

}


if (res.affectedRows == 0) {

// если дело не удалось получить по id

result({ kind: "not_found" }, null);

return;

}

console.log("Удален пользователь с ", id);

result(null, res);

});

};


Deal.removeAll = result => {

sql.query("DELETE FROM TODO", (err, res) => {

if (err) {

console.log("error: ", err);

result(null, err);

return;

}


console.log(`deleted ${res.affectedRows} deals`);

result(null, res);

});

};
Deal.findById = (dealId, result) => {

  sql.query(`SELECT * FROM TODO WHERE inner_key = '${dealId}'`, 
(err, res) => {


 // здесь обработка ошибок, не вижу смысла ее дублировать


    if (res.length) {

      console.log("найдено дело: ", res[0]);

      result(null, res[0]);

      return;

    }

    // если вдруг не удалось найти

    result({ kind: "not_found" }, null);

  });

};
