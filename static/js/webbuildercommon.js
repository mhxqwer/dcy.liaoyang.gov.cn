var siteInfo = {"siteGuid":"7eb5f7f1-9041-43ad-8e13-8fcb82ea831a","projectName":"/EWB-FRONT","webVersion":"5.0","vname":"/lnly_main","tempVersion":"20210922133931"}
if (!window.webbuilder) {
    window.webbuilder = {};
}
function checkJson(custom) {
    if (custom != "") {
        if (typeof custom == 'string') {
            backData = $.parseJSON(custom);
        } else {
            backData = custom;
        }
    }
    else
        backData = $.parseJSON("{}");
    return backData;
}

jQuery.extend(webbuilder, (function (win, $) {
    return {
        // 更新访问量并返回当前访问量
    	addPageView: function (viewGuid, callback) {
            var str = {"siteGuid": siteInfo.siteGuid,"viewGuid": viewGuid};
			Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/addPageView",
				data: str,
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, true);
        },
        
        // 更新referrer和useragent
        addReferrer: function (referrer,host,useragent, callback) {
            var str = {"siteGuid": siteInfo.siteGuid,"referrer": referrer,"host": host,"useragent":useragent};
			Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/addReferrer",
				data: str,
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, true);
        },

        //更新访问用户
        addSiteVisiter: function (userGuid, callback) {
            var str = {"siteGuid": siteInfo.siteGuid,"userGuid": userGuid};
			Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/addSiteVisiter",
				data: str,
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, true);
        },

        // 获取总访问量
        getSiteViewCount: function (callback) {
            var str = {"siteGuid": siteInfo.siteGuid};
			Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/getSiteViewCount",
				data: str,
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, true);
        },
        
        // 获取站点每日访问量
        getSiteEveryDayViewCount: function (callback) {
            var str = {"siteGuid": siteInfo.siteGuid};
			Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/getSiteEveryDayViewCount",
				data: str,
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, true);
        },

        // 根据访问量排序获取信息
        getCateInfoOrderByViewCount: function (categoryNum, length,systemName, callback) {
            var str = {"siteGuid": siteInfo.siteGuid,"categoryNum": categoryNum,"length": length,"systemName": systemName};
			Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/getCateInfoOrderByViewCount",
				data: str,
				success: function(msg) {
					callback(checkJson(msg.custom.hotInfoList));
				}
			}, true);
        },

        // 获取验证码
        getVerificationCode: function (width, height, codeNum, interferenceLine, codeGuid, callback) {
        	var str = {"width": width,"height": height,"codeNum": codeNum,"interferenceLine": interferenceLine,"codeGuid": codeGuid};
			Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/getVerificationCode",
				data: str,
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, true);
        },
        
        // 获取sm2加密码
        getSecuritysm2EncodePubk: function (callback) {
        	var str = {};
			Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/getSecuritysm2EncodePubk",
				data: str,
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, true);
        },

        // 用户登陆
        registeredUserLogin: function (userAccount, userPwd, verificationCode, verificationGuid, rememberMeMark, beforePageUrl, callback) {
        	var str = {"userAccount": userAccount,"userPwd": userPwd,"verificationCode": verificationCode,"verificationGuid": verificationGuid,"rememberMeMark": rememberMeMark,"beforePageUrl": beforePageUrl};
        	Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/registeredUserLogin",
				data: str,
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, true);
        },

        // 用户登出
        registeredUserLogout: function (callback) {
        	Util.ajax({
                url: siteInfo.projectName + "/rest/frontAppNeedLoginAction/registeredUserLogout",
                type: "post",
                dataType: "json",
                cache: false,
                success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, true);
        },
        
     // 论坛登出
        BBSloginout: function (callback) {
        	Util.ajax({
                    url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/BBSloginout",
                    type: "post",
                    dataType: "json",
                    cache: false,
                    success:function (msg) {
                    callback(checkJson(msg.custom));
                }
        	}, true);
        },


        // 注册用户
        registerUser: function (userAccount, userPwd, userType, mobile, userEmail,code, callback) {
        	var str = {"userAccount": userAccount,"userPwd": userPwd,"userType": userType,"mobile": mobile,"userEmail": userEmail,"code": code};
			Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/registerUser",
				data: str,
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, true);
        },

        // 获取注册用户类型
        getRegisteredUserTypeList: function (callback) {
        	Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/getRegisteredUserTypeList",
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, true);
        },


        // 用户信息收藏
        collectInsert: function (infoTitle, infoUrl, infoID, callback) {
            Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNeedLoginAction/collectInsert",
				data: {"siteGuid": siteInfo.siteGuid,"infoTitle": infoTitle,"infoUrl": infoUrl,"infoID": infoID},
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, false);
        },

        // 获取用户收藏信息
        getUserCollect: function (callback) {
            Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNeedLoginAction/getUserCollect",
				success: function(msg) {
					callback(checkJson(msg.custom.collectList));
				}
			}, false);
        },

        // 删除收藏信息
        deleteCollect: function (collectGuid, callback) {
            Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNeedLoginAction/deleteCollect",
				data: {"collectGuid": collectGuid},
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, false);
        },

        // 提交评论
        submitInfoFeedBack: function (nickName, anonymous, pjfs, plContent, imgGuid, yzm, loginID, infoId, categoryNum, callback) {
        	var str = {"siteGuid": siteInfo.siteGuid,"nickName": nickName,"anonymous": anonymous,"pjfs": pjfs,"plContent": plContent,"imgGuid": imgGuid,"yzm": yzm,"infoId": infoId,"categoryNum": categoryNum};
			Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/submitInfoFeedBack",
				data: str,
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, true);
        },

        // 获取评论列表
        getInfofeedback: function (infoid, categorynum, pageIndex, pageSize, callback) {
        	var str = {"siteGuid": siteInfo.siteGuid,"infoid": infoid,"categorynum": categorynum,"pageIndex": pageIndex,"pageSize": pageSize};
			Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/getInfofeedback",
				data: str,
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, true);
        },

        // 获取评论数
        getInfofeedbackCount: function (infoid, categorynum, callback) {
        	var str = {"siteGuid": siteInfo.siteGuid,"infoid": infoid,"categorynum": categorynum};
			Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/getInfofeedbackCount",
				data: str,
				success: function(msg) {
					callback(checkJson(msg.custom.count));
				}
			}, true);
        },

        // 在线投票
        onlineVote: function ( voteId, options, callback) {
        	var str = {"siteGuid": siteInfo.siteGuid,"voteId": voteId,"options": options};
			Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/onlineVote",
				data: str,
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, true);
        },

        // 获取投票信息
        getNewVoteCount: function (voteId, callback) {
        	var str = {"siteGuid": siteInfo.siteGuid,"voteId": voteId};
			Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/getNewVoteCount",
				data: str,
				success: function(msg) {
					callback(checkJson(msg.custom.voteList));
				}
			}, true);
        },

        // 网上调查统计结果
        selectQResult: function (QID, callback) {
            var str = {"siteGuid": siteInfo.siteGuid,"QID": QID};
			Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/selectQResult",
				data: str,
				success: function(msg) {
					callback(checkJson(msg.custom.sub));
				}
			}, true);
        },

        // 网上调查提交
        vote: function (options, contents, questionnaireId, yzm, imgguid, isIe8,callback) {
            var str = {"siteGuid": siteInfo.siteGuid,"options": options,"contents": contents,"questionnaireId": questionnaireId,"yzm": yzm,"imgguid": imgguid,"isIe8":isIe8};
			Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/vote",
				data: str,
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, true);
        },

        // 获取首页面的在线访谈记录
        getZxftInfoList: function(callback) {
			Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/getZxftInfoList",
				data: {"siteGuid": siteInfo.siteGuid},
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, true);
        },

        // 根据栏目名称模糊查询并返回所有父栏目
        getFullLikeCate: function (categoryName, callback) {
            Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/getFullLikeCate",
				data: {"siteGuid": siteInfo.siteGuid,"categoryName": categoryName},
				success: function(msg) {
					callback(checkJson(msg.custom.cateList));
				}
			}, true);
        },

        // 根据栏目号获取信息标题列表
        getTitleListByCategoryNum: function (categoryNum, length, callback) {
            Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/getTitleListByCategoryNum",
				data: {"siteGuid": siteInfo.siteGuid,"categoryNum": categoryNum,"length": length},
				success: function(msg) {
					callback(checkJson(msg.custom.titleList));
				}
			}, true);
        },

        // 获取栏目头条信息正文
        getCateTopInfoContent: function (categoryNum, callback) {
            Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/getCateTopInfoContent",
				data: {"siteGuid": siteInfo.siteGuid,"categoryNum": categoryNum},
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, true);
        },

        // 获取信息详情
        getInfoByID: function (infoID, callback) {
            Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/getInfoByID",
				data: {"siteGuid": siteInfo.siteGuid,"infoID": infoID},
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, true);
        },
        // 获取百度oauth认证token
        getBaiduToken: function (infoID, callback) {
        	Util.ajax({
        		url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/getBaiduToken",
        		success: function(msg) {
        			callback(checkJson(msg.custom.result));
        		}
        	}, true);
        },
        // 获取信箱组别列表
        getLetterGroupList: function(groupNumbers,callback) {
        	var str = {"siteGuid": siteInfo.siteGuid,"groupNumbers": groupNumbers};
			Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/getLetterGroupList",
				data: str,
				success: function(msg) {
					callback(checkJson(msg.custom.groupList));
				}
			}, true);
        },
        // 获取信箱下拉列表
        getLetterBoxs: function (groupGuid,callback) {
        	var str = {"siteGuid": siteInfo.siteGuid,"groupGuid": groupGuid};
			Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/getLetterBoxList",
				data: str,
				success: function(msg) {
					callback(checkJson(msg.custom.boxs));
				}
			}, true);
        },
        // 获取信件类别下拉列表
        getLetterTypes: function (boxGuid, callback) {
			Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/getLetterTypes",
				data: {"siteGuid": siteInfo.siteGuid, "boxGuid": boxGuid},
				success: function(msg) {
					callback(checkJson(msg.custom.types));
				}
			}, true);
        },
        // 咨询投诉信件提交
        letterPost: function (postUserName, tel, sex, email, address, subject, content, yzm, imgGuid, boxGuid, pwd, consultType, isUserAllowedPublish, submitTimes, callback) {
        	var str = {"siteGuid": siteInfo.siteGuid,"postUserName": postUserName,"tel": tel,"sex": sex,"email": email,"address": address,"subject": subject,"content": content,"yzm": yzm,"imgGuid": imgGuid,"boxGuid": boxGuid,"pwd": pwd,"consultType": consultType,"isUserAllowedPublish": isUserAllowedPublish,"submitTimes": submitTimes};
			Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/letterPost",
				data: str,
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, true);
        },
        // 获取信件列表
        getLetterList: function (cNum, cPwd, group, pageIndex, pageSize, callback) {
        	var str = {"siteGuid": siteInfo.siteGuid,"cNum": cNum,"cPwd": cPwd,"group": group,"pageIndex": pageIndex,"pageSize": pageSize};
			Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/getLetterList",
				data: str,
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, true);
        },
        // 咨询投诉信件详情
        getLetterDetail: function (infoGuid, callback) {
        	var str = {"siteGuid": siteInfo.siteGuid,"infoGuid": infoGuid};
			Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/getLetterDetail",
				data: str,
				success: function(msg) {
					callback(checkJson(msg.custom.data));
				}
			}, true);
        },
        // 咨询投诉满意度列表
        getSatisfaction: function (callback) {
			Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/getSatisfaction",
				success: function(msg) {
					callback(checkJson(msg.custom.mydList));
				}
			}, true);
        },
        // 咨询投诉满意度评价
        letterComment: function (myd,pwd,infoGuid, callback) {
        	var str = {"siteGuid": siteInfo.siteGuid,"myd": myd,"pwd": pwd,"infoGuid": infoGuid};
			Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/letterComment",
				data: str,
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, true);
        },
        // 获取招投标栏目信息发布数量
        getZTBCategoryInfoCount: function (categoryNum,callback) {
			Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/getZTBCategoryInfoCount",
				data: {"siteGuid": siteInfo.siteGuid,"categoryNum": categoryNum},
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, true);
        },
      
        initGovDept:function(callback){
        	Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/initGovDept",
				data: {"parentDeptCode": ""},
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, true);
        },
        	 
        addPersonalApply:function(param, callback){
        	Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/addPersonalApply",
				data: {"params": param},
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, true);
        },

    	//合并依申请公开接口
        addApply:function(param, callback){
        	param.siteGuid = siteInfo.siteGuid;
        	Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/addApply",
				data: param,
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, true);
        },
        
        getApplyResult:function (YZM, imageguid, applyflown, searchPwd, callback){
    		Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/getApplyResult",
				data: {"siteGuid": siteInfo.siteGuid,"applyflown":applyflown,"searchPwd": searchPwd,"YZM":YZM,"imageguid":imageguid},
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, true);
        },
        //获取在线访谈前台展示列表
        getOnlineInterviewList:function(type, pageIndex, pageSize,callback){
    		Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/getOnlineInterviewList",
				data: {"siteGuid": siteInfo.siteGuid,"type": type,"pageIndex": pageIndex,"pageSize": pageSize},
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, true);
		},
		//获取在线访谈详细信息
		getMeetInfo:function(meetingGuid, callback){
    		Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/getMeetInfo",
				data: {"siteGuid": siteInfo.siteGuid,"meetingGuid": meetingGuid},
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, true);
		},
		//获取在线访谈精彩瞬间图片
		getMeetSpecialPic:function(meetingGuid,callback){
    		Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/getMeetSpecialPic",
				data: {"siteGuid": siteInfo.siteGuid,"meetingGuid": meetingGuid},
				success: function(msg) {
					callback(checkJson(msg.custom.picList));
				}
			}, true);
		},
		//获取在线访谈初始化问答
		getMeetAskList:function(meetingGuid,callback){
    		Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/getMeetAskList",
				data: {"siteGuid": siteInfo.siteGuid,"meetingGuid": meetingGuid},
				success: function(msg) {
					callback(checkJson(msg.custom.askList));
				}
			}, true);
		},
		//获取在线访谈问题提交
		meetAskPost:function(meetingGuid, userName, askContent, callback){
    		Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/meetAskPost",
				data: {"siteGuid": siteInfo.siteGuid,"meetingGuid": meetingGuid,"userName": userName,"askContent": askContent},
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, true);
		},
		//用户注册，发送手机验证码
		sendSmsValidateCode:function(phone, callback){
			var str = {"phone": phone};
			Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/sendSmsValidateCode",
				data: str,
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, true);
		},
		//前台用户访问量统计，供智能推送使用
		visitStatistics:function(infoId){
    		var str = {"siteGuid": siteInfo.siteGuid,"infoId": infoId};
			Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/visitStatistics",
				data: str,
				success: function(msg) {
				}
			}, true);
		},
		//获取���台用户智能推送列表
		getSmartPushList:function(callback){
			Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNeedLoginAction/getSmartPushList",
				data: {"siteGuid": siteInfo.siteGuid},
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, false);
		},
		//获取前台用户智能推送列表
		getCategorySubscribeList:function(type, callback){
			Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNeedLoginAction/getCategorySubscribeList",
				data: {"siteGuid": siteInfo.siteGuid, "type": type},
				success: function(msg) {
					callback(checkJson(msg.custom.cateList));
				}
			}, false);
		},
		//获取前台用户订阅栏目信息列表
		getMySubscribeList:function(type,pageIndex, pageSize, callback){
			Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNeedLoginAction/getMySubscribeList",
				data: {"siteGuid": siteInfo.siteGuid,"type": type,"pageIndex": pageIndex,"pageSize": pageSize},
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, false);
		},
		//定制我的栏目
		subscribeMyCategory:function(selectValue, type, callback){
			Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNeedLoginAction/subscribeMyCategory",
				data: {"siteGuid": siteInfo.siteGuid,"type": type,"selectValue": selectValue},
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, false);
		},
		//获取前台用户中心消息
		getMessageCenterList:function(pageIndex, pageSize, callback){
			Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNeedLoginAction/getMessageCenterList",
				data: {"siteGuid": siteInfo.siteGuid,"pageIndex": pageIndex,"pageSize": pageSize},
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, false);
		},
		//点击查看用户中心消息后修改阅读状态
		modifyMsgStatus:function(msgGuid, callback){
			Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNeedLoginAction/modifyMsgStatus",
				data: {"siteGuid": siteInfo.siteGuid,"msgGuid": msgGuid},
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, false);
		},
		//删除用户中心消息
		deleteMessageCenterMsg: function (rowguid, callback) {
			Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNeedLoginAction/deleteMessageCenterMsg",
				data: {"siteGuid": siteInfo.siteGuid,"rowguid": rowguid},
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, false);
        },
        //获取前台用户中心依申请公开列表
        getMyDependApplyList: function (searchPwd, type, keyWord, pageIndex, pageSize, callback) {
        	Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNeedLoginAction/getMyDependApplyList",
				data: {"siteGuid": siteInfo.siteGuid,"searchPwd": searchPwd,"type": type,"keyWord": keyWord,"pageIndex": pageIndex,"pageSize": pageSize},
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, false);
        },
        // 我的咨询投诉信件列表
        getMyLetterList: function (group, pageIndex, pageSize, callback) {
        	Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNeedLoginAction/getMyLetterList",
				data: {"siteGuid": siteInfo.siteGuid,"group": group,"pageIndex": pageIndex,"pageSize": pageSize},
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, false);
        },
        // 最新咨询投诉信件列表
        getLetterListByCondition: function (subject, postName, replyContent, content,startTime,endTime,group, pageIndex, pageSize, callback) {
        	var str = {"siteGuid": siteInfo.siteGuid,"subject": subject,"postName": postName,"replyContent": replyContent,"content": content,"startTime": startTime,"endTime": endTime,"group": group,"pageIndex": pageIndex,"pageSize": pageSize};
			Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/getLetterListByCondition",
				data: str,
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, true);
        },
        //获取我的账户信息
        getAccountsInfo: function (callback) {
        	Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNeedLoginAction/getAccountsInfo",
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, false);
        },
        //修改我的账户信息
        modifyAccountsInfo: function (userAccount, displayName, userType, mobile, userEmail, callback) {
        	Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNeedLoginAction/modifyAccountsInfo",
				data: {"userAccount": userAccount,"displayName": displayName,"userType": userType,"mobile": mobile,"userEmail": userEmail},
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, false);
        },
        //信息公开获取机构
		getXxgkDept: function (url, callback) {
			Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNeedLoginAction/getXxgkDept",
				data: {"siteGuid": siteInfo.siteGuid, "url": url},
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, false);
        },
        
        
		///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        
        //前台注册用户找回密码验证用户信息
        checkUserAccount:function(userAccount, verificationCode, verificationGuid,callback){
			Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/checkUserAccount",
				data: {"userAccount": userAccount, "verificationCode": verificationCode, "verificationGuid": verificationGuid},
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, true);
		},
		//前台用户找回密码发送短信验证码
		getSmsValidateCode:function(userGuid,callback){
    		Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/getSmsValidateCode",
				data: {"userGuid": userGuid},
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, true);
		},
		//前台用户找回密码发送邮箱验证码
		getEmailValidateCode:function(userGuid,callback){
    		Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/getEmailValidateCode",
				data: {"siteGuid": siteInfo.siteGuid, "userGuid": userGuid},
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, true);
		},
		//前台用户找回密码，通过手机验证码修改密码
		modifyForgetPsdBySmsValidateCode:function(userGuid, smsValidateCode, password, callback){
    		Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/modifyForgetPsdBySmsValidateCode",
				data: {"userGuid": userGuid, "smsValidateCode": smsValidateCode, "password": password},
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, true);
		},
		//前台用户找回密码，验证短信验证码是否正��
		modifyForgetPsdByEmailValidateCode:function(userGuid, emailValidateCode, password, callback){
    		Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/modifyForgetPsdByEmailValidateCode",
				data: {"userGuid": userGuid, "emailValidateCode": emailValidateCode, "password": password},
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, true);
		},
		//前台用户注册，通过手机短信验证码验证方式
		registerUserByPhone:function(username, password, phone, smsValidateCode,callback){
			var str = {"username": username,"password": password,"phone": phone,"smsValidateCode": smsValidateCode};
			Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/registerUserByPhone",
				data: str,
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, true);
		},
		//前台用户注册，通过邮件验证码验证方式
		registerByEmail:function(username, password, email,frontUrl,callback){
			var str = {"siteGuid": siteInfo.siteGuid,"username": username,"password": password,"email": email,"frontUrl": frontUrl};
			Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/registerByEmail",
				data: str,
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, true);
		},
		//前台用户注册，邮件激活用户
		activateAccount:function(account, uniqueCode, callback){
			Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/activateAccount",
				data: {"siteGuid": siteInfo.siteGuid,"account": account,"uniqueCode": uniqueCode},
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, true);
		},
		//前台用户注册，获取已订阅栏目
		getMyCategorySub:function(type, callback){
			Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNeedLoginAction/getMyCategorySub",
				data: {"siteGuid": siteInfo.siteGuid, "type": type},
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, false);
		},
		//前台用户注册，删除一个栏目的订阅
		deleteSubscribe:function(curId, type, callback){
    		Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNeedLoginAction/deleteSubscribe",
				data: {"siteGuid": siteInfo.siteGuid, "curId": curId, "type": type},
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, false);
		},
		//前台用户修改密码,检查原登录密码是否正确
		checkLoginPassword:function(pwd, callback){
    		Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNeedLoginAction/checkLoginPassword",
				data: {"pwd": pwd},
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, false);
		},
		//前台用户修改密码
		modifyPassword:function(password, callback){
    		Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNeedLoginAction/modifyPassword",
				data: {"password": password},
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, false);
		},
		//前台用户注册，修改绑定手机号
		boundPhone:function(phone, smsValidateCode, callback){
    		Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNeedLoginAction/boundPhone",
				data: {"phone": phone, "smsValidateCode": smsValidateCode},
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, false);
		},
		//前台用户注册，修改绑定邮箱
		boundEmail:function(email, emailValidateCode, callback){
    		Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNeedLoginAction/boundEmail",
				data: {"email": email, "emailValidateCode": emailValidateCode},
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, false);
		},
		//前台用户，绑定手机发送短信验证码
		boundPhoneValidateCode:function(phone, callback){
    		Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNeedLoginAction/boundPhoneValidateCode",
				data: {"phone": phone},
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, false);
		},
		//前台用户，绑定邮箱发送短信验证码
		boundEmailValidateCode:function(email, callback){
    		Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNeedLoginAction/boundEmailValidateCode",
				data: {"siteGuid": siteInfo.siteGuid, "email": email},
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, false);
		},
		//前台用户，修改个人资料
		saveMemberInfo:function(phone,displayName,trueName,sex,cardId,birthDay,email,callback){
			Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNeedLoginAction/saveMemberInfo",
				data: {"phone": phone,"displayName": displayName,"trueName": trueName,"sex": sex,"cardId": cardId,"birthDay": birthDay,"email":email},
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, false);
		},
		//RSS订阅页面
		getRssInfoList:function(cateNum,callback){
			var str = {"siteGuid": siteInfo.siteGuid,"cateNum": cateNum};
			Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/getRssInfoList",
				data: str,
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, true);
		},
		//确认取消邮箱订阅
		doMailSubscribe:function(type, callback){
    		Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNeedLoginAction/doMailSubscribe",
				data: {"type": type},
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, false);
		},
		//验证用户名是否已经被注册
		checkUserNameIsInUse:function(userName,callback){
			var str = {"userName": userName};
        	Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/checkUserNameIsInUse",
				data: str,
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, true);
		},
		//用户中心获取头像生成到临时目录，裁剪使用
		getRegisterHeadPic:function(callback){
            Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNeedLoginAction/getRegisterHeadPic",
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, false);
		},
		//将前台头像的推荐头像图片路径转为byte[]并存入用户表
		saveMemberClassicHead:function(headImgSrc, callback){
			Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNeedLoginAction/saveMemberClassicHead",
				data: {"headImgSrc": headImgSrc},
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, false);
		},
		//将图片base64编码保存转为byte[]并存到用户表中
		saveMemberHead:function(imgbase64, callback, errorCallback){
			Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNeedLoginAction/saveMemberHead",
				data: {"imgbase64": imgbase64},
				success: function(msg) {
					callback(checkJson(msg.custom));
				},
				error: function(msg) {
					errorCallback(msg);
				}
			}, false);
		},
		
		//获取cms信息列表
		getWebInfoList:function(title,categorynum,beginDate,toDate,infostatuscode,pageIndex, pageSize,callback){
            var str = {"siteGuid": siteInfo.siteGuid,"title": title,"categorynum": categorynum,"beginDate": beginDate,"toDate": toDate,"infostatuscode": infostatuscode,"pageIndex": pageIndex,"pageSize": pageSize};
			Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/getWebInfoList",
				data: str,
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, true);
		},
		//获取一条详细信息
		getOneInformation:function(infoid,callback){
            var str = {"siteGuid": siteInfo.siteGuid,"infoid": infoid};
			Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/getOneInformation",
				data: str,
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, true);
		},
		//获取cms栏目
		getWebdbCategory:function(categorynum,categoryname,callback){
            var str = {"siteGuid": siteInfo.siteGuid,"categorynum": categorynum,"categoryname": categoryname};
			Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/getWebdbCategory",
				data: str,
				success: function(msg) {
					callback(checkJson(msg.custom.cateList));
				}
			}, true);
		},
		//获取信息公开归档信息
        getGovWebInfoList:function(deptcode,categorynum,title,beginDate,toDate,theme,genre,pageIndex, pageSize,callback){
            var str = {"siteGuid": siteInfo.siteGuid,"deptcode": deptcode,"categorynum": categorynum,"title": title,"beginDate": beginDate,"toDate": toDate,"theme": theme,"genre": genre,"pageIndex": pageIndex,"pageSize": pageSize};
			Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/getGovWebInfoList",
				data: str,
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, true);
        },
        //获取一条信息公开详细信息
        getOneGovInformation:function(infoid,callback){
            var str = {"siteGuid": siteInfo.siteGuid,"infoid": infoid};
			Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/getOneGovInformation",
				data: str,
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, true);
        },
        //获取信息公开机构
        getWebdbGovDept:function(deptcode,deptname,callback){
            var str = {"siteGuid": siteInfo.siteGuid,"deptcode": deptcode,"deptname": deptname};
			Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/getWebdbGovDept",
				data: str,
				success: function(msg) {
					callback(checkJson(msg.custom.deptList));
				}
			}, true);
        },
        //获取信息公开类目
        getWebdbGovCategory:function(deptcode,categorynum,categoryname,callback){
            var str = {"siteGuid": siteInfo.siteGuid,"deptcode": deptcode,"categorynum": categorynum,"categoryname": categoryname};
			Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/getWebdbGovCategory",
				data: str,
				success: function(msg) {
					callback(checkJson(msg.custom.cateList));
				}
			}, true);
        },
        //获取信息公开主题
        getWebdbGovTheme:function(themevalue,themename,callback){
            var str = {"siteGuid": siteInfo.siteGuid,"themevalue": themevalue,"themename": themename};
			Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/getWebdbGovTheme",
				data: str,
				success: function(msg) {
					callback(checkJson(msg.custom.themeList));
				}
			}, true);
        },
        //获取信息公开体裁
        getWebdbGovGenre:function(genrevalue,genrename,callback){
        	var str = {"siteGuid": siteInfo.siteGuid,"genrevalue": genrevalue,"genrename": genrename};
			Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/getWebdbGovGenre",
				data: str,
				success: function(msg) {
					callback(checkJson(msg.custom.genreList));
				}
			}, true);
        },
        //获取分页列表
        getPageInfoList: function(controlname, callback) {
            var pageIndex=getQueryString('pageIndex');
            var categoryNum=getQueryString('categoryNum');
            var str = {"siteGuid": siteInfo.siteGuid,"categoryNum": categoryNum,"pageIndex": pageIndex,"controlname": controlname};
			Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/getPageInfoList",
				data: str,
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, true);

        },
        //需验证码验证获取分页列表
        getPageInfoListNew: function(controlname, callback) {
            var pageIndex=getQueryString('pageIndex');
            var categoryNum=getQueryString('categoryNum');
            var ImgGuid=getQueryString('ImgGuid');
            var YZM=getQueryString('YZM');
            var str = {"siteGuid": siteInfo.siteGuid,"categoryNum": categoryNum,"pageIndex": pageIndex,"controlname": controlname,"ImgGuid": ImgGuid,"YZM": YZM};
			Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/getPageInfoListNew",
				data: str,
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, true);

        },
        getCustomClassPageInfoList: function(controlname, callback) {
            var pageIndex=getQueryString('pageIndex');
            var classCode=getQueryString('classCode');
            var str = {"siteGuid": siteInfo.siteGuid,"classCode": classCode,"pageIndex": pageIndex,"controlname": controlname};
			Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/getCustomClassPageInfoList",
				data: str,
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, true);

        },
        getQueryString:function (name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return encodeURI(r[2]);
            return null;
        },
        getGovInfoList:function(controlName,deptCode,categoryNum,theme,genre,pageIndex,callback){
        	var str = {"siteGuid": siteInfo.siteGuid,"controlName": controlName,"deptCode": deptCode,"categoryNum": categoryNum,"theme": theme,"genre": genre,"pageIndex": pageIndex};
			Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/getGovInfoList",
				data: str,
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, true);
        },
        getGovCommonInfoList:function(controlName,columnNum,pageIndex,callback){
            var str = {"siteGuid": siteInfo.siteGuid,"controlName": controlName,"columnNum": columnNum,"pageIndex": pageIndex};
			Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/getGovCommonInfoList",
				data: str,
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, true);
        },
        getServerTime:function(controlName,columnNum,pageIndex,callback){
			Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/getServerTime",
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, true);
        },
        
        /**
         * 新在线访谈接口
         * */
        getNewMeetingInfo:function(callback){
        	var str = {"siteGuid":siteInfo.siteGuid};
            Util.ajax({
                url: siteInfo.projectName + "/rest/frontInterviewAction/getNewMeetingInfo",
                data: str,
                success: function(msg) {
					callback(checkJson(msg.custom));
				}
            },true);
        },
        
        getMeetingList:function(pageIndex,pageSize,callback){
        	var str = {"siteGuid":siteInfo.siteGuid,"pageIndex":pageIndex,"pageSize":pageSize};
            Util.ajax({
                url: siteInfo.projectName + "/rest/frontInterviewAction/getMeetingList",
                data: str,
                success: function(msg) {
					callback(checkJson(msg.custom));
				}
            },true);
        },
        
        getMeetDetail:function(meetingGuid,callback){
        	var str = {"siteGuid":siteInfo.siteGuid,"meetingGuid":meetingGuid};
            Util.ajax({
                url: siteInfo.projectName + "/rest/frontInterviewAction/getMeetDetail",
                data: str,
                success: function(msg) {
					callback(checkJson(msg.custom));
				}
            },true);
        },
        
        getMeetingPicList:function(meetingGuid,count,callback){
        	var str = {"siteGuid":siteInfo.siteGuid,"meetingGuid":meetingGuid,"count":count};
            Util.ajax({
                url: siteInfo.projectName + "/rest/frontInterviewAction/getMeetingPicList",
                data: str,
                success: function(msg) {
					callback(checkJson(msg.custom));
				}
            },true);
        },
        
        getMeetingAskList:function(meetingGuid,callback){
        	var str = {"siteGuid":siteInfo.siteGuid,"meetingGuid":meetingGuid};
            Util.ajax({
                url: siteInfo.projectName + "/rest/frontInterviewAction/getMeetingAskList",
                data: str,
                success: function(msg) {
					callback(checkJson(msg.custom));
				}
            },true);
        },
        
        meetingAskSubmit:function(meetingGuid,userName,loginId,askContent,callback){
        	var str = {"siteGuid":siteInfo.siteGuid,"meetingGuid":meetingGuid,"userName":userName,"loginId":loginId,"askContent":askContent};
            Util.ajax({
                url: siteInfo.projectName + "/rest/frontInterviewAction/meetingAskSubmit",
                data: str,
                success: function(msg) {
					callback(checkJson(msg.custom));
				}
            },true);
        },
        
        getMeetPreview:function(meetingGuid,callback){
        	var str = {"siteGuid":siteInfo.siteGuid,"meetingGuid":meetingGuid};
            Util.ajax({
                url: siteInfo.projectName + "/rest/frontInterviewAction/getMeetPreview",
                data: str,
                success: function(msg) {
					callback(checkJson(msg.custom));
				}
            },true);
        },
        
        // 动态获取分页验证码
        pageListVerify: function (ImgGuid, YZM, callback) {
        	var str = {"siteGuid":siteInfo.siteGuid,"ImgGuid":ImgGuid,"YZM":YZM};
        	Util.ajax({
                url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/pageListVerify",
                data: str,
                success: function(msg) {
					callback(checkJson(msg.custom));
				}
        	},true);
        }
        ,
		 //动态获取cms归档信息
        getCmsArchiveInfoList:function(infoname,starttime,endtime, pageIndex, pageSize,callback){
        	var str= {"siteGuid": siteInfo.siteGuid,"infoname": infoname,"starttime": starttime,"endtime": endtime,"pageIndex": pageIndex,"pageSize": pageSize};
       		Util.ajax({
    				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/getCmsArchiveInfoList",
    				data: str,
    				cache:false,
    				success: function(msg) {
    					callback(checkJson(msg.custom));
    				}
    			}, true);
    		},
		//动态获取归档信息详情
		getOneArchiveInformation:function(infoid,callback){
            var str = {"siteGuid": siteInfo.siteGuid,"infoid": infoid};
			Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/getOneArchiveInformation",
				data: str,
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, true);
		},
		getTemplatePage:function(localpath, parentpath,callback){
			Util.ajax({
				url: siteInfo.projectName + "/rest/frontAppNotNeedLoginAction/getHtmlnew?siteGuid="+siteInfo.siteGuid+"&localpath="+localpath+"&projectName="+ siteInfo.projectName+"&parentpath="+parentpath,
				type:'get',
				dataType:'text',
				success: function(msg) {
				msg = JSON.parse(msg);
				if(typeof(msg) == "object" && 
					  Object.prototype.toString.call(msg).toLowerCase() == "[object object]" && !msg.length){
					  callback(checkJson(msg.custom));
					}else{
						callback(msg.custom);
					}
				}
			}, true);
        },
        initFailPage: function () {
        	var parentpath =window.parent.document.referrer;
            var localpath = window.document.location.pathname;
            this.getTemplatePage(localpath,parentpath, function (data) {
                if (localpath.indexOf(siteInfo.vname) == 0) {
                    var mywindow=window.open(data.html, "_blank");
                    history.go(-1);
                } else {
					if(typeof(data) == "object" && 
					  Object.prototype.toString.call(data).toLowerCase() == "[object object]" && !data.length){
					  document.write(data.html.replace(/\ufeff/g, ''));
						document.close();
					}else{
						document.write(data);
						document.close();
					}
				}
                    
                
            });
        }
    }
}(this, jQuery)));