var pg = require('pg');
var conString = "postgres://sa:sa@192.168.1.104/yunyou";


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