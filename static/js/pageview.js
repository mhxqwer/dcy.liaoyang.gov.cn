$(function() {
	var useragent = getPcOrMobile();
	webbuilder.addReferrer(document.referrer, window.location.host, useragent,
			function(data) {
				if (data.hasOwnProperty("message")) {
					alert(data.message);
				}
			})

	var viewGuid = $("#viewGuid").attr("value");
	webbuilder.addPageView(viewGuid, function(data) {
		if (data.hasOwnProperty("message")) {
			alert(data.message);
		} else {
			if ($("#infoViewCount").length > 0) {
				$("#infoViewCount").html(data.viewCount);
			}
		}
	})
	webbuilder.getSiteViewCount(function(data) {
		if (data.hasOwnProperty("message")) {
			alert(rtndata.message);
		} else {
			var list = data.siteViewCount.split("");
			var countHtml = "";
			for (var i = 0; i < list.length; i++) {
				countHtml += "<img src='/images/counter/1/" + list[i]
						+ ".gif'>"
			}
			if ($("#siteViewCount").length > 0) {
				$("#siteViewCount").html(countHtml);
			}
		}
	})

	webbuilder.getSiteEveryDayViewCount(function(data) {
		if (data.hasOwnProperty("message")) {
			alert(rtndata.message);
		} else {
			var list = data.siteEveryDayViewCount.split("");
			var countHtml = "";
			for (var i = 0; i < list.length; i++) {
				countHtml += "<img src='/images/counter/1/" + list[i]
						+ ".gif'>"
			}
			if ($("#siteEveryDayViewCount").length > 0) {
				$("#siteEveryDayViewCount").html(countHtml);
			}
		}
	})

	var userGuid = getCookie("userGuid");
	if (userGuid == "" || userGuid == null) {
		if (isIE6() || isIE7() || isIE8()) {
			userGuid = uuid();
		} else {
			userGuid = getCanvasGuid();
		}
		setCookie("userGuid", userGuid, 365);
	}
	webbuilder.addSiteVisiter(userGuid, function(data) {
		if (data.hasOwnProperty("message")) {
			alert(data.message);
		}
	})
});

function getPcOrMobile() {
	var sUserAgent = navigator.userAgent.toLowerCase();
	var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
	var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
	var bIsMidp = sUserAgent.match(/midp/i) == "midp";
	var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
	var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
	var bIsAndroid = sUserAgent.match(/android/i) == "android";
	var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
	var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
	if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid
			|| bIsCE || bIsWM) {
		return "mobile";
	} else {
		return "pc";
	}
}

function getCanvasGuid() {
	var canvas = document.createElement('canvas');
	var ctx = canvas.getContext("2d");
	ctx.font = "24px Arial";
	ctx.fillText("", 22, 33);
	ctx.moveTo(0, 60);
	ctx.lineTo(100, 60);
	ctx.stroke();
	// 大家就随意创建一个canvas标签就是
	var b64 = canvas.toDataURL().replace("data:image/png;base64,", "");
	// 然后用toDataURL方法对生成的canvas图像进行64码进制转换
	var crc = getHashCode(b64);
	return crc;
}

function getHashCode(str) {
	var hash = 0, i, chr, len;
	if (str.length === 0)
		return hash;
	for (i = 0, len = str.length; i < len; i++) {
		chr = str.charCodeAt(i);
		hash = ((hash << 5) - hash) + chr;
		hash |= 0; // Convert to 32bit integer
	}
	return hash;
}

function uuid() {
	var s = [];
	var hexDigits = "0123456789abcdef";
	for (var i = 0; i < 36; i++) {
		s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
	}
	s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
	s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the
	// clock_seq_hi_and_reserved
	// to 01
	s[8] = s[13] = s[18] = s[23] = "-";

	var uuid = s.join("");
	return uuid;
}

function isIE6() {
	return navigator.userAgent.split(";")[1].toLowerCase().indexOf("msie 6.0") == "-1" ? false
			: true;
}

function isIE7() {
	return navigator.userAgent.split(";")[1].toLowerCase().indexOf("msie 7.0") == "-1" ? false
			: true;
}

function isIE8() {
	return navigator.userAgent.split(";")[1].toLowerCase().indexOf("msie 8.0") == "-1" ? false
			: true;
}

function getCookie(c_name) {
	if (document.cookie.length > 0) {
		c_start = document.cookie.indexOf(c_name + "=")
		if (c_start != -1) {
			c_start = c_start + c_name.length + 1
			c_end = document.cookie.indexOf(";", c_start)
			if (c_end == -1)
				c_end = document.cookie.length
			return unescape(document.cookie.substring(c_start, c_end))
		}
	}
	return ""
}

function setCookie(c_name, value, expiredays) {
	var exdate = new Date()
	exdate.setDate(exdate.getDate() + expiredays)
	document.cookie = c_name + "=" + escape(value)
			+ ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString())
}