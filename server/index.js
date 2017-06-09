const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const models = require('./models/');

// establish sqlite connection
models.sequelize
.authenticate()
.then(() => {
  console.log('Connection successful');
})
.catch(error => {
  console.log("Error creating connection:", error);
});

// create an express instance 
const app = express();

// middleware
app.use(bodyParser.json());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(express.static(path.join(__dirname, '../public')));
app.use('/', require('./routes'));

// listen on this port:
const port = 5050;
app.listen(port, function() {
  console.log('listening at http://localhost:' + port);
});