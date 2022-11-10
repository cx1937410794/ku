"ui";
//推送
var xxset = {
    "url": "http://www.pushplus.plus/send", //定义微信推送对象 url+"?token="+token+"&title="+title+"&content="+content
    "token": "0174cd8846854b7a8a665dbba842c46e", //在pushplus网站登录可以找到自己的token
    "wxpost": 1, //是否微信推送
}

var DLog; //记录内容推送用
function pushwx(title, content) { //发送日志post
    var wxsend = http.post(xxset.url, {
        "token": xxset.token,
        "title": title,
        "content": content,
    });
    return wxsend;
}

function detailLog(str, log) { //推送 日志记录和弹出提示
    var time = new java.text.SimpleDateFormat('HH:mm:ss').format(new Date());
    str = str + "<br/>" + time + " " + log;
    return str;
}



ui.statusBarColor("#000000")
ui.layout(
    <vertical>
        <text textSize="18sp" textColor="#000000" margin="20" textStyle="bold"> 关于《左小子助手》系列APP的用户调查</text>
        <text textSize="15sp" textColor="#000000" margin="20" textStyle="bold"> 为了给大家提供更好的使用效果，请把您宝贵的建议意见反馈给我们，我们会对每个人进行答复，谢谢配合。</text>
        <ScrollView>
            <vertical>
                <text textSize="16sp" textStyle="bold" textColor="#FF0000" margin="8">1. 您是通过什么方式知道左小子助手的?</text>
                <input id="答案获取方式" textColor="#5c7a29" text=""/>
                
                <text textSize="16sp" textStyle="bold" textColor="#FF0000" margin="8">2. 您使用《左小子助手》系列APP感受如何?</text>
                <horizontal>
                    <text textSize="16sp">请选择</text>
                    <spinner id="sp1" entries="好用|一般|不好用，放弃|不好用，配合改进"/>
                </horizontal>
                
                
                <text textSize="16sp" textStyle="bold" textColor="#FF0000" margin="8">3. 您使用的是《左小子助手》系列那款APP?</text>
                <horizontal>
                    <text textSize="16sp">请选择</text>
                    <spinner id="sp2" entries="轻简笔记|轻简备忘录"/>
                </horizontal>
                
                
                <text textSize="16sp" textStyle="bold" textColor="#FF0000" margin="8">4.您还有其他建议或者建议吗?</text>
                <input id="建议意见" textColor="#5c7a29" text=""/>
                
                
                <text textSize="16sp" textStyle="bold" textColor="#FF0000" margin="8">5.您的联系方式：(例：微信 zuoxiaozi)</text>
                <linear>
                    <input id="联系方式" textColor="#5c7a29" text ="" w="*"/>
                </linear>
                
                
                <linear gravity="center">
                    <button id ="提交问卷" textStyle="bold" margin="25">提交</button>
                    <button id ="放弃提交" textStyle="bold" margin="25">放弃</button>
                </linear>
            </vertical>
        </ScrollView>
    </vertical>
)









ui.提交问卷.click(() => {
    if (ui.sp1.getSelectedItemPosition() == "0") {
        var 感受 = "好用"
    }
    if (ui.sp1.getSelectedItemPosition() == "1") {
        var 感受 = "一般"
    }
    if (ui.sp1.getSelectedItemPosition() == "2") {
        var 感受 = "不好用放弃"
    }
    if (ui.sp1.getSelectedItemPosition() == "3") {
        var 感受 = "不好用愿意改进"
    }

    var i2 = ui.sp2.getSelectedItemPosition();


    if (ui.sp2.getSelectedItemPosition() == "0") {
        var 试用APP = "轻简笔记"
    }
    if (ui.sp2.getSelectedItemPosition() == "1") {
        var 试用APP = "轻简备忘录"
    }







    var jqm = device.getAndroidId(); //机器码  //微信推送
    DLog = detailLog("输出日志", "机器码:" + jqm);
    var bsm = device.fingerprint //唯一标识码
    DLog = detailLog(DLog, "标识码:" + bsm);
    var battery = device.getBattery(); //获取电量
    DLog = detailLog(DLog, "设备当前电量：" + battery);
    DLog = detailLog(DLog, "知道方式：" + ui.答案获取方式.text());
    DLog = detailLog(DLog, "感受如何:" + 感受);
    DLog = detailLog(DLog, "使用APP:" + 试用APP);
    DLog = detailLog(DLog, "建议意见:" + ui.建议意见.text());
    DLog = detailLog(DLog, "联系方式:" + ui.联系方式.text());



    if (xxset.wxpost) { //微信推送学习情况
        var nowtime = new java.text.SimpleDateFormat('HH:mm:ss').format(new Date());
        var title = nowtime + "左小子助手调查问卷"
        var content = DLog;
        var wxsend = pushwx(title, content);
        if (wxsend.statusCode == 200) { //发送成功与否？
            DLog = detailLog(DLog, "--==  成功  ==--"); //成功发送日志
            alert("反馈成功，感谢您的支持。")
            exit()
        } else {
            DLog = detailLog(DLog, "+++ 失败，请检查 +++");
            alert("反馈异常。")
            exit()
        }
    } //推送结束



});


ui.放弃提交.click(() => {
    toast("放弃提交问卷")
    exit()
});