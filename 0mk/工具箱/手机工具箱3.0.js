"ui";
alert("公告\n本助手于2022年12月5日宣布停止维护,\n来自:zuoxiaozi.work");
var 全局_助手权限 = false;
importClass("androidx.drawerlayout.widget.DrawerLayout")
var 配置项 = storages.create("shuju");//配置项目录
// var color = "#000000"; //设置脚本主题颜色
ui.statusBarColor("#000000")//设置状态栏的颜色
ui.layout(
    <drawer id="drawer">
        <vertical>
            <appbar bg='#000000'>
                <toolbar id="toolbar" title="左小子AI工具箱 3.0" />
                <tabs id="tabs" />
            </appbar>
            <viewpager id="viewpager" bg='#000000'>
                <frame >
                    {/* <text text="第一页内容" textColor="black" textSize="16sp" /> */}

                    <vertical h="*">
                        <scroll layout_weight="1">
                            <vertical padding="16dp">
                                <vertical padding="12dp" bg='#EEE8AA'>
                                    <horizontal gravity="center_vertical">
                                        <text textSize="20dp" text="授权" textColor="#2288ff" marginLeft="8dp" />
                                        <frame layout_weight="1">
                                        </frame>
                                        <checkbox id="自动登录选择框" text="自动登录" />
                                        <button id="开始授权" text="验证" />
                                    </horizontal>
                                    <horizontal>
                                        <text textSize="15sp" text="验证结果  " marginLeft="10dp" />
                                        <text textSize="15sp" id="验证结果显示窗口" text="未验证" textColor="#222222" />
                                    </horizontal>
                                    <horizontal marginTop="2dp">
                                        <text textSize="15sp" text="有效期     " marginLeft="10dp" />
                                        <text textSize="15sp" id="有效期显示窗口" text="无数据" textColor="#222222" />
                                    </horizontal>
                                    <horizontal marginTop="2dp">
                                        <text textSize="15sp" text="权限        " marginLeft="10dp" />
                                        <text textSize="15sp" id="验证权限显示窗口" text="无数据" textColor="#222222" />
                                    </horizontal>
                                    <horizontal gravity="center" marginTop="6dp">
                                        <text textSize="15sp" text="机器码  " marginLeft="10dp" />
                                        <input textSize="15sp" layout_weight="1" bg="#E8E8E8" id="机器码输入框" />
                                    </horizontal>

                                    <horizontal gravity="center" marginTop="6dp">
                                        <button id="复制按钮" text="复制" />
                                        <button id="客服按钮" text="客服" />
                                    </horizontal>
                                </vertical>
                                <vertical bg="#EEDD82" padding="12dp" marginTop="16dp">
                                    <horizontal gravity="center_vertical">
                                        <text textSize="20dp" text="系统" textColor="red" marginLeft="8dp" />
                                        <frame layout_weight="1" h="44dp">
                                        </frame>
                                    </horizontal>
                                    <horizontal marginTop="2dp">
                                        <text textSize="15sp" text="分辨率  " marginLeft="10dp" />
                                        <text textSize="15sp" text="{{deviceWh()}}" textColor="#222222" />
                                    </horizontal>
                                    <horizontal marginTop="2dp">
                                        <text textSize="15sp" text="设备名  " marginLeft="10dp" />
                                        <text textSize="15sp" text="{{deviceName()}}" textColor="#222222" />
                                    </horizontal>
                                    <horizontal marginTop="2dp">
                                        <text textSize="15sp" text="安卓系统  " marginLeft="10dp" />
                                        <text textSize="15sp" text="{{device.release}}" textColor="#222222" />
                                    </horizontal>
                                    <horizontal marginTop="2dp" marginBottom="2dp">
                                        <text textSize="15sp" text="Root权限  " marginLeft="10dp" />
                                        <text textSize="15sp" text="无" textColor="#222222" />
                                    </horizontal>
                                    <horizontal marginTop="2dp" marginBottom="4dp">
                                        <text textSize="15sp" text="公告  " marginLeft="10dp" />
                                        <text id="公告内容显示窗口" textSize="15sp" text="暂无公告" textColor="#222222" />
                                    </horizontal>
                                </vertical>
                            </vertical>
                        </scroll>
                        {/* <vertical padding="16dp"> */}
                        {/* <frame id="start" h="42dp" bg="#CD8500"> */}
                        {/* <text text="客服" gravity="center" textColor="red" textSize="18sp" /> */}
                        {/* </frame> */}
                        {/* <frame id="stop" h="42dp" bg="#CD8500" marginTop="16dp" marginBottom="6dp"> */}
                        {/* <text text="停止" gravity="center" textColor="#888888" textSize="18sp"/> */}
                        {/* </frame> */}
                        {/* </vertical> */}
                    </vertical>


                </frame>
                <frame>
                    <scroll>
                        <vertical>
                            <horizontal gravity="center">
                                <button id="刷步数按钮" margin='5dp' textColor='#ffffff' center_horizontal="center" text="微信/QQ/支付宝 刷步数" h="60" w="170" style="Widget.AppCompat.Button.Colored" />
                                <button id="新学习强国" margin='5dp' textColor='#ffffff' center_horizontal="center" text="学习强国 一键积分" h="60" w="170" style="Widget.AppCompat.Button.Colored" />
                            </horizontal>

                            <horizontal gravity="center">
                                <button id="一键钉钉打卡" margin='5dp' textColor='#ffffff' center_horizontal="center" text="一键钉钉打卡(助手+)" h="60" w="170" style="Widget.AppCompat.Button.Colored" />
                                <button id="暂无功能" margin='5dp' textColor='#ffffff' center_horizontal="center" text="暂无功能" h="60" w="170" style="Widget.AppCompat.Button.Colored" />
                            </horizontal>
                        </vertical>
                    </scroll>
                </frame>
                <frame>
                    <vertical>
                        <horizontal padding="0">
                            <img src="https://s3.bmp.ovh/imgs/2021/12/612c65afc9decaaf.png" margin="40" w="125" h="125" />
                            <vertical>
                                <text marginTop="90" gravity="center" text="左小子开放APP" textColor="#FFFFFF" />
                                <text marginTop="5" gravity="center" text="左小子技术出品." textColor="#FFFFFF" />
                            </vertical>
                        </horizontal>
                        {/* <button id="检查更新按钮" layout_marginTop='50' layout_gravity="center" text="检查更新" w="150dp" h="60dp" style="Widget.AppCompat.Button.Colored" /> */}
                        <vertical bg="#F5F5F5" padding="12dp" marginTop="16dp" w="200dp" h="80dp" layout_gravity="center">
                            <checkbox id="检查更新按钮" text="自动检查更新" textColor="#000000" layout_gravity="center" w="150dp" h="60dp" />
                        </vertical>
                    </vertical>




                </frame>
            </viewpager>
        </vertical>
        <vertical layout_gravity="left|center_vertical" w="280" bg='#000000'>
            <img w="280" h="200" scaleType="fitXY" src="http://raw.gh.fakev.cn/cx1937410794/ku/main/0mk/工具箱/微信名片.jpg" />
            <list id="menu">
                <horizontal bg="?selectableItemBackground" w="*" textColor="#222222">
                    <img w="50" h="50" padding="16" src="{{this.icon}}" tint="#2288ff" />
                    <text textColor="#FFFFFF" textSize="15sp" text="{{this.title}}" layout_gravity="center" />
                </horizontal>
            </list>
        </vertical>
    </drawer>
);
ui.drawer.setDrawerListener(new DrawerLayout.DrawerListener({
    onDrawerSlide:
        function (drawerView, offset) {
            drawerView.scrollTo(((offset - 1) * drawerView.getMeasuredWidth() / 2), 0);
            ui.drawer.getChildAt(0).setTranslationX(drawerView.getWidth() * offset);
        }
}));
ui.emitter.on("create_options_menu", menu => {//创建选项菜单(右上角)
    menu.add("设置");
    menu.add("关于");

});
ui.emitter.on("options_item_selected", (e, item) => {//监听选项菜单点击
    switch (item.getTitle()) {
        case "设置":
            toast("还没有设置");
            break;
        case "关于":
            alert("关于", "左小子助手UI v3.0");
            break;
    }
    e.consumed = true;
});
activity.setSupportActionBar(ui.toolbar);
ui.viewpager.setTitles(["首页", "功能", "其他"]);//设置滑动页面的标题
ui.tabs.setupWithViewPager(ui.viewpager);//让滑动页面和标签栏联动
ui.toolbar.setupWithDrawer(ui.drawer);//让工具栏左上角可以打开侧拉菜单

