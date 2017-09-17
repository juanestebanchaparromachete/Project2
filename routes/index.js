var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

// var db = MongoClient.connect("mongodb://admin:AdminAdmin@ds139954.mlab.com:39954/datosdeportivos");
var players = [];
MongoClient.connect("mongodb://admin:AdminAdmin@ds139954.mlab.com:39954/datosdeportivos", function(err, db) {
    if(!err) {
        console.log("We are connected");

        router.get('/', function(req, res, next) {
            res.render('index', { title: 'Express' });
        });

        router.get('/players', function(req, res) {
            var col = db.collection('Players');
            col.find({}).toArray(function (mongoError, ej) {
                  res.send(ej);
                }
            );
        });

        router.get('/players/:name/results', function(req, res) {
            var col = db.collection('Results');
            col.aggregate([
                {
                    $match: {
                        $or: [
                            {Winner: {$regex : ".*"+req.params.name+".*"}},
                            {Loser: {$regex : ".*"+req.params.name+".*"}}
                        ]
                    }
                }
            ]).toArray(function (mongoError, ej) {
                    res.send(ej);
                }
            );
        });
    }
});
/* GET home page. */


module.exports = router;
