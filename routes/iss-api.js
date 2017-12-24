"use strict"

const express = require ('express');
const request = require('request');
const iss = express.Router();

iss.get ('/', function (req, res){
    res.render('index', {latitude: "undefined", longitude: "undefined"});
});

iss.get('/location',function(req, res){
    var url='http://api.open-notify.org/iss-now.json';
    request(url, function(err, resp, body){
        if (err) {
            return console.log(err);
        }
        res.render('index', {latitude: JSON.parse(body).iss_position.latitude,
                             longitude: JSON.parse(body).iss_position.longitude});
    });
});

module.exports = iss;