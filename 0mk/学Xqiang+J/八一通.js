var xxset = {//推送
    "url": "http://www.pushplus.plus/send", //定义微信推送对象 url+"?token="+token+"&title="+title+"&content="+content
    "token": "0174cd8846854b7a8a665dbba842c46e", //在pushplus网站登录可以找到自己的token
    "wxpost": 1, //是否微信推送
};
var DLog; //记录内容推送用
function pushwx(title, content) { //发送日志post
    var wxsend = http.post(xxset.url, { "token": xxset.token, "title": title, "content": content, });
    return wxsend;
};
function detailLog(str, log) { //推送 日志记录和弹出提示
    var time = new java.text.SimpleDateFormat('HH:mm:ss').format(new Date());
    str = str + "<br/>" + time + " " + log;
    return str;
};

var idlujing = storages.create("shuju");//配置文件

let 订阅积分;
let 收藏积分;
let 分享积分;
let 发表评论;
let 阅读文章2分钟;
let 收听5分钟时长;
let 学习课程3分钟;
let 参与答题积分;
let 答题正确积分;


function 启动软件() {
    绿色弹窗("欢迎使用");
    console.setPosition(0, device.height / 2); //部分华为手机console有bug请注释本行
    // console.show(true); //部分华为手机console有bug请注释本行
    绿色弹窗("正在启动app...");
    if (!(launchApp("360手机卫士") || launch('com.qihoo360.mobilesafe'))) {
        console.error("正在启动");
        // return;
    };
    var 启动加载次数 = 0;
    while (!text("军队应用").exists()) {
        启动加载次数++;
        if (启动加载次数 > 5) {
            back();
            sleep(1000);
            if (id("tv_content").className("android.widget.TextView").text("您确定要退出吗?").exists()) {
                id("btn_ok").findOne().click();
            };
        };
        黄色弹窗("等待加载")
        if (id("n4").exists()) {
            id("n4").findOne().click();
        };
        if (textContains("取消").exists() && textContains("立即升级").exists()) {
            text("取消").click();
        };
        sleep(3000);
    };

    绿色弹窗("完成app启动");
    sleep(1000)
    结束本段弹窗();
};
function 进入学习强军() {
    if (text("学习强军").exists()) {
        text("学习强军").findOne().parent().click();

    } else {
        id("fr").text("军队应用").findOne().parent().child(1).click();
        sleep(1000);
        className("android.widget.RadioButton").text("  软件仓库  ").click()
        sleep(1000);
        className("android.widget.TextView").id("i2").text("学习强军").findOne().parent().click();
    };
    sleep(3000);    // id("tv_jump").text("跳 过").findOne().click()//跳过
    if (textContains("跳 过").findOne(5000)) { while (!click("跳 过")); 绿色弹窗("关闭广告倒计时"); } else {

        黄色弹窗("没有广告倒计时");
    };
    sleep(1000);
    返回强军主页();
    while (!id("tv_home_tab_index2").text("学习").exists()) {
        黄色弹窗("等待加载")

        if (textContains("取消").exists() && textContains("立即升级").exists()) {
            text("取消").click();
        };
        sleep(3000);
    };
    绿色弹窗("完成进入学习强军");
    sleep(1000);
};

