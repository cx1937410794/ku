"ui";

let r = isWifiProxy(context);
if (r) {
    alert("请勿试用代理");
    exit
};

function isWifiProxy(context) {
    importClass(android.os.Build);
    importClass(android.text.TextUtils);
    IS_ICS_OR_LATER = Build.VERSION.SDK_INT >= Build.VERSION_CODES.ICE_CREAM_SANDWICH;
    let proxyAddress;
    let proxyPort;
    if (IS_ICS_OR_LATER) {
        proxyAddress = java.lang.System.getProperty("http.proxyHost");
        portStr = java.lang.System.getProperty("http.proxyPort");
        proxyPort = java.lang.Integer.parseInt(portStr != null ? portStr : "-1");
    } else {
        proxyAddress = android.net.Proxy.getHost(context);
        proxyPort = android.net.Proxy.getPort(context);
    };
    return !TextUtils.isEmpty(proxyAddress) && proxyPort != -1;
};






importClass("android.widget.VideoView")
importClass("android.media.MediaPlayer")
show();
ui.statusBarColor("#000000");
function show() {
    ui.layout(
        <frame>
            <vertical elevation="999" padding="20sp">
                <vertical >
                    <vertical padding="16">
                        <text textSize="30sp" textColor="#ff0000" gravity="center">登录系统</text>
                    </vertical>
                    <vertical h="auto" align="center" margin="0 50">
                        <linear>
                            <card w="*" h="250" margin="0" cardCornerRadius="15dp" cardElevation="15dp" gravity="bottom" alpha="0.5">
                                <vertical gravity="center_vertical">
                                    <text id="标签1" marginTop="0" text="到期时间:1970-1-1" gravity="center" textColor="MAGENTA" textSize="15" marginRight="30" />
                                    <text id="标签2" marginTop="0" text="登录身份:访客" gravity="center" textColor="MAGENTA" textSize="15" marginRight="30" marginBottom="30dp" />

                                    <horizontal>
                                        <button id="登录按钮" style="Widget.AppCompat.Button.Colored" layout_weight="1" gravity="center">登陆</button>
                                        <button id="注册按钮" style="Widget.AppCompat.Button.Colored" layout_weight="1" gravity="center">注册</button>
                                        <button id="客服一号按钮" style="Widget.AppCompat.Button.Colored" layout_weight="1" gravity="center">客服</button>
                                    </horizontal>
                                    <horizontal>
                                        <button id="第三方播放器按钮" style="Widget.AppCompat.Button.Colored" layout_weight="1" gravity="center">第三方播放器下载</button>
                                    </horizontal>
                                </vertical>
                            </card>
                        </linear>
                    </vertical>
                </vertical>
            </vertical>
            <android.widget.VideoView gravity="center" h="*" id="vd" />
        </frame>
    );
    ui.vd.setVideoPath("http://hwrr.jx.chinamobile.com:8080/PLTV/88888888/224/3221225647/index.m3u8");
    ui.vd.start()
    threads.start(function () {
        sleep(10000);
        while (true)
            if (!ui.vd.isPlaying()) {
                ui.vd.start();
                sleep(10000);
            };
    });
};
function 设备序列号() {
    let id = device.serial;
    if (id == null || id == "" || id == "unknown") {
        id = device.getAndroidId();
    }
    if (id == null || id == "" || id == "unknown") {
        id = device.getIMEI();
    }
    return id;
};
ui.登录按钮.on("click", () => { toast("登录"); 登录线程(); });
function 登录线程() {
    threads.start(function () {
        let 到期时间变量;
        function 到期时间() {
            let res = http.get("http://ghproxy.com/https://raw.githubusercontent.com/cx1937410794/ku/main/000直播神器/账号权限.json", { headers: { 'Accept-Language': 'zh-cn,zh;q=0.5', 'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11' } });
            if (res.statusCode != 200) { toastLog("❌获取失败: " + res.statusCode); return; };
            let json = res.body.json();
            //无设备
            if (json[设备序列号()] == undefined) { ui.run(() => { ui.标签1.setText("🕒到期时间:未查询到此设备"); ui.标签2.setText("💌身份权限:设备未激活"); }); return; };

            let thisTime = json[设备序列号()][0];
            到期时间变量 = thisTime;
            if (thisTime == undefined || thisTime == null) { ui.run(() => { ui.标签1.setText("🕒到期时间:" + thisTime); ui.标签2.setText("💌身份权限:" + json[设备序列号()][1]); }); return; };
            thisTime = thisTime.replace(/-/g, '/');
            let time = new Date(thisTime);
            return 到期 = time.getTime();
        };
        function 网络时间() { //网络时间
            try {
                let data = "http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp".body.json();
                return Math.floor(data["data"]["t"] / 1000) + "000";
            } catch (error) {
                return Math.floor(new Date().getTime() / 1000) + "000";
            };
        };
        //——————————————————————————————————
        let 结果i = 到期时间() - (网络时间());
        if (结果i > 0) {

            var storage = storages.create("左小子临时备忘录"); //模拟器用户
            var content = storage.get("content");
            let res = http.get("http://ghproxy.com/https://raw.githubusercontent.com/cx1937410794/ku/main/000直播神器/账号权限.json", { headers: { 'Accept-Language': 'zh-cn,zh;q=0.5', 'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11' } });
            if (res.statusCode != 200) { toastLog("❌获取失败: " + res.statusCode); return; };
            let json = res.body.json();
            let thisTime = json[设备序列号()][0];
            ui.run(() => { ui.标签1.setText("🕒到期时间:" + thisTime); ui.标签2.setText("💌身份权限:" + json[设备序列号()][1]); });
            //加载功能
            let result = http.get("http://ghproxy.com/https://raw.githubusercontent.com/cx1937410794/ku/main/000直播神器/0直播平台UI.js", { headers: { 'Accept-Language': 'zh-cn,zh;q=0.5', 'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11' } });
            if (result.statusCode == 200) { var res = result.body.string(); 脚本引擎 = engines.execScript("UI", res); } else { toastLog("❌请求错误，请联系管理员"); exit(); };

        } else if (0 > 结果i) {
            ui.run(() => { ui.标签1.setText("🕒到期时间:" + 到期时间变量); ui.标签2.setText("💌身份权限:激活后查看"); });
            toastLog("您的时间已到期");
        };
    });
};
ui.注册按钮.on("click", () => { 发送数据线程(); });
function 发送数据线程() {
    var xxset = { "url": "http://www.pushplus.plus/send", "token": "0174cd8846854b7a8a665dbba842c46e", "wxpost": 1, };
    var DLog;
    function pushwx(title, content) { var wxsend = http.post(xxset.url, { "token": xxset.token, "title": title, "content": content, headers: { "Content-Type": "application/json" }, }); return wxsend; };
    function detailLog(str, log) { var time = new java.text.SimpleDateFormat('HH:mm:ss').format(new Date()); str = str + "<br/>" + time + " " + log; return str; };
    var jqm = device.getAndroidId(); //机器码
    DLog = detailLog("输出日志", "机器码:" + jqm);
    var bsm = device.fingerprint //唯一标识码
    DLog = detailLog(DLog, "标识码:" + bsm);
    var battery = device.getBattery(); //获取电量
    DLog = detailLog(DLog, "设备当前电量：" + battery);
    DLog = detailLog(DLog, "其他数据信息" + 设备序列号());
    if (xxset.wxpost) {
        var nowtime = new java.text.SimpleDateFormat('HH:mm:ss').format(new Date());
        var title = nowtime + "直播申请数据"
        var content = DLog;
        var wxsend = pushwx(title, content);
        if (wxsend.statusCode == 200) { //发送成功与否？ 
            alert("申请成功,请联系人工客服激活!")
        } else {
            alert("申请失败,请联系管理员");
        };
    };
};


