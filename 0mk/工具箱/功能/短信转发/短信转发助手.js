/**
 * 这个js把界面写一下
 */
"ui";
// console.setGlobalLogConfig({ "file": "/sdcard/脚本/log.txt" });
// 在最近任务列表中隐藏自己
let am = context.getSystemService(context.ACTIVITY_SERVICE);
if (am != null) {
    tasks = am.getAppTasks();
    //log(tasks);
    if (tasks != null && tasks.size() > 0) {
        tasks.get(0).setExcludeFromRecents(true);
    }
}

// --------------> 定义一些工具函数 strat <-----------------------
// 1.运行该脚本时停止其他脚本
engines.all().map((ScriptEngine) => {
    if (engines.myEngine().toString() !== ScriptEngine.toString()) {
        ScriptEngine.forceStop();
    }
});
// 2.设置一个自定义颜色按钮控件
var ColoredButton = (function () {
    //继承ui.Widget
    util.extend(ColoredButton, ui.Widget);

    function ColoredButton() {
        //调用父类构造函数
        ui.Widget.call(this);
        //自定义属性color，定义按钮颜色
        this.defineAttr("color", (view, name, defaultGetter) => {
            return this._color;
        }, (view, name, value, defaultSetter) => {
            this._color = value;
            view.attr("backgroundTint", value);
        });
        //自定义属性onClick，定义被点击时执行的代码
        this.defineAttr("onClick", (view, name, defaultGetter) => {
            return this._onClick;
        }, (view, name, value, defaultSetter) => {
            this._onClick = value;
        });
    }
    ColoredButton.prototype.render = function () {
        return (
            <button textSize="16sp" style="Widget.AppCompat.Button.Colored" w="auto" />
        );
    }
    ColoredButton.prototype.onViewCreated = function (view) {
        view.on("click", () => {
            if (this._onClick) {
                eval(this._onClick);
            }
        });
    }
    ui.registerWidget("colored-button", ColoredButton);
    return ColoredButton;
})();
// 3.在文字前面带上时间并打印
function addTimeLog(string, type) {
    // 最终格式，例如：2022-3-19 10:03:01 --> 打印信息

    var time = new Date();
    // year = time.getFullYear(); //获取完整的年份
    month = time.getMonth() + 1; //获取当前月份(0-11,0代表1月)
    date = time.getDate(); //获取当前日
    hours = time.getHours(); //获取当前小时数(0-23)
    minutes = time.getMinutes(); //获取当前分钟数(0-59)
    secondes = time.getSeconds(); //获取当前秒数(0-59)
    t = fixZeroStart(month, 2) + '-' +
        fixZeroStart(date, 2) + ' ' +
        fixZeroStart(hours, 2) + ':' +
        fixZeroStart(minutes, 2) + ':' +
        fixZeroStart(secondes, 2) + ' --> ';

    switch (type) {
        case 'black':
            console.log(t + string);
            break;
        case 'red':
            console.warn(t + string);
            break;
    };
}
// 4.字符串补零
function fixZeroStart(str, n) {
    return (Array(n).join(0) + str).slice(-n);
}



// --------------> 定义一些工具函数 strat <-----------------------


// ------------------------------->布局设计 start<-------------------------------------------
ui.statusBarColor("#000000")
ui.layout(
    // 滑动布局
    <ScrollView bg="#000000">
        <vertical bg="#000000">
            {/* 1.添加一个顶部导航栏 */}
            <appbar>
                <toolbar id="toolbar" title="短信转发(未开启)"bg="#000000" />
            </appbar>

            {/* 2.添加一个卡片布局 */}
            <card w="*" h="*" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
                <vertical padding="8 8" h="auto">
                    <text text="①信息配置" textSize="18sp" />
                    <input hint="请输入本机手机号码或备注(可留空)" gravity="center" id="tel" />
                    <input hint="请输入微信token(必填)" gravity="center" id="pushTarget" />
                    {/* 2.1 添加水平布局存放两个按钮 */}
                    <linear>
                        <colored-button text="开启短信监听" layout_weight="1" id="start" />
                        <colored-button text="关闭短信监听" layout_weight="1" color="#ffca2c"
                            textColor="#2c2c2c" id="end" />
                    </linear>
                </vertical>
            </card>

            {/* 3.添加第二个卡片布局 */}
            <card w="*" h="*" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
                <vertical padding="8 8" h="auto">
                    <text text="②监听结果" textSize="18sp" marginBottom="10" />
                    <linear>
                        <text text="接收时间：" />
                        <text text="" id="time" />
                    </linear>
                    <linear>
                        <text text="发信的人：" />
                        <text text="" id="sendPhone" />
                    </linear>
                    <linear>
                        <text text="收信的人：" />
                        <text text="" id="receivePhone" />
                    </linear>
                    <linear>
                        <text text="短信内容：" />
                        <text text="" textColor="#f86934" id="content" />
                    </linear>
                </vertical>
            </card>

            {/* 4.添加第三个卡片 */}
            <card w="*" h="*" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
                <vertical padding="8 8" h="auto">
                    <linear>
                        <text text="③执行日志" textSize="18sp" marginBottom="10" layout_weight="3" />
                        <text text="当前状态：" />
                        <text text="未开启" layout_weight="5" id="hint" textColor="#008000" />
                        <text w="20" h="*" text="X" id="close" />
                    </linear>
                    {/* 控制台控件 */}
                    <console w="*" h="*" id="console" bg="#ffffcc"></console>
                </vertical>
            </card>
        </vertical>
    </ScrollView>
);

