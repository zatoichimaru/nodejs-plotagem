const express = require('express');
const bodyParser = require('body-parser');
const dotEnv = require('dotenv');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use(express.static(path.join(__dirname, '/../public')));

app.get('/', function (req, res) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'accept,X-Requested-With,content-type');
    res.header('Access-Control-Allow-Credentials', true);
    res.header("Cache-Control", "no-cache");
    res.header("Access-Control-Max-Age", "1728000");
    res.sendFile(path.join(__dirname + '/../public/index.html'));
});

require('./routers/mapsApi')(app);


app.listen(3000);