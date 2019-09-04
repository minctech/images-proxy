const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');
const morgan = require('morgan')

const proxy = require('http-proxy-middleware');

const app = express();
app.use(morgan('dev'))




app.use('/api', proxy({
    target: 'http://localhost:3777'
}));

// app.use('/', proxy({
//     target: 'http://localhost:3210'
// }));

// app.use('/', proxy({
//     target: 'http://localhost:3001'
// }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));


app.listen(3000, () => {
    console.log('listening on port 3000');
  });