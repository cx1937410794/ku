function 关闭同名() {
    let currentEngine = engines.myEngine();
    let runningEngines = engines.all();
    let runningSize = runningEngines.length;
    let currentSource = currentEngine.getSource() + ''
    if (runningSize > 1) {
        runningEngines.forEach(compareEngine => {
            let compareSource = compareEngine.getSource() + ''
            if (currentEngine.id !== compareEngine.id && compareSource === currentSource) {
                // 强制关闭同名的脚本
                compareEngine.forceStop();
                toast("关闭其他");
            };
        });
    };
};
关闭同名();
日志控制台();
var idlujing = storages.create("shuju");//配置文件

var 功能_自动答题线程引擎 = null;
var 功能_自动爬题线程引擎 = null;

var 功能权限 = false;

let window = floaty.window(
    <vertical>
        <button id="功能窗口移动" textColor="white" text=" 移动窗口 " w="70" h="40" bg="#40000000" textSize="13sp" />
        <button id="功能_自动答题" textColor="white" text=" 自动答题 " w="70" h="40" bg="#40000000" textSize="13sp" />
        <button id="功能_自动爬题" textColor="white" text=" 自动爬题 " w="70" h="40" bg="#40000000" textSize="13sp" />
        <button id="功能停止运行" textColor="white" text=" 停止功能 " w="70" h="40" bg="#40000000" textSize="13sp" />
        <button id="功能退出" textColor="white" text=" 退出程序 " w="70" h="40" bg="#40000000" textSize="13sp" />
    </vertical>
);

//设置悬浮窗位置并常驻
window.setPosition(device.width * 0.85, device.height * 0.67);
setInterval(() => { }, 1000);

//设置控制台位置
function set_Console() {
    threads.start(function () {
        console.show();
        sleep(100);
        console.setSize(device.width * 0.9, device.height * 0.34);
        console.setPosition(-27, device.height * 0.68);
    })
}

let wx, wy, downTime, windowX, windowY;
// 这个函数是对应悬浮窗的移动
window.功能窗口移动.setOnTouchListener(function (view, event) {
    switch (event.getAction()) {
        case event.ACTION_DOWN:
            wx = event.getRawX();
            wy = event.getRawY();
            windowX = window.getX();
            windowY = window.getY();
            downTime = new Date().getTime();
            return true;
        case event.ACTION_MOVE:
            // 如果按下的时间超过 xx 秒判断为长按，调整悬浮窗位置
            if (new Date().getTime() - downTime > 300) {
                window.setPosition(windowX + (event.getRawX() - wx), windowY + (event.getRawY() - wy));
            }
            return true;
        case event.ACTION_UP:
            // 手指弹起时如果偏移很小则判断为点击
            if (Math.abs(event.getRawY() - wy) < 30 && Math.abs(event.getRawX() - wx) < 30) {
                toastLog(" 长按调整位置 ")
            }
            return true;
    }
    return true;
});

// 退出程序按钮
window.功能退出.click(() => {
    //关机按钮
    //shell("reboot -p", true);
    threads.shutDownAll();
    engines.stopAll();
    exit();
});


window.功能_自动答题.click(() => {
    if (功能权限 == true) {
        功能_自动爬题线程引擎 = threads.start(function () {
            toastLog(" 开启运行");
            自动功能_答题();
            setInterval(() => { }, 1000)
        });
    } else {
        alert("请先验证功能");
    };

});

window.功能_自动爬题.click(() => {
    if (功能权限 == true) {
        功能_自动答题线程引擎 = threads.start(function () {
            toastLog(" 开启运行");
            alert("管理员权限开放");
            // 自动功能_爬题();
            setInterval(() => { }, 1000)
        });
    } else {
        alert("请先验证功能");
    };;
});

window.功能停止运行.click(() => {//关闭功能
    if (功能_自动答题线程引擎 !== null) {
        if (功能_自动答题线程引擎.isAlive() == true) {
            toastLog(" 已关闭 ");
            功能_自动答题线程引擎.interrupt();
        };
    };
    if (功能_自动爬题线程引擎 !== null) {
        if (功能_自动爬题线程引擎.isAlive() == true) {
            toastLog(" 已关闭 ");
            功能_自动爬题线程引擎.interrupt();
        };
    };
});












