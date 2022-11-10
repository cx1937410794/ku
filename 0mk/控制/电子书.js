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


var idlujing = storages.create("shuju");//配置文件
//————————————————————————————————————————————————————————————————————————————————积分部分


//积分一二共同
var sharestate = false;
var title_wz;
var title = null;
//积分二系统
var xx = "习";
var pp = "平";
var jnjn = "军";
var xiangjiu = "想研";
var 我的分享函数循环 = 1;//分享
var 服务器一到期时间 = ""

电子书控制台窗口(); //设置控制台位置


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
                let res = http.get("https://raw.gh.fakev.cn/cx1937410794/ku/main/0mk/UI/右侧账号.json", {
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
                console.log("到期时间:" + 服务器一到期时间)


                console.info("⚠️运行开始 请勿触碰") //ID正确

                console.info("⚠️请手动进入需要阅读的电子书页面")
                电子书函数()


            } else if (0 > 结果i) {
                let res = http.get("https://raw.gh.fakev.cn/cx1937410794/ku/main/0mk/UI/右侧账号.json", {
                    headers: {
                        'Accept-Language': 'zh-cn,zh;q=0.5',
                        'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11'
                    }
                });
                if (res.statusCode != 200) {
                    console.log("❌获取失败: " + res.statusCode);
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
                console.log("本机对接密钥" + 登陆返回信息)
                if (登陆返回信息.length == 32) { //登陆成功时执行以下
                    // threads.start(function () {
                    var 退出登录 = http.post("http://w.eydata.net/97A7730FD7832AB7", {
                        "StatusCode": 登陆返回信息,
                        "UserName": "a" + jzzxid[1]
                    });
                    退出结果 = 退出登录.body.string()
                    console.log("对接" + 退出结果 + "次")
                    if (退出结果 == "1") { //成功


                        console.info("⚠️运行开始 请勿触碰") //ID正确
                        console.info("⚠️请手动进入需要阅读的电子书页面")
                        电子书函数()
                    } else {
                        console.log("操作失败")
                        exit()
                    }

                    return true //返回登陆成功
                } else if (登陆返回信息.length == -110) {
                    toastLog("❌时间已到期,请充值.")
                } else if (登陆返回信息.length == -115) {
                    console.log("用户已被禁用，如有疑问请联系客服。")
                } else if (登陆返回信息.length == -102) { //用户不存在
                    toastLog("❌用户不存在.请检查登陆的ID是否一致！")
                }
            }
        });

    } else { //没有找到id号
        console.error("⚠️请查看是否登录，已终止执行软件")
        exit();
    }
};
checkid()//启动脚本

//电子书
function 电子书函数() {
    var 电子书翻页总时间 = idlujing.get("电子书翻页总时间");//读
    if (电子书翻页总时间 !== undefined) {//如果查询不是空白
        var 翻页电子书总时间 = 电子书翻页总时间
        log("翻电子书总时间:" + 电子书翻页总时间 + "分钟")
    } else {
        idlujing.put("电子书翻页总时间", "10080");  //保存的内容
        var 翻页电子书总时间 = 10080
        log("翻电子书总时间:使用系统设置")
    }
    var 电子书翻页时间 = idlujing.get("电子书翻页时间");//读
    if (电子书翻页时间 !== undefined) {//如果查询不是空白
        var 翻页时间 = 电子书翻页时间
        log("翻页最快时间:" + 电子书翻页时间 + "秒")
    } else {
        idlujing.put("电子书翻页时间", "3");  //保存的内容
        var 翻页时间 = 2
        log("翻页最快时间:使用系统设置")
    }
    var 电子书翻页最慢时间 = idlujing.get("电子书翻页最慢时间");//读
    if (电子书翻页最慢时间 !== undefined) {//如果查询不是空白
        var 翻页最慢时间 = 电子书翻页最慢时间
        log("翻页最慢时间:" + 电子书翻页最慢时间 + "秒")
    } else {
        idlujing.put("电子书翻页时间", "7");  //保存的内容
        var 翻页最慢时间 = 7
        log("翻页最慢时间:使用系统设置")
    }




    var w1 = device.width / 3
    var w2 = device.height / 2
    var w3 = w1 * 2 + w1 / 2
    var 已阅读时间 = 0

    waitForActivity("com.zhangyue.iReader.read.ui.Activity_BookBrowser_TXT", period = 200)
    toast("进入电子书页面成功，开始阅读")
    console.log("进入电子书页面成功，开始阅读\n⚠️翻页过程中请勿息屏和触碰")
    sleep(random(4000, 6000));

    var c1 = threads.start(function () {
        while (true) {
            sleep(random(翻页时间 * 1000, 翻页最慢时间 * 1000));//翻页时间
            swipe(w3, w2, w3 - 200, w2 - 50, 100);
        }
    });

    var c2 = threads.start(function () { //如果不在电子书页面 自动退出
        while (currentActivity() == "com.zhangyue.iReader.read.ui.Activity_BookBrowser_TXT") {
            sleep(200);
        }
        toast("人工退出界面，停止运行");
        console.error("⚠️人工退出界面，停止运行");
        threads.shutDownAll();
        exit();
    });

    var c3 = threads.start(function () {//时间计算
        while (翻页电子书总时间 != 已阅读时间) {//总时间
            toast("已读时间" + (已阅读时间) + "分钟"); console.info("已读时间" + (已阅读时间) + "分钟");
            sleep(60000);
            已阅读时间 += 1
        }
        toast("完成您设置的目标，阅读结束。");
        console.info("⚠️完成您设置的目标，阅读结束。");
        console.hide() //关闭日志窗口
        engines.stopAllAndToast(); //终止所有脚本
        exit();
    });
}



function 电子书控制台窗口() {
    threads.start(function () {
        console.show();
        sleep(100);
        console.setSize(device.width * 0.9, device.height * 0.30);
        console.setPosition(-27, device.height * 0.08);
    })
}

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
    }
}


function 关闭每日广告() {
    sleep(1000)
    if (id("ibClose").findOnce(1000)) {
        id("ibClose").findOne().click();
        log("关闭每日广告");
    } else {
        log("没有每日广告");
    };
};