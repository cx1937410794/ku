



function 进入栏目进行添加() {
    while (!click("发现"));
    if (检测每日广告.isAlive()) { 检测每日广告.interrupt(); console.log("终止检测每日广告检测"); };
    if (检测跳过页面.isAlive()) { 检测跳过页面.interrupt(); console.log("终止检测跳过页面检测"); };

    id("gif_order").waitFor(); id("gif_order").findOne().click();
    id("tvName").waitFor(); sleep(300);
    id("recyclerView").findOne().scrollForward(); sleep(300);
    id("recyclerView").findOne().scrollForward(); sleep(300);
    id("recyclerView").findOne().scrollForward(); sleep(300);

    if (id("ivAdd").exists()) {
        sleep(1000);
        let 次数i = 0;
        while (true) {
            次数i++; log("正在添加第" + 次数i + "个");    // className("android.widget.FrameLayout").clickable(true).click()
            className("android.widget.ImageView").id("ivAdd").findOne().parent().parent().click();
            id("recyclerView").findOne().scrollForward();
            sleep(100);
            if (className("android.widget.ImageView").id("ivAdd").exists()) { } else { log("本模块添加完成"); break; };
        };
    } else {
        log("无需添加");
    };

};
function 调整目标函数() {
    threads.start(function () {
        while (true) {
            id("common_title").text("目标调整").waitFor();
            let 调整按钮的数量 = text("调整").find(1000).size();
            sleep(300);
            while (调整按钮的数量 >= 1) {
                sleep(500);
                while (!click("调整", 调整按钮的数量));
                sleep(300);

                // let 预计设置条数 = id("tv_content").findOne().text().match(/[0-9]+/);
                id("iv_add").findOne().click();sleep(100);
                id("iv_add").findOne().click();sleep(100);
                id("iv_add").findOne().click();sleep(100);
                id("iv_add").findOne().click();sleep(100);
                id("iv_add").findOne().click();
                // while (true) {
                //     let 当前阅读条数 = id("tv_count").findOne().text();
                //     sleep(300);
                //     if (当前阅读条数 > 5) { id("iv_reduce").findOne().click(); }//减去
                //     else if (当前阅读条数 < 5) { id("iv_add").findOne().click(); }//添加
                //     else if (当前阅读条数 == 5) { break; };//等于就跳过
                // };

                sleep(100); id("tv_ok").findOne().click();//确定
                调整按钮的数量--; sleep(500);
            };

            let 向下滑动 = id("recycler_view").className("androidx.recyclerview.widget.RecyclerView").scrollForward(); // gestures([300, [300, 1600], [300, 100]]);//向上滑动
            sleep(1000);
            if (向下滑动 == true) { //判断是否划到底部 
                engines.stopAll();
                events.on("exit", function () {// engines.execScriptFile(engines.myEngine().cwd() + "/main1.js")
                    返回首页();
                    alert("✔️添加足够，您可以操作其他。");
                    console.hide(); //关闭日志窗口
                    // exit();
                });
            };
        };
    });
};



关闭同名();
积分控制窗口();
var idlujing = storages.create("shuju");//配置文件
device.keepScreenOn(3600 * 1000); log("设置屏幕常亮");
var 等待主页次数 = 0;
function 启动APP() {
    console.log("安卓版本:" + device.release);
    if (device.release < 7) { alert("安卓版本太低!请使用安卓7.0以上版本手机。"); console.hide(); exit(); };
    shell("input keyevent 164", false);//静音
    launchPackage("com.moocxuetang");//打开APP
    while (!text("学习室").exists()) {
        等待主页次数 = (等待主页次数 + 1);
        if (等待主页次数 > 30) { log("请查看原因重新运行"); exit(); }
        sleep(3000);
        log("等待返回主页");
        if (text("升级成功，恭喜您获得20积分!").exists()) { text("我知道了").findOne().click(); };
        if (text("我知道了").exists()) { text("我知道了").findOne().click(); };
        if (id("rl_content").exists()) { id("rl_content").findOne().click(); };
    };
    console.info("进入主页完成");
};

var 检测跳过页面 = threads.start(function () {
    console.log("开始弹窗检测");
    id("tvSkip").textContains("跳过").waitFor();
    console.log("检测到弹窗");
    textContains("跳过").findOne().click();
    console.log("已关闭跳过");
});
var 检测每日广告 = threads.start(function () {
    console.log("开始每日广告检测");
    id("ibClose").waitFor();
    console.log("检测到每日广告");
    id("ibClose").findOne().click();
    console.log("已关闭每日广告");
});
启动APP();

