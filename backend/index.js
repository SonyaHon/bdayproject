const express = require('express');
const path = require('path');
const config = require('./config.json');
const fs = require('fs');
const moment = require('moment');


if(!fs.existsSync(__dirname + '/data')) {
    fs.writeFileSync(__dirname + '/data', moment().toISOString());
}


const app = express();
app.use(express.static(path.join(__dirname, '../dist/')));
app.get('/get-last-date', async (req, res) => {
    res.send(fs.readFileSync(__dirname + '/data'));
});

app.listen(config.port);