function 读取配置项() {
    ui.自动登录选择框.setChecked(配置项.get("自动登录选择框", false));
    ui.检查更新按钮.setChecked(配置项.get("检查更新按钮", false));
};
读取配置项();
ui.menu.setDataSource([
    {
        title: "保留项一",
        icon: "@drawable/ic_android_black_48dp"
    },
    {
        title: "保留项二",
        icon: "@drawable/ic_settings_black_48dp"
    },
    {
        title: "保留项三",
        icon: "@drawable/ic_favorite_black_48dp"
    },
    {
        title: "退出",
        icon: "@drawable/ic_exit_to_app_black_48dp"
    }
]);
ui.menu.on("item_click", item => {
    switch (item.title) {
        case "退出":
            ui.finish();
            break;
    }
});
function deviceWh() {//设备信息
    return device.width + "x" + device.height
};
function deviceName() {
    return device.brand + " " + device.model
};
function 获取ID() {
    let id = device.serial;
    if (id == null || id == "" || id == "unknown") {
        id = device.getAndroidId();
    }
    if (id == null || id == "" || id == "unknown") {
        id = device.getIMEI();
    }
    return id;
};
// log(获取ID());
ui.run(() => {//启动UI机器码
    ui.机器码输入框.setText("" + $crypto.digest(获取ID(), "MD5"));
    log($crypto.digest(获取ID(), "MD5"));
});
ui.自动登录选择框.on("check", (checked) => {
    if (ui.自动登录选择框.checked) {
        配置项.put("自动登录选择框", true);
    } else {
        配置项.put("自动登录选择框", false);
    };
});
ui.检查更新按钮.on("check", (checked) => {
    if (ui.检查更新按钮.checked) {
        配置项.put("检查更新按钮", true);
    } else {
        配置项.put("检查更新按钮", false);
    };
});
function 一键授权内容() {
    let 取设备机器码 = $crypto.digest(获取ID(), "MD5")
    threads.start(function () {
        function 到期时间() {
            let res = http.get("raw.gh.fakev.cn/cx1937410794/ku/main/0mk/工具箱/权限信息.json", { headers: { 'Accept-Language': 'zh-cn,zh;q=0.5', 'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11' } });
            if (res.statusCode != 200) {
                alert("❌获取失败: " + res.statusCode);
                return;
            };
            let json = res.body.json();
            let thisTime = json[取设备机器码];
            if (!thisTime) {//先判断有无这个ID
                ui.run(() => { ui.验证结果显示窗口.setText("登录失败"); });
                ui.run(() => { ui.有效期显示窗口.setText("1970-1-1"); });
                ui.run(() => { ui.验证权限显示窗口.setText("无权限"); });
                return;
            };
            let thisTime时间 = thisTime.时间
            thisTime时间 = thisTime时间.replace(/-/g, '/');
            let time = new Date(thisTime时间);
            return 到期 = time.getTime() / 1000;
        };
        function 网络时间() { //网络时间
            try { let data = "http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp".body.json(); return Math.floor(data["data"]["t"] / 1000) + "000"; } catch (error) {
                return Math.floor(new Date().getTime() / 1000);
            };
        };

        //——————————————————————————————————
        let 结果i = 到期时间() - (网络时间());
        // alert(结果i, 到期时间(), 网络时间())
        if (结果i > 0) {
            let res = http.get("raw.gh.fakev.cn/cx1937410794/ku/main/0mk/工具箱/权限信息.json", { headers: { 'Accept-Language': 'zh-cn,zh;q=0.5', 'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11' } });
            if (res.statusCode != 200) {
                alert("❌获取失败: " + res.statusCode);
                return;
            };
            let json = res.body.json();
            let thisTime = json[取设备机器码]
            let thisTime时间 = thisTime.时间
            let thisTime身份 = json[$crypto.digest(获取ID(), "MD5")];
            thisTime身份 = thisTime身份.身份
            ui.run(() => { ui.验证结果显示窗口.setText("登录成功"); });
            ui.run(() => { ui.有效期显示窗口.setText(thisTime时间); });
            ui.run(() => { ui.验证权限显示窗口.setText(thisTime身份); });


            全局_助手权限 = true;
            return;
            // idlujing.put("idlujing", $crypto.digest(获取ID(), "MD5")); //存ID
        } else if (0 > 结果i) {
            let res = http.get("raw.gh.fakev.cn/cx1937410794/ku/main/0mk/工具箱/权限信息.json", { headers: { 'Accept-Language': 'zh-cn,zh;q=0.5', 'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11' } });
            if (res.statusCode != 200) {
                alert("❌获取失败: " + res.statusCode);
                return;
            };
            let json = res.body.json();
            let thisTime = json[取设备机器码]
            let thisTime时间 = thisTime.时间
            ui.run(() => { ui.验证结果显示窗口.setText("时间到期"); });
            ui.run(() => { ui.有效期显示窗口.setText(thisTime时间); });
            ui.run(() => { ui.验证权限显示窗口.setText("权限收回"); });

        };
    });
};
ui.开始授权.on('click', () => {//验证操作
    一键授权内容();
});
ui.复制按钮.on('click', () => {//复制机器码
    //开始获取脚本配置
    threads.start(function () {
        setClip($crypto.digest(获取ID(), "MD5"));    //取设备ID
        toast("复制成功");
    });
});
function 公告内容() {
    let res = http.get("raw.gh.fakev.cn/cx1937410794/ku/main/0mk/工具箱/权限信息.json", { headers: { 'Accept-Language': 'zh-cn,zh;q=0.5', 'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11' } });
    if (res.statusCode != 200) {
        alert("❌获取失败: " + res.statusCode);
        return;
    };
    let json = res.body.json();
    ui.run(() => { ui.公告内容显示窗口.setText(json["公告内容"]); });
};
function 联系作者(Quin) {//联系作者
    try {
        app.startActivity({
            action: "android.intent.action.VIEW",
            data: "mqqapi://card/show_pslcard?&uin=" + Quin
        });
    } catch (e) {
        toast("您还没有安装QQ");
    };
};
ui.客服按钮.on('click', () => {
    threads.start(function () {
        联系作者("1937410794");
    });
});
//============================================================================功能页面
//============================================================================功能页面
//============================================================================功能页面
function 加载功能(网址) {
    if (全局_助手权限 == true) {
        threads.start(function () {//开始获取脚本配置
            let result = http.get(网址, {
                headers: {
                    'Accept-Language': 'zh-cn,zh;q=0.5',
                    'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11'
                }
            });
            if (result.statusCode == 200) {
                var res = result.body.string();
                engines.execScript("左小子助手", res); //加载网络脚本
            } else {
                alert("❌请求错误，请联系管理员"); //出现错误时报错
            };
        });
    } else {
        alert("请先在首页验证助手权限.")
    };
};
ui.刷步数按钮.on('click', () => { 加载功能("raw.gh.fakev.cn/cx1937410794/ku/main/0mk/工具箱/功能/微信刷步数.js"); });