// *********************
// 自动答题
// *********************

function 自动功能_答题() {
    while (true) {
        答题一次();
        sleep("1000");
        text("下一题").findOne(500).click();
        sleep("100");
        if (id("tishi2").text("此为最后一题").exists()) {
            className("android.view.View").desc("我知道了").waitFor();
            className("android.view.View").desc("我知道了").findOne().parent().click();

            className("android.view.View").text("提交作业").waitFor() || className("android.view.View").text("提交考试").waitFor();
            className("android.view.View").text("提交作业").findOne().click();

            id("tishi").text("你已全部完成本次作业/考试，确认要交卷吗？").waitFor();
            className("android.view.View").desc("确定").findOne().click();
            break;
        };


    };
};


function 答题一次() {
    // 判断题型
    var 题库http = "https://jzzx.top/0mk/0tiku/tiku_json_20221129.json";
    let 题目_完整题目 = className("android.view.View").id("app").findOne().child(2).text();// 这里匹配出全部挖空
    let res = http.get(题库http, { headers: { 'Accept-Language': 'zh-cn,zh;q=0.5', 'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11' } });
    let json = res.body.json();
    // log(json[题目_完整题目])//取数组内容
    // log(json[题目_完整题目].length) //取数量 
    log("调试模式:题目★" + 题目_完整题目)
    log("调试模式:答案★" + json[题目_完整题目][0])//取数组内容  
    if (textContains(".单选题").exists()) {
        if (json[题目_完整题目]) {
            if (textContains(json[题目_完整题目][0])) {
                // textContains(json[题目_完整题目][0]).findOne().parent().click()
                // log(click(textContains(json[题目_完整题目][0]).findOne().bounds().centerX(), textContains(json[题目_完整题目][0]).findOne().bounds().centerY()))
                if (textContains(json[题目_完整题目][0]).click()) {
                    log("点击方案A");
                    textContains(json[题目_完整题目][0]).click();
                } else {
                    log("点击方案B");
                    while (!click(json[题目_完整题目][0]));
                };
            } else {
                log("请手动点击答案:" + json[题目_完整题目][0])
            };
        } else {
            log("此题无答案:★" + 题目_完整题目 + "★");
        };


    } else if (textContains(".判断题").exists()) {
        if (json[题目_完整题目]) {
            text(json[题目_完整题目][0]).click();
        } else { log("此题无答案:★" + 题目_完整题目 + "★"); };
    } else if (textContains(".多选题").exists()) {
        if (json[题目_完整题目]) {
            if (json[题目_完整题目]) {
                for (var i = 0; i <= json[题目_完整题目].length; i++) {
                    textContains(json[题目_完整题目][i]).click();
                };
            } else {
                log("没有此题:★" + 题目_完整题目 + "★");
            };
        } else { log("此题无答案:★" + 题目_完整题目 + "★"); };
    };
    return true;
}; 
// *********************
// 自动爬题
// *********************
function 自动功能_爬题() {
    while (true) {
        取出一个题的全部内容();
        className("android.view.View").text("下一题").findOne(500).click();
        sleep("200");
        if (id("tishi2").text("此为最后一题").exists()) {
            className("android.view.View").desc("我知道了").findOne().parent().click();
            // app.viewFile("/sdcard/zuoxiaozi_data.zip");//打开文件
            break;
        };
    };
};
function 取出一个题的全部内容() {
    var json库 = {};
    let 题目_完整题目 = className("android.view.View").id("app").findOne().child(2).text();
    log(题目_完整题目);
    var 题目_取选项数 = className("android.view.View").id("app").findOne().child(3);
    if (题目_取选项数.childCount() == 2) {
        let 选项一 = className("android.view.View").id("app").findOne().child(3).child(0).child(1).text();
        let 选项二 = className("android.view.View").id("app").findOne().child(3).child(1).child(1).text();
        var text = json库[题目_完整题目] = ['"' + 选项一 + '"', '"' + 选项二 + '"'];
        files.append("/sdcard/zuoxiaozi_data.zip", '"' + 题目_完整题目 + '":[' + text + "],\n");
    };
    if (题目_取选项数.childCount() == 3) {
        let 选项一 = className("android.view.View").id("app").findOne().child(3).child(0).child(1).text();
        let 选项二 = className("android.view.View").id("app").findOne().child(3).child(1).child(1).text();
        let 选项三 = className("android.view.View").id("app").findOne().child(3).child(2).child(1).text();
        var text = json库[题目_完整题目] = ['"' + 选项一 + '"', '"' + 选项二 + '"', '"' + 选项三 + '"'];
        files.append("/sdcard/zuoxiaozi_data.zip", '"' + 题目_完整题目 + '":[' + text + "],\n");
    };
    if (题目_取选项数.childCount() == 4) {
        let 选项一 = className("android.view.View").id("app").findOne().child(3).child(0).child(1).text();
        let 选项二 = className("android.view.View").id("app").findOne().child(3).child(1).child(1).text();
        let 选项三 = className("android.view.View").id("app").findOne().child(3).child(2).child(1).text();
        let 选项四 = className("android.view.View").id("app").findOne().child(3).child(3).child(1).text();
        var text = json库[题目_完整题目] = ['"' + 选项一 + '"', '"' + 选项二 + '"', '"' + 选项三 + '"', '"' + 选项四 + '"'];
        files.append("/sdcard/zuoxiaozi_data.zip", '"' + 题目_完整题目 + '":[' + text + "],\n");
    };
    if (题目_取选项数.childCount() == 5) {
        let 选项一 = className("android.view.View").id("app").findOne().child(3).child(0).child(1).text();
        let 选项二 = className("android.view.View").id("app").findOne().child(3).child(1).child(1).text();
        let 选项三 = className("android.view.View").id("app").findOne().child(3).child(2).child(1).text();
        let 选项四 = className("android.view.View").id("app").findOne().child(3).child(3).child(1).text();
        let 选项五 = className("android.view.View").id("app").findOne().child(3).child(4).child(1).text();
        var text = json库[题目_完整题目] = ['"' + 选项一 + '"', '"' + 选项二 + '"', '"' + 选项三 + '"', '"' + 选项四 + '"', '"' + 选项五 + '"'];
        files.append("/sdcard/zuoxiaozi_data.zip", '"' + 题目_完整题目 + '":[' + text + "],\n");
    };
    if (题目_取选项数.childCount() == 6) {
        let 选项一 = className("android.view.View").id("app").findOne().child(3).child(0).child(1).text();
        let 选项二 = className("android.view.View").id("app").findOne().child(3).child(1).child(1).text();
        let 选项三 = className("android.view.View").id("app").findOne().child(3).child(2).child(1).text();
        let 选项四 = className("android.view.View").id("app").findOne().child(3).child(3).child(1).text();
        let 选项五 = className("android.view.View").id("app").findOne().child(3).child(4).child(1).text();
        let 选项六 = className("android.view.View").id("app").findOne().child(3).child(5).child(1).text();
        var text = json库[题目_完整题目] = ['"' + 选项一 + '"', '"' + 选项二 + '"', '"' + 选项三 + '"', '"' + 选项四 + '"', '"' + 选项五 + '"', '"' + 选项六 + '"'];
        files.append("/sdcard/zuoxiaozi_data.zip", '"' + 题目_完整题目 + '":[' + text + "],\n");
    };
    if (题目_取选项数.childCount() == 7) {
        let 选项一 = className("android.view.View").id("app").findOne().child(3).child(0).child(1).text();
        let 选项二 = className("android.view.View").id("app").findOne().child(3).child(1).child(1).text();
        let 选项三 = className("android.view.View").id("app").findOne().child(3).child(2).child(1).text();
        let 选项四 = className("android.view.View").id("app").findOne().child(3).child(3).child(1).text();
        let 选项五 = className("android.view.View").id("app").findOne().child(3).child(4).child(1).text();
        let 选项六 = className("android.view.View").id("app").findOne().child(3).child(5).child(1).text();
        let 选项七 = className("android.view.View").id("app").findOne().child(3).child(6).child(1).text();
        var text = json库[题目_完整题目] = ['"' + 选项一 + '"', '"' + 选项二 + '"', '"' + 选项三 + '"', '"' + 选项四 + '"', '"' + 选项五 + '"', '"' + 选项六 + '"', '"' + 选项七 + '"'];
        files.append("/sdcard/zuoxiaozi_data.zip", '"' + 题目_完整题目 + '":[' + text + "],\n");
    };
    if (题目_取选项数.childCount() == 8) {
        let 选项一 = className("android.view.View").id("app").findOne().child(3).child(0).child(1).text();
        let 选项二 = className("android.view.View").id("app").findOne().child(3).child(1).child(1).text();
        let 选项三 = className("android.view.View").id("app").findOne().child(3).child(2).child(1).text();
        let 选项四 = className("android.view.View").id("app").findOne().child(3).child(3).child(1).text();
        let 选项五 = className("android.view.View").id("app").findOne().child(3).child(4).child(1).text();
        let 选项六 = className("android.view.View").id("app").findOne().child(3).child(5).child(1).text();
        let 选项七 = className("android.view.View").id("app").findOne().child(3).child(6).child(1).text();
        let 选项八 = className("android.view.View").id("app").findOne().child(3).child(7).child(1).text();
        var text = json库[题目_完整题目] = ['"' + 选项一 + '"', '"' + 选项二 + '"', '"' + 选项三 + '"', '"' + 选项四 + '"', '"' + 选项五 + '"', '"' + 选项六 + '"', '"' + 选项七 + '"', '"' + 选项八 + '"'];
        files.append("/sdcard/zuoxiaozi_data.zip", '"' + 题目_完整题目 + '":[' + text + "],\n");
    };
    if (题目_取选项数.childCount() == 9) {
        let 选项一 = className("android.view.View").id("app").findOne().child(3).child(0).child(1).text();
        let 选项二 = className("android.view.View").id("app").findOne().child(3).child(1).child(1).text();
        let 选项三 = className("android.view.View").id("app").findOne().child(3).child(2).child(1).text();
        let 选项四 = className("android.view.View").id("app").findOne().child(3).child(3).child(1).text();
        let 选项五 = className("android.view.View").id("app").findOne().child(3).child(4).child(1).text();
        let 选项六 = className("android.view.View").id("app").findOne().child(3).child(5).child(1).text();
        let 选项七 = className("android.view.View").id("app").findOne().child(3).child(6).child(1).text();
        let 选项八 = className("android.view.View").id("app").findOne().child(3).child(7).child(1).text();
        let 选项九 = className("android.view.View").id("app").findOne().child(3).child(8).child(1).text();
        var text = json库[题目_完整题目] = ['"' + 选项一 + '"', '"' + 选项二 + '"', '"' + 选项三 + '"', '"' + 选项四 + '"', '"' + 选项五 + '"', '"' + 选项六 + '"', '"' + 选项七 + '"', '"' + 选项八 + '"', '"' + 选项九 + '"'];
        files.append("/sdcard/zuoxiaozi_data.zip", '"' + 题目_完整题目 + '":[' + text + "],\n");
    };
    if (题目_取选项数.childCount() == 10) {
        let 选项一 = className("android.view.View").id("app").findOne().child(3).child(0).child(1).text();
        let 选项二 = className("android.view.View").id("app").findOne().child(3).child(1).child(1).text();
        let 选项三 = className("android.view.View").id("app").findOne().child(3).child(2).child(1).text();
        let 选项四 = className("android.view.View").id("app").findOne().child(3).child(3).child(1).text();
        let 选项五 = className("android.view.View").id("app").findOne().child(3).child(4).child(1).text();
        let 选项六 = className("android.view.View").id("app").findOne().child(3).child(5).child(1).text();
        let 选项七 = className("android.view.View").id("app").findOne().child(3).child(6).child(1).text();
        let 选项八 = className("android.view.View").id("app").findOne().child(3).child(7).child(1).text();
        let 选项九 = className("android.view.View").id("app").findOne().child(3).child(8).child(1).text();
        let 选项十 = className("android.view.View").id("app").findOne().child(3).child(9).child(1).text();
        var text = json库[题目_完整题目] = ['"' + 选项一 + '"', '"' + 选项二 + '"', '"' + 选项三 + '"', '"' + 选项四 + '"', '"' + 选项五 + '"', '"' + 选项六 + '"', '"' + 选项七 + '"', '"' + 选项八 + '"', '"' + 选项九 + '"', '"' + 选项十 + '"'];
        files.append("/sdcard/zuoxiaozi_data.zip", '"' + 题目_完整题目 + '":[' + text + "],\n");
    };
    // json库[题目_完整题目] = ['"' + 选项一 + '"', '"' + 选项二 + '"', '"' + 选项三 + '"', '"' + 选项四 + '"'];
    // var text = json库[题目_完整题目] = ['"' + 选项一 + '"', '"' + 选项二 + '"', '"' + 选项三 + '"', 选项四];
    // files.append("/sdcard/zuoxiaozi_data.zip", '"' + 题目_完整题目 + '":[' + text + "],\n");
};




