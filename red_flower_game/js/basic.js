/*初始化完页面自动调用*/
$(function () {
    // setup garden
    refreshItemHeight();
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