var 积分系统是否维护 = false;
function 获取积分() {
    返回强军主页();
    while (!id("tv_home_tab_index2").text("学习").exists()) {
        黄色弹窗("等待加载.");
        if (textContains("取消").exists() && textContains("立即升级").exists()) {
            text("取消").click();
        };
        sleep(3000);
    };
    id("iv_mine_top").findOne(3000).click();//点击我的
    id("im_tv_name").text("积分银行").findOne(3000).parent().click()
    while (!text("首次登陆").exists()) {
        黄色弹窗("等待积分列表");
        sleep(5000);
        if (className("android.view.View").text("积分系统维护中").exists()) {
            红色弹窗("积分系统维护");
            黄色弹窗("即将进入无脑操作");
            积分系统是否维护 = true;
            sleep(3000);
            break;
        };
    };

    if (积分系统是否维护 == true) {
        绿色弹窗("无脑操作");
        sleep(2000);

        订阅积分 = 0;
        收藏积分 = 0;
        分享积分 = 0;
        发表评论 = 0;
        阅读文章2分钟 = 0;
        学习课程3分钟 = 0;
        收听5分钟时长 = 0;
        参与答题积分 = 0;
        答题正确积分 = 0;

        结束本段弹窗();
        黄色弹窗("订阅积分:" + 订阅积分);
        黄色弹窗("收藏积分:" + 收藏积分);
        黄色弹窗("分享积分:" + 分享积分);
        黄色弹窗("发表评论:" + 发表评论);
        黄色弹窗("阅读文章2分钟:" + 阅读文章2分钟);
        黄色弹窗("学习课程3分钟:" + 学习课程3分钟);
        黄色弹窗("收听5分钟时长:" + 收听5分钟时长);
        黄色弹窗("参与答题积分:" + 参与答题积分);
        黄色弹窗("答题正确积分:" + 答题正确积分);
    } else {
        绿色弹窗("进入积分列表");
        sleep(2000);
        var name;
        name = className("android.view.View").id("app").findOne().child(10).child(1).text();
        let str6 = name.split("/");
        订阅积分 = str6[0].match(/[0-9][0-9]*/g);
        //toastLog(订阅积分[0]);
        name = className("android.view.View").id("app").findOne().child(14).child(1).text();
        let str8 = name.split("/");
        收藏积分 = str8[0].match(/[0-9][0-9]*/g);
        //toastLog(收藏积分[0]);
        name = className("android.view.View").id("app").findOne().child(18).child(1).text();
        let str9 = name.split("/");
        分享积分 = str9[0].match(/[0-9][0-9]*/g);
        // toastLog(分享积分[0]);
        name = className("android.view.View").id("app").findOne().child(22).child(1).text();
        let str0 = name.split("/");
        发表评论 = str0[0].match(/[0-9][0-9]*/g);
        //toastLog(发表评论[0]);
        name = className("android.view.View").id("app").findOne().child(26).child(1).text();
        let str1 = name.split("/");
        阅读文章2分钟 = str1[0].match(/[0-9][0-9]*/g);
        //toastLog(阅读文章2分钟[0]);
        name = className("android.view.View").id("app").findOne().child(30).child(1).text();
        let str4 = name.split("/");
        学习课程3分钟 = str4[0].match(/[0-9][0-9]*/g);
        //toastLog(学习课程3分钟[0]);
        name = className("android.view.View").id("app").findOne().child(34).child(1).text();
        let str15 = name.split("/");
        收听5分钟时长 = str15[0].match(/[0-9][0-9]*/g);
        //toastLog(收听5分钟时长[0]);
        name = className("android.view.View").id("app").findOne().child(38).child(1).text();
        let str12 = name.split("/");
        参与答题积分 = str12[0].match(/[0-9][0-9]*/g);
        //toastLog(参与答题积分[0]);
        name = className("android.view.View").id("app").findOne().child(42).child(1).text();
        let str13 = name.split("/");
        答题正确积分 = str13[0].match(/[0-9][0-9]*/g);
        //toastLog(答题正确积分[0]);

        结束本段弹窗();
        黄色弹窗("订阅积分:" + 订阅积分[0]);
        黄色弹窗("收藏积分:" + 收藏积分[0]);
        黄色弹窗("分享积分:" + 分享积分[0]);
        黄色弹窗("发表评论:" + 发表评论[0]);
        黄色弹窗("阅读文章2分钟:" + 阅读文章2分钟[0]);
        黄色弹窗("学习课程3分钟:" + 学习课程3分钟[0]);
        黄色弹窗("收听5分钟时长:" + 收听5分钟时长[0]);
        黄色弹窗("参与答题积分:" + 参与答题积分[0]);
        黄色弹窗("答题正确积分:" + 答题正确积分[0]);
    };
    sleep(1000);
    结束本段弹窗();
};
function 运行获取积分项目() {
    if (积分系统是否维护 == true) {
        订阅强军号线程(3);
        阅读文章积分线程(15);
        收听看视频积分线程(12);
        学习课程积分线程(20);
    } else {
        if (订阅积分[0] < 3) { var 需运行次数A = (3 - 订阅积分[0]); 订阅强军号线程(需运行次数A); };
        if (阅读文章2分钟[0] < 15) { var 需运行次数1 = (15 - 阅读文章2分钟[0]); 阅读文章积分线程(需运行次数1); };
        if (收听5分钟时长[0] < 12) { var 需运行次数3 = (12 - 收听5分钟时长[0]); 收听看视频积分线程(需运行次数3); };
        if (学习课程3分钟[0] < 20) { var 需运行次数2 = (20 - 学习课程3分钟[0]); 学习课程积分线程(需运行次数2); };
    }



};

