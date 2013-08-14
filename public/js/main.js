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

$.ajax({
    url: "/loadMore",
    data: {page: "1"},
    context: document.body,
    method: 'post',
}).done(function (data) {
        console.log(data);
    });
