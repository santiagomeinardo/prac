var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var nunjucks = require('nunjucks');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

nunjucks.configure('views', {
    express: app,
    autoescape: true
});
app.set('view engine', 'njk');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


/*
connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})
*/




app.post('/calculate', (req, res) => {
    const mysql = require('mysql2')
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'aeryus',
      password: 'root',
      database: 'prac'
    })

    connection.connect()

  let class1 = req.body.class1;

  class1 = class1.toUpperCase();

  const a = [];
  const b = [];

  let string = class1.split(" ");
  console.log(string)

  for (var i = 0; i < string.length; i++) {
      if(string[i].charAt(0) == "A") {
        a.push(string[i].replace("A",""));
      }

     if(string[i].charAt(0) == "B") {
        b.push(string[i].replace("B",""));
      }
  }

   var whereSqlA = "";
   for (var i = 0; i < a.length; i++) {
        whereSqlA += a[i].toString()
        if( i != a.length -1) {
            whereSqlA += ",";
        }
   }

   var whereSqlB = "";
   for (var i = 0; i < b.length; i++) {
        whereSqlB += b[i].toString()
        if( i != b.length -1) {
            whereSqlB += ",";
        }
   }


   var class1Sql = "SELECT COUNT(*) as count FROM class1 WHERE (";


   if(whereSqlA != "") {
        class1Sql += "a1 in ("+whereSqlA+") or a2 in ("+whereSqlA+")"
   }

      if(whereSqlB != "") {
        if(whereSqlA != "") {
            class1Sql+= " or "
        }
        class1Sql += "b1 in ("+whereSqlB+") or b2 in ("+whereSqlB+")"
   }

   class1Sql += ")";




   sql = `SELECT 
  (
    ((
    `+class1Sql+`) * 100) /
    (SELECT COUNT(*) FROM class1)  ) as prac`;

    connection.query(sql, (err, rows, fields) => {
      if (err) throw err

      res.send(rows[0].prac);
    })


   


    connection.end()
  //res.sendStatus(200).send(1)
})


 
app.post('/calculate2', (req, res) => {
    const mysql = require('mysql2')
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'aeryus',
      password: 'root',
      database: 'prac'
    })

    connection.connect()

  let class1 = req.body.class1;

  class1 = class1.toUpperCase();

  const a = [];
  const b = [];

  let string = class1.split(" ");
  console.log(string)

  for (var i = 0; i < string.length; i++) {
      if(string[i].charAt(1) == "R") {
        a.push(string[i].replace("DR",""));
      }

     if(string[i].charAt(1) == "Q") {
        b.push(string[i].replace("DQ",""));
      }
  }

   var whereSqlA = "";
   for (var i = 0; i < a.length; i++) {
        whereSqlA += a[i].toString()
        if( i != a.length -1) {
            whereSqlA += ",";
        }
   }

   var whereSqlB = "";
   for (var i = 0; i < b.length; i++) {
        whereSqlB += b[i].toString()
        if( i != b.length -1) {
            whereSqlB += ",";
        }
   }


   var class1Sql = "SELECT COUNT(*) as count FROM class2 WHERE (";


   if(whereSqlA != "") {
        class1Sql += "dr1 in ("+whereSqlA+") or dr2 in ("+whereSqlA+")"
   }

      if(whereSqlB != "") {
        if(whereSqlA != "") {
            class1Sql+= " or "
        }
        class1Sql += "dq1 in ("+whereSqlB+") or dq2 in ("+whereSqlB+")"
   }

   class1Sql += ")";




   sql = `SELECT 
  (
    ((
    `+class1Sql+`) * 100) /
    (SELECT COUNT(*) FROM class1)  ) as prac`;

    connection.query(sql, (err, rows, fields) => {
      if (err) throw err

      res.send(rows[0].prac);
    })


   


    connection.end()
  //res.sendStatus(200).send(1)
})

module.exports = app;