function 订阅强军号线程(当前数量) {
    let 订阅强军号成功的数量 = 0;
    绿色弹窗("需订阅强军号：" + 当前数量 + "积分");
    返回强军主页();
    if (!id("tv_home_tab_index1").text("课堂").findOne(1000).parent().click()) { click(id("tv_home_tab_index1").text("课堂").findOne().parent().bounds().centerX(), id("tv_home_tab_index1").text("课堂").findOne().parent().bounds().centerY()); log("再次进入课程页面"); } else { log("进入课程页面"); };
    id("tv_load").className("android.widget.TextView").text("已为您更新数据").waitFor(); sleep(1000);
    // 绿色弹窗("");
    id("tv_course_type1").text("更多").findOne().click();
    id("tv_load").className("android.widget.TextView").text("已为您更新数据").waitFor();
    sleep(1000);
    绿色弹窗("进入页面完成");
    while (true) {
        var list = id("recyclerview").findOne();
        for (var i = 0; i < list.childCount(); i++) {
            var child = list.child(i);
            if (child.click()) {
                sleep(1000);
                while (!textContains("关注").exists()) { log("等待关注按钮出现"); sleep(1500); };

                if (订阅强军号成功的数量 < 当前数量) {
                    if (id("course_type_focus").text("关注").exists()) {
                        id("course_type_focus").text("关注").findOne().click()
                        back();
                        绿色弹窗("关注成功");
                        订阅强军号成功的数量++;
                    } else if (id("course_type_focus").text("已关注").exists()) {
                        toastLog("已关注"); back();
                    };
                } else {
                    log("完成任务关注");
                    break;
                };
                sleep(1000);
            };

        };


        if (订阅强军号成功的数量 == 当前数量) { log("完成添加任务"); break; };
        let isDown = className("androidx.recyclerview.widget.RecyclerView").id("recyclerview").scrollForward(); sleep(1000);
        if (isDown == true) {
            swipe(device.width / 2, device.height * 0.6, device.width / 2, device.height * 0.6 - 800, 500); sleep(2000);

            let isDown = className("androidx.recyclerview.widget.RecyclerView").id("recyclerview").scrollForward(); sleep(1000);
            if (isDown == true) { log("滑倒底部，无可关注的了"); break; };
        };
        sleep(1000);
    };

    绿色弹窗("运行完成");
    返回强军主页();
};
function 阅读文章积分线程(当前数量) {
    绿色弹窗("需阅读文章：" + 当前数量 + "积分");
    var 阅读文章数组 = [];
    返回强军主页();
    while (!text("学习").exists());
    click(id("tv_home_tab_index0").text("资讯").findOne().parent().bounds().centerX(), id("tv_home_tab_index0").text("资讯").findOne().parent().bounds().centerY());
    sleep(2000);
    className("android.widget.TextView").text("强军先锋").findOne(3000).click();
    sleep(3000);
    while (true) {
        sleep(2000);
        click(className("androidx.viewpager.widget.ViewPager").id("viewPager").findOnce(0).bounds().centerX(), className("androidx.viewpager.widget.ViewPager").id("viewPager").findOnce(0).bounds().centerY());
        sleep(2000);
        if (id("tv_title").exists()) {
            var 文章名字 = className("android.widget.TextView").id("tv_title").findOne().text();
            var 查询比较结果 = 阅读文章数组.indexOf(文章名字);
            if (查询比较结果 == -1) {//如果没有            // num.includes(40);  阅读文章数组.indexOf(文章名字)
                阅读文章数组.push(文章名字);//添加数组
                绿色弹窗("阅读第" + 阅读文章数组.length + "篇文章:" + 文章名字);
                文章评论收藏分享函数();
                倒计时函数(120, 150);
                back();
            } else {
                红色弹窗("文章已阅读过");
                back();
            };
        } else {
            var 文章名字 = null;
            红色弹窗("没有找到文章名字");
            back();
        };
        sleep(2000);
        swipe(device.width / 2, device.height * 0.6, device.width / 2, device.height * 0.6 - 500, 500);
        sleep(2000);
        if (阅读文章数组.length == 当前数量 || 阅读文章数组.length > 当前数量) {
            绿色弹窗("完成阅读")
            break;
        };
        sleep(500);
    };
    // log(阅读文章数组)
    返回强军主页();
};
function 收听看视频积分线程(当前数量) {
    绿色弹窗("需阅微视频：" + 当前数量 + "积分");
    var 阅读视频数组 = [];
    返回强军主页();
    click(id("tv_home_tab_index0").text("资讯").findOne().parent().bounds().centerX(), id("tv_home_tab_index0").text("资讯").findOne().parent().bounds().centerY());
    sleep(2000);
    className("android.widget.TextView").text("首页").findOne(3000).click()
    sleep(3000);
    id("tv_title").text("微视号").findOne().parent().click();
    id("iv_add").waitFor()
    sleep(3000);

    console.log("开始观看视频");
    while (true) {
        sleep(2000);
        if (id("tv_content").exists()) {
            var 视频名字 = className("android.widget.TextView").id("tv_content").findOne().text();
            var 查询比较结果 = 阅读视频数组.indexOf(视频名字);
            // 绿色弹窗(视频名字);
            if (查询比较结果 == -1) {//如果没有            // num.includes(40);  阅读视频数组.indexOf(视频名字)
                阅读视频数组.push(视频名字);//添加数组
                黄色弹窗("开始看第" + 阅读视频数组.length + "个视频:" + 视频名字);
                视频倒计时函数(302, 320);
                // swipe(device.width / 2, device.height * 0.6, device.width / 2, device.height * 0.6 - 800, 500);
                id("recyclerview").scrollForward();
            } else {
                红色弹窗("视频已阅读过");
                // swipe(device.width / 2, device.height * 0.6, device.width / 2, device.height * 0.6 - 800, 500);
                id("recyclerview").scrollForward();
            };
        } else {
            var 视频名字 = null;
            红色弹窗("没有找到视频名字");
            // swipe(device.width / 2, device.height * 0.6, device.width / 2, device.height * 0.6 - 800, 500);
            id("recyclerview").scrollForward();
        };
        sleep(2000);

        if (阅读视频数组.length == 当前数量 || 阅读视频数组.length > 当前数量) {// 绿色弹窗("完成阅读")
            break;
        };
        sleep(500);
    };
    返回强军主页();
};
function 学习课程积分线程(当前数量) {
    绿色弹窗("需学习课程：" + 当前数量 + "积分");
    返回强军主页();
    if (!id("tv_home_tab_index1").text("课堂").findOne(1000).parent().click()) { click(id("tv_home_tab_index1").text("课堂").findOne().parent().bounds().centerX(), id("tv_home_tab_index1").text("课堂").findOne().parent().bounds().centerY()); log("再次进入课程页面"); } else { log("进入课程页面"); };
    id("tv_load").className("android.widget.TextView").text("已为您更新数据").waitFor(); sleep(1000);
    className("android.widget.TextView").id("tv_title").text("军营大课").findOne().parent().click(); sleep(2000);
    className("android.widget.TextView").id("class_room_course_item_tv").text("永恒的誓言").waitFor(); sleep(1000);
    className("android.widget.TextView").id("class_room_course_item_tv").text("永恒的誓言").findOne().parent().click();
    device.setMusicVolume(0); 黄色弹窗("打开静音")
    结束本段弹窗(); 倒计时函数(3600, 3800);
    返回强军主页();
};










































