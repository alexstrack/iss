"use strict";

const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const iss_api = require('./routes/iss-api.js');
const app = express();


app.set('views', path.resolve(__dirname,'views'));
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.use('/',iss_api);

app.listen(3000, function(err){
    if (err) {
        return console.log(err);
    }
    console.log('Server running on port 3000');
    
});
