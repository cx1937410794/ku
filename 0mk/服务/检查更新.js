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
// https://zuoxiaozi.lanzouv.com/b03n9vqle
threads.start(function () {
    更新功能(
        "iRBM90gnw1be",
        "1.重新打造笔记页面\n2.新增微/Q/支刷步数功能\n3.优化底层代码\n4.笔记输入“进入助手左”保存，下次打开直接进入助手(根据个人需求使用)",
        "101"
    );
});


function 更新功能(新版本连接, 更新公告, 更新版本号) {
    if (自身版本名称 == 更新版本号) { toastLog("最新版本！"); } else {
        threads.start(function () {
            let result = http.get("https://api.ooomn.com/api/lanzou?type=down&url=https://zuoxiaozi.lanzouy.com/" + 新版本连接, { headers: { 'Accept-Language': 'zh-cn,zh;q=0.5', 'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11' } });
            var 下载直链; if (result.statusCode == 200) { 下载直链 = result.url; 检查更新(); } else { alert("❌请求错误，请联系管理员"); };


            //******************
            //新的一段   获取到直连后进行下载 
            function 检查更新() {
                var 更新内容 = "更新日志：\n" + 更新公告
                dialogs.build({
                    title: "发现新版本号：" + 更新版本号,
                    content: 更新内容,
                    positive: "立即下载",
                    negative: "手机下载器更新",
                    neutral: "取消(进入网盘)",
                    cancelable: false
                })
                    .on("positive", 更新面板)
                    .on("neutral", () => { app.openUrl("https://zuoxiaozi.lanzouv.com/b03n9vqle"); exit(); })
                    .on("negative", () => { app.openUrl(下载直链); exit(); })
                    .on("check", (checked) => { GLOBAL_CONFIG.put("NO_UPDATE", 1); }).show();
            };
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
                下载apk的主方法体();
            };
            function 下载apk的主方法体() {
                threads.start(function () {
                    var path = files.cwd() + "/轻简笔记_" + 更新版本号 + ".apk";
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
                        };
                        downloadDialog.setProgress(p);
                        fos.write(buffer, 0, numread);
                    };
                    fos.close();
                    is.close();
                    //自动打开进行安装
                    app.viewFile(path);
                    exit();
                });
            };
        });
    };
};