// 启动UI不弹出输入法
activity.getWindow().setSoftInputMode(android.view.WindowManager.LayoutParams.SOFT_INPUT_STATE_ALWAYS_HIDDEN);

// 创建右上角选项菜单
ui.emitter.on("create_options_menu", menu => {
    menu.add("监听记录");
    menu.add("退出程序");
});
// 监听选项菜单点击
ui.emitter.on("options_item_selected", (e, item) => {
    switch (item.getTitle()) {
        case "监听记录":
            toast("还没有完成");
            break;
        case "退出程序":
            exit();
            break;

    }
    e.consumed = true;
});
activity.setSupportActionBar(ui.toolbar); //绑定到toolbar控件上

// 设置控制台
ui.console.setConsole(runtime.console);
// 设置输入框颜色
ui.console.input.setTextColor(colors.BLACK);
// 隐藏输入框
ui.console.setInputEnabled(false);
// 自定义日志颜色

ui.console.setColor("D", "#2c2c2c");
ui.console.setColor("W", "#b71c1c");
// ui.console.setTextSize('10sp');

// ------------------------------->布局设计 end<-------------------------------------------

// ----------------->model start<--------------------------

// 初始化数据
tel = '';
pushTarget = '';



// 开辟一个存储app数据的空间
var appData = storages.create('appData');

if (getStorageData('smsContentList') != undefined) {
    smsContentList = getStorageData('smsContentList');
} else {
    smsContentList = [] // 用来存储监听到的短信
}


if (getStorageData('timeArr') != undefined) {
    timeArr = getStorageData('timeArr');
} else {
    timeArr = [] // 用来存储监听到的短信
}

if (getStorageData('smsArr') != undefined) {
    smsArr = getStorageData('smsArr');
} else {
    smsArr = [] // 用来存储监听到的短信
}


// appData.clear();
// 设置页面数据
setPageData(true);
// 为了方便存储和获取定义两个函数
// 存储
function setStorageData(key, value) {
    appData.put(key, value);
};
// 获取
function getStorageData(key) {
    return appData.get(key);
}
// 保存当前页面数据
function savePageData() {
    // 电话
    setStorageData('tel', ui.tel.text());
    // 推送目标
    setStorageData('pushTarget', ui.pushTarget.text());
}

// 设置页面数据为之前保存的数据
function setPageData(isSetValue) {
    if (getStorageData('tel') != undefined) {
        tel = getStorageData('tel')
    }
    isSetValue && ui.tel.setText(tel);

    if (getStorageData('pushTarget') != undefined) {
        pushTarget = getStorageData('pushTarget')
    }
    isSetValue && ui.pushTarget.setText(pushTarget);




    if (getStorageData('pushTarget') != undefined) {
        pushTarget = getStorageData('pushTarget')
    }
    isSetValue && ui.pushTarget.setText(pushTarget);

    if (getStorageData('pushTarget') != undefined) {
        pushTarget = getStorageData('pushTarget')
    }
    isSetValue && ui.pushTarget.setText(pushTarget);
}
// ----------------->model end<--------------------------


// ------------------->界面响应相关control start<---------------------------


// 按钮---->开启监听
ui.start.on('click', () => {
    开始监听();
});

function 开始监听() {
    // 1.获取当前页面内容
    savePageData(); // 保存当前页面数据
    // 2.保存当前页面内容7
    addTimeLog('【启动】短信监听成功', "red");
    // 3.执行相关功能
    // 3.1 开始短信监听
    smsMonitor(smsContentList);
    ui.toolbar.setTitle("短信转发(已开启)");
    // 4.设置下面的提示信息
    ui.hint.setText("已开启");
    toast("监听中...");
}
// 按钮  ----> 关闭监听
ui.end.on('click', () => {
    // 取消监听器
    events.removeAllListeners();
    addTimeLog('【关闭】短信监听成功', 'red');
    ui.toolbar.setTitle("短信转发(未开启)");
    ui.hint.setText("未开启");
});

// 图片 ---> 清除控制台打印
ui.close.on('click', () => {
    console.clear();
});
// ------------------->界面响应相关control end<---------------------------

// ---------------> 短信功能实现代码 <--------------------------------
// 

// 短信监听器

