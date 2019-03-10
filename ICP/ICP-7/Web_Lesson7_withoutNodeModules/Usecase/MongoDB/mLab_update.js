/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://icp7:webicp7@ds119750.mlab.com:19750/webicp';

MongoClient.connect(url, {useNewUrlParser: true}, function (err, db) {
    if (err) throw err;
    var dbase = db.db("webicp");
    var myquery = {address: /^S/};
    var newvalues = {$set: {name: "Minnie"}};
    var myoptions = {multi: true};
    dbase.collection("newCollection").updateMany(myquery, newvalues, myoptions, function (err, res) {
        if (err) throw err;
        console.log(res.result.nModified + " record(s) updated");
        db.close();
    });
});
