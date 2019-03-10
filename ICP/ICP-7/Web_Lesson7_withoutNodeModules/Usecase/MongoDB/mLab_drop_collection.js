/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://icp7:webicp7@ds119750.mlab.com:19750/webicp';

MongoClient.connect(url, {useNewUrlParser: true},function(err, db) {
    if (err) throw err;
    var dbase = db.db("webicp");
    dbase.dropCollection("newCollection", function(err, delOK) {
        if (err) throw err;
        if (delOK) console.log("Collection deleted");
        db.close();
    });
});
