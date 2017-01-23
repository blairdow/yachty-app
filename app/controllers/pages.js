var request = require('request')

//var welcome = function(req, res, next) {
//  res.render('pages/welcome');
//};

var yachty = function(req, res, next) {
    var key = process.env.API_KEY
    
    request(`https://api.tumblr.com/v2/tagged?tag=lil+yachty&api_key=${key}`, function(err, response, body){
        if(!err && res.statusCode == 200) {
            var content = JSON.parse(response.body).response
//            console.log(content.response[0])
            res.json(content)
        }
    })
}

module.exports = {
    yachty: yachty
};
