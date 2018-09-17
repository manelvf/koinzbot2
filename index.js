(function() {

const express = require('express');

const queryCryptowatApi = require('./queryCryptowatApi');
const coinValuesStorage = require('./coinValuesStorage');

const app = express();

let chat_id = 0;
let telegram;

let api = new queryCryptowatApi(process.env.BASE_URI);
let cvs = new coinValuesStorage(process.env.DB_FILE);


app.get('/', (req, res) => res.send('Hello World!'));

app.get('/getCoinValues', (req, res) => {
  api.getCoinValues((results) => {
    cvs.storeCoinValues(results.result);
    res.send(results);
  });
});

app.get('/getStoredCoinValues', (req, res) => {
  cvs.getCoinValues((values) => {
    res.send(values);
  });
});

app.get('/getCoinAlerts', (req, res) => {
  res.send('Hello World!');
});


app.listen(3000, () => console.log('Example app listening on port 3000!'))


module.exports = app;
  
})();