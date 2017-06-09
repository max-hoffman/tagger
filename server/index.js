const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const models = require('./models/');

// this will force the db/index.js module to run, establishing a database connection.
// you may or may not need to use the database connection in this index.js file.
// if you need to use it, assign the return value of require('./db') to a variable.
// require('./db');
models.sequelize
.authenticate()
.then(function () {
  console.log('Connection successful');
})
.catch(function(error) {
  console.log("Error creating connection:", error);
});

// create an express instance 
const app = express();

// hook any middleware you need to into the express instance, including your route handlers
// hint: use the bodyParser middleware to parse the request body for POST & PUT requests.
app.use(bodyParser.json());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

// serve the `../public/` folder using the express.static() middleware function
// (you will want to use the path library to correctly resolve the path to ../public.)
app.use(express.static(path.join(__dirname, '../public')));
app.use('/', require('./routes'));

// listen on this port:
const port = 5050;
app.listen(port, function() {
  console.log('listening at http://localhost:' + port);
});