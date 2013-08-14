//实现思路
/**
 0.计算屏幕的可视局域
 1.计算图片显示大小
 2.首先是定义3个显示的位置
 3.传入缓动引擎参数，执行
 4.如果有动态的
 */
function changeImgSize(imgList, setFunc) {
    for (var i = imgList.length - 1; i >= 0; i--) {
        setFunc(imgList[i]);
    }
    ;
}

var g_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var g_height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

// var position
var imgRatio = 0.375;
var imgWidth = g_width;
var imgHegiht;
var dynamic = document.getElementById("dynamic-imgs");
// alert(imgWidth);
if (g_width > 480) {
    g_width = 480;
    dynamic.style.margin = 0 + " auto";
    dynamic.style.width = g_width + "px";
}
imgHegiht = g_width * 0.375;
dynamic.style.height = imgHegiht + "px";

//计算滑动位置信息    

// var position=[{x:-1,y:0,rotation:0},{x:0-g_width-1,y:0,rotation:0},{x:0-g_width*2-1,y:0,rotation:0}];
var position;
//传入运动函数
var tween;
var target;
var indextarget = document.getElementsByClassName("indexDom-num");
doImages();
animate();
var index = 0;

var indexDom = document.getElementById();

function doImages() {
    position = {x: 0, y: 0, rotation: 0};
    target = document.getElementById("target");

    tween = new TWEEN.Tween(position)
        .to({x: 0 - g_width}, 1000)
        .delay(4000)
        .easing(TWEEN.Easing.Elastic.InOut)
        .onUpdate(update)
        .onComplete(updateIndex);

    tweenmid = new TWEEN.Tween(position)
        .to({x: 0 - g_width * 2}, 1000)
        .delay(4000)
        .easing(TWEEN.Easing.Elastic.InOut)
        .onUpdate(update)
        .onComplete(updateIndex);

    tweenback = new TWEEN.Tween(position)
        .to({x: 0}, 1000)
        .delay(4000)
        .easing(TWEEN.Easing.Elastic.InOut)
        .onUpdate(update)
        .onComplete(updateIndex);

    tween.chain(tweenmid);
    tweenmid.chain(tweenback);
    tweenback.chain(tween);

    tween.start();
}

//不使用class而是使用动态的style渲染,是最快的方法
function updateIndex() {
    index++;
    if (index > 2) {
        index = 0
    }
    // console.log(index);
    for (var i = indextarget.length - 1; i >= 0; i--) {
        indextarget[i].style.background = "blue";
    }
    ;
    indextarget[index].style.background = "black";
}

function animate() {
    requestAnimationFrame(animate);
    TWEEN.update();
}

function update() {
    target.style.left = position.x + 'px';
    target.style.top = position.y + 'px';
    target.style.webkitTransform = 'rotate(' + Math.floor(position.rotation) + 'deg)';
    target.style.MozTransform = 'rotate(' + Math.floor(position.rotation) + 'deg)';
}
var pageIndex=0;
//it is dirty code but i don't want to change it...
$(".loadmore").click(function(){
    if( pageIndex>=3){
        $(this).html("没有更多了");
        return false;
    }
    $.ajax({
    url: "/loadMore",
    data: {page: pageIndex+1},
    context: document.body,
    method: 'post',
}).done(function (data) {
    pageIndex=pageIndex+1;
    console.log(data.page);
    var det=data.page;
    var str= 
    '<article class="one g-left dash-buttom ">'+
            '<img src="images/hehe.png" width=60 height=60 alt=""/>'+
        '<dl>'+
            '<dt class="fs12">'+det[0].name+'</dt>'+
            '<dd class="fs12 fs-h12">'+det[0].tags+'&nbsp;&nbsp;'+det[0].size+'M</dd>'+
            '<dd><a href="'+det[0].download_url+'"><span class="button button-min fs12">下载</span></a></dd>'+
        '</dl>'+
    '</article>'+
     '<article class="one dash-left g-left dash-buttom">'+
        '<img src="images/hehe.png" width=60 height=60 alt=""/>'+
        '<dl>'+
            '<dt class="fs12">'+det[1].name+'</dt>'+
            '<dd class="fs12 fs-h12">'+det[1].tags+'&nbsp;&nbsp;'+det[1].size+'M</dd>'+
            '<dd><a href="'+det[1].download_url+'"><span class="button button-min fs12">下载</span></a></dd>'+
    '</article>'+
        '<article class="one g-left dash-buttom ">'+
            '<img src="images/hehe.png" width=60 height=60 alt=""/>'+
        '<dl>'+
            '<dt class="fs12">'+det[2].name+'</dt>'+
            '<dd class="fs12 fs-h12">'+det[2].tags+'&nbsp;&nbsp;'+det[2].size+'M</dd>'+
            '<dd><a href="'+det[2].download_url+'"><span class="button button-min fs12">下载</span></a></dd>'+
        '</dl>'+
    '</article>'+
     '<article class="one dash-left g-left dash-buttom">'+
        '<img src="images/hehe.png" width=60 height=60 alt=""/>'+
        '<dl>'+
            '<dt class="fs12">'+det[3].name+'</dt>'+
            '<dd class="fs12 fs-h12">'+det[3].tags+'&nbsp;&nbsp;'+det[3].size+'M</dd>'+
            '<dd><a href="'+det[3].download_url+'"><span class="button button-min fs12">下载</span></a></dd>'+
        '</dl>'+
    '</article>'+
        '<article class="one g-left dash-buttom ">'+
            '<img src="images/hehe.png" width=60 height=60 alt=""/>'+
        '<dl>'+
           '<dt class="fs12">'+det[4].name+'</dt>'+
            '<dd class="fs12 fs-h12">'+det[4].tags+'&nbsp;&nbsp;'+det[4].size+'M</dd>'+
            '<dd><a href="'+det[4].download_url+'"><span class="button button-min fs12">下载</span></a></dd>'+
        '</dl>'+
    '</article>'+
     '<article class="one dash-left g-left dash-buttom">'+
        '<img src="images/hehe.png" width=60 height=60 alt=""/>'+
        '<dl>'+
            '<dt class="fs12">'+det[5].name+'</dt>'+
            '<dd class="fs12 fs-h12">'+det[5].tags+'&nbsp;&nbsp;'+det[5].size+'M</dd>'+
            '<dd><a href="'+det[5].download_url+'"><span class="button button-min fs12">下载</span></a></dd>'+
        '</dl>'+
    '</article>';
    $(".litte-block").append(str); 
});



});

