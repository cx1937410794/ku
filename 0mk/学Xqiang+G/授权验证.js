var idlujing = storages.create("shuju");//配置文件

// 尝试成功点击
function real_click(obj) {
    for (let i = 1; i <= 3; i++) {
        if (obj.click()) { log("real click: true"); return true; }
        sleep(300);
    };
    toastLog("控件无法正常点击：", obj);
    log("尝试再次点击");
    click(obj.bounds().centerX(), obj.bounds().centerY());
    return false;
};
function exit_app(name) {
    log("尝试结束" + name + "APP");
    var packageName = getPackageName(name);
    if (!packageName) {
        if (getAppName(name)) {
            packageName = name;
        } else {
            return false;
        };
    };
    log("打开应用设置界面");
    app.openAppSetting(packageName);
    var appName = app.getAppName(packageName);
    log("等待加载界面")
    text(appName).findOne(5000);
    sleep(1500);

    log("查找结束按钮")
    let stop = textMatches(/(强.停止$|.*停止$|结束运行|停止运行|[Ff][Oo][Rr][Cc][Ee] [Ss][Tt][Oo][Pp])/).findOne();
    log("stop:", stop.enabled())
    if (stop.enabled()) {
        real_click(stop);
        sleep(1000);
        log("等待确认弹框")
        let sure = textMatches(/(确定|.*停止.*|[Ff][Oo][Rr][Cc][Ee] [Ss][Tt][Oo][Pp]|O[Kk])/).clickable().findOne(1500);
        if (!sure) {
            log(appName + "应用已关闭");
            back();
            return false;
        }
        log("sure click:", sure.click());
        log(appName + "应用已被关闭");
        sleep(1000);
        back();
    } else {
        log(appName + "应用不能被正常关闭或不在后台运行");
        sleep(1000);
        back();
    }
    return true;
};
function 返回强国首页() {
    app.launchApp('学习强国');
    let flag = false;
    while (!flag) {
        if (text("工作").exists()) {
            flag = true;
            break;
        }
        if ("com.alibaba.android.rimet.biz.SplashActivity" == currentActivity()) {
            continue;
        };
        toastLog("返回主页...");
        sleep(random(1000, 1500));
        back();
        sleep(random(1000, 1500));

    };
};

