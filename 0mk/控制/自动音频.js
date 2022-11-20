关闭同名();
日志控制台();
var idlujing = storages.create("shuju");//配置文件

device.keepScreenOn(3600 * 1000);//一直保持屏幕常亮
log("设置屏幕常亮")



function 启动APP() {
    console.info("当前安卓版本:" + device.release);
    if (device.release < 7) {
        alert("安卓版本太低!请使用安卓7.0以上版本手机。")
        console.hide() //关闭日志窗口
        exit();// engines.stopAllAndToast(); //终止所有脚本
    };
    shell("input keyevent 164", false);//静音
    launchPackage("com.moocxuetang");//打开APP
    while (!text("学习室").exists()) { };
};

var 检测跳过页面 = threads.start(function () {
    log("开始弹窗检测");
    //在新线程执行的代码
    id("tvSkip").textContains("跳过").waitFor();
    log("检测到弹窗");
    var btn = textContains("跳过").findOne();
    btn.click();
    log("已关闭跳过");
});
var 检测每日广告 = threads.start(function () {
    log("开始每日广告检测");
    //在新线程执行的代码
    id("ibClose").waitFor();
    log("检测到每日广告");
    var btn = id("ibClose").findOne();
    btn.click();
    log("已关闭每日广告");
});
启动APP();
sleep(1000);
返回首页();
var 服务器一到期时间 = "";
function 检查使用权限() { //检查id函数
    className("android.widget.TextView").text("我的").findOne().parent().click(); //切换到我的页面
    if (id("tvID").className("android.widget.TextView").findOne(3000) != null) { //获取个人id，如果没有登录则返回null
        var jzzx_id = id("tvID").findOne().text() //取ID文本
        var jzzxid = /ID\s(\d{4,8})/gi.exec(jzzx_id); //正则提取id号
        idlujing.put("idlujing", jzzxid[1]); //存ID
        threads.start(function () {
            function 到期时间() {
                let res = http.get("https://ghproxy.com/https://raw.githubusercontent.com/cx1937410794/ku/main/0mk/UI/右侧账号.json", { headers: { 'Accept-Language': 'zh-cn,zh;q=0.5', 'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11' } });
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
                刷音频();
            } else if (0 > 结果i) {
                let res = http.get("https://ghproxy.com/https://raw.githubusercontent.com/cx1937410794/ku/main/0mk/UI/右侧账号.json", { headers: { 'Accept-Language': 'zh-cn,zh;q=0.5', 'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11' } });
                if (res.statusCode != 200) { console.log("❌获取失败: " + res.statusCode); return; };
                let json = res.body.json();
                let thisTime = json[jzzxid[1]];
                console.error("ID：" + jzzxid[1] + "\n🕒到期时间:" + thisTime + "\nID到期，请充值.\n尝试切换第二服务器");
                第二服务器();
            };
            function 第二服务器() {
                var 登陆信息 = http.post("http://w.eydata.net/F7070128475F611E", { "UserName": "a" + jzzxid[1], "UserPwd": "a" + jzzxid[1], "Version": '3.2.6', "Mac": device.model }); //登录
                登陆返回信息 = 登陆信息.body.string()
                console.info("♥验证成功♥")
                console.log("本机对接密钥" + 登陆返回信息)
                if (登陆返回信息.length == 32) {
                    var 退出登录 = http.post("http://w.eydata.net/97A7730FD7832AB7", { "StatusCode": 登陆返回信息, "UserName": "a" + jzzxid[1] });
                    退出结果 = 退出登录.body.string()
                    console.log("对接" + 退出结果 + "次")
                    if (退出结果 == "1") { 刷音频(); } else { console.log("操作失败"); exit(); };
                    return true //返回登陆成功
                } else if (登陆返回信息.length == -110) {
                    toastLog("❌时间已到期,请充值.")
                } else if (登陆返回信息.length == -115) {
                    console.log("用户已被禁用，如有疑问请联系客服。")
                } else if (登陆返回信息.length == -102) { //用户不存在
                    toastLog("❌用户不存在.请检查登陆的ID是否一致！")
                };
            };
        });
    } else {
        console.error("⚠️请查看是否登录，已终止执行软件");
        exit();
    };
};
检查使用权限();











