const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');
const morgan = require('morgan')


const app = express();
app.use(morgan('dev'))


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));


app.listen(3000, () => {
    console.log('listening on port 3000');
  });