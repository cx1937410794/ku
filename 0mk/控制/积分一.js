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
                console.info("登录成功\n到期时间:" + 服务器一到期时间); 签到函数();
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
                    if (退出结果 == "1") { console.info("♥验证成功♥"); 签到函数(); } else { console.error("操作失败"); exit(); };
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

function 签到函数() {
    监听函数();
    console.info("开始打卡");
    while (!className("android.widget.TextView").text("我的").exists()) { }
    className("android.widget.TextView").text("我的").findOne().parent().click(); //切换到我的页面
    sleep(500);
    while (!click("打卡"));
    sleep(500);
    click(device.width * 0.64, device.height * 0.70);
    sleep(500);
    while (!id("tvStart").className("android.widget.TextView").exists()) { }
    let sign = id("tvStart").className("android.widget.TextView").findOne().text()
    if (sign == "已打卡") {
        console.log("今日已签到");
    } else {
        click(sign);
        console.info("签到成功。");
    };
    console.info("打卡完成");
    返回首页();
    学习函数();
};


function 学习函数() {
    if (检测每日广告.isAlive()) {
        检测每日广告.interrupt();
        console.log("终止检测每日广告检测");
    };

    if (检测跳过页面.isAlive()) {
        检测跳过页面.interrupt();
        console.log("终止检测跳过页面检测");
    };

    var 积分阅读文章数 = 0;
    while (!click("发现"));
    if (!id("tvTabTitle").id("tvTabTitle").findOne().parent().click()) {
        if (!id("tvTabTitle").id("tvTabTitle").findOne().parent().parent().click()) {
            if (!id("tvTabTitle").id("tvTabTitle").findOne().parent().parent().parent().click()) {
                if (!id("tvTabTitle").id("tvTabTitle").findOne().parent().parent().parent().parent().click()) {
                    if (!id("tvTabTitle").id("tvTabTitle").findOne().parent().parent().parent().parent().parent().click()) {

                    };
                };
            };
        };
    };
    while (!text("习近平强军思想研究").exists()) { }
    console.log("判断文章入口是否存在");
    if (text("习近平强军思想研究").exists()) {
        console.info("存在并进入");
        while (!click("习近平强军思想研究", 0));
    } else {
        console.log("不存在,向下寻找");
        className("android.support.v7.widget.RecyclerView").scrollForward() //没有专题则下滑一页
        sleep(random(1000, 2000));
        while (!click("习近平强军思想研究", 0));
        console.error("没有找到入口,请及时联系客服\n结束运行.");
        exit();
    };

    console.warn("即将进入文章列表");
    while (!className("android.widget.TextView").id("tvSexType").text("文章").exists()) { console.warn("等待文章出现"); sleep(3000); };
    while (true) {
        var 课程数组 = []
        var 动态列表 = id("rcv_recommend_list").findOne();
        动态列表.children().forEach(function (child) {
            var 标题 = child.findOne(id("tvSexTitle").className("android.widget.TextView"));
            if (标题 == null) {
                return;
            }
            课程数组.push(标题.text());// log(课程数组.push(标题.text()))

        });// log(课程数组)
        var 循环次数 = 0;
        sleep(random(1000, 2000));
        while (true) {
            循环次数++;// log(循环次数)
            积分阅读文章数 = 积分阅读文章数 + 1;
            console.info("♥第" + 积分阅读文章数 + "篇文章：" + 课程数组[循环次数 - 1]);

            // 文章名字 = 课程数组[循环次数 - 1]
            // while (!click(课程数组[循环次数 - 1]));
            var 题目课名字 = 多余替换(课程数组[循环次数 - 1])
            log("♥开始学习:" + 题目课名字)
            while (!click(题目课名字));


            sleep(random(500, 2000));
            if (id("common_title").className("android.widget.TextView").findOne(5000) != null) {//类型不是空
                click(device.width * 0.84, device.height * 0.70);//点击加载中
                sleep(random(500, 1000));
            };
            分享函数();// 滑动函数(5, 8);//次数
            倒计时函数();//范围秒
            sleep(random(500, 1000));
            返回列表页();
            if (循环次数 == 课程数组.length) {
                log("本页完成")
                break;
            };
            if (积分阅读文章数 == 10 || 积分阅读文章数 > 9) {
                返回首页();
                进入音频课课();
                break;
            };
            sleep(random(500, 1000));
        };
        id("rcv_recommend_list").scrollForward(); //下一页
        sleep(random(1000, 1800));
        id("rcv_recommend_list").scrollForward(); //下一页
        sleep(random(500, 1000));
    };
};










