/*------------------------------------------------------------------
メニュー部分
-------------------------------------------------------------------*/
var clickEventType=((window.ontouchstart!==null)?'click':'touchstart');
$(function(){
	var FeedIn = $("#nav_ul_btn ul").css('display');
	if (FeedIn === 'none') {
		$("#nav_btn").on(clickEventType, function(){
			var DocumentHeight = $(document).height();
			$('body').after('<div id="background"></div>');
			$("#background").css('height', DocumentHeight );
			$("#nav_ul_btn ul").fadeIn(300);
			$("#nav_btn").css('pointer-events','none');
		});
	}
	$(document).on(clickEventType, function(event) {
		if (!$(event.target).closest('#nav_btn, #nav_ul_btn ul li').length) {
			$("#nav_ul_btn ul").fadeOut(300);
			$("#background").remove();
			$("#nav_btn").css('pointer-events','auto');
		}
	});
});