// 积分控制窗口() //总日志窗口
function checkid() { //检查id函数
    console.info("当前安卓版本:" + device.release) //提示信息
    if (device.release < 7) {
        alert("安卓版本太低!请使用安卓7.0以上版本手机。")
        console.hide() //关闭日志窗口
        engines.stopAllAndToast(); //终止所有脚本
        exit();
    }
    //静音
    shell("input keyevent 164", false);
    launchPackage("com.moocxuetang"); //打开APP
    // waitForPackage("com.moocxuetang"); //等待APP出现

    if (textContains("跳过").findOne(5000)) {
        while (!click("跳过"));
        toastLog("关闭广告倒计时");
    } else {
        toastLog("没有广告倒计时");
    };
    关闭每日广告()
    返回首页()
    关闭每日广告()
    className("android.widget.TextView").text("我的").findOne().parent().click(); //切换到我的页面
    关闭每日广告()
    if (id("tvID").className("android.widget.TextView").findOne(3000) != null) { //获取个人id，如果没有登录则返回null
        var jzzx_id = id("tvID").findOne().text() //取ID文本
        var jzzxid = /ID\s(\d{4,8})/gi.exec(jzzx_id); //正则提取id号
        idlujing.put("idlujing", jzzxid[1]); //存ID
        threads.start(function () {
            function 到期时间() {
                let res = http.get("https://ghproxy.com/https://raw.githubusercontent.com/cx1937410794/ku/main/0mk/UI/右侧账号.json", {
                    headers: {
                        'Accept-Language': 'zh-cn,zh;q=0.5',
                        'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11'
                    }
                });
                if (res.statusCode != 200) {
                    alert("❌获取失败: " + res.statusCode);
                    return;
                }
                let json = res.body.json();
                let thisTime = json[jzzxid[1]];
                服务器一到期时间 = thisTime
                if (thisTime == undefined || thisTime == null) {
                    console.error("ID：" + jzzxid[1] + "\n🕒到期时间:查无此号.\n尝试切换第二服务器")
                    第二服务器()
                    return;
                }

                thisTime = thisTime.replace(/-/g, '/');
                let time = new Date(thisTime);
                return 到期 = time.getTime();

            }
            function 网络时间() { //网络时间
                try {
                    let data = "http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp".body.json();
                    return Math.floor(data["data"]["t"] / 1000) + "000";
                } catch (error) {
                    return Math.floor(new Date().getTime() / 1000) + "000";
                }
            }
            //——————————————————————————————————
            let 结果i = 到期时间() - (网络时间())
            if (结果i > 0) {
                toastLog("到期时间:" + 服务器一到期时间)
                alert("验证成功    支持课程:\n军事理论综合版\noffice高校办公\n演讲与口才\n走进航空航天");
                功能权限 = true;

            } else if (0 > 结果i) {
                let res = http.get("https://ghproxy.com/https://raw.githubusercontent.com/cx1937410794/ku/main/0mk/UI/右侧账号.json", {
                    headers: {
                        'Accept-Language': 'zh-cn,zh;q=0.5',
                        'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11'
                    }
                });
                if (res.statusCode != 200) {
                    toastLog("❌获取失败: " + res.statusCode);
                    return;
                }
                let json = res.body.json();
                let thisTime = json[jzzxid[1]];
                console.error("ID：" + jzzxid[1] + "\n🕒到期时间:" + thisTime + "\nID到期，请充值.\n尝试切换第二服务器")
                第二服务器()
            }


            function 第二服务器() {
                var 登陆信息 = http.post("http://w.eydata.net/F7070128475F611E", {
                    "UserName": "a" + jzzxid[1],
                    "UserPwd": "a" + jzzxid[1],
                    "Version": '3.2.6',
                    "Mac": device.model
                }); //登录
                登陆返回信息 = 登陆信息.body.string()
                console.info("♥验证成功♥")
                toastLog("本机对接密钥" + 登陆返回信息)
                if (登陆返回信息.length == 32) { //登陆成功时执行以下
                    // threads.start(function () {
                    var 退出登录 = http.post("http://w.eydata.net/97A7730FD7832AB7", {
                        "StatusCode": 登陆返回信息,
                        "UserName": "a" + jzzxid[1]
                    });
                    退出结果 = 退出登录.body.string()
                    toastLog("对接" + 退出结果 + "次")
                    if (退出结果 == "1") { //成功
                        alert("验证成功\n重点:请在课程详情页面点击功能");
                        功能权限 = true;
                    } else {
                        toastLog("操作失败")
                        exit()
                    }

                    return true //返回登陆成功
                } else if (登陆返回信息.length == -110) {
                    toastLog("❌时间已到期,请充值.")
                } else if (登陆返回信息.length == -115) {
                    toastLog("用户已被禁用，如有疑问请联系客服。")
                } else if (登陆返回信息.length == -102) { //用户不存在
                    toastLog("❌此ID未被注册，请在助手查看")
                }
            }
        });

    } else { //没有找到id号
        console.error("⚠️请查看是否登录，已终止执行软件")
        exit();
    }
};

