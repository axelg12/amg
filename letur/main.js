
var maxWidth = $(window).width();
var maxHeight = $(window).height();

$( document ).ready(function() {
	skrollr.init({
	    smoothScrolling: true,
	    forceHeight: false
	});
	var head = $("#iwhipsomehead").height();
	//var foo = $("#iwhipsomehead").width() * 0.8;
	var mainHeight = maxHeight - head;
	$('.hero-1, .hero-2').css({
        width: "100%",
        height: mainHeight,
        top: head,
        left: "50%",
        "margin-left": -1*((mainHeight * 1.784)/2)
    });
    $('.hero-0 p').css({
        top: (mainHeight/2)-189
    });
    $('body').css({
        "height": 3.5*maxHeight
    });


	
});