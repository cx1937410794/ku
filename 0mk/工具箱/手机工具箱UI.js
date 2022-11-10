"ui";
var color = '#000000'//设置脚本主题颜色
ui.statusBarColor(color)//设置状态栏的颜色
var 账号身份 = "用户登录";
ui.layout(
    <drawer id="drawer">
        <vertical>
            <appbar id='appbar' bg='{{this.color}}'>
                <horizontal>
                    <toolbar id="toolbar" title="权限验证器 左小子技术提供" />
                </horizontal>
            </appbar>
            <viewpager id="viewpager">
                <frame>
                    <scroll>
                        <vertical>
                            <horizontal gravity='center_vertical'>
                                <text text='' margin='5dp' bg='{{this.color}}' w='8dp' h='35dp'></text>
                                <text text='公告信息' textSize='16sp' textColor='{{this.color}}'></text>
                            </horizontal>
                            <vertical>
                                <text text='无网络链接' id="公告内容" maxLines="3" textColor="red" />
                            </vertical>


                            <horizontal gravity='center_vertical'>
                                <text text='' margin='5dp' bg='{{this.color}}' w='8dp' h='35dp'></text>
                                <text text='验证权限' textSize='16sp' textColor='{{this.color}}'></text>
                            </horizontal>
                            <vertical padding="5">
                                <text id="标签1" text="对接码" />
                                <text id="标签3" text="登录信息" />
                            </vertical>
                            <ScrollView>
                                <vertical margin='5dp' bg='#ffffff'>
                                    <button margin='5dp' id='开始授权' bg='{{this.color}}' textColor='#ffffff' textSize='16sp' text='进入助手'></button>
                                    <horizontal>
                                        <button w="auto" margin='5dp' id='联系作者' bg='{{this.color}}' textColor='#ffffff' textSize='16sp' text='QQ客服'></button>
                                        <button w="*" margin='5dp' id='进入官网' bg='{{this.color}}' textColor='#ffffff' textSize='16sp' text='进入官网'></button>
                                    </horizontal>
                                </vertical>
                            </ScrollView>
                            <img src="http://raw.gh.fakev.cn/cx1937410794/ku/main/0mk/工具箱/微信名片.jpg" w="auto" h="300" />
                            <vertical padding="5">
                                <text id="标签2" text="不忘初心" />
                            </vertical>
                        </vertical>
                    </scroll>
                </frame>

            </viewpager>
        </vertical >
    </drawer >
);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
threads.start(function () {//启动运行
    公告内容();
});
ui.run(() => {//启动UI机器码
    ui.标签1.setText("点我复制，把机器码发给客服：" + $crypto.digest(device.getAndroidId(), "MD5"));
});

function 公告内容() {
    let res = http.get("https://raw.gh.fakev.cn/cx1937410794/ku/main/0mk/工具箱/权限信息.json", { headers: { 'Accept-Language': 'zh-cn,zh;q=0.5', 'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11' } });
    if (res.statusCode != 200) {
        alert("❌获取失败: " + res.statusCode);
        return;
    };
    let json = res.body.json();
    ui.run(() => { ui.公告内容.setText(json["公告内容"]); });
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
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
ui.联系作者.on('click', () => {
    threads.start(function () {
        联系作者("1937410794");
    });
});


ui.标签1.on('click', () => {//复制机器码
    //开始获取脚本配置
    threads.start(function () {
        setClip($crypto.digest(device.getAndroidId(), "MD5"));    //取设备ID
        toast("复制成功");
    });
});




ui.开始授权.on('click', () => {//验证操作
    let 取设备机器码 = $crypto.digest(device.getAndroidId(), "MD5")
    threads.start(function () {
        function 到期时间() {
            let res = http.get("https://raw.gh.fakev.cn/cx1937410794/ku/main/0mk/工具箱/权限信息.json", { headers: { 'Accept-Language': 'zh-cn,zh;q=0.5', 'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11' } });
            if (res.statusCode != 200) {
                alert("❌获取失败: " + res.statusCode);
                return;
            };
            let json = res.body.json();
            let thisTime = json[取设备机器码];
            if (!thisTime) {//先判断有无这个ID
                ui.run(() => { ui.标签3.setText("🕒到期时间:无此设备\n🔴请先激活"); });
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
            let res = http.get("https://raw.gh.fakev.cn/cx1937410794/ku/main/0mk/工具箱/权限信息.json", { headers: { 'Accept-Language': 'zh-cn,zh;q=0.5', 'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11' } });
            if (res.statusCode != 200) {
                alert("❌获取失败: " + res.statusCode);
                return;
            };
            let json = res.body.json();
            let thisTime = json[取设备机器码]
            let thisTime时间 = thisTime.时间
            ui.run(() => { ui.标签3.setText("🕒到期时间:" + thisTime时间 + "\n🟢登录成功") });

            let result = http.get("https://raw.gh.fakev.cn/cx1937410794/ku/main/0mk/工具箱/手机工具箱UI2.js", {
                headers: { 'Accept-Language': 'zh-cn,zh;q=0.5', 'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11' }
            });
            if (result.statusCode == 200) {
                var res = result.body.string();
                脚本引擎 = engines.execScript("UI启动器", res); //加载网络脚本
            } else {
                alert("❌请求错误，请联系管理员");
            };
            return;
            // idlujing.put("idlujing", $crypto.digest(device.getAndroidId(), "MD5")); //存ID
        } else if (0 > 结果i) {
            let res = http.get("https://raw.gh.fakev.cn/cx1937410794/ku/main/0mk/工具箱/权限信息.json", { headers: { 'Accept-Language': 'zh-cn,zh;q=0.5', 'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11' } });
            if (res.statusCode != 200) {
                alert("❌获取失败: " + res.statusCode);
                return;
            };
            let json = res.body.json();
            let thisTime = json[取设备机器码]
            let thisTime时间 = thisTime.时间
            ui.run(() => { ui.标签3.setText("🕒到期时间:" + thisTime时间 + "\n🟠机器码到期，请充值"); });
        };
    });
});



ui.进入官网.on('click', () => {//进入官网
    threads.start(function () {
        app.openUrl("raw.gh.fakev.cn/cx1937410794/ku/main")
    });
});
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++







importClass(java.net.HttpURLConnection);
importClass(java.net.URL);
importClass(java.io.File);
importClass(java.io.FileOutputStream);
importClass(android.graphics.Color);

pm = context.getPackageManager() //四行取自身版本名称
packageName = context.getPackageName()
packageInfo = pm.getPackageInfo(packageName, 0)
var 自身版本名称 = packageInfo.versionName
// alert(自身版本名称);

threads.start(function () {
                更新功能("https://zuoxiaozi.lanzouv.com/iA1j208x7gje", "当日更新\n修复细微BUG\n更改APP底层\n新名字：左小子小拿手\n去繁化简,页面更简洁.\n新增多项功能\n优化多项BUG", "1.0.5");
});


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
                var 更新内容 = "更新版本号：" + 更新版本号 + "\n更新日期：" + 更新日期 + "\n文件大小：" + 文件大小 + "\n更新日志：\n" + 更新公告
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
}