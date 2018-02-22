var secrets = require('../config/secrets');

IDCSRestClient = require('node-rest-client').Client

exports.apptoken = function(req, res) {
    var options = secrets.idcsanon;
    var anonclient = new IDCSRestClient();
  
    var postData = "grant_type=" + options.grant_type + "&scope=" + options.scope;
    var base64Creds = "Basic " + new Buffer(options.clientID +":"+options.clientSecret).toString("base64");
    var args = {
	   headers: { 
                    "Authorization": base64Creds,
                    "Content-Type" : "application/x-www-form-urlencoded; charset=utf-8"
                },
       data: postData
    };
    
    anonclient.post(options.tokenURL, args, function (data, response) {
        res.json({"apptoken":data.access_token});
    });
};