ui.新学习强国.on('click', () => { 加载功能("raw.gh.fakev.cn/cx1937410794/ku/main/0mk/工具箱/新学习强国/UI.js"); });

ui.一键钉钉打卡.on('click', () => { 加载功能("raw.gh.fakev.cn/cx1937410794/ku/main/0mk/工具箱/功能/钉钉自动打卡/每周定时任务.js"); });











































//关于页面
var 第二线程 = threads.start(function () {//启动时运行线程
    公告内容();
    if (配置项.get("自动登录选择框", false)) {
        一键授权内容();
    };
    if (配置项.get("检查更新按钮", false)) {
        更新功能("https://zuoxiaozi.lanzouv.com/iA1j208x7gje", "当日更新\n修复细微BUG\n更改APP底层\n新名字：左小子小拿手\n去繁化简,页面更简洁.\n新增多项功能\n优化多项BUG", "1.0.5");
    };
});
// ui.检查更新按钮.on("click", item => { 更新功能("zuoxiaozi.lanzouq.com/iA8KQ07n2iub", "更改APP底层\n新名字：左小子AI工具箱\n新增验证功能\n新增公告功能\n新增无障碍和悬浮窗权限", "1.0.2") });

pm = context.getPackageManager() //四行取自身版本名称
packageName = context.getPackageName()
packageInfo = pm.getPackageInfo(packageName, 0)
var 自身版本名称 = packageInfo.versionName// alert(自身版本名称);
importClass(java.net.HttpURLConnection);//下载框架
importClass(java.net.URL);
importClass(java.io.File);
importClass(java.io.FileOutputStream);
importClass(android.graphics.Color);
function 更新功能(更新链接, 更新公告, 更新版本号) {
    if (自身版本名称 == 更新版本号) {
        toastLog("最新版本！")
    } else {
        threads.start(function () {
            let result = http.get("https://api.kit9.cn/api/lanzouyun/?link=" + 更新链接, {
                headers: {
                    'Accept-Language': 'zh-cn,zh;q=0.5',
                    'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11'
                }
            });
            var 下载直链;
            var 更新日期;
            var 文件大小;
            if (result.statusCode == 200) {
                // var res = result.body.string();
                // console.log(res);
                let 获取结果 = result.body.json().data;
                // log(获取结果)
                // console.log("下载直链：" + 获取结果.downloadlink);
                // console.log("更新日期：" + 获取结果.time);
                // console.log("文件大小：" + 获取结果.size);
                下载直链 = 获取结果.downloadlink
                更新日期 = 获取结果.time
                文件大小 = 获取结果.size
                // log(下载直链)
            } else {
                alert("❌请求错误，请联系管理员"); //出现错误时报错
            };
            检查更新();
            function 检查更新() {// APP更新提示
                var 更新内容 = "更新版本号：" + 更新版本号 + "\n当前版本号:" + 自身版本名称 + "\n更新日期：" + 更新日期 + "\n文件大小：" + 文件大小 + "\n更新日志：\n" + 更新公告
                dialogs.build({
                    title: "发现新版本 ",
                    content: 更新内容,
                    positive: "立即下载",
                    negative: "取消",
                    neutral: "浏览器下载",
                    cancelable: false
                })
                    .on("positive", 更新面板)
                    .on("neutral", () => {
                        app.openUrl(下载直链);
                        exit();
                    })
                    .on("negative", () => {
                        alert("关闭软件");
                        exit();
                    })
                    .on("check", (checked) => {
                        GLOBAL_CONFIG.put("NO_UPDATE", 1);
                    }).show();
            }
            // 打开下载进度面板
            function 更新面板() {
                downloadDialog = dialogs.build({
                    title: "正在下载...",
                    progress: {
                        max: 100,
                        showMinMax: true
                    },
                    autoDismiss: false,
                    cancelable: false
                }).show();
                开始下载();
            }
            // 下载apk的主方法体
            function 开始下载() {
                threads.start(function () {
                    var path = files.cwd() + "/new.apk";
                    let apkFile = new File(path);
                    var conn = new URL(下载直链).openConnection();
                    conn.connect();
                    let is = conn.getInputStream();
                    let length = conn.getContentLength();
                    let fos = new FileOutputStream(apkFile);
                    let count = 0;
                    let buffer = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 1024);
                    while (true) {
                        var p = ((count / length) * 100);
                        let numread = is.read(buffer);
                        count += numread;
                        // 下载完成
                        if (numread < 0) {
                            toast("下载完成");
                            downloadDialog.dismiss();
                            downloadDialog = null;
                            break;
                        }
                        // 更新进度条
                        downloadDialog.setProgress(p);
                        fos.write(buffer, 0, numread);
                    }
                    fos.close();
                    is.close();
                    //自动打开进行安装
                    app.viewFile(path);
                    exit();
                })
            }
        });
    }
};
// setTimeout(5000)


setTimeout(() => {
    if (第二线程.isAlive()) {
        第二线程.interrupt();
    };
    toastLog("完成启动");
}, 5 * 1000);

