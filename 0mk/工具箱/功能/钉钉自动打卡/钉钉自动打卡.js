var 配置项 = storages.create("shuju"); //被存的数据路径

if (配置项.get("锁屏密码开关") == true) {




    if (!device.isScreenOn()) {//小米自动解锁
        device.wakeUpIfNeeded();
        sleep(2000);
        swipe(500, 1500, 500, 500, 100);
        sleep(300);
        var password = 配置项.get("锁屏密码输入框")
        for (var i = 0; i < password.length; i++) {
            a = password.charAt(i)
            log(a);
            sleep(100);
            b = text(a).findOne().bounds();
            click(b.centerX(), b.centerY());
        };
    };
};



function 启动APP() {
    console.log(); ("安卓版本:" + device.release);
    if (device.release < 7) { alert("安卓版本太低!请使用安卓7.0以上版本手机。"); console.hide(); exit(); };
    shell("input keyevent 164", false);//静音
    launchPackage("com.alibaba.android.rimet");//打开APP
    app.launch("com.alibaba.android.rimet")
    app.launchApp("钉钉")
    while (!className("android.widget.TextView").text("工作台").exists()) { sleep(3000); log("等待返回主页"); };
    console.info("进入主页完成");
    打卡();
};
启动APP();

function 打卡() {
    className("android.widget.TextView").text("工作台").findOne().parent().click();
    while (!text("考勤打卡").exists()) { console.log("等待考勤打卡按钮"); sleep(3000); };
    if (text("考勤打卡").findOne().click()) {
        log("进入考勤");
    };

    while (!text("超出管理员指定打卡范围").exists()) { console.log("等待外勤打卡按钮"); sleep(3000); };

    if (text("外勤打卡").exists()) {
        while (!click("外勤打卡"));
    } else if (text("内勤打卡").exists()) {
        while (!click("内勤打卡"));
    };

    while (!textContains("外勤打卡").exists()) { console.log("待外勤打卡按钮出现"); sleep(3000); };
    while (!click("外勤打卡"));

    console.log("5秒后继续"); sleep(5000);
    if (text("开始拍照确认").exists()) {
        console.log("当前需要拍照确认");
        text("开始拍照确认").findOne().click(); console.log("点击拍照确认");
        while (!id("camera_takephoto").exists()) { console.log("等待拍照按钮"); sleep(3000); };
        id("camera_takephoto").findOne().click(); console.log("咔嚓");
        while (!text("确认").exists()) { console.log("等待确认拍照按钮"); sleep(3000); };
        id("picedit_usephoto").findOne().click(); console.log("确认完成");
        while (!text("查看打卡结果").exists()) { console.log("等待拍照结果"); sleep(3000); };
        console.log("外勤打卡完成");
    } else {
        while (!textContains("外勤打卡").exists()) { console.log("待外勤打卡按钮出现"); sleep(3000); };
        while (!click("外勤打卡"));
        while (!text("查看打卡结果").exists()) { console.log("等待拍照结果"); sleep(3000); };
        console.log("外勤打卡完成");
    };
};