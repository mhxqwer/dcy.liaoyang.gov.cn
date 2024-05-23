$(function() {
	var fileList = $("#fujian li").length;
	if (fileList <= 0||$("#categorynum").html()=='011') {
		$(".ewb-file").text("");
	}

	var gxhlaiyuan=$("#gxhlaiyuan").html();
	if(gxhlaiyuan!=""){
		$("#laiyuan").html("信息来源："+gxhlaiyuan);
	}
	$("#detailmessage a").click(function(){
		//获取para的字体大小
		var thisEle;
		if($(".content span").css("font-size")!=null){
			thisEle= $(".content span").css("font-size");
		}else{
			thisEle= $(".content p,.content,.content font,.content span,.content div").css("font-size");
		}

		//parseFloat的第二个参数表示转化的进制，10就表示转为10进制
		var textFontSize = parseFloat(thisEle , 10);
		//javascript自带方法
		var unit = thisEle.slice(-2); //获取单位
		var cName = $(this).attr("class");
		if(cName == "bigger"){
			if( textFontSize <= 22 ){
				textFontSize += 2;
			}
		}else if(cName == "smaller"){
			if( textFontSize >= 6 ){
				textFontSize -= 2;
			}
		}else if(cName == "medium"){
			textFontSize = 18;
		}
		//设置para的字体大小
		$(".content p,.content,.content font,.content span,.content div").css("font-size",  textFontSize + unit );
	});
	
	//返回路径
	var ljtext = $(".location-text a:nth-child(2)").text();
	if(ljtext == "专题专栏"){
		$(".location-text a:nth-child(2)").attr("href","http://www.liaoyang.gov.cn/fzlm/037001/special_subject.html");
	}
	if(ljtext == "辅助栏目"){
		$(".location-text a:nth-child(2)").attr("href","#");
	}
});
