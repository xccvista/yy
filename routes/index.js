var apps = require('../DAO/DoApps');
/*
 * GET home page.
 */

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
//    console.log(props);
}
//渲染变量
var kit={menu:''}

exports.index = function(req, res){
	kit.menu="tuijian";//推介menu
    apps.getAppsFromConfig("clean",0,function(result){
        kit.apps=result;
        console.log(result);
        res.render('index', kit);
    });
};

exports.loadMore=function (req,res,next) {
    var param=req.body;
    apps.getAppsFromConfig("clean",param.page,function(result){
        res.send({page:result});
    });
}

