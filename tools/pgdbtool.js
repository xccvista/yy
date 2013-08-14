var pg = require('pg');

// var conString = "postgres://sa:sa@192.168.1.104/yunyou";
var conString = "postgres://browser:browser@localhost/yunyou";

var getAppCacheSql = 'SELECT version,appid,description,download_url,images,name,size,star,summary,version_name,tags,support FROM app where id in (';

var cache;
function dbpool(sqlStart,args,sqlEnd,callback){
var client = new pg.Client({
    user: 'browser',
    password: 'browser',
    database: 'yunyou',
    // host: '172.16.4.45',
    host:'localhost',
    port: 5432
});
// function()
client.on('drain', client.end.bind(client)); //d函数isconnect client when all queries are finished
client.connect();

    var query = client.query(sqlStart+args+sqlEnd, function(err, result) {
        if(err){console.log(err)}
         callback(result.rows);
    })
}
/**
 * 传入需要查询的id数组,最后查询完成后的callback
 * @param ids
 * @param callback
 */
exports.getAppsByIds=function(ids,callback){
   dbpool(getAppCacheSql,ids,")",callback);
}
