/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://icp7:webicp7@ds119750.mlab.com:19750/webicp'; //mongodb://<dbuser>:<dbpassword>@ds239128.mlab.com:39128/<dbname>

MongoClient.connect(url, {useNewUrlParser: true}, function (err, db) {
        if (err) throw err;
        console.log("Connected correctly to server");
        db.close();
    }
)
;