checkid()//启动脚本



function 关闭每日广告() {
    sleep(1000)
    if (id("ibClose").findOnce(1000)) {
        id("ibClose").findOne().click();
        log("关闭每日广告");
    } else {
        log("没有每日广告");
    };
};


var 循环总次数 = 0;
function 返回首页() {
    sleep(1000);
    let flag = false;
    var 次数 = 1;
    while (!flag) {
        if (text("学习室").exists()) {
            console.info("返回首页了")
            flag = true;
            break;
        }
        console.warn("返回主页");
        次数 = 次数 + 1
        sleep(1000);
        if (次数 > 5) {
            console.log("正在重启APP")
            if (!(launchApp(decodeURI("%E5%86%9B%E8%81%8C%E5%9C%A8%E7%BA%BF")) || launch('com.moocxuetang'))) { }//启动APP
            // sleep(2000)
            循环总次数 = 循环总次数 + 1
            sleep(1000)
            log(循环总次数)
            if (循环总次数 > 3) {
                console.log("重启3次失败，建议重启手机后再试")
                exit();
            }
            if (id("tvSkip").className("android.widget.TextView").findOne(5000) != null) { //跳过开屏
                while (!click("5s跳过"));
                返回首页()
            }
        }
        back()
        sleep(1000)
    };
};


function 日志控制台() {//设置控制台位置
    threads.start(function () {
        console.show();
        sleep(100);
        console.setSize(device.width * 0.40, device.height * 0.30);
        console.setPosition(5, device.height * 0.10);
    });
};



threads.start(function () {//启动另一个线程
    while (true) {
        sleep(10000);
        toast("弹窗检测....")
        if (id("tvRight").exists()) {
            text("不，继续学习").click()
            toastLog("选择继续学习")
        }
        if (id("exo_player_error_btn_id").text("播放异常,视频地址异常，或者网络不可用").exists()) {
            id("exo_player_error_btn_id").text("播放异常,视频地址异常，或者网络不可用").findOne().click()
            toastLog("选择重新播放")
        }
        if (className("android.widget.TextView").text("您当前网络不是wifi，是否继续观看").exists()) {
            id("button1").findOne().click()
            toastLog("选择继续观看")
        }
        if (text("继续")) {//默认使用数据网络
            click("继续");
            click("确定");
        }
    }
});