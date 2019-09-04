const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');
const morgan = require('morgan')
var proxy = require('http-proxy-middleware');


const app = express();
app.use(morgan('dev'))

// app.use(
//   'api/listings/1/',
//   proxy({ target: 'http://localhost:3001', changeOrigin: true })
// );

// app.use(
//   '/api/listings/1/',
//   proxy({ target: 'http://localhost:3777', changeOrigin: true })
// );

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/listings/:listing', express.static('./public'));
// app.use(express.static('public'));


app.listen(3000, () => {
    console.log('listening on port 3000');
  });