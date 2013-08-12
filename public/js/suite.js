/**
 * Created with JetBrains WebStorm.
 * User: clive.chen
 * Date: 13-7-17
 * Time: 上午10:01
 * 单文件,以判定窗口大小,以及是否需要进行相关的适配
 */

 //图片滑动的公有接口
 //侦听页面的大小
//任务，编写简版的框架，可进行css选择器，支持css操作
//动画类的一些问题

/*function $g(text){
	var doc=document;
	doc.getElementById();
	doc.getElementsByClassName();
	doc.getElementsByTagName();
	doc.querySelector();
	doc.querySelectorAll();
};

function $findChilds(parentNode, text){
	//如果不传入父节点的话，默认为body
	if(parentNode == undefined)
		parentNode = document.body;
	var childNodes = parentNode.childNodes;
	var results = [];
	//子节点大于零才循环
	if(childNodes.length > 0)
	{
		var length = childNodes.length;
		//循环查找符合text的节点
		for(var i=0;i<length;++i)
		{
			//三种情况，className，id， tagName
			switch(text.substr(0, 1))
			{
			case '.':
				//这两种:parentNode.getElementsByClassName,parentNode.all都是后来加上的，如果浏览器这两种方法都不支持，那就只能暴力递归了
				if(parentNode.getElementsByClassName)
					return parentNode.getElementsByClassName(text.substr(1));
				else if(parentNode.all)
				{
					var finded = [];
					var jlength = parentNode.all.length;
					for(var j=0;j<jlength;++j)
						if(parentNode.all[j].className == text.substr(1))
							finded.push(parentNode.all[j]);
					return finded;
				}
				//以上两种方法都不支持，直接判断
				if(childNodes[i].className == text.substr(1))
					results.push(childNodes[i]);
				break;
			case '#':
				return [document.getElementById(text.substr(1))];
			default:
				return parentNode.getElementsByTagName(text);
			}
			//判断完后，把当前子元素的子元素传入$findChilds进行递归查找，返回的结果直接和现在的结果合并
			results = results.concat($findChilds(childNodes[i], text));
		}
	}
	return results;
}  

String.prototype.vtrim = function() {
	  return this.replace(/^\s+|\s+$/g, '');
}  

function $g(text){
	//按照空格分割参数
	var values = text.vtrim().split(" ");
	var length = values.length;
	//如果只有一个选择参数的话，就直接调用dom方法返回结果。
	if(length == 1)
		switch(values[0].substr(0, 1))
		{
		case "#":
			return document.getElementById(values[0].substr(1));
		case ".":
			if(document.getElementsByClassName)
				return document.getElementsByClassName(values[0].substr(1));
		default:
			return document.getElementsByTagName(values[0]);
		}
	//每次迭代都会产生许多符合参数的结果节点,这里结果节点的名称为parentNodes，第一次循环默认为body
	var parentNodes = [document.body];
	//外层循环为迭代每个传入的参数
	for(var i = 0; i < length; ++i)
	{
		var jlength = parentNodes.length;
		var results = [];
		//这里如果values的长度为零的话，
		//就说明是多出来的空格，
		//例如:$g("      .content");这种情况不执行代码直接跳入下一循环
		var tmpValue = values[i].vtrim();
		if(tmpValue.length <= 0)
			continue;
		//内层循环为迭代每个结果节点，
		//在结果节点中查找符合选择条件的结果。当然第一次为body
		for(var j=0;j<jlength;++j)
		{
			//$findChilds就是上边的那个函数，就是选择某个节点的子节点的
			var result = $findChilds(parentNodes[j], values[i].vtrim());
			var rlength = result.length;
			//因为返回的有时候是html容器，无法直接和数组concat所以倒入数组，这里有优化空间，但暂不考虑性能先这么做
			for (var k = 0; k < rlength; ++k)
				results.push(result[k]);
		}
		//没有结果，立即返回undefined
		if(results == undefined || results.length <= 0)
			return undefined;
		//最后一次循环就直接返回结果数组，但是如果最后一个选择条件是选择id的话，那就不返回数组直接返回dom对象了
		if (i == length - 1)
		{
			if (values[i].substr(0, 1) == "#")
				return results[0];
			return results;
		}
		parentNodes = results;
	}
}*/

var g_width=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
var g_height=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;

window.onload=function(){
	// document.getElementsByClassName('detail-imgs');
	// var dd=document.getElementsByClassName('detail-game-capture');
	// var i=0;
	// var t=setInterval(function(){
	// 	i=i+5;
	// 	document.getElementsByClassName('detail-game-capture')[0].style.left = -i+"px";
	// 	if(i>900){
	// 		i=0;
	// 	}
	// },100);

	//动画
	// var photo = document.getElementById("testTime"); 
	// TweenLite.to(photo, 1.5, {width:300 });
	// TweenLite.to(photo, 1, {width:100, ease:"Elastic.easeOut"});
	// TweenLite.to(photo, 1, {height:200,width:300, ease:"easeOutElastic"})


	// var tl = new TimelineLite(); 
	// //append a to() tween
	// // tl.to(photo, 1, {width:"50%"}); 
	// tl.to(photo, 1, {left:100}).to(photo, 1, {top:50}).to(photo, 1, {opacity:0});


// TweenMax.to( document.getElementById("d2"), 1, {css:{left:100}});
// TweenMax.to( document.getElementById("image"), 1, {css:{left:100}});
// TweenMax.to( document.getElementById("d3"), 1, {css:{left:100}});

//tween the element with ID of "myID"
// TweenMax.to("#testTime", 1, {backgroundColor:"#ff0000", width:"50%", top:"100px", ease:Power2.easeInOut});
 
// //or if jQuery is loaded, you can do more advanced selecting like all the elements with the class "myClass" like this: 
// TweenMax.to(".header-ad .img-ct", 1, {css:{left:100}});
	// var demo = document.getElementById('testTime'),
 //    myMorph = new jsMorph(demo,
	//       {left:'200px'},
	//       {duration:450},
	//       function(n) {return --n*n*n+1}
	//     );
	// demo.onclick = myMorph.start;
	




	

}
// var changer={
// 	init:function(){
// 		// this for the dynamic js
// 		// alert(window.innerWidth);
// 	}
// }

// changer.init();