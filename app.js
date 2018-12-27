const express = require('express');
const cors = require('cors');

const app = express();

//CORS
app.use(cors());

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use('/', (req, res) => {
  res.render('index');
});

module.exports = app;