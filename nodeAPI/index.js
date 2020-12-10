const express = require('express'),
  app = express(),
  mysql = require('mysql'), // import mysql module
  cors = require('cors'),
  bodyParser = require('body-parser');

// setup database

db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'khadamatWeb'
})

  // for live
/*  db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Admin@321',
  database: 'khadamatweb'
})
  */
// make server object that contain port property and the value for our server.
var server = {
  port: 4040
};
// routers
const usersRouter = require('./routes/allServices');
// const subCategory = require('./routes/subCategory');
// use the modules
app.use(cors())
app.use(bodyParser.json());
// use router
app.use('/allServices', usersRouter);
//app.use('/allServices', subCategory);
// starting the server
app.listen( server.port , () => console.log(`Server started, listening port: ${server.port}`));