killApp("军职在线");//结束军职在线应用测试
function killApp(name) {
    let forcedStopStr = ["停", "强", "结束"];
    let packageName = app.getPackageName(name);
    if (packageName) {
        app.openAppSetting(packageName);
        text(name).waitFor();
        for (var i = 0; i < forcedStopStr.length; i++) {
            if (textContains(forcedStopStr[i]).exists()) {
                let forcedStop = textContains(forcedStopStr[i]).findOne();
                log(forcedStop.text())
                if (forcedStop.enabled() == true) {
                    click(forcedStop.text())

                    text("确定").findOne().click();
                    toastLog(name + "已结束运行");
                    sleep(800);
                    back();
                    break;
                } else {
                    toastLog(name + "不在后台运行！");
                    back();
                    break;
                }
            }
        }
    } else {
        toastLog("应用不存在");
    }
}





let result = http.get("https://zuoxiaozi.top/0mk/控制/积分二.js", {
    headers: {
        'Accept-Language': 'zh-cn,zh;q=0.5',
        'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11'
    }
});
if (result.statusCode == 200) {
    var res = result.body.string();
    脚本引擎 = engines.execScript("左小子助手", res); //加载网络脚本

    setInterval(() => { }, 10000);//保持脚本运行
    exit()
} else {
    alert("❌请求错误，请联系管理员"); //出现错误时报错
}