function 学习室开始函数() {
    console.log("音频课不存在");
    while (!click("发现"));
    sleep(1000);
    while (!className("android.widget.TextView").id("tvTabTitle").text("音频课").exists()) {
        console.log("等待音频课出现"); sleep(3000);
    };
    sleep(1000);
    if (className("android.widget.TextView").id("tvTabTitle").text("音频课").findOne().parent().parent().parent().click()) {
        log("选择音频课");
    } else if (className("android.widget.TextView").id("tvTabTitle").text("音频课").findOne().parent().click()) {
        log("选择音频课");
    } else if (click(text("音频课").findOnce().bounds().centerX(), text("音频课").findOnce().bounds().centerY())) {
        log("选择音频课");
    };


    while (!className("androidx.recyclerview.widget.RecyclerView").clickable(false).id("rvHorziontalTab").exists()) { console.log("等待有声书出现"); sleep(3000); };
    sleep(2000);//等待出现

    // if (className("androidx.recyclerview.widget.RecyclerView").clickable(false).id("rvHorziontalTab").findOne().child(2).click()) {
    //     log("选择有声书");
    // } else {
    text("有声书").boundsInside(0, 0, device.width, device.height / 4).findOne().click();
    log("进入有声书");
    // };



    sleep(1000);
    while (!text("细讲中国历史|从夏到清，完整展现古代中国的发展历程").exists()) {
        console.log("等待目录中出现指定音频课"); sleep(3000);
    }; sleep(1000);
    if (click("细讲中国历史|从夏到清，完整展现古代中国的发展历程")) { log("进入课程"); } else { while (!click("细讲中国历史|从夏到清，完整展现古代中国的发展历程")); };
};
function 进入音频课课() {
    while (!click("发现"));// className("android.widget.TextView").id("tvTabTitle").text("音频课").findOne(5000).parent().parent().parent().click();
    click(className("android.widget.TextView").id("tvTabTitle").text("音频课").findOne().bounds().centerX(), className("android.widget.TextView").id("tvTabTitle").text("音频课").findOne().bounds().centerY());
    console.hide(); //关闭日志窗口
    sleep(2000);
    //随机选择左侧列表
    let 随机左侧名字 = random(0, 9)
    click(className("android.widget.TextView").text("热门新品").boundsInside(0, 0, device.width / 4, device.height).findOne(5000).parent().child(随机左侧名字).bounds().centerX(), className("android.widget.TextView").text("热门新品").boundsInside(0, 0, device.width / 4, device.height).findOne(5000).parent().child(随机左侧名字).bounds().centerY());
    sleep(500);
    click(className("android.widget.TextView").text("热门新品").boundsInside(0, 0, device.width / 4, device.height).findOne(5000).parent().child(随机左侧名字).bounds().centerX(), className("android.widget.TextView").text("热门新品").boundsInside(0, 0, device.width / 4, device.height).findOne(5000).parent().child(随机左侧名字).bounds().centerY());
    日志控制台();
    sleep(5000);
    //随机选择音频课排行
    let 随机次数 = random(0, 5); log("随便下滑：" + 随机次数 + "次");
    for (a = 1; a <= 随机次数; a++) {
        let X坐标 = className("android.widget.TextView").id("tv_collection").findOne().bounds().centerX();
        let Y坐标 = className("android.widget.TextView").id("tv_collection").findOne().bounds().centerY();
        swipe(X坐标, Y坐标 + 400, X坐标, Y坐标, 350);//向下滑动
        sleep(3000);
    };
    //查看音频数量是否够
    while (className("android.widget.TextView").id("tv_collection").findOne().text().match(/[0-9]+/)[0] < 150) {
        log("数量只有" + className("android.widget.TextView").id("tv_collection").findOne().text().match(/[0-9]+/)[0] + ",再向下找找.");
        let X坐标 = className("androidx.recyclerview.widget.RecyclerView").id("recycler_view").findOne().bounds().centerX();
        let Y坐标 = className("androidx.recyclerview.widget.RecyclerView").id("recycler_view").findOne().bounds().top;//顶
        sleep(500);
        swipe(X坐标, Y坐标 + 400, X坐标, Y坐标, 350);//向下滑动
        sleep(3000);
        if (className("android.widget.TextView").text("没有更多了").exists()) {
            log("滑倒底了，换个找找...");
            console.hide(); //关闭日志窗口
            sleep(2000);
            //随机选择左侧列表
            let 随机左侧名字 = random(0, 9)
            click(className("android.widget.TextView").text("热门新品").boundsInside(0, 0, device.width / 4, device.height).findOne(5000).parent().child(随机左侧名字).bounds().centerX(), className("android.widget.TextView").text("热门新品").boundsInside(0, 0, device.width / 4, device.height).findOne(5000).parent().child(随机左侧名字).bounds().centerY());
            sleep(500);
            click(className("android.widget.TextView").text("热门新品").boundsInside(0, 0, device.width / 4, device.height).findOne(5000).parent().child(随机左侧名字).bounds().centerX(), className("android.widget.TextView").text("热门新品").boundsInside(0, 0, device.width / 4, device.height).findOne(5000).parent().child(随机左侧名字).bounds().centerY());
            日志控制台();
            sleep(3000);
        };
    }; log("数量够了.");
    log("点进去"); className("android.widget.TextView").id("tv_collection").findOne().parent().click();
    id("tvDownload").waitFor(); sleep(2000);
    log("进入成功");

    //音频列表上滑10次
    let yplbkjkdzb = 0;
    let yplbkjdbzb = 0;
    let yplbkjgdzb = 0;
    let yplbkjxzb = 0;
    yplbkjkdzb = className("androidx.recyclerview.widget.RecyclerView").findOne().bounds().right;//获取框架宽度
    yplbkjdbzb = className("androidx.recyclerview.widget.RecyclerView").findOne().bounds().top;//获取框架顶变
    yplbkjgdzb = className("androidx.recyclerview.widget.RecyclerView").findOne().bounds().bottom; //底
    yplbkjxzb = className("androidx.recyclerview.widget.RecyclerView").findOne().bounds().centerX();


    toastLog("等待音频列表出现"); id("ivDownloadState").waitFor();
    for (var i = 0; i < 10; i++) { log("第" + (i + 1) + "/10次上滑"); swipe(yplbkjkdzb / 2, yplbkjdbzb + 10, yplbkjkdzb / 2, yplbkjgdzb, 500); sleep(1200); };
    sleep(random(500, 1000));



    //翻页手势
    let 音频阅读数量 = 0;
    for (var i = 0; i < 4; i++) {

        //当前一页的
        let 音频课_当前页面音频列表数量 = className("android.widget.FrameLayout").clickable(true).find(1000).size(); toastLog(音频课_当前页面音频列表数量);//当前页页面数量需要减一
        var 音频课_音频课名字; var 音频课_音频课名字_重复;
        for (var i = 0; i < 音频课_当前页面音频列表数量; i++) {
            if (className("android.widget.FrameLayout").clickable(true).findOnce(i).click() !== null) {

            };
            sleep(3000);
            if (id("tvAudioname").exists() && id("tvAudioname").findOne(3000).text()) {
                音频课_音频课名字_重复 = 音频课_音频课名字;
                音频课_音频课名字 = id("tvAudioname").findOne(3000).text();
                log(i + "阅读:" + 音频课_音频课名字);
            } else { log("阅读第" + i + "个"); };
            sleep(3000);
            if (音频课_音频课名字 !== "" && 音频课_音频课名字_重复 == 音频课_音频课名字) {
                log("检测到重读");
                返回音频列表页();
            } else {
                音频倒计时函数();
                音频阅读数量 = (音频阅读数量 + 1);
                log("阅读完成");
                返回音频列表页();
            };

            if (音频阅读数量 == 26) {
                console.hide();
                返回首页();
                while (!click("今日学习"));
                exit();
            };
            sleep(3000);
        };

        scrollDown(0); sleep(5); id("rvAudioList").scrollForward(); //看完当前页下滑一页
        if (className("android.widget.TextView").text("没有更多了").exists()) { 返回首页(); break; };//无内容了
        log("继续阅读下一页");
        sleep(3000);
    };
    返回首页();
    console.hide();
    while (!click("今日学习"));
};

