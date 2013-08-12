var pg = require('pg');
// var conString = "postgres://sa:sa@192.168.1.104/yunyou";
var conString ="postgres://browser:browser@172.16.4.45/yunyou"

exports.getTime=function(){
  var time;
  pg.connect(conString, function(err, client, done) {
  if(err) {
    return console.error('error fetching client from pool', err);
  }
  client.query('SELECT NOW() AS "theTime"', function(err, result) {
    //call `done()` to release the client back to the pool
      done();

      if(err) {
        return console.error('error running query', err);
      }
      console.log(result.rows[0].theTime);
      time=result.rows[0].theTime;
      //output: 1
    });
  });
  return time;
}

exports.getApps= function(){
  var result;
  pg.connect(conString, function(err, client, done) {
  if(err) {
    return console.error('error fetching client from pool', err);
  }
  client.query('SELECT id,version,appid,date_created,description,download_url,icon,images,name,size,star,summary,version_code,version_name,tags,support FROM app limit 0 OFFSET 5'
, function(err, result) {
    //call `done()` to release the client back to the pool
      done();

      if(err) {
        return console.error('error running query', err);
      }
      console.log(result);
      //output: 1
    });
  });
}