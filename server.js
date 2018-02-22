var express = require('express');
var path = require('path');
var fs = require('fs');
//var https = require('https');
var http = require('http');
var session = require('express-session');
var bodyParser = require("body-parser");

var secrets = require('./config/secrets');
var homeController = require('./controllers/home');
var authController = require('./controllers/auth');


//var PORT = process.env.PORT || 1443;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
var PORT = process.env.PORT || 9088;
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

var router = express.Router();

router.get('/', homeController.index);
router.get('/welcome', homeController.welcome);
router.get('/apptoken', authController.apptoken);
router.post('/signin', function (req, res) {
  res.redirect('/#!/signin');
});
 

app.use('/api', router);


var server = http.createServer(app).listen(PORT, function () {
    server.address().address, server.address().port
});
