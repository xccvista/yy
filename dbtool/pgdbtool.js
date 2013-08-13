var pg = require('pg');
var con = require('../config/config');
// var conString = "postgres://sa:sa@192.168.1.104/yunyou";
var conString = "postgres://browser:browser@172.16.4.45/yunyou";

var getAppCacheSql = 'SELECT version,appid,description,download_url,images,name,size,star,summary,version_name,tags,support FROM app where id in (';

exports.getTime = function () {
    var time;
    pg.connect(conString, function (err, client, done) {
        if (err) {
            return console.error('error fetching client from pool', err);
        }
        client.query('SELECT NOW() AS "theTime"', function (err, result) {
            //call `done()` to release the client back to the pool
            done();

            if (err) {
                return console.error('error running query', err);
            }
            console.log(result.rows[0].theTime);
            time = result.rows[0].theTime;
            //output: 1
        });
    });
    return time;
}

exports.getApps = function () {

    var endData;
    pg.connect(conString, function (err, client, done) {
        if (err) {
            return console.error('error fetching client from pool', err);
        }
        //填充需要查询的app ids，数组的形式
        client.query(getAppCacheSql + con.config[0]['index'] + ")"
            , function (err, result) {
                //call `done()` to release the client back to the pool
                done();

                if (err) {
                    return console.error('error running query', err);
                }
                endData = result.rows;
//          console.log(endData);
                return endData;
            });
    });

}
//this.getApps();
exports.getCache = function () {

}
//this.getCache();