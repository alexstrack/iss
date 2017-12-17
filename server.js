const express = require('express');
const request = require('request');
const bodyparser = require('body-parser');
const app = express();


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.get('/',function(req, res){
    var url='http://api.open-notify.org/iss-now.json';
    request(url, function(err, resp, body){
        if (err) {
            return console.log(err);
        }
        res.send(JSON.parse(body).iss_position);
    });
});

app.listen(3000, function(err){
    if (err) {
        return console.log(err);
    }
    console.log('Server running on port 3000');
    
});