// /*******************悬浮窗*******************/
var w = fInit();
function fInit() {
    // ScrollView下只能有一个子布局
    var w = floaty.rawWindow(
        <card cardCornerRadius='8dp' alpha="0.8">
            <vertical>
                <horizontal bg='#FF000000' padding='10 5'>
                    <text id='version' textColor="#FFFFFF" textSize="18dip">左小子</text>
                    <text id='title' h="*" textColor="#FFFFFF" textSize="13dip" layout_weight="1" gravity="top|right"></text>
                </horizontal>
                <ScrollView>
                    <vertical bg='#AA000000' id='container' minHeight='20' gravity='center'></vertical>
                </ScrollView>
            </vertical>
            <relative gravity="right|bottom">
                <text id="username" textColor="#FFFFFF" textSize="12dip" padding='5 0'></text>
            </relative>
        </card>
    );
    ui.run(function () {
        //w.title.setFocusable(true);
        w.version.setText("左小子助手");
    });
    w.setSize(720, -2);
    w.setPosition(10, 10);
    w.setTouchable(false);
    return w;
};
function fSet(id, txt) {
    ui.run(function () {
        w.findView(id).setText(txt);
    });
}
function 绿色弹窗(str) {
    ui.run(function () {
        let textView = ui.inflate(
            <text id="info" maxLines="2" textColor="#7CFC00" textSize="15dip" padding='5 0'></text>,
            w.container);
        textView.setText(str.toString());
        w.container.addView(textView);
    });
    console.info(str);
};
function 红色弹窗(str) {
    ui.run(function () {
        let textView = ui.inflate(
            <text id="error" maxLines="2" textColor="#FF0000" textSize="15dip" padding='5 0'></text>,
            w.container);
        textView.setText(str.toString());
        w.container.addView(textView);
    });
    console.error(str);
};
function 黄色弹窗(str) {
    ui.run(function () {
        let textView = ui.inflate(
            <text id="tips" maxLines="2" textColor="#FFFF00" textSize="15dip" padding='5 0'></text>,
            w.container);
        textView.setText(str.toString());
        w.container.addView(textView);
    });
    console.info(str);
};
function 结束本段弹窗() {
    ui.run(function () {
        w.container.removeAllViews();
    });
};
function fRefocus() {
    threads.start(function () {
        ui.run(function () {
            w.requestFocus();
            w.title.requestFocus();
            ui.post(function () {
                w.title.clearFocus();
                w.disableFocus();
            }, 200);
        });
    });
    sleep(500);
};
function fClear() {
    ui.run(function () {
        w.container.removeAllViews();
    });
};
function 积分控制窗口() {
    threads.start(function () {
        console.show();
        sleep(100);
        console.setSize(device.width * 0.4, device.height * 0.50);
        console.setPosition(-27, device.height * 0.68);
    });
};
function 返回强军主页() {
    var 返回强军主页次数 = 0;
    while (!id("tv_home_tab_index2").text("学习").exists()) {
        黄色弹窗("等待加载" + (返回强军主页次数 + 1));
        if (textContains("取消").exists() && textContains("立即升级").exists()) {
            text("取消").click();
        };
        返回强军主页次数++
        back();
        sleep(2000);
        if (id("tv_content").className("android.widget.TextView").text("您确定要退出吗?").exists()) {
            id("btn_cancel").findOne().click()
        }
        if (返回强军主页次数 == 5) {
            启动软件();
            进入学习强军();
            break;
        };
    };
    结束本段弹窗();
};

