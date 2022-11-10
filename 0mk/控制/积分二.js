关闭同名();
日志控制台();
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
                let res = http.get("https://raw.gh.fakev.cn/cx1937410794/ku/main/0mk/UI/右侧账号.json", { headers: { 'Accept-Language': 'zh-cn,zh;q=0.5', 'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11' } });
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
                starttime = new Date().getTime(); //程序开始时间       
                监听函数();
                签到函数();
                程序_学习室函数();//测试点
                继续学习音频课();
                返回首页();
                while (!click("今日学习"));
                endtime = new Date().getTime(); //程序结束时间
                alltime = (parseInt(endtime - starttime))
                console.error("运行结束,共耗时" + Math.floor(alltime / 1000 / 60) + "分" + alltime / 1000 % 60 + "秒");
                sleep(100000);
                console.hide() //关闭日志窗口
                exit();
            } else if (0 > 结果i) {
                let res = http.get("https://raw.gh.fakev.cn/cx1937410794/ku/main/0mk/UI/右侧账号.json", { headers: { 'Accept-Language': 'zh-cn,zh;q=0.5', 'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11' } });
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
                        starttime = new Date().getTime(); //程序开始时间       
                        监听函数();
                        签到函数();
                        程序_学习室函数();//测试点
                        继续学习音频课();
                        返回首页();
                        while (!click("今日学习"));
                        endtime = new Date().getTime(); //程序结束时间
                        alltime = (parseInt(endtime - starttime))
                        console.error("运行结束,共耗时" + Math.floor(alltime / 1000 / 60) + "分" + alltime / 1000 % 60 + "秒");
                        sleep(100000);
                        console.hide() //关闭日志窗口
                        exit();
                    } else { console.error("操作失败"); exit(); };
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
    if (检测每日广告.isAlive()) {
        检测每日广告.interrupt();
        console.log("终止检测每日广告检测");
    };

    if (检测跳过页面.isAlive()) {
        检测跳过页面.interrupt();
        console.log("终止检测跳过页面检测");
    };
    sleep(500);
    className("android.widget.TextView").text("我的").waitFor(); className("android.widget.TextView").text("我的").findOne().parent().click();//点击我的
    id("tvCheckIn").findOne().click(); sleep(500);//点击签到
    click(device.width * 0.84, device.height * 0.70);//点击旁边
    sleep(500);
    let 打卡文本控件 = id("tvStart").className("android.widget.TextView").findOne().text();
    if (打卡文本控件 == "已打卡") {
        toastLog("今日已签到");
    } else {
        click(打卡文本控件); toastLog("签到成功。");
    };
    返回首页();
};


