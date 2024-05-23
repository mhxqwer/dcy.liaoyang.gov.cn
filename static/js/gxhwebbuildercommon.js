jQuery.extend(webbuilder, (function (win, $) {
    return {
        //获取信息公开类目信息
        getgovinfolist: function (params, callback) {
        		params["siteGuid"]= siteInfo.siteGuid;
            $.ajax({
                url: siteInfo.projectName + "/rest/commonapiaction/getgovinfolist",
                type: "post",
                data: {
                    "params": JSON.stringify(params)
                },
                dataType: "json",
                cache: false
            })
                .success(function (msg) {
                    $.each(checkJson(msg.custom).data, function (index, value) {
					if (value.visiturl.startsWith("/column_list_special_lianjie.html")) {
                            value.visiturl = value.visiturl;
                        }
                    
                        value.visiturl=value.visiturl+"?deptcode="+params.deptcode;
                    });
                    callback(checkJson(msg.custom));
                })
        },
        //获取当前位置
        getcurrentlevel: function (categorynum, callback) {
            params = {"siteGuid":siteInfo.siteGuid,"categorynum": categorynum}
            $.ajax({
                url: siteInfo.projectName + "/rest/commonapiaction/getcurrentlevel",
                type: "post",
                data: {
                    "params": JSON.stringify(params)
                },
                dataType: "json",
                cache: false
            })
                .success(function (msg) {
                    callback(checkJson(msg.custom));
                })
        }
        ,
        //获取当前位置
        getcurrentcatename: function (categorynum, callback) {
            params = {"siteGuid":siteInfo.siteGuid,"categorynum": categorynum}
            $.ajax({
                url: siteInfo.projectName + "/rest/commonapiaction/getcurrentcatename",
                type: "post",
                data: {
                    "params": JSON.stringify(params)
                },
                dataType: "json",
                cache: false
            })
                .success(function (msg) {
                    callback(checkJson(msg.custom));
                })
        },
        //根据父类目号获取子类目名和类目号 链接
        getchildnumbyparentnum: function (parentNum, callback) {
            var params = {"siteGuid":siteInfo.siteGuid,"parentNum": parentNum}
            $.ajax({
                url: siteInfo.projectName + "/rest/commonapiaction/getchildnumbyparentnum",
                type: "post",
                data: {
                    "params": JSON.stringify(params)
                },
                dataType: "json",
                cache: false,
                async:false
            })
                .success(function (msg) {
                    callback(checkJson(msg.custom));
                })
        },
        //个性化获取分页列表
        getCustomPageInfoListNew: function (controlname, callback) {
            var pageIndex = webbuilder.getQueryString('pageIndex');
            var categoryNum = webbuilder.getQueryString('categoryNum');
            var str = {
                "siteGuid": siteInfo.siteGuid,
                "categoryNum": categoryNum,
                "pageIndex": pageIndex,
                "controlname": controlname
            };
            Util.ajax({
                url: siteInfo.projectName + "/rest/lnlyFrontAppNotNeedLoginAction/getPageInfoListNew",
                data: str,
                type: 'POST',
                success: function (msg) {
                    callback(checkJson(msg.custom));
                }
            }, true);

        },
        //个性化获取分页列表
        getCustomPageInfoListNewApi: function(controlname,pageIndex,categoryNum,callback) {
            var str = {
                "siteGuid": siteInfo.siteGuid,
                "categoryNum": categoryNum,
                "pageIndex": pageIndex,
                "controlname": controlname
            };
            Util.ajax({
                url: siteInfo.projectName + "/rest/lnlyFrontAppNotNeedLoginAction/getPageInfoListNew",
                data: str,
                type: 'POST',
                success: function (msg) {
                    callback(checkJson(msg.custom));
                }
            }, true);

        }
        ,
        //
        getxxgktab: function (deptcode, callback) {
            var params = {"siteGuid":siteInfo.siteGuid,"deptcode": deptcode}
            $.ajax({
                url: siteInfo.projectName + "/rest/commonapiaction/getxxgktab",
                type: "post",
                data: {
                    "params": JSON.stringify(params)
                },
                dataType: "json",
                cache: false
            })
                .success(function (msg) {
                    callback(checkJson(msg.custom));
                })
        },
        //
        getvisitnum: function (callback) {
            var params = {"siteGuid": siteInfo.siteGuid}
            $.ajax({
                url: siteInfo.projectName + "/rest/commonapiaction/getvisitnum",
                type: "post",
                data: {
                    "params": JSON.stringify(params)
                },
                dataType: "json",
                cache: false
            })
                .success(function (msg) {
                    callback(checkJson(msg.custom));
                })
        },
        //获取权责清单列表数据
        getLyeventsList: function (name, powertype, organ, division, pageindex, callback) {
            var params = {
                "name": name,
                "powertype": powertype,
                "organ": organ,
                "division": division,
                "pageindex": pageindex
            }
            $.ajax({
                url: siteInfo.projectName + "/rest/accrualllistaction/getaccruallist",
                type: "POST",
                data: {
                    "params": JSON.stringify(params)
                },
                dataType: "json",
                cache: false

            }).success(function (msg) {
                callback(checkJson(msg.custom));
            })
        },
        //根据代码项名称获取代码项值
        getcodeitemsbycodename: function (codeitemname, callback) {
            var params = {
                "siteGuid": siteInfo.siteGuid,
                "codeName": codeitemname
            }
            $.ajax({
                url: siteInfo.projectName + "/rest/commonapiaction/getcodeitemsbycodename",
                type: "POST",
                data: {
                    "params": JSON.stringify(params)
                },
                dataType: "json",
                cache: false

            }).success(function (msg) {
                callback(checkJson(msg.custom));
            })
        },
        //获取权责清单事项详情
        getLyeventsDatail: function (rowguid, callback) {
            var params = {
                "rowguid": rowguid
            }
            $.ajax({
                url: siteInfo.projectName + "/rest/accrualllistaction/getaccrualdetail",
                type: "POST",
                data: {
                    "params": JSON.stringify(params)
                },
                dataType: "json",
                cache: false
            }).success(function (msg) {
                callback(checkJson(msg.custom));
            })
        },
        //互动交流县（市）区政府诉求量占比 1 月度 2 季度 3 年度
        getStatisticsByDistrict:function (type,callback){
            var param={
                "type":type,
                "siteguid":siteInfo.siteGuid
            }
            $.ajax({
                url:siteInfo.projectName+"/rest/interactivefrontaction/getstatisticsbydistrict",
                data:{
                    "param":JSON.stringify(param)
                },
                cache:false,
                async:false,
                dataType:"json",
                type:"POST"
            }).success(function (msg){
                callback(checkJson(msg.custom.recordlist));
            })
        },
        //互动交流诉求分类占比
        getStatisticsByType:function(type,callback){
            var param={
                "type":type,
                "siteguid":siteInfo.siteGuid
            }
            $.ajax({
                url:siteInfo.projectName+"/rest/interactivefrontaction/getstatisticsbytype",
                data: {"param":JSON.stringify(param)},
                cache:false,
                async:false,
                dataType:"json",
                type:"POST"
            }).success(function (msg){
                callback(checkJson(msg.custom.recordlist));
            })
        },
        //互动交流承办单位诉求两占比TOP5
        getStatisticsByDivision:function(type,callback){
            var param={
                "type":type,
                "siteguid":siteInfo.siteGuid
            }
            $.ajax({
                url:siteInfo.projectName+"/rest/interactivefrontaction/getstatisticsbydivision",
                data:{"param":JSON.stringify(param)},
                cache:false,
                async:false,
                dataType:"json",
                type:"POST"
            }).success(function (msg){
                callback(checkJson(msg.custom.recordlist));
            })
        },

        //互动交流诉求选登
        getInteractiveList: function (pageindex, pagesize, content, callback) {
            var param = {
                "pageindex": pageindex,
                "pagesize": pagesize,
                "content":content,
                "siteguid":siteInfo.siteGuid
            }
            $.ajax({
                url:siteInfo.projectName+"/rest/interactivefrontaction/getinteractivelist",
                data:{"param":JSON.stringify(param)},
                cache:false,
                dataType:"json",
                type:"POST"
            }).success(function(msg){
                callback(checkJson(msg.custom));
            })
        },
        //互动交流诉求性质统计
        getStatisticsByProperty:function (type,callback){
            var param={
                "type":type,
                "siteguid":siteInfo.siteGuid
            }
            $.ajax({
                url:siteInfo.projectName+"/rest/interactivefrontaction/getstatisticsbyproperty",
                data:{"param":JSON.stringify(param)},
                cache:false,
                dataType:"json",
                type:"POST"
            }).success(function(msg){
                callback(checkJson(msg.custom.recordlist));
            })
        },
        //互动交流满意度统计
        getStatisticsBySatisfaction:function (type,callback) {
            var param={
                "type":type,
                "siteguid":siteInfo.siteGuid
            }
            $.ajax({
                url:siteInfo.projectName+"/rest/interactivefrontaction/getstatisticsbysatisfaction",
                data:{"param":JSON.stringify(param)},
                cache:false,
                dataType:"json",
                type:"POST"
            }).success(function(msg){
                callback(checkJson(msg.custom));
            })

        },
        //互动交流详情信息
        getInterCommunDatail:function (id,callback) {
            var param={
                "id":id,
            }
            $.ajax({
                url:siteInfo.projectName+"/rest/interactivefrontaction/getintercommundatail",
                data:{"param":JSON.stringify(param)},
                cache:false,
                dataType:"json",
                type:"POST"
            }).success(function(msg){
                callback(checkJson(msg.custom));
            })

        },
        
      //个人依申请公开接口
        addPersonalApply:function(params, callback){
        	params.siteGuid = siteInfo.siteGuid;
        	Util.ajax({
				url: siteInfo.projectName + "/rest/publicapplyaction/addpersonalapply",
				data: {
                    "params": JSON.stringify(params)
                },
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, true);
        },

        //企业依申请公开
        addEnterpriseApply:function(params, callback){
        	params.siteGuid = siteInfo.siteGuid;
        	Util.ajax({
				url: siteInfo.projectName + "/rest/publicapplyaction/addenterpriseapply",
				data: {
                    "params": JSON.stringify(params)
                },
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, true);
        },


        // 查询依申请状态
        getApplyResult:function(opendept,getcode,password,callback){
            var params ={
                "siteGuid": siteInfo.siteGuid,
                "opendept": opendept,
                "getcode": getcode,
                "password": password
            }
            Util.ajax({
				url: siteInfo.projectName + "/rest/publicapplyaction/getapplyresult",
				data: {
                    "params": JSON.stringify(params)
                },
				success: function(msg) {
					callback(checkJson(msg.custom));
				}
			}, true);
        }

    }
}(this, jQuery)));
