var pgtool = require('../dbtool/pgdbtool');
/*
 * GET home page.
 */
var kit={menu:''}

exports.index = function(req, res){
	kit.menu="tuijian";//推介menu
 	console.log(kit);
 	console.log(pgtool.getTime());
 	// pgtool.getTime();
 	res.render('index', kit);

};


