$(function () {


})
function shareTo(types){

    var title,imageUrl,url,description,keywords;
 
    //获取文章标题
    title = document.title;
 
    //获取当前网页url
    url = document.location.href;

    //qq空间接口的传参
    if(types=='qzone'){
        window.open('https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url='+url+'&sharesource=qzone&title='+title+'&pics='+imageUrl);
    }
    //新浪微博接口的传参
    if(types=='sina'){
        window.open('http://service.weibo.com/share/share.php?url='+url+'&sharesource=weibo&title='+title+'&pic='+imageUrl+'&appkey=2706825840');
    }
    //qq好友接口的传参
    if(types == 'qq'){
        window.open('http://connect.qq.com/widget/shareqq/index.html?url='+url+'&sharesource=qzone&title='+title+'&pics='+imageUrl+'&summary='+description+'&desc='+keywords);
    }
    //生成二维码给微信扫描分享
    if(types == 'wechat'){
        var yuming =$("#yuming").html();
        if(!yuming){
            yuming="";
        }
        window.open(yuming+"/qrcode.html?url="+url);
    }
 
}