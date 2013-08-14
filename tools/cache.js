var cache={};

exports.getCache=function(){
    return cache;
}

exports.setCache=function(c){
    cache=c;
}

exports.getCacheByName=function(name){
    return cache[name];

}
exports.setCacheByName=function(name,value){
    cache[name]=value;
    return this;
}