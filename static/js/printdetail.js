$(function() {
	$("#print").on("click",function(){
		var infoViewCount=$("#infoViewCount").html();
		$("#infoViewCountSpan").html("阅读次数: "+infoViewCount+"次");
		var html=$("body").html();
		$("body").html($("#detailContent").html());
		window.print();
		$("body").html(html);
	});
});