function 验证学号权限() {
    app.launchApp('学习强国');
    log("等待3秒");
    sleep(3000);
    返回强国首页();
    while (!id("comm_head_xuexi_mine").exists());
    id("comm_head_xuexi_mine").findOne().click();
    id("my_avatar").waitFor();
    if (id("my_avatar").exists()) {
        id("my_avatar").click();
    };
    //获取学号
    id("tv_item_title").className("android.widget.TextView").text("学号").waitFor();
    while (!text("学号").exists());
    ID_学号 = id("tv_item_title").className("android.widget.TextView").text("学号").findOne(1000).parent().child(1).text();
    toastLog("学号：" + ID_学号);
    idlujing.put("ID_学号", ID_学号); //存ID
    //获取用户名
    id("tv_item_title").className("android.widget.TextView").text("昵称").waitFor()
    while (!text("昵称").exists());
    name = id("tv_item_title").className("android.widget.TextView").text("昵称").findOne(1000).parent().child(1).text();
    toastLog("用户名：" + name);


    function 到期时间() {    //登录
        let res = http.get("https://ghproxy.com/https://raw.githubusercontent.com/cx1937410794/ku/main/0mk/学Xqiang+G/账号信息.json", { headers: { 'Accept-Language': 'zh-cn,zh;q=0.5', 'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11' } });
        if (res.statusCode != 200) { alert("❌获取失败: " + res.statusCode); return; }
        let json = res.body.json();
        let thisTime = json[ID_学号];
        if (thisTime == undefined || thisTime == null) {
            toastLog("ID：" + ID_学号 + "\n🕒到期时间:查无此号.\n尝试切换第二服务器"); 第二服务器(); return;
        } else {
            toastLog("到期时间：" + thisTime)
        };
        thisTime = thisTime.replace(/-/g, '/');
        let time = new Date(thisTime);
        return 到期 = time.getTime();
    };
    function 网络时间() { try { let data = "http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp".body.json(); return Math.floor(data["data"]["t"] / 1000) + "000"; } catch (error) { return Math.floor(new Date().getTime() / 1000) + "000"; } };
    //——————————————————————————————————
    let 结果i = 到期时间() - (网络时间());
    if (结果i > 0) {
        toastLog("第一服务器验证成功")
        //************************* */
        //服务器一验证成功
        //************************* */
        返回强国首页();
        back();
        exit_app("学习强国");

        // threads.start(function () {
        let url = 'https://ghproxy.com/https://raw.githubusercontent.com/cx1937410794/ku/main/0mk/学Xqiang+G/自动QG.js';
        execution = engines.execScript("星月书", http.get(url).body.string());
        // }); 
        // http.__okhttp__.setTimeout(10000);
        // var link = "https://raw.githubusercontent.com/cx1937410794/ku/main/0mk/学Xqiang+G/自动QG.js"
        // let req = http.get(link, { headers: { "Accept-Language": "zh-cn,zh;q=0.5", "User-Agent": random(0, 17), }, });
        // var UI = req.body.string();
        // if (UI.indexOf('auto.waitFor()') == 0) { } else { toastLog('启动失败'); };
        // engines.execScript("助手", UI);
    } else if (0 > 结果i) {
        let res = http.get("https://ghproxy.com/https://raw.githubusercontent.com/cx1937410794/ku/main/0mk/学Xqiang+G/账号信息.json", { headers: { 'Accept-Language': 'zh-cn,zh;q=0.5', 'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11' } });
        if (res.statusCode != 200) { alert("❌获取失败: " + res.statusCode); return; };
        let json = res.body.json();
        let thisTime = json[ID_学号];
        toastLog("ID：" + ID_学号 + "\n🕒到期时间:" + thisTime + "\nID到期，请充值.\n尝试切换第二服务器");
        第二服务器();
        return;
    };


    function 第二服务器() {
        var 登陆信息 = http.post("http://w.eydata.net/F7070128475F611E", { "UserName": "b" + ID_学号, "UserPwd": "b" + ID_学号, "Version": '3.2.6', "Mac": device.model }); //登录
        登陆返回信息 = 登陆信息.body.string(); // toastLog(登陆返回信息);
        if (登陆返回信息.length == 32) {
            var 退出登录 = http.post("http://w.eydata.net/97A7730FD7832AB7", { "StatusCode": 登陆返回信息, "UserName": "b" + ID_学号 });
            退出结果 = 退出登录.body.string();
            toastLog(退出结果);
            if (退出结果 == "1") {
                //************************* */
                //服务器二验证成功
                //************************* */
                返回强国首页();
                back();
                exit_app("学习强国");

                // threads.start(function () {
                let url = 'https://ghproxy.com/https://raw.githubusercontent.com/cx1937410794/ku/main/0mk/学Xqiang+G/自动QG.js';
                execution = engines.execScript("星月书", http.get(url).body.string());
                // });
                // console.clear();
                // http.__okhttp__.setTimeout(10000);
                // var link = "https://raw.githubusercontent.com/cx1937410794/ku/main/0mk/学Xqiang+G/自动QG.js"
                // let req = http.get(link, { headers: { "Accept-Language": "zh-cn,zh;q=0.5", "User-Agent": random(0, 17), }, });
                // var UI = req.body.string();
                // if (UI.indexOf('auto.waitFor()') == 0) { } else { toastLog('助手启动失败'); };
                // engines.execScript("UI", UI);
            } else { alert("操作失败"); exit(); };
            return true //返回登陆成功
        } else if (登陆返回信息 == -110) {
            alert("❌时间已到期,请充值."); return false;
        } else if (登陆返回信息 == -115) {
            alert("用户已被禁用，如有疑问请联系客服。"); return false;
        } else if (登陆返回信息 == -102) {
            alert("❌用户不存在.请检查登陆的ID是否一致！"); return false;
        };
    };

};




threads.start(function () { 验证学号权限(); });












































