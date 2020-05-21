const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const router = express.Router();

const port = 3000;

app.use(express.static(path.join(__dirname + '/public/')));

app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