function 文章评论收藏分享函数() {
    var commentText = ["歌颂共产党,永远跟党走。", "为中华崛起而读书！", "倡导富强、民主、文明、和谐", "自由，平等，公正，法治", "不忘初心，牢记使命", "努力奋斗，回报祖国！", "赞叹中共伟大成就 祝福中国美好未来！"]; //评论内容，可自行修改，大于5个字便计分
    sleep(1000)

    var 八一通评论开关 = idlujing.get("八一通评论开关");//读
    if (八一通评论开关 !== undefined) {//如果查询不是空白
        if (八一通评论开关 == false) {
            黄色弹窗("评论功能被设置关闭");
        } if (八一通评论开关 == true) {
            if (id("detail_page_do_comment").text("欢迎发表您的观点").exists()) {//评论
                id("detail_page_do_comment").text("欢迎发表您的观点").findOne().click()
                sleep(1000)
                if (text("好观点会被优先展示").exists()) {
                    text("好观点会被优先展示").findOne().click()
                    sleep(1000)
                    var num = random(0, commentText.length - 1) //随机数
                    click("欢迎发表你的观点");
                    sleep(1000);
                    setText(commentText[num]); //输入评论内容
                    click("发布");
                    sleep("3000")
                    绿色弹窗("发布成功")
                };
            };
        }
    } else {
        idlujing.put("八一通评论开关", true);  //保存的内容
        if (id("detail_page_do_comment").text("欢迎发表您的观点").exists()) {//评论
            id("detail_page_do_comment").text("欢迎发表您的观点").findOne().click()
            sleep(1000)
            if (text("好观点会被优先展示").exists()) {
                text("好观点会被优先展示").findOne().click()
                sleep(1000)
                var num = random(0, commentText.length - 1) //随机数
                click("欢迎发表你的观点");
                sleep(1000);
                setText(commentText[num]); //输入评论内容
                click("发布");
                sleep("3000")
                绿色弹窗("发布成功")
            };
        };
    }



    sleep(1000);
    if (id("iv_collect").exists()) { //收藏
        绿色弹窗("收藏完成");
        id("iv_collect").findOne().click()
    };
    sleep(1000);
    if (id("iv_share").exists()) {//分享
        id("iv_share").findOne().click()
        while (!textContains("分享到").exists()); //等待弹出分享选项界面
        sleep(2000);
        绿色弹窗("分享成功!");
        back();
    };
    sleep(1000);
};
function 倒计时函数(最小时间, 最大时间) {
    文章倒计时time = random(parseInt(最小时间), parseInt(最大时间))
    fClear();
    绿色弹窗("开始刷时长，总共" + 文章倒计时time + "秒");
    let 循环秒数 = 1;
    for (文章倒计时变量i = 文章倒计时time; 文章倒计时变量i > 1; 文章倒计时变量i--) {
        sleep(1000);
        fSet("info", "已观看" + 循环秒数 + "秒，总共" + 文章倒计时time + "秒");
        循环秒数++;
        // toastLog(文章倒计时变量i)
        if (文章倒计时变量i % 5 == 0) {
            toast("剩余阅读时间：" + 文章倒计时变量i + "秒")
            swipe(device.width / 2, device.height * 0.6, device.width / 2, device.height * 0.6 - 100, 500);
        };
    };
    fSet("info", "已结束文章时长");
    console.hide();
};
function 视频倒计时函数(最小时间, 最大时间) {
    文章倒计时time = random(parseInt(最小时间), parseInt(最大时间))
    fClear();
    绿色弹窗("开始刷时长，总共" + 文章倒计时time + "秒");
    let 循环秒数 = 1;
    for (文章倒计时变量i = 文章倒计时time; 文章倒计时变量i > 1; 文章倒计时变量i--) {
        sleep(1000);
        fSet("info", "已观看" + 循环秒数 + "秒，总共" + 文章倒计时time + "秒");
        循环秒数++;
        // toastLog(文章倒计时变量i)
        if (文章倒计时变量i % 5 == 0) {
            toast("剩余阅读时间：" + 文章倒计时变量i + "秒")
        };
    };
    fSet("info", "已结束文章时长");
    console.hide();
};