//学习室函数
function 程序_学习室函数() {
    className("android.widget.TextView").text("今日学习").waitFor();
    className("android.widget.TextView").text("今日学习").findOne().parent().click();

    id("tvTabTitle").className("android.widget.TextView").text("已订专栏").waitFor();
    if (id("tvTabTitle").className("android.widget.TextView").text("已订专栏").findOne(5000) != null) {// toastLog("我找到了");
        click(id("tvTabTitle").className("android.widget.TextView").text("已订专栏").findOne().bounds().centerX(), id("tvTabTitle").className("android.widget.TextView").text("已订专栏").findOne().bounds().centerY());
    };
    sleep(1000);
    //查看学习目标数
    var 组件_学习目标全内容 = id("tvSourceDay").className("android.widget.TextView").findOne(50000);
    var 组件_学习目标数量 = /资源日学习目标\s(\d+)\s条.*/gi.exec(组件_学习目标全内容);

    if (组件_学习目标数量 != null && 组件_学习目标数量[1] >= 10) {
        log("共有学习目标" + 组件_学习目标数量[1] + "条，开始学习。");
        console.info("开始学习");
        函数_文章阅读(11);
        返回首页();
    } else if (组件_学习目标数量 == null) {
        alert("网络错误，已终止执行软件[2]");
        threads.shutDownAll();
        exit();
    } else {
        click("调整目标");
        console.error("共有学习目标" + 组件_学习目标数量[1] + "条，不符合规定学习数，请先运行一键改五。");
        alert("共有学习目标" + 组件_学习目标数量[1] + "条，不符合规定学习数，请先运行一键改五。");
        threads.shutDownAll();
        exit();
    };
};
var 组件_文章类型;
var 组件_文章名字 = null;
function 函数_文章阅读(num) {
    for (a = 1; a <= num; a++) {
        sleep(2000);
        //toast("恭喜我找到了");
        // id("tvTabTitle").className("android.widget.TextView").text("已订专题").findOne().findOne().parent().parent()
        //找到第一篇文章，并且找到他的子控件获取他的text
        if (id("tvDesc").className("android.widget.TextView").drawingOrder("2").findOne(3000) != null) {//列表文章名字是否存在
            var 组件_文章名字 = id("tvDesc").className("android.widget.TextView").drawingOrder("2").findOne().text(); //toastLog(title);
            if (组件_文章名字 != null) {
                id("tvDesc").className("android.widget.TextView").drawingOrder("2").findOne(5000).parent().click();//点击第一篇文章
                //取文章类型
                if (id("common_title").className("android.widget.TextView").findOne(5000) != null) { click(device.width * 0.84, device.height * 0.70); 组件_文章类型 = id("common_title").className("android.widget.TextView").findOne().text(); } else { 组件_文章类型 == null; };
                if (组件_文章类型 != "课程") {
                    //多线程函数
                    start = new Date().getTime(); //程序开始时间
                    分享函数();//打开分享函数
                    倒计时函数(); // 倒计时函数(random(43, 45));
                    toast("阅读结束");
                    end = new Date().getTime(); //程序结束时间
                    console.info("读《" + 组件_文章名字 + "》奖1分，耗" + (parseInt(end - start)) / 1000 + "秒，剩" + (num - a) + "篇");//输出信息
                    sleep(1000); 返回首页();// id("ib_back").findOne().click();
                } else if (组件_文章类型 == null) {
                    sleep(3000); 返回首页();//  id("ib_back").findOne().click();
                } else if (组件_文章类型 == "课程") {
                    sleep(3000); 返回首页();// id("ib_back").findOne().click();
                };
            } else {
                alert("网络错误或无内容可阅读，已终止执行软件[4]"); threads.shutDownAll(); exit();
            }
        } else {//列表文章名字不存在
            // if (id("tv_empty_subscribe").className("android.widget.TextView").findOne(1000) != null) {
            if (id("tvTabTitle").className("android.widget.TextView").text("已订专栏").findOne().parent().parent().selected()) {//selected被选中
                click(id("tvTabTitle").className("android.widget.TextView").text("已订专题").findOne().bounds().centerX(), id("tvTabTitle").className("android.widget.TextView").text("已订专题").findOne().bounds().centerY());
            } else {
                // alert("网络错误或无内容可阅读，已终止执行软件[42]");
                click(id("tvTabTitle").className("android.widget.TextView").text("已订专栏").findOne().bounds().centerX(), id("tvTabTitle").className("android.widget.TextView").text("已订专栏").findOne().bounds().centerY());
                // threads.shutDownAll();
                // exit();
            };
            // };
        };
    };
};