function 返回音频列表页() {
    while (true) {
        if (text("来源：喜马拉雅").exists() && text("音频课").exists()) {
            console.info("返回音频列表页--完成");
            break;
        }
        if (text("平台: 喜马拉雅").exists() && id("ib_back").findOne().click()) {
            console.info("返回音频列表页--进行");
            sleep(1500);
            break;
        };

        if (text("学习室").exists()) {
            console.info("返回音频列表页--超次数"); while (!click("发现")); sleep(random(500, 1000)); 进入音频课课(); break;
        };
        if (text("您还有音频正在播放中哦~点击“最小化”后台播放继续听，或点击“退出”停止播放并退出应用。").exists()) {
            id("layout_cancel_more").text("取消").findOne().click(); sleep(random(500, 1000)); while (!click("发现")); sleep(random(500, 1000)); 进入音频课课(); break;
        };
    };
};

function 进入课程() {
    log("选择：进入课程");
    var 检测进入音频课程 = threads.start(function () {
        log("开始进入音频课程检测");
        //在新线程执行的代码
        sleep(5000);
        h = device.height; //屏幕高
        w = device.width; //屏幕宽
        横向中心 = w / 2;

        swipe(横向中心, (h / 4) * 1, 横向中心, (h / 4) * 3, 500);
        log("向下滑动");
        sleep(5000);
        swipe(横向中心, (h / 4) * 3, 横向中心, (h / 4) * 1, 500);
        log("找到文章");

        className("android.widget.TextView").text("学习室").waitFor();
        log("检测到无进入音频课程");
        while (!click("细讲中国历史|从夏到清，完整展现古代中国的发展历程"));

        log("进入音频课程");
    });

    while (!text("细讲中国历史|从夏到清，完整展现古代中国的发展历程").exists()) {

        if (className("androidx.recyclerview.widget.RecyclerView").id("rvLeft").findOnce(0).child(6).click() == false) {        // click("历史");
            sleep(1000)
            click(className("androidx.recyclerview.widget.RecyclerView").id("rvLeft").findOnce(0).child(6).bounds().centerX(), className("androidx.recyclerview.widget.RecyclerView").id("rvLeft").findOnce(0).child(6).bounds().centerY())//坐标点击
        }

        log("等待课程名字：细讲中国历史|从夏到清，完整展现古代中国的发展历程");
        let isDown = id("recycler_view").scrollForward(); //看完当前页下滑一页
        sleep(1000)
        if (isDown == true) { //判断是否划到底部
        };
        sleep(1000);
    };
    while (!click("细讲中国历史|从夏到清，完整展现古代中国的发展历程"));    // click("细讲中国历史|从夏到清，完整展现古代中国的发展历程");    // text("细讲中国历史|从夏到清，完整展现古代中国的发展历程").findOne().parent().click();
    sleep(random(100, 2000));

    if (检测进入音频课程.isAlive()) {// 中断检测每日广告检测
        检测进入音频课程.interrupt();
        log("终止检测音频课程");
    };
};
function 进入顶部音频课() {
    if (id("tvTabTitle").text("音频课").exists()) {
        click(text("音频课").findOnce(0).bounds().centerX(), text("音频课").findOnce(0).bounds().centerY())//坐标点击
    } else {
        返回首页();
        sleep(random(500, 1000));
        while (!click("发现"));
        sleep(random(500, 1000));
        click(text("音频课").findOnce(0).bounds().centerX(), text("音频课").findOnce(0).bounds().centerY())//坐标点击
        sleep(random(500, 2000));
    };
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
var 停止分享开关 = false;
function 监听函数() {
    threads.start(function () {
        log("开启分享上限监听");
        events.observeToast();
        events.onToast(function (toast) {
            if (toast.getText() == "军职在线：分享成功分享已达上限" || toast.getText() == "分享成功分享已达上限") {
                console.log("♥分享成功,分享已达上限");
                停止分享开关 = true; //分享成功,分享已达上限
            };
            if (toast.getText() == "军职在线：分享成功" || toast.getText() == "分享成功") {
                console.warn("⚠️分享成功,但是没有得到积分");
            };
        });
    });
};
function 分享函数() {
    threads.start(function () {
        sleep(random(1000, 10000));
        if (!停止分享开关) { //停止分享开关不等于开启 
            if (id("ibRightIcon").exists() && id("ibRightIcon").findOne(2000) != null && !className("android.widget.TextView").text("平台: 喜马拉雅").exists()) { //如果文章分享按钮存在
                if (id("ibRightIcon").exists()) {
                    click(id("ibRightIcon").findOnce(0).bounds().centerX(), id("ibRightIcon").findOnce(0).bounds().centerY())//坐标点击
                    sleep(1000);
                    id("recycler_view").findOne().child(0).click()
                    sleep(1000);
                    id("tvShareSchoolCircle").text("学友圈").findOne().click()
                    sleep(1000);
                    if (id("tvSignNum").text("+1").exists()) {
                        var 积分 = id("tvSignNum").findOne().text(); console.info("♥成功分享并积分" + 积分);
                    };
                };
            } else if (className("android.widget.TextView").text("平台: 喜马拉雅").exists() && id("ibRightIcon").exists() && id("ibRightIcon").findOne(2000) != null) {
                if (id("ibRightIcon").exists()) {
                    click(id("ibRightIcon").findOnce(0).bounds().centerX(), id("ibRightIcon").findOnce(0).bounds().centerY())//坐标点击
                    sleep(1000);
                    className("android.widget.TextView").text("分享").findOne().click();
                    sleep(1000);
                    id("tvShareSchoolCircle").text("学友圈").findOne().click();
                    sleep(1000);
                    if (id("tvSignNum").text("+1").exists()) {
                        var 积分 = id("tvSignNum").findOne().text(); console.info("♥成功分享并积分" + 积分);
                    };
                };
            };

        };
    });
};
function 倒计时函数() {
    let 计时时间循环 = 0;
    http.__okhttp__.setTimeout(40000);
    while (true) {
        if (text("+1").exists() && 计时时间循环 > 15) {
            console.info("♥阅读完成,积分+1,用时:" + 计时时间循环 + "秒");
            sleep(1000);
            break;
        } else {
            计时时间循环++;
            sleep(1000);
            if (计时时间循环 % 5 == 0 && 计时时间循环 > 15) { toast("已计时" + 计时时间循环 + "秒"); swipe(device.width / 2, device.height * 0.6, device.width / 2, device.height * 0.6 - 100, random(10, 100)); };
            if (计时时间循环 == 49 || 计时时间循环 > 50) { console.log("超时未获取到积分,返回."); break; };
        };
    };
};

let 计时时间循环 = 0;
function 音频倒计时函数() {
    // http.__okhttp__.setTimeout(20000);
    while (true) {
        if (text("+1").exists() && 计时时间循环 > 15) {//id("tvScore").
            log("♥阅读完成,积分+1,用时:" + 计时时间循环 + "秒");
            sleep(1000);
            break;
        } else {
            计时时间循环++;
            sleep(1000);
            if (计时时间循环 % 5 == 0 && 计时时间循环 > 15) { swipe(device.width / 2, device.height * 0.6, device.width / 2, device.height * 0.6 - 100, random(10, 100)); toast("已经阅读：" + 计时时间循环 + "秒") };
            if (计时时间循环 == 150 || 计时时间循环 > 150) { log("阅读完成,无积分"); break; };
        };
    };
};
function 返回列表页() {
    sleep(random(500, 1000));
    let 循环 = false;
    while (!循环) {
        sleep(1000);
        if (id("common_title").text("文章").exists() && id("ib_back").findOne().click()) {
            log("返回成功");
        } else if (text("学习室").exists()) {
            while (!click("发现"));
            sleep(random(2000, 4000));
            if (text("习近平强军思想研究").exists()) { //判断当前页面是否有要阅读的专题
                while (!click("习近平强军思想研究", 0));
                sleep(random(500, 1000));
                className("androidx.recyclerview.widget.RecyclerView").id("rcv_recommend_list").scrollForward() //没有专题则下滑一页
                sleep(random(500, 1000));
                循环 = true;
                break;
            } else {
                className("android.support.v7.widget.RecyclerView").scrollForward() //没有专题则下滑一页
                sleep(random(500, 1000));
                while (!click("习近平强军思想研究", 0));
                break;
            };
        } else if (text("习近平强军思想研究").exists() && id("ib_back").exists()) {
            log("返回列表页");
            break;
        };
    };
};
function 点击首页推荐() {
    className("androidx.recyclerview.widget.RecyclerView").id("rvHorziontalTab").findOnce(0).child(0).click();
    sleep(500)
    if (className("androidx.recyclerview.widget.RecyclerView").id("rvHorziontalTab").findOnce(0).child(0).click() == false) {
        sleep(1000)
        click(className("androidx.recyclerview.widget.RecyclerView").id("rvHorziontalTab").findOnce(0).child(0).bounds().centerX(), className("androidx.recyclerview.widget.RecyclerView").id("rvHorziontalTab").findOnce(0).child(0).bounds().centerY())//坐标点击
    }
};
function 倒置音频列表() {
    sleep(random(2000, 3000));
    if (id("tvLoadSort").text("倒序").exists()) {
        id("tvLoadSort").text("倒序").findOne().click()
    } else if (id("tvLoadSort").text("正序").exists()) {
        id("tvLoadSort").text("正序").findOne().click()
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




function 继续分享函数() {
    if (!停止分享开关) {
        if (className("android.widget.TextView").id("tvTabTitle").text("文章").findOne().parent().parent().parent().click()) {
            log("选择文章1");
        } else if (className("android.widget.TextView").id("tvTabTitle").text("文章").findOne().parent().click()) {
            log("选择文章2");
        } else if (click(text("文章").findOnce().bounds().centerX(), text("文章").findOnce().bounds().centerY())) {
            log("选择文章3");
        } else if (text("文章").boundsInside(0, 0, device.width, device.height / 4).findOne().click()) {
            log("选择文章4");
        };
        log("暂停5秒"); sleep(5000);



        while (!停止分享开关) {
            id("recycler_view").findOne().child(0).click();
            sleep(3000);
            if (id("ibRightIcon").exists()) {
                click(id("ibRightIcon").findOnce(0).bounds().centerX(), id("ibRightIcon").findOnce(0).bounds().centerY())//坐标点击
                sleep(1000);
                id("recycler_view").findOne().child(0).click()
                sleep(1000);
                id("tvShareSchoolCircle").text("学友圈").findOne().click()
                sleep(1000);
                if (id("tvSignNum").text("+1").exists()) { var 积分 = id("tvSignNum").findOne().text(); console.info("♥成功分享并积分" + 积分); };
                sleep(3000);
                返回首页();
                sleep(3000);
                swipe(device.width / 2, device.height * 0.6, device.width / 2, device.height * 0.6 - 400, 1000);
                sleep(3000);
            } else {
                返回首页();
                swipe(device.width / 2, device.height * 0.6, device.width / 2, device.height * 0.6 - 400, 1000);
            };
            if (text("没有更多了").exists()) {
                log("没有文章了，运行结束。");
                break;
            }
            if (停止分享开关) {
                log("完成分享");
                break;
            };
        };
        log("全部运行完成。");
    };
};

function 多余替换(课程的名字) {
    课程的名字 = 课程的名字.replace("最近在听", "");

    return 课程的名字;
};