function smsMonitor(smsContentList) {
    // try catch
    try {
        events.observeNotification();
    } catch (e) {
        exit();
        log(e);
    };

    events.onNotification(function (notification) {
        var smsText = notification.getText();
        // 1.判断是否来自短信的通知
        if (notification.getPackageName().indexOf('com.android.mms') != -1) {

            // 2.判断内容是否为空
            if (smsText != null) {

                // 时间
                timeString = timeStr()
                // 标题（发信人）
                title = notification.getTitle()
                // 内容
                content = notification.getText()

                // if (content.indexOf('验证码') != -1) {
                if (getStorageData('timeArr') != undefined) {
                    timeArr = getStorageData('timeArr');
                } else {
                    timeArr = [] // 用来存储监听到的短信
                }

                if (getStorageData('smsArr') != undefined) {
                    smsArr = getStorageData('smsArr');
                } else {
                    smsArr = [] // 用来存储监听到的短信
                }

                // 4.判断时间和内容是否在数组中，如果不在就添加并打印
                if (timeArr.indexOf(timeString) == -1 && smsArr.indexOf(content) == -1) {
                    // 添加
                    timeArr.push(timeString);
                    smsArr.push(content);
                    setStorageData('timeArr', timeArr); // 保存到内存中
                    setStorageData('smsArr', smsArr); // 保存到内存中
                    // 提示信息
                    addTimeLog('监听到了一条短信', "red");
                    // 设置界面控件显示监听到的内容
                    // 时间
                    ui.time.setText(timeString);
                    // 发信人
                    ui.sendPhone.setText(title);
                    // 收信人
                    ui.receivePhone.setText(ui.tel.text());
                    // 短信内容
                    ui.content.setText(content);


                    // 5.添加到数组中,然后存储到内存中
                    tepArr = [timeString, ui.tel.text(), content]
                    smsContentList.push(tepArr);
                    setStorageData('smsContentList', smsContentList); // 保存到内存中

                    // 6.这里是发送通知功能
                    /**
                     * 6.1 邮箱通知 sendToEmail(){}
                     * 6.2 pushplus 
                     */
                    微信token = ui.pushTarget.text();

                    // c51ae69e894f4cf28199e3307d294ca2


                    threads.start(function () {
                        //推送
                        var xxset = {
                            "url": "http://pushplus.hxtrip.com/send", //定义微信推送对象 url+"?token="+token+"&title="+title+"&content="+content
                            "token": 微信token, //在pushplus网站登录可以找到自己的token
                            "wxpost": 1 //是否微信推送
                        }
                        var DLog; //记录内容推送用
                        function pushwx(title, content) { //发送日志post
                            var wxsend = http.post(xxset.url, {
                                "token": xxset.token,
                                "title": title,
                                "content": content,
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            });
                            return wxsend;
                        }

                        function detailLog(str, log) { //推送 日志记录和弹出提示
                            var time = new java.text.SimpleDateFormat('HH:mm:ss').format(new Date());
                            str = str + "<br/>" + time + " " + log;
                            return str;
                        }
                        if (xxset.wxpost) { //微信推送学习情况

                            DLog = detailLog("设备通知", "发件人:" + ui.sendPhone.text());
                            if (ui.receivePhone.text() != "") {
                                DLog = detailLog(DLog, "收件人:" + ui.receivePhone.text());
                            }
                            DLog = detailLog(DLog, "内容：" + ui.content.text());
                            DLog = detailLog(DLog, "");
                            DLog = detailLog(DLog, "");
                            DLog = detailLog(DLog, "备注:本信息来自左小子短信转发助手");

                            var nowtime = new java.text.SimpleDateFormat('HH:mm:ss').format(new Date());
                            var title = nowtime + "信息转收"
                            var content = DLog;
                            var wxsend = pushwx(title, content);
                            if (wxsend.statusCode == 200) { //发送成功与否？
                                DLog = detailLog(DLog, "--==  成功  ==--"); //成功发送日志
                            } else {
                                DLog = detailLog(DLog, "+++ 失败，请检查 +++");
                            }
                        }
                    });
                }
                // }
            }
        }
    });
};



function timeStr() {
    var time = new Date();
    // year = time.getFullYear(); //获取完整的年份
    month = time.getMonth() + 1; //获取当前月份(0-11,0代表1月)
    date = time.getDate(); //获取当前日
    hours = time.getHours(); //获取当前小时数(0-23)
    minutes = time.getMinutes(); //获取当前分钟数(0-59)
    secondes = time.getSeconds(); //获取当前秒数(0-59)
    t = fixZeroStart(month, 2) + '-' +
        fixZeroStart(date, 2) + ' ' +
        fixZeroStart(hours, 2) + ':' +
        fixZeroStart(minutes, 2) + ':' +
        fixZeroStart(secondes, 2);
    return t;
};









addTimeLog('欢迎使用《短信转发助手》', "red");