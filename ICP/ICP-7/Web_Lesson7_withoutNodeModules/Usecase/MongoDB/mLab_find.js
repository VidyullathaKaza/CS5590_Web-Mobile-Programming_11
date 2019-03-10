/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://icp7:webicp7@ds119750.mlab.com:19750/webicp';

MongoClient.connect(url, {useNewUrlParser: true}, function (err, db) {
    if (err) throw err;
    var dbase = db.db("webicp");
    dbase.collection("newCollection").find({}).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});