var 学习课程名字 = "";
function 刷音频() {
    检测是否退出登录();
    if (检测每日广告.isAlive()) {// 中断检测每日广告检测
        检测每日广告.interrupt();
        log("终止检测每日广告检测");
    };
    if (检测跳过页面.isAlive()) {// 中断检测跳过页面检测
        检测跳过页面.interrupt();
        log("终止检测跳过页面检测");
    };
    while (true) {
        sleep(3000)
        log("等待进入音频课程")
        if (text("敲黑板 划重点").exists() && text("发起人简介").exists() && text("发  起  人：").exists() && text("音频课")) {
            console.info("成功进入音频课页面")
            break;
        };
    };
    sleep(1000)
    返回列表页面();
    while (true) {//遍历
        var 课程数组 = []
        var 动态列表 = id("recycler_view").findOne();
        动态列表.children().forEach(function (child) {
            var 标题 = child.findOne(id("tvTitle"));
            if (标题 == null) {
                return;
            }
            课程数组.push(标题.text())
        });

        var 循环次数 = 0;
        while (true) {
            循环次数++;// log(循环次数)
            log("♥开始学习:" + 课程数组[循环次数 - 1])
            学习课程名字 = 课程数组[循环次数 - 1];
            while (!click(课程数组[循环次数 - 1]));
            是否是音频课();
            双倍速();
            sleep(3000)// toast("我在循环内");

            while (true) {//等待运行结束
                sleep(10000);
                toast("★ 已学:" + id("tvPlayTime").findOne().text())

                var 开始计时 = id("tvPlayTime").findOne().text().match(/\d+/g)[0]
                var 最终计时 = id("tvTotalTime").findOne().text().match(/\d+/g)[0]
                if (开始计时 == 最终计时) {
                    log("♥学习完成");
                    break;
                };
            };



            返回列表页面();
            log("等待10秒后打卡");
            sleep(10000);
            if (text("打卡").exists()) {
                text("打卡").findOne().click();
                log("等待2秒");
                sleep(1000);
                text("确认操作吗？").waitFor();
                sleep(1000);
                click("确定");
            };
            log("等待3秒");
            sleep(3000);
            返回列表页面();
            sleep(3000);
            if (循环次数 == 课程数组.length) {
                log("本页完成");
                break;// toast("我不会被执行");
            };
        };

        if (!text("打卡").exists()) {
            log("音频完成");
            exit();
        };
        //如果划到底部就结束
    }; //结束
};


function 是否是音频课() {
    sleep(3000)
    if (!id("ibRightIcon").exists()) {
        log("这个不是音频课\n请手动学习完成任务再进行音频学习。\n\n停止运行。")
        exit()
    };
};

function 双倍速() {
    sleep(3000)
    id("ibRightIcon").findOne(3000).click()
    sleep("1000")
    while (!click("倍速"));
    sleep("1000")
    while (!click("x2.0"));
};



function 返回列表页面() {
    if (id("tvApply").text("报名参加").exists()) {
        id("tvApply").text("报名参加").findOne().click()
        sleep(3000)
    }


    sleep(1000);
    let flag = false;
    var 次数 = 1;
    while (!flag) {
        if (text("学习清单").exists()) {
            console.info("返回列表页了")
            flag = true;
            break;
        }

        console.warn("返回主页");
        次数 = 次数 + 1
        sleep(1000);
        if (次数 > 5) {
            console.log("重启3次失败，建议重启手机后再试")
            exit();
        }
        back();
        sleep(1000);
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
                while (!click("4s跳过"));
                返回首页()
            }
        }
        back();
        sleep(1000);
    };
};

function 检测是否退出登录() {
    threads.start(function () {
        while (true) {
            sleep(1000)
            if (id("tvLogin").text("登录").exists() && id("mivDefaultHead").exists()) {
                console.error("运行结束");
                exit();
            };
        };
    });
};







































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
            console.warn("返回主页" + 返回次数 + "次");
        };

        if (返回次数 > 4) {
            APP重启循环 = APP重启循环 + 1
            if (!(launchApp(unescape('\u519b\u804c\u5728\u7ebf')) || launch('com.moocxuetang'))) {
                alert("重启失败，请检查APP是否安装");
                exit();
            } else {//重启app成功
                console.log("重启APP第" + APP重启循环 + "次");
                sleep(random(500, 1000));
                if (APP重启循环 > 3) {
                    console.log("重启3次失败，建议重启手机后再试");
                    exit();
                };
            };
        };
        sleep(random(1000, 2000));
    };
};
function 日志控制台() {//设置控制台位置
    threads.start(function () {
        console.show();
        sleep(100);
        console.setSize(device.width * 0.9, device.height * 0.30);
        console.setPosition(-27, device.height * 0.68);
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