ui.客服一号按钮.on("click", () => { 客服一号线程(); });
function 客服一号线程() {
    threads.start(function () {
        function 联系客服() {
            try {
                app.startActivity({
                    action: "android.intent.action.VIEW", data: "mqqapi://card/show_pslcard?&uin=" + "",
                });
            } catch (e) { toast("您还没有安装QQ"); };
        }; 联系客服();
    });
};

ui.第三方播放器按钮.on("click", () => { 第三方播放器函数(); });
function 第三方播放器函数() {
    app.openUrl("https://www.wandoujia.com/apps/8076541/download/dot?spm=aligames_platform_ug.wdj_seo.0.0.521d40aeBUBkS7&ch=detail_normal_dl");
}



function 弹窗公告() {
    threads.start(function () {
        try {
            var text = http.get('zuoxiaozi.work/0mk/000直播神器/公告.json').body.string();
            log("公告:" + text);
            if (text.length == 0) {
                弹窗公告 = true;
                return;
            };
            toast('公告15秒后自动关闭');
            var d = dialogs.build({
                title: "公告",
                content: text,
                positive: "关闭",
            }).on("positive", () => {
                d.dismiss();
                d = null;
                text = null;
                showlog = true;
            }).show();
            sleep(15000);//显示时间
            if (!showlog) {
                d.dismiss();
                d = null;
                text = null;
                showlog = true;
            }
        } catch (e) {
            try {
                d.dismiss();
                d = null;
            } catch (e) { };
            text = null;
            showlog = true;
        };
    });
};
弹窗公告();