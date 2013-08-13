var pgtool = require('../dbtool/pgdbtool');
/*
 * GET home page.
 */
var kit={menu:''}

exports.index = function(req, res){
	kit.menu="tuijian";//推介menu
	pgtool.getTime();
	pgtool.getApps();
	// allPrpos(pgtool);

 	res.render('index', kit);

};
exports.loadMore=function (req,res,next) {
	res.send({'statu':'success'});
}



function allPrpos(obj) { 
// 用来保存所有的属性名称和值
	var props = "";
	// 开始遍历
	for(var p in obj){ 
	    // 方法
	    if(typeof(obj[p])=="function"){ 
	        obj[p]();
	    }else{ 
	        // p 为属性名称，obj[p]为对应属性的值
	        props+= p + "=" + obj[p] + "\t";
	    }
	} 
	// 最后显示所有的属性
    console.log(props);
}