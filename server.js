const express = require('express');
const request = require('request');
const bodyparser = require('body-parser');
const path = require('path');
const app = express();


app.set('views', path.resolve(__dirname,'views'));
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.get ('/login', function (req, res){
    res.render('index', {message: "Funciona!"});
});

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