function 继续学习音频课() {
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
    let 音频_音频列表 = className("androidx.recyclerview.widget.RecyclerView").id("rvAudioList")
    for (var i = 0; i < 26; i++) {
        let 音频_音频列表_顶边 = className("androidx.recyclerview.widget.RecyclerView").id("rvAudioList").findOne(5000).bounds().top;//顶// let 音频_音频列表_底边 = className("androidx.recyclerview.widget.RecyclerView").id("rvAudioList").findOne(5000).bounds().botto; //底
        swipe(device.width / 2, 音频_音频列表_顶边 + 400, device.width / 2, 音频_音频列表_顶边, 500);//向上滑动
        sleep(1000);
        let 音频_音频列表_顶点击范围 = className("androidx.recyclerview.widget.RecyclerView").id("rvAudioList").findOne().bounds().top;//顶
        let 音频_音频列表_底边 = className("androidx.recyclerview.widget.RecyclerView").id("rvAudioList").findOne().bounds().bottom; //底
        if (!className("android.widget.FrameLayout").clickable(true).boundsInside(0, 音频_音频列表_顶点击范围, device.width, 音频_音频列表_底边).findOne(1000).click()) {
            log("未成功");
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
        // scrollDown(0); sleep(5); id("rvAudioList").scrollForward(); //看完当前页下滑一页
        // if (className("android.widget.TextView").text("没有更多了").exists()) { 返回首页(); break; };//无内容了
        // log("继续阅读下一页");
        // sleep(3000);
    };




    返回首页();
    console.hide();
    while (!click("今日学习"));
};
//===================================
//     组件部分
//===================================

var 组件_停止分享开关 = false;
function 分享函数() {
    threads.start(function () {
        if (!组件_停止分享开关) {
            toast(组件_文章类型);
            if (组件_文章类型 == "文章") {
                id("ibRightIcon").findOne().click();
                sleep(500);
                text("分享").waitFor();
                text("分享").findOne(2000).click();
                sleep(500);
                text("学友圈").waitFor();
                click("学友圈");
            }
        }

    })
};


function 监听函数() {
    threads.start(function () {
        events.observeToast();
        events.onToast(function (toast) {
            if (toast.getText() == "军职在线：分享成功分享已达上限" || toast.getText() == "分享成功分享已达上限") {
                log("分享成功,分享已达上限");
                组件_停止分享开关 = true; //分享已达上限,停止分享
            } else if (toast.getText() == "分享成功") {
                log("分享成功,奖励1积分");
            }
        })
    })
};

// function 倒计时函数(time) {
//     // if (className("android.webkit.WebView").drawingOrder("0").scrollable().findOne(5000) != null) {
//     //     for (c = 0; c < 10; c++) {
//     //         scrollDown(0);
//     //         sleep(1000);
//     //     };
//     // }; 
//     for (i = time; i > 1; i--) {
//         sleep(1000);
//         if (i % 5 == 0) {
//             toast("剩余阅读时间：" + i + "秒");
//             scrollDown(0);
//         }
//     }
//     //toastLog(i + "测试" + time);
// };

function 倒计时函数() {
    let 计时时间循环 = 0;
    while (true) {
        if (text("+1").exists() && 计时时间循环 > 15) {
            console.info("♥阅读完成,积分+1,用时:" + 计时时间循环 + "秒");
            sleep(1000);
            break;
        } else {
            计时时间循环++;
            sleep(1000);
            if (计时时间循环 % 5 == 0 && 计时时间循环 > 15) {
                toast("已计时" + 计时时间循环 + "秒"); swipe(device.width / 2, device.height * 0.6, device.width / 2, device.height * 0.6 - 100, random(10, 100));
            };
            if (计时时间循环 == 50 || 计时时间循环 > 50) {
                console.log("超时未获取到积分."); break;
            };
        };
    };
};

function 音频倒计时函数() {
    let 音频计时间循环 = 0;
    while (true) {
        if (text("+1").exists() && 音频计时间循环 > 15) {
            log("♥阅读完成,积分+1,用时:" + 音频计时间循环 + "秒");
            sleep(1000);
            break;
        } else {
            音频计时间循环++;
            sleep(1000);
            if (音频计时间循环 % 5 == 0 && 音频计时间循环 > 15) {
                swipe(device.width / 2, device.height * 0.6, device.width / 2, device.height * 0.6 - 100, random(10, 100)); toast("已经阅读：" + 音频计时间循环 + "秒");
            };
            // if (音频计时间循环 == 20) { id("ivPlayStatus").findOne().click() };//暂停音频 //测试点
            if (音频计时间循环 == 150 || 音频计时间循环 > 150) {
                log("阅读完成,无积分"); break;
            };
        };
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

// function 继续分享函数() {
//     if (!停止分享开关) {
//         if (className("android.widget.TextView").id("tvTabTitle").text("文章").findOne().parent().parent().parent().click()) {
//             log("选择文章1");
//         } else if (className("android.widget.TextView").id("tvTabTitle").text("文章").findOne().parent().click()) {
//             log("选择文章2");
//         } else if (click(text("文章").findOnce().bounds().centerX(), text("文章").findOnce().bounds().centerY())) {
//             log("选择文章3");
//         } else if (text("文章").boundsInside(0, 0, device.width, device.height / 4).findOne().click()) {
//             log("选择文章4");
//         };
//         log("暂停5秒"); sleep(5000);
//         while (!停止分享开关) {
//             id("recycler_view").findOne().child(0).click();
//             sleep(3000);
//             if (id("ibRightIcon").exists()) {
//                 click(id("ibRightIcon").findOnce(0).bounds().centerX(), id("ibRightIcon").findOnce(0).bounds().centerY())//坐标点击
//                 sleep(1000);
//                 id("recycler_view").findOne().child(0).click()
//                 sleep(1000);
//                 id("tvShareSchoolCircle").text("学友圈").findOne().click()
//                 sleep(1000);
//                 if (id("tvSignNum").text("+1").exists()) { var 积分 = id("tvSignNum").findOne().text(); console.info("♥成功分享并积分" + 积分); };
//                 sleep(3000);
//                 返回首页();
//                 sleep(3000);
//                 swipe(device.width / 2, device.height * 0.6, device.width / 2, device.height * 0.6 - 400, 1000);
//                 sleep(3000);
//             } else {
//                 返回首页();
//                 swipe(device.width / 2, device.height * 0.6, device.width / 2, device.height * 0.6 - 400, 1000);
//             };
//             if (text("没有更多了").exists()) {
//                 log("没有文章了，运行结束。");
//                 break;
//             }
//             if (停止分享开关) {
//                 log("完成分享");
//                 break;
//             };
//         };
//         log("全部运行完成。");
//     };
// };
function 多余替换(课程的名字) {
    课程的名字 = 课程的名字.replace("最近在听", "");

    return 课程的名字;
};

function 返回音频列表页() {
    let flalg = false;
    while (!flalg) {
        sleep(1000)
        if (id("common_title").text("音频课").className("android.widget.TextView").exists()) {
            console.info("返回列表页了")
            flalg = true;
            break;
        };
        console.warn("返回列页");
        back();
        if (text("学习室").exists()) {
            console.info("返回首页了")
            flag = true;
            while (!click("发现"));
            sleep(random(500, 1000));
            进入音频课()
            sleep(random(3000, 4000));
            选择音频类目()
            进入音频课()
            break;
        };
    };
};