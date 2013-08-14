var db=require('../tools/pgdbtool'),
    cache=require('../tools/cache'),
    conf=require('../config/config');
var tree=conf.config;

//function updateCache(){
//    cache.setCacheByName("clean",[]);
//
//    for(var i=0;i<tree.clean.length;i++){
//        db.getAppsByIds(tree[i],function(res){
//            cache.getCacheByName("clean").push(res);
//        });
//    }
//
//    cache.setCacheByName("ads",[]);
//
//    for(var i=0;i<tree.ads.length;i++){
//        db.getAppsByIds(tree[i],function(res){
//            cache.getCacheByName("ads").push(res);
//        });
//    }
//}
//updateCache();

 //预留接口
exports.getAppsFromCache=function(pageIndex,type){

    var index=parseInt(pageIndex);
    var temp;
    if(cache.getCacheByName(type) == undefined || cache.getCacheByName(type) == null ){
        console.log("if");
        temp = db.getAppsByIds(conf.config[type][index].index);
        console.log(temp);
        cache.setCacheByName(type,temp);
    }else{
        console.log("else");
        temp=cache.getCacheByName(type);
    }
    return temp;
}

exports.searchApps=function(keyWords,callback){

}
//实现接口
/**
 * 根据ID列表查询数据
 * @param path
 * @param ids
 * @param callback
 */
exports.getAppsFromConfig=function(path,index,callback){
    var ids=tree[path][index]["index"];
    console.log(ids);
    db.getAppsByIds(ids,callback);
}