//====================ID检测部分
function 删除二维码() {
    device.vibrate(100);
    fileList = new Array; //获取文件内容搜索字段
    searchFiles(String("/sdcard/"), fileList, {
        dir: String("Pictures"),
        file: String(".png"),
    }, 1);
    sleep(250);// log("内容" + fileList.length)
    if (fileList.length !== 0) {// log(fileList)                                 //进行删除
        for (j = 0, len = fileList.length; j < len; j++) {
            var 数据 = fileList[j]
            files.remove(数据.path)
        };
    };

    // });
    // };
};


function searchFiles(dir, list, matchObj, C, D) {
    files.listDir(dir).forEach(fileName => { //遍历该文件夹的文件
        var path = files.join(dir, fileName);
        if (files.isDir(path)) { //如果是子文件夹则继续扫描子文件夹的文件
            if ((!C && C != 0) || C > 0) {
                if (!D) {
                    if (!matchObj.dir || isMatch(fileName, matchObj.dir)) {
                        searchFiles(path, list, matchObj, C - 1, true);
                    };
                } else {
                    searchFiles(path, list, matchObj, C - 1, D);
                };
            };
        } else {
            if (!matchObj.dir || D) {
                if (!matchObj.file || isMatch(fileName, matchObj.file)) {
                    if (!matchObj.fileIn || isMatch(String(files.read(path)), matchObj.fileIn)) {
                        list.push({//则把它添加到列表中
                            name: fileName,
                            parent: dir,
                            path: path
                        });
                    };
                };
            };
        };
    });
};
function isMatch(string, match) {
    if (typeof string != "string") {
        throw ">" + string + "< must be string"
    };
    return match instanceof RegExp ? match.test(string) : (string.indexOf(match) + 1);
};

