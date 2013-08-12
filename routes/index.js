var pgtool = require('../dbtool/pgdbtool');
/*
 * GET home page.
 */
var kit={menu:''}

exports.index = function(req, res){
	kit.menu="tuijian";//推介menu
	pgtool.getTime();
	pgtool.getApps();
 	res.render('index', kit);

};