var 服务器一到期时间 = "";
function 检查使用权限() { //检查id函数
    返回首页();
    console.info("授权验证");
    className("android.widget.TextView").text("我的").findOne().parent().click(); //切换到我的页面
    if (id("tvID").className("android.widget.TextView").findOne(3000) != null) { //获取个人id，如果没有登录则返回null
        var jzzx_id = id("tvID").findOne().text() //取ID文本
        var jzzxid = /ID\s(\d{4,8})/gi.exec(jzzx_id); //正则提取id号
        idlujing.put("idlujing", jzzxid[1]); //存ID
        threads.start(function () {
            function 到期时间() {
                let res = http.get("https://zuoxiaozi.top/0mk/UI/右侧账号.json", { headers: { 'Accept-Language': 'zh-cn,zh;q=0.5', 'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11' } });
                if (res.statusCode != 200) { alert("❌获取失败: " + res.statusCode); return; }
                let json = res.body.json();
                let thisTime = json[jzzxid[1]];
                服务器一到期时间 = thisTime
                if (thisTime == undefined || thisTime == null) { console.error("ID：" + jzzxid[1] + "\n🕒到期时间:查无此号.\n尝试切换第二服务器"); 第二服务器(); return; };
                thisTime = thisTime.replace(/-/g, '/');
                let time = new Date(thisTime);
                return 到期 = time.getTime();
            };
            function 网络时间() { try { let data = "http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp".body.json(); return Math.floor(data["data"]["t"] / 1000) + "000"; } catch (error) { return Math.floor(new Date().getTime() / 1000) + "000"; } };
            //——————————————————————————————————
            let 结果i = 到期时间() - (网络时间());
            if (结果i > 0) {
                console.info("登录成功\n到期时间:" + 服务器一到期时间);



                进入栏目进行添加();
                // back();// 返回首页
                返回首页();
                className("android.widget.TextView").text("今日学习").waitFor(); className("android.widget.TextView").text("今日学习").findOne().parent().click();
                id("tvChangeTarget").waitFor(); id("tvChangeTarget").findOne(500).click();
                调整目标函数();

            } else if (0 > 结果i) {
                let res = http.get("https://zuoxiaozi.top/0mk/UI/右侧账号.json", { headers: { 'Accept-Language': 'zh-cn,zh;q=0.5', 'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11' } });
                if (res.statusCode != 200) { console.error("❌获取失败: " + res.statusCode); return; };
                let json = res.body.json();
                let thisTime = json[jzzxid[1]];
                console.error("ID：" + jzzxid[1] + "\n🕒到期时间:" + thisTime + "\nID到期，请充值.\n尝试切换第二服务器");
                第二服务器();
                return;
            };



            function 第二服务器() {
                var 登陆信息 = http.post("http://w.eydata.net/F7070128475F611E", { "UserName": "a" + jzzxid[1], "UserPwd": "a" + jzzxid[1], "Version": '3.2.6', "Mac": device.model }); //登录
                登陆返回信息 = 登陆信息.body.string(); // console.log(登陆返回信息);
                if (登陆返回信息.length == 32) {
                    var 退出登录 = http.post("http://w.eydata.net/97A7730FD7832AB7", { "StatusCode": 登陆返回信息, "UserName": "a" + jzzxid[1] });
                    退出结果 = 退出登录.body.string();
                    console.log(退出结果);
                    if (退出结果 == "1") {
                        console.info("♥验证成功♥");



                        进入栏目进行添加();
                        // back();// 返回首页
                        返回首页();
                        className("android.widget.TextView").text("今日学习").waitFor(); className("android.widget.TextView").text("今日学习").findOne().parent().click();
                        id("tvChangeTarget").waitFor(); id("tvChangeTarget").findOne(500).click();
                        调整目标函数();
                    } else {
                        console.error("操作失败"); exit();
                    };
                    return true //返回登陆成功
                } else if (登陆返回信息 == -110) {
                    console.error("❌时间已到期,请充值."); return false;
                } else if (登陆返回信息 == -115) {
                    console.error("用户已被禁用，如有疑问请联系客服。"); return false;
                } else if (登陆返回信息 == -102) {
                    console.error("❌用户不存在.请检查登陆的ID是否一致！"); return false;
                };
            };
        });
    } else {
        console.error("⚠️请查看是否登录，已终止执行软件"); exit();
    };
};
检查使用权限();

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
function 返回首页() {
    let 返回次数 = 0
    var APP重启循环 = 0;
    sleep(random(500, 1000));
    let 首页返回循环开关 = false;
    while (!首页返回循环开关) {
        if (text("学习室").exists()) {//学习室是否存在   存在则跳出循环 结束函数
            console.info("到达首页");
            首页返回循环开关 = true;
            break;
        } else {
            back();
            返回次数 = 返回次数 + 1
            console.warn("第" + 返回次数 + "次返回操作");
        };

        if (返回次数 > 4) {
            APP重启循环 = APP重启循环 + 1
            if (!(launchApp("军职在线") || launch('com.moocxuetang'))) {
                console.error("重启失败，请检查APP是否安装");
                exit();
            } else {//重启app成功
                console.warn("重启APP第" + APP重启循环 + "次");
                sleep(random(500, 1000));
                if (APP重启循环 > 3) {
                    console.error("重启3次失败，建议重启手机后再试");
                    exit();
                };
            };
        };
        sleep(random(1000, 2000));
    };
};

function 积分控制窗口() {
    threads.start(function () {
        console.show();
        sleep(100);
        console.setSize(device.width * 0.9, device.height * 0.30);
        console.setPosition(-27, device.height * 0.68);
    });
};



