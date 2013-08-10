
/*
 * GET home page.
 */
//var kit={:''}
exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};