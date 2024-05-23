
/* global  Include */
(function (win, $) {

    // 参数中特殊字符去除处理
    function SpecialCharacterFilter(str) {
        var pattern = new RegExp("[!@#$^*()=|{}':;',\\[\\].<>/~！@#￥……*（）;—|{}【】‘；：”“'。，、]");
        var newStr = "";
        for (var i = 0; i < str.length; i++) {
            newStr = newStr + str.substr(i, 1).replace(pattern, '');
        }
        return newStr;
    }

    if (!window.ewbUtil) {
        window.ewbUtil = {};
    }
    $.extend(ewbUtil, {

        // 获取路由的参数
        getUrlParam: function (vName) {
            var mret;
            var valueList = document.URL.split("?")
            if (valueList.length > 1) {
                var thisURL = "&" + valueList[1] + "&";
                var re = new RegExp("&" + vName + "=((.|\\n)*?)&", "g");
                if (re.test(thisURL) > 0) {
                    var tarr = thisURL.match(re);
                    var needrep = vName + "=";
                    mret = tarr[0]
                    mret = mret.replace(needrep, "");
                    mret = mret.replace(/&/g, "");
                    //参数值去除特殊字符
                    mret = SpecialCharacterFilter(mret);
                }
            }
            if (mret == undefined)
                mret = "";
            return mret;
        },


        // 生成UUID，业务主键，by pswen/3197544360@qq.com
        uuid: function () {
            var s = [];
            var hexDigits = "0123456789abcdef";
            for (var i = 0; i < 36; i++) {
                s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
            }
            s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
            s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
            s[8] = s[13] = s[18] = s[23] = "-";
            var uuid = s.join("");
            return uuid;
        },

        // 是否为移动端
        isMobile: function () {
            var ua = navigator.userAgent;

            var detect = {
                // 是否为移动终端
                mobile: !!ua.match(/AppleWebKit.*Mobile.*/),
                // ios终端
                ios: !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
                // android终端或者uc浏览器
                android: ua.indexOf('Android') > -1 || ua.indexOf('Linux') > -1,
                // 是否为iPhone或者QQHD浏览器
                iPhone: ua.indexOf('iPhone') > -1,
                // 是否iPad
                iPad: ua.indexOf('iPad') > -1
            };

            return (detect.mobile || detect.ios || detect.android || detect.iPhone || detect.iPad);
        },
    });
}(this, jQuery));

// 加载头尾代码片段
window.Include = function (cfg) {
	this.cfg = cfg;

	this._init();
};

Include.prototype = {
	constructor: Include,

	_init: function () {
		var c = this.cfg;

		if (c.async !== false) c.async = true;

		this.$container = $('#' + c.id);
	},

	fetch: function () {
		var c = this.cfg,
			self = this;

		return $.ajax({
			url: c.src,
			type: 'GET',
			dataType: 'html',
			async: c.async,
			success: function (html) {
				self.$container.html(html);

				c.onload && c.onload(html);
			}
		});
	}
};

// 需要引入的代码片段
var includes = [{
	id: 'sub-header',
	src: '/sub_header.inc.html',
	onload: function () {
        /*$('body *').addClass('gray');
        $('.guohui img').parents().removeClass('gray');
        $('.guohui img').removeClass('gray');*/
	}
}, {
	id: 'header',
	src: '/header.inc.html',
	onload: function () {
        /*$('body *').addClass('gray');
        $('.guohui img').parents().removeClass('gray');
        $('.guohui img').removeClass('gray');*/
	    $("#searchcontent").keydown(function (event) {
	        if (event.keyCode == 13) {
	            smartSearch();
	        }
	    });
	}
}, {
	id: 'footer',
	src: '/footer.inc.html',
	onload: function () {
		// console.log('...footer loaded...');
		//select选择框
		$('.footer-select').chosen({
			disable_search: true
		});
	}
},{
	id:'special-header',
	src:'/special_header.inc.html',
	onload:function () {
        /*$('body *').addClass('gray');
        $('.guohui img').parents().removeClass('gray');
        $('.guohui img').removeClass('gray');*/
	}
}];

$.each(includes, function (i, cfg) {
	if ($('#' + cfg.id).length) {
		new Include(cfg).fetch();
	}
});
$("#searchcontent").keydown(function (event) {
    if (event.keyCode == 13) {
        smartSearch();
    }
});
function smartSearch() {
	var searchcontent=$("#searchcontent").val();
	if(searchcontent===""){
		alert("请输入搜索内容");
		return;
	}
	window.open("/search/fullsearch.html?search="+searchcontent);
}





// 在container最前面插入新元素
$("#container").prepend(conferencesHtml);