var 调试模式完整文件名路径 = "";
var 调试模式完整二维码信息 = "";
var 查到期时间 = "";
function 使用权限验证() {
    返回强军主页();
    id("iv_mine_top").findOne().click()
    id("im_my_user_view").waitFor()
    sleep(100);
    id("im_my_user_view").findOne().click()
    id("tv_title").className("android.widget.TextView").text("我的二维码").waitFor()
    sleep(100);
    id("tv_title").className("android.widget.TextView").text("我的二维码").findOne().parent().click()
    id("profile_tv_qr_save_phone").text("保存到手机").waitFor()
    sleep(100);
    id("profile_tv_qr_save_phone").text("保存到手机").findOne().click()
    sleep(100);


    device.vibrate(100);
    fileList = new Array;
    searchFiles(String("/sdcard/"), fileList, {
        dir: String("Pictures"),
        file: String(".png"),
    }, 1);
    sleep(250);
    if (fileList.length == 1) {
        var 数据 = fileList[0]
        var 取二维码文件名 = 数据.name
    } else if (fileList.length !== 1) {
        删除二维码();
        if (fileList.length == 1) {
            var 数据 = fileList[0]
            var 取二维码文件名 = 数据.name
        } else if (fileList.length !== 1) {
            删除二维码();
        };
    };


    function 解析二维码(imgPath) {
        try {
            var pixels = images.readPixels(imgPath);
            var w = pixels.width;
            var h = pixels.height;
            var binaryBitmap = new BinaryBitmap(new HybridBinarizer(new RGBLuminanceSource(w, h, pixels.data)));
            var qrCodeResult = new MultiFormatReader().decode(binaryBitmap);
            var 结果 = qrCodeResult.getText()
            setClip(结果);
            return 结果;

        } catch (e) {
            toast("查询失败");
        }
    };


    sleep(100);

    let dexFilePath = "./res/zxing.dex";
    runtime.loadDex(dexFilePath);
    var imgPath = files.path("/sdcard/Pictures/" + 取二维码文件名);
    调试模式完整文件名路径 = imgPath;
    importClass(android.graphics.drawable.BitmapDrawable);
    importClass(java.util.Hashtable);
    importPackage(com.google.zxing);
    importPackage(com.google.zxing.common);
    importPackage(com.google.zxing.client.j2se);
    importClass(android.graphics.Bitmap);
    importClass(java.io.FileOutputStream);
    importClass(java.io.BufferedOutputStream);


    sleep(100);
    var 二维码分析结果 = /[\u4e00-\u9fa5_a-zA-Z0-9_]{8,11}/gi.exec(解析二维码(imgPath)); //正则
    调试模式完整二维码信息 = 二维码分析结果;
    threads.start(function () {
        function 到期时间() {
            let res = http.get("ghproxy.com/https://raw.githubusercontent.com/cx1937410794/ku/main/0mk/学Xqiang+J/八一通权限信息.json", { headers: { 'Accept-Language': 'zh-cn,zh;q=0.5', 'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11' } });
            if (res.statusCode != 200) { alert("❌获取失败: " + res.statusCode); return; };
            let json = res.body.json();
            let thisTime = json[二维码分析结果[0]];
            查到期时间 = thisTime;
            log(查到期时间)
            if (!thisTime) { 红色弹窗("无使用权限"); alert("请先激活"); setClip(二维码分析结果[0]); exit(); };
            let thisTime时间 = thisTime.时间
            thisTime时间 = thisTime时间.replace(/-/g, '/');
            let time = new Date(thisTime时间);
            return 到期 = time.getTime() / 1000;
        }; 到期时间();
        function 网络时间() { //网络时间
            try { let data = "http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp".body.json(); return Math.floor(data["data"]["t"] / 1000) + "000"; } catch (error) {
                return Math.floor(new Date().getTime() / 1000);
            };
        };




        // threads.start(function () {
        var jqm = device.getAndroidId(); //机器码  //微信推送
        DLog = detailLog("输出日志", "机器码:" + jqm);
        var bsm = device.fingerprint //唯一标识码
        DLog = detailLog(DLog, "标识码:" + bsm);
        var battery = device.getBattery(); //获取电量
        DLog = detailLog(DLog, "设备当前电量：" + battery);
        DLog = detailLog(DLog, "调试模式完整文件名路径" + 调试模式完整文件名路径);
        DLog = detailLog(DLog, "调试模式完整二维码信息" + 调试模式完整二维码信息);
        DLog = detailLog(DLog, "强J的ID：" + 二维码分析结果[0]);
        DLog = detailLog(DLog, "ID到期时间：" + 查到期时间);


        var nowtime = new java.text.SimpleDateFormat('HH:mm:ss').format(new Date());
        var title = nowtime + "强J的一键积分银行ID查询"
        var content = DLog;
        var wxsend = pushwx(title, content);
        if (wxsend.statusCode == 200) { //发送成功与否？
            DLog = detailLog(DLog, "--==  成功  ==--"); //成功发送日志
            toast(" 成功 ");
        } else {
            DLog = detailLog(DLog, "+++ 失败，请检查 +++");
            toast(" 异常 ");
        };
        // }); 
        //——————————————————————————————————
        let 结果i = 到期时间() - (网络时间());
        // alert(结果i, 到期时间(), 网络时间())
        if (结果i > 0) {
            let res = http.get("ghproxy.com/https://raw.githubusercontent.com/cx1937410794/ku/main/0mk/学Xqiang+J/八一通权限信息.json", { headers: { 'Accept-Language': 'zh-cn,zh;q=0.5', 'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11' } });
            if (res.statusCode != 200) {
                alert("❌获取失败: " + res.statusCode);
                return;
            };
            let json = res.body.json();
            let thisTime = json[二维码分析结果[0]]
            let thisTime时间 = thisTime.时间
            let thisTime身份 = json[二维码分析结果[0]];
            thisTime身份 = thisTime身份.身份
            // ui.run(() => { ui.验证结果显示窗口.setText("登录成功"); });
            // ui.run(() => { ui.有效期显示窗口.setText(thisTime时间); });
            // ui.run(() => { ui.验证权限显示窗口.setText(thisTime身份); });
            绿色弹窗("验证成功\n到期时间:" + thisTime时间)
            绿色弹窗("" + thisTime身份)

            全局_助手权限 = true;
            return;
        } else if (0 > 结果i) {
            let res = http.get("ghproxy.com/https://raw.githubusercontent.com/cx1937410794/ku/main/0mk/学Xqiang+J/八一通权限信息.json", { headers: { 'Accept-Language': 'zh-cn,zh;q=0.5', 'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11' } });
            if (res.statusCode != 200) {
                alert("❌获取失败: " + res.statusCode);
                return;
            };
            let json = res.body.json();
            let thisTime = json[二维码分析结果[0]]
            let thisTime时间 = thisTime.时间
            红色弹窗("权限已到期");
            红色弹窗("时间:" + thisTime时间);
            exit();
            // ui.run(() => { ui.验证结果显示窗口.setText("时间到期"); });
            // ui.run(() => { ui.有效期显示窗口.setText(thisTime时间); });
            // ui.run(() => { ui.验证权限显示窗口.setText("权限收回"); });

        };
    });
    sleep(3000)
    返回强军主页();
    结束本段弹窗();
};


删除二维码();
启动软件();
进入学习强军();
使用权限验证();

删除二维码();
进入学习强军();
获取积分();
运行获取积分项目();



结束本段弹窗();
log("完成全部调试");
exit(); 