//显示的花数
var flowerNum = 0;
//需要完成的目标分数
var point = 5;
//分数
var finishPoint = 0;


/*初始化完页面自动调用*/
$(function () {
    // 初始化 UI 尺寸
    refreshItemHeight();

    $("#bottom-part #add-flower").click(function(){
    	flowerNum++;
    	var randomFlowerType = Math.random();
    	if (randomFlowerType<0.6) {
    		$("#tree-part").prepend('<span id="'+flowerNum+'" class="icon icon-flower-color pos-abs"></span>');
    		finishPoint=finishPoint+1;
    	} 
    	else if(randomFlowerType<0.8) {
    		$("#tree-part").prepend('<span id="'+flowerNum+'" class="icon icon-flower pos-abs"></span>');
    		finishPoint=finishPoint+3;
    	} 
    	else if(randomFlowerType<0.95){
    		$("#tree-part").prepend('<span id="'+flowerNum+'" class="icon icon-sports pos-abs"></span>');
    		finishPoint=finishPoint+5;
    	}
    	else{
    		$("#add-flower").addClass("hidden");
    		$(".flame-part-ground").removeClass("hidden");
    		$(".flame").css({"opacity":"1","transition":"0.4s linear"});
    		$(".lid").css({"animation":"lidOff 0.3s linear","animation-fill-mode":"forwards"});

    		setTimeout("fireAllFlowers()",3000);
    	}
    	$("#finished-point").text(finishPoint);
    	$("#tree-part #"+flowerNum).css({"top":"100%","left":"50%"});
    	//距离顶部范围10%~70%
    	var randomTop = 10+Math.random()*60+"%";
    	//距离左部范围10%~90%
    	var randomLeft = 10+Math.random()*80+"%";
    	$("#tree-part #"+flowerNum).animate({
    		top:randomTop,
    		left:randomLeft,
    		opacity:'0.5',
    	});
    });
});

/*页面尺寸发生变化促发*/
$(window).resize(function() {
	refreshItemHeight();
});

function refreshItemHeight() {
	var newWidth = $(window).width();
	var newHeight = $(window).height();

	//设置顶部小红花高度和水平居中显示
	$("#flower-game-icon").css("height", $("#flower-game-icon").width()*32/45);
	$("#flower-game-icon").css("margin-left", (newWidth-$("#flower-game-icon").width())/2);

    //设置顶部小红花高度和水平居中显示
    $("#tree-part").css("height", $("#tree-part").width()*91/84);
}

/*燃烧花朵，清除花朵和分数*/
function fireAllFlowers() {
	$(".flame-part-ground").addClass("hidden");
	$("#add-flower").removeClass("hidden");
    //清除所有花朵
    $("#tree-part span").remove(".icon");
    //清除分数
    finishPoint=0;
    $("#finished-point").text(finishPoint);
}