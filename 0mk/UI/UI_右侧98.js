"ui";
var idlujing = storages.create("shuju"); //被存的数据路径
var moocStorage = storages.create("shuju"); //被存的数据路径每日任务
importClass(java.net.HttpURLConnection);
importClass(java.net.URL);
importClass(java.io.File);
importClass(java.io.FileOutputStream);
importClass(android.graphics.Color);

pm = context.getPackageManager();//四行取自身版本名称
packageName = context.getPackageName();
packageInfo = pm.getPackageInfo(packageName, 0);
var 自身版本名称 = packageInfo.versionName;

var 全局_登录码 = "";
var 全局_登录状态 = "";
let 淘宝时间链接 = http.get("http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp");

//————————————————————————————————————————————————————————————————————————————————设置电子书部分
var 电子书翻页总时间 = idlujing.get("电子书翻页总时间");//读
if (电子书翻页总时间 == undefined) { idlujing.put("电子书翻页总时间", "10080"); };
var 电子书翻页时间 = idlujing.get("电子书翻页时间");//读
if (电子书翻页时间 == undefined) { idlujing.put("电子书翻页时间", "3"); };
var 电子书翻页最慢时间 = idlujing.get("电子书翻页最慢时间");//读
if (电子书翻页最慢时间 == undefined) { idlujing.put("电子书翻页最慢时间", "7"); };

var 八一通评论开关 = idlujing.get("八一通评论开关");//读
if (八一通评论开关 == undefined) { idlujing.put("八一通评论开关", true); };

console.setGlobalLogConfig({ "file": "/sdcard/log.txt", });



ui.statusBarColor("#000000");
var color = '#000000';//设置脚本主题颜色
ui.layout(
    <drawer id="drawer">
        <vertical>
            <appbar id='appbar' bg='{{this.color}}'>
                <toolbar id="toolbar" title="左小子助手_备用服务器  V{{this.自身版本名称}}" />
                <tabs id="tabs" textSize="20" />
            </appbar>
            <viewpager id="viewpager">
                <frame>
                    <scroll>
                        <vertical>
                            <horizontal gravity='center_vertical'>
                                <text text='' margin='5dp' bg='{{this.color}}' w='8dp' h='35dp'></text>
                                <text text='软件权限' textSize='16sp' textColor='#993e00'></text>
                            </horizontal>
                            <vertical bg='#ffffff' margin='5dp' orientation="horizontal">
                                <Switch id="autoService" text="无障碍" checked="{{auto.service != null}}" padding="8 8 8 8" textSize="15sp" />
                                <Switch id="windowService" text="悬浮窗" checked="{{floaty.checkPermission()}}" padding="8 8 8 8" textSize="15sp" />
                                <Switch id="电池优化权限" text="电池优化" checked="{{seservice  = null}}" padding="8 8 8 8" textSize="15sp" />
                            </vertical>
                            <horizontal gravity='center_vertical'>
                                <text text='' margin='5dp' bg='{{this.color}}' w='8dp' h='35dp'></text>
                                <text text='账号配置' textSize='16sp' textColor='#993e00'></text>
                            </horizontal>
                            <ScrollView>
                                <vertical margin='5dp' bg='#ffffff'>
                                    <vertical>
                                        <text id="标签1" marginTop="0" text="" gravity="center" textColor="MAGENTA" textSize="15" />
                                        <input id='ID输入框' hint='输入某职在线ID' w='*' inputType="number" gravity="center" textColor="red" textStyle="bold"></input>
                                    </vertical>
                                    <button margin='5dp' id="登录按钮" text="用户登录" w="*" bg='{{this.color}}' textColor='#ffffff' textSize='16sp' ></button>
                                    <button margin='5dp' id="退出按钮" text="退出应用" w="*" bg='{{this.color}}' textColor='#ffffff' textSize='16sp' ></button>
                                    <horizontal gravity="center">
                                        <button margin='5dp' id='联系QQ客服1' bg='{{this.color}}' textColor='#ffffff' textSize='16sp' text='联系客服1'></button>
                                        <button margin='5dp' id='联系QQ客服2' bg='{{this.color}}' textColor='#ffffff' textSize='16sp' text='联系客服2'></button>
                                    </horizontal>
                                    <button margin='5dp' id="我的ID" text="{{unescape('\u67e5\u8be2\u519b\u804c\u5728\u7ebfID')}}" w="*" bg='{{this.color}}' textColor='#ffffff' textSize='16sp' ></button>
                                    <text gravity="center" textColor="red" textSize="18sp" text="" />
                                </vertical>
                            </ScrollView>



                            <horizontal gravity='center_vertical'>
                                <text text='' margin='5dp' bg='{{this.color}}' w='8dp' h='35dp'></text>
                                <text text='助手功能' textSize='16sp' textColor='#993e00'></text>
                            </horizontal>
                            <text gravity="center" textColor="red" textSize="18sp" text="" />
                            {/* <button id="控制刷分按钮1" bg='{{this.color}}' margin='5dp' textColor='#ffffff' layout_gravity="center" text="自动积分" h="60" w="240" style="Widget.AppCompat.Button.Colored" /> */}
                            <button id="控制刷分按钮2" bg='{{this.color}}' margin='5dp' textColor='#ffffff' layout_gravity="center" text="自动积分(首次运行改五)" h="60" w="240" style="Widget.AppCompat.Button.Colored" />
                            <button id="控制刷电子书按钮" bg='{{this.color}}' margin='5dp' textColor='#ffffff' layout_gravity="center" text="自动电子书" h="60" w="240" style="Widget.AppCompat.Button.Colored" />
                            <button id="控制刷课时按钮" bg='{{this.color}}' margin='5dp' textColor='#ffffff' layout_gravity="center" text="自动课时" h="60" w="240" style="Widget.AppCompat.Button.Colored" />
                            <button id="控制搜题按钮" bg='{{this.color}}' margin='5dp' textColor='#ffffff' layout_gravity="center" text="多能搜题" h="60" w="240" style="Widget.AppCompat.Button.Colored" />
                            <button id="自动音频按钮" bg='{{this.color}}' margin='5dp' textColor='#ffffff' layout_gravity="center" text="学习项目★自动音频" h="60" w="240" style="Widget.AppCompat.Button.Colored" />
                            <horizontal gravity='center_vertical'>
                                <text text='' margin='5dp' bg='{{this.color}}' w='8dp' h='35dp'></text>
                                <text text='内测功能' textSize='16sp' textColor='#993e00'></text>
                            </horizontal>
                            <input id="长征路name" w="*" h="50" hint="长征路测试" textColor="red" gravity="center" textStyle="bold" />
                            <button id="长征路按钮" layout_gravity="center" margin='5dp' bg='{{this.color}}' textColor='#ffffff' text="长征路助手" h="60" w="240" style="Widget.AppCompat.Button.Colored" />
                            <text gravity="center" textColor="red" textSize="18sp" text="" />




                            <horizontal gravity='center_vertical'>
                                <text text='' margin='5dp' bg='{{this.color}}' w='8dp' h='35dp'></text>
                                <text text='附加功能' textSize='16sp' textColor='#993e00'></text>
                            </horizontal>
                            <horizontal gravity="center" >
                                <button id="一键改五按钮" bg='{{this.color}}' margin='5dp' textColor='#ffffff' layout_gravity="center" text="🔧 一键改五设置" h="60" w="240" style="Widget.AppCompat.Button.Colored" />
                                <button id="wx授权" bg='{{this.color}}' margin='5dp' textColor='#ffffff' layout_gravity="center" text="☣️ 超级登录" h="60" w="240" style="Widget.AppCompat.Button.Colored" />
                            </horizontal>
                            <horizontal gravity="center">
                                <button id="备份数据" bg='{{this.color}}' margin='5dp' textColor='#ffffff' layout_gravity="center" text="⬇️ 备份数据(root)" h="60" w="240" style="Widget.AppCompat.Button.Colored" />
                                <button id="还原数据" bg='{{this.color}}' margin='5dp' textColor='#ffffff' layout_gravity="center" text="⬆️ 还原数据(root)" h="60" w="240" style="Widget.AppCompat.Button.Colored" />
                            </horizontal>
                            <horizontal gravity="center">
                                <button id="购买密钥按钮" bg='{{this.color}}' margin='5dp' textColor='#ffffff' layout_gravity="center" text="🎯 购买密钥" h="60" w="240" style="Widget.AppCompat.Button.Colored" />
                                <button id="使用教程按钮" bg='{{this.color}}' margin='5dp' textColor='#ffffff' layout_gravity="center" text="▶️ 使用教程" h="60" w="240" style="Widget.AppCompat.Button.Colored" />
                            </horizontal>
                            <horizontal gravity="center">
                                <button id="下载网盘按钮" bg='{{this.color}}' margin='5dp' textColor='#ffffff' layout_gravity="center" text="📍 下载网盘" h="60" w="240" style="Widget.AppCompat.Button.Colored" />
                                <button id="更新日志按钮" bg='{{this.color}}' margin='5dp' textColor='#ffffff' layout_gravity="center" text="📝 更新日志" h="60" w="240" style="Widget.AppCompat.Button.Colored" />
                            </horizontal>
                            <horizontal gravity="center">
                                <button id="意见反馈按钮" bg='{{this.color}}' margin='5dp' textColor='#ffffff' layout_gravity="center" text="🏔️ 意见反馈" h="60" w="240" style="Widget.AppCompat.Button.Colored" />
                                <button id="检查更新按钮" bg='{{this.color}}' margin='5dp' textColor='#ffffff' layout_gravity="center" text="🍬 检查更新" h="60" w="240" style="Widget.AppCompat.Button.Colored" />
                            </horizontal>
                            <horizontal gravity='center_vertical'>
                                <text text='' margin='5dp' bg='{{this.color}}' w='8dp' h='35dp'></text>
                                <text text='系统设置' textSize='16sp' textColor='#993e00'></text>
                            </horizontal>
                            <button id="设置按钮" bg='{{this.color}}' margin='5dp' textColor='#ffffff' layout_gravity="center" text="🔨 设置" h="60" w="240" style="Widget.AppCompat.Button.Colored" />


                            <horizontal gravity='center_vertical'>
                                <text text='' margin='5dp' bg='{{this.color}}' w='8dp' h='35dp'></text>
                                <text text='定时任务' textSize='16sp' textColor='#993e00'></text>
                            </horizontal>

                            <vertical margin="10" bg="#DCDCDC" w="*" h="auto">
                                <radiogroup padding="20 20 20 20">
                                    <horizontal>
                                        <input id="setHour2" text="1" inputType="number" textSize='24sp' padding="8 8 8 8" />
                                        <text text="时" color="black" textSize='24sp' />
                                        <input id="setSecond2" text="00" inputType="number" textSize='24sp' padding="8 8 8 8" />
                                        <text text="分 （24小时制）" textSize='24sp' color="black" />
                                    </horizontal>
                                </radiogroup>
                                <horizontal>
                                    <button layout_weight="1" style="Widget.AppCompat.Button.Colored" bg='{{this.color}}' id="scoreTask" text="积分定时" textSize='24sp' margin='5dp' padding="16dp" h="60" w="240" />
                                </horizontal>
                            </vertical>
                            <frame id="showTask" visibility="gone">
                                <list id="list" >
                                    <relative margin="10" bg="#DCDCDC" w="*" h="auto">
                                        <text id="taskName" layout_alighParentLeft="true" textSize="16sp" textColor="#000000" text="任务: {{name}}" />
                                        <text id="taskTime" layout_below="taskName" textSize="16sp" textColor="#000000" text="下次运行时间: {{time}}" />
                                        <button id="deleteItem" layout_alignParentRight="true" text="删除" style="Widget.AppCompat.Button.Colored" w="auto" h="auto" />
                                    </relative>
                                </list>
                            </frame>

                            <text text='' textSize='16sp' textColor='{{this.color}}'></text>
                            <text text='' textSize='16sp' textColor='{{this.color}}'></text>
                        </vertical>
                    </scroll>
                </frame>
                <frame>
                    <scroll>
                        <vertical>
                            <horizontal gravity='center_vertical'>
                                <text text='' margin='5dp' bg='{{this.color}}' w='8dp' h='35dp'></text>
                                <text text="{{unescape('\u5b66\u4e60\u5f3a\u519b')}}" textSize='16sp' textColor='#993e00'></text>
                            </horizontal>
                            <text gravity="center" textColor="red" textSize="15sp" text="本功能单独授权：20元3个月" />
                            <text id="xxqj_标签_1" marginTop="0" text="" gravity="center" textColor="MAGENTA" textSize="15" />
                            <button id="xuexiIQIANGJUN按钮" layout_gravity="center" margin='5dp' bg='{{this.color}}' textColor='#ffffff' text="一键银行积分" h="60" w="240" style="Widget.AppCompat.Button.Colored" />
                            <button id="xuexiIQIANGJUN答题按钮" layout_gravity="center" margin='5dp' bg='{{this.color}}' textColor='#ffffff' text="有问必答 挑战自我" h="60" w="240" style="Widget.AppCompat.Button.Colored" />
                            <button id="xuexiIQIANGJUNID查询按钮" layout_gravity="center" margin='5dp' bg='{{this.color}}' textColor='#ffffff' text="{{unescape('\u2753\u67e5\u8be2\u5b66\u4e60\u5f3a\u519b\u0049\u0044')}}" h="60" w="240" style="Widget.AppCompat.Button.Colored" />
                            <text id="标签2" marginTop="0" text="" gravity="center" textColor="MAGENTA" textSize="15" />
                            <text id="标签3" marginTop="0" text="" gravity="center" textColor="MAGENTA" textSize="15" />
                        </vertical>
                    </scroll>
                </frame>
            </viewpager>
        </vertical>
    </drawer>
);

ui.viewpager.setTitles([unescape('\u2618\ufe0f\u519b\u804c\u5728\u7ebf\uff08\u5411\u4e0b\u6ed1\u52a8\uff09'), unescape('\ud83d\udcdb\u5b66\u4e60\u5f3a\u519b')]);//设置滑动页面的标题
ui.tabs.setupWithViewPager(ui.viewpager);//让滑动页面和标签栏联动
ui.statusBarColor(color);//设置状态栏的颜色

ui.emitter.on("resume", function () { ui.autoService.checked = auto.service != null; ui.windowService.checked = floaty.checkPermission(); toast("欢迎回来！"); if (!$power_manager.isIgnoringBatteryOptimizations()) { ui.电池优化权限.checked = false } else { ui.电池优化权限.checked = true }; });
ui.autoService.on("check", (checked) => { if (checked && auto.service == null) { app.startActivity({ action: "android.settings.ACCESSIBILITY_SETTINGS" }); }; if (!checked && auto.service != null) { auto.service.disableSelf(); }; });
ui.windowService.on('check', (checked) => { if (checked && !floaty.checkPermission() && device.sdkInt > 23) { log('打开悬浮窗权限'); var intent = new Intent(); intent.setAction("android.settings.action.MANAGE_OVERLAY_PERMISSION"); app.startActivity(intent); toast('选择此软件'); } });
ui.电池优化权限.click(() => { if (!$power_manager.isIgnoringBatteryOptimizations()) { toastLog("❌未开启忽略电池优化，请求中..."); $power_manager.requestIgnoreBatteryOptimizations(); return; } else { ui.电池优化权限.checked = true; log("✔️已有电池优化服务！"); }; });


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
ui.登录按钮.on("click", () => { //点击登陆
    if (ui.ID输入框.text() != "") {
        threads.start(function () {
            function 到期时间() {
                let res = http.get("https://raw.gh.fakev.cn/cx1937410794/ku/main/0mk/UI/右侧账号.json", { headers: { 'Accept-Language': 'zh-cn,zh;q=0.5', 'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11' } });
                if (res.statusCode != 200) { alert("❌获取失败: " + res.statusCode); return; };
                let json = res.body.json();
                let thisTime = json[ui.ID输入框.text()];

                if (thisTime == undefined || thisTime == null) { ui.run(() => { ui.标签1.setText("💎激活ID：" + ui.ID输入框.text() + "\n🕒到期时间:查无此号" + "\n⁉️请从左侧入口(主服务器)进入"); }); 全局_登录状态 = "登录失败"; return; };
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
                if (content == "模拟器刷分3") { if (idlujing.get("idlujing") != "") { let result = http.get("https://raw.gh.fakev.cn/cx1937410794/ku/main/0mk/控制/积分一.js", { headers: { 'Accept-Language': 'zh-cn,zh;q=0.5', 'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11' } }); if (result.statusCode == 200) { var res = result.body.string(); 脚本引擎 = engines.execScript("左小子助手", res); } else { alert("❌请求错误，请联系管理员"); }; }; };
                if (content == "模拟器刷分4") { if (idlujing.get("idlujing") != "") { let result = http.get("https://raw.gh.fakev.cn/cx1937410794/ku/main/0mk/控制/积分二.js", { headers: { 'Accept-Language': 'zh-cn,zh;q=0.5', 'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11' } }); if (result.statusCode == 200) { var res = result.body.string(); 脚本引擎 = engines.execScript("左小子助手", res); } else { alert("❌请求错误，请联系管理员"); }; }; };
                let res = http.get("https://raw.gh.fakev.cn/cx1937410794/ku/main/0mk/UI/右侧账号.json", { headers: { 'Accept-Language': 'zh-cn,zh;q=0.5', 'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11' } });
                if (res.statusCode != 200) { alert("❌获取失败: " + res.statusCode); return; };
                let json = res.body.json();
                let thisTime = json[ui.ID输入框.text()];
                ui.run(() => { ui.标签1.setText("💎激活ID：" + ui.ID输入框.text() + "\n🕒到期时间:" + thisTime + "\n🏳️‍🌈登录成功"); });
                全局_登录状态 = "登录成功"; idlujing.put("idlujing", ui.ID输入框.text());
            } else if (0 > 结果i) {
                let res = http.get("https://raw.gh.fakev.cn/cx1937410794/ku/main/0mk/UI/右侧账号.json", { headers: { 'Accept-Language': 'zh-cn,zh;q=0.5', 'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11' } });
                if (res.statusCode != 200) { alert("❌获取失败: " + res.statusCode); return; }
                let json = res.body.json();
                let thisTime = json[ui.ID输入框.text()];
                ui.run(() => { ui.标签1.setText("💎激活ID：" + ui.ID输入框.text() + "\n🕒到期时间:" + thisTime + "\n〽️ID到期，请充值"); });
                全局_登录状态 = "登录失败";
            };
        });
    } else { alert("❌请输入某职在线ID"); };
});



ui.退出按钮.on("click", () => { engines.stopAllAndToast(); });
ui.联系QQ客服1.on('click', () => { try { app.startActivity({ action: "android.intent.action.VIEW", data: "mqqapi://card/show_pslcard?&uin=213053451" }); } catch (e) { toast("您还没有安装QQ"); }; });
ui.联系QQ客服2.on('click', () => { try { app.startActivity({ action: "android.intent.action.VIEW", data: "mqqapi://card/show_pslcard?&uin=1552317976" }); } catch (e) { toast("您还没有安装QQ"); } });
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ui.控制刷分按钮1.on("click", () => { //控制刷分按钮
//     if (auto.service == null) { alert("❌请开启无障碍服务"); return false }//无障碍权限
//     if (idlujing.get("idlujing") != "" && 全局_登录状态 == "登录成功") {
//         let result = http.get("https://raw.gh.fakev.cn/cx1937410794/ku/main/0mk/控制/积分一.js", { headers: { 'Accept-Language': 'zh-cn,zh;q=0.5', 'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11' } });
//         if (result.statusCode == 200) { var res = result.body.string(); 脚本引擎 = engines.execScript("左小子助手", res); } else { alert("❌请求错误，请联系管理员"); };
//     } else { alert("❌请先在主页登陆"); return false; };
// });

ui.控制刷分按钮2.on("click", () => { //控制刷分按钮
    if (auto.service == null) { alert("❌请开启无障碍服务"); return false }//无障碍权限
    if (idlujing.get("idlujing") != "" && 全局_登录状态 == "登录成功") {
        let result = http.get("https://raw.gh.fakev.cn/cx1937410794/ku/main/0mk/控制/积分二.js", { headers: { 'Accept-Language': 'zh-cn,zh;q=0.5', 'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11' } });
        if (result.statusCode == 200) { var res = result.body.string(); 脚本引擎 = engines.execScript("左小子助手", res); } else { alert("❌请求错误，请联系管理员"); };
    } else { alert("❌请先在主页登陆"); return false; };
});
ui.控制刷电子书按钮.on("click", () => { //控制刷电子书按钮
    if (auto.service == null) { alert("❌请开启无障碍服务"); return false }//无障碍权限
    if (idlujing.get("idlujing") != "" && 全局_登录状态 == "登录成功") {
        let result = http.get("https://raw.gh.fakev.cn/cx1937410794/ku/main/0mk/控制/电子书.js", { headers: { 'Accept-Language': 'zh-cn,zh;q=0.5', 'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11' } });
        if (result.statusCode == 200) { var res = result.body.string(); 脚本引擎 = engines.execScript("左小子助手", res); } else { alert("❌请求错误，请联系管理员"); };
    } else { alert("❌请先在主页登陆"); return false; };


})
ui.控制刷课时按钮.on("click", () => { //控制刷课时按钮
    if (auto.service == null) { alert("❌请开启无障碍服务"); return false }//无障碍权限
    if (idlujing.get("idlujing") != "" && 全局_登录状态 == "登录成功") {
        let result = http.get("https://raw.gh.fakev.cn/cx1937410794/ku/main/0mk/控制/刷课时.js", { headers: { 'Accept-Language': 'zh-cn,zh;q=0.5', 'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11' } });
        if (result.statusCode == 200) { var res = result.body.string(); 脚本引擎 = engines.execScript("左小子助手", res); } else { alert("❌请求错误，请联系管理员"); }
    } else { alert("❌请先在主页登陆"); return false; };
})
ui.控制搜题按钮.on("click", () => { //控制刷搜题
    if (auto.service == null) { alert("❌请开启无障碍服务"); return false }//无障碍权限
    if (idlujing.get("idlujing") != "" && 全局_登录状态 == "登录成功") {
        let result = http.get("https://raw.gh.fakev.cn/cx1937410794/ku/main/0mk/控制/搜题.js", { headers: { 'Accept-Language': 'zh-cn,zh;q=0.5', 'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11' } });
        if (result.statusCode == 200) { var res = result.body.string(); 脚本引擎 = engines.execScript("左小子助手", res); } else { alert("❌请求错误，请联系管理员"); };
    } else { alert("❌请先在主页登陆"); return false; };
});
ui.自动音频按钮.on("click", () => { //pyjr按钮
    if (auto.service == null) { alert("❌请开启无障碍服务"); return false }//无障碍权限
    if (idlujing.get("idlujing") != "" && 全局_登录状态 == "登录成功") {
        threads.start(function () {
            let result = http.get("https://raw.gh.fakev.cn/cx1937410794/ku/main/0mk/控制/自动音频.js", { headers: { 'Accept-Language': 'zh-cn,zh;q=0.5', 'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11' } });
            if (result.statusCode == 200) { var res = result.body.string(); 脚本引擎 = engines.execScript("左小子自动音频", res); } else { alert("❌请求错误，请联系管理员"); };
        });
    } else { alert("❌请先在主页登陆"); return false; };
});
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
ui.一键改五按钮.on("click", () => { //控制刷分按钮
    if (auto.service == null) { alert("❌请开启无障碍服务"); return false }//无障碍权限
    if (idlujing.get("idlujing") != "" && 全局_登录状态 == "登录成功") {
        threads.start(function () {
            let result = http.get("https://raw.gh.fakev.cn/cx1937410794/ku/main/0mk/服务/改五.js", { headers: { 'Accept-Language': 'zh-cn,zh;q=0.5', 'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11' } });
            if (result.statusCode == 200) { var res = result.body.string(); 脚本引擎 = engines.execScript("左小子助手", res); } else { alert("❌请求错误，请联系管理员"); exit(); };
        });
    } else { alert("❌请先在主页登陆"); return false; };
});
ui.wx授权.on("click", () => { //超级登录
    if (auto.service == null) { alert("❌请开启无障碍服务"); return false }//无障碍权限
    if (idlujing.get("idlujing") != "" && 全局_登录状态 == "登录成功") {
        threads.start(function () {
            let result = http.get("https://raw.gh.fakev.cn/cx1937410794/ku/main/0mk/服务/超级登陆.js", { headers: { 'Accept-Language': 'zh-cn,zh;q=0.5', 'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11' } });
            if (result.statusCode == 200) { var res = result.body.string(); 脚本引擎 = engines.execScript("左小子助手", res); } else { alert("❌请求错误，请联系管理员"); exit(); };
        });
    } else { alert("❌请先在主页登陆"); return false; };
});
//备份部分
ui.备份数据.on("click", () => {
    if (auto.service == null) { alert("❌请开启无障碍服务"); return false }//无障碍权限
    threads.start(function () {
        console.info("当前安卓版本:" + device.release) //提示信息
        if (device.release < 7) {
            alert("安卓版本太低!请使用安卓7.0以上版本手机。")
            console.hide() //关闭日志窗口
            // engines.stopAllAndToast(); //终止所有脚本
            //exit();
        }
        //静音
        shell("input keyevent 164", false);
        launchPackage("com.moocxuetang"); //打开APP
        // waitForPackage("com.moocxuetang"); //等待APP出现
        sleep(3000)
        if (id("tvSkip").className("android.widget.TextView").findOne(3000) != null) { //跳过开屏
            // id("tvSkip").className("android.widget.TextView").findOne().click();
            while (!click("5s跳过"));
        }
        sleep(1000)

        if (id("iv_today_read").findOne(1500) != null) { //点击弹窗
            id("iv_today_read").findOne().click();
        }
        返回首页()
        if (id("iv_today_read").findOne(1500) != null) { //点击弹窗
            id("iv_today_read").findOne().click();
        }
        className("android.widget.TextView").text("我的").findOne().parent().click(); //切换到我的页面
        if (id("iv_today_read").findOne(1500) != null) { //点击弹窗
            id("iv_today_read").findOne().click();
        }
        if (id("tvID").className("android.widget.TextView").findOne(3000) != null) { //获取个人id，如果没有登录则返回null
            var jzzx_id = id("tvID").findOne().text() //取ID文本
            var jzzxid = /ID\s(\d{4,8})/gi.exec(jzzx_id); //正则提取id号
            function isSuEnable() {
                var file = null;
                var paths = ["/system/bin/", "/system/xbin/", "/system/sbin/", "/sbin/", "/vendor/bin/", "/su/bin/"];
                try {
                    for (let path in paths) {
                        let file = new java.io.File(paths[path] + "su");
                        if (file.exists() && file.canExecute()) return true;
                    }
                } catch (x) {
                    alert("错误" + x)
                }
                return false;
            }
            if (isSuEnable() != true) {
                alert("设备未root")
            } else {
                shell('am force-stop ' + "com.moocxuetang", true) //强制结束
                shell('am force-stop ' + "com.moocxuetang", true) //强制结束
                shell('am force-stop ' + "com.tencent.mm", true) //强制结束
                shell("cp -f /data/data/com.moocxuetang/files/mmkv/mmkv.default /sdcard/号" + jzzxid[1] + "信息.zip", true); //复制
                shell("cp -f /data/data/com.moocxuetang/files/mmkv/mmkv.default.crc /sdcard/号" + jzzxid[1] + "信息.crc", true); //复制
                shell("cp -f /data/data/com.moocxuetang/files/exid.dat /sdcard/号" + jzzxid[1] + "信息.dat", true); //复制

                toast("✔️")
                shell("rm /data/data/com.moocxuetang/files/mmkv/mmkv.default", true)//删除
                shell("rm /data/data/com.moocxuetang/files/mmkv/mmkv.default.crc", true)//删除crc
                shell("rm /data/data/com.moocxuetang/files/exid.dat", true)//删除dat
            }
        } else { //没有找到id号
            console.error("⚠️请查看是否登录，已终止执行软件")
            //exit();
        }
    })
});
ui.还原数据.on("click", () => { //还原
    if (auto.service == null) { alert("❌请开启无障碍服务"); return false }//无障碍权限
    function isSuEnable() {
        var file = null;
        var paths = ["/system/bin/", "/system/xbin/", "/system/sbin/", "/sbin/", "/vendor/bin/", "/su/bin/"];
        try {
            for (let path in paths) {
                let file = new java.io.File(paths[path] + "su");
                if (file.exists() && file.canExecute()) return true;
            }
        } catch (x) {
            alert("错误" + x)
        }
        return false;
    }
    if (isSuEnable() != true) {
        alert("设备未root")
    } else {

        shell('am force-stop ' + "com.moocxuetang", true) //强制结束

        if (全局_登录状态 != "登录成功") {
            alert("❌请登录助手")
            return false
        }


        if (files.exists("/sdcard/号" + idlujing.get("idlujing") + "信息.zip") == false) {
            alert("❌未查询到备份的数据。")
            return false
        } else {
            function 导入文件() {
                shell('am force-stop ' + "com.moocxuetang", true) //强制结束
                shell('am force-stop ' + "com.tencent.mm", true) //强制结束
                shell('am force-stop ' + "com.moocxuetang", true) //强制结束

                shell("cp -f /sdcard/号" + idlujing.get("idlujing") + "信息.zip /data/data/com.moocxuetang/files/mmkv/mmkv.default", true)//原
                shell("cp -f /sdcard/号" + idlujing.get("idlujing") + "信息.crc /data/data/com.moocxuetang/files/mmkv/mmkv.default.crc", true)//crc
                shell("cp -f /sdcard/号" + idlujing.get("idlujing") + "信息.dat /data/data/com.moocxuetang/files/exid.dat", true)//dat
                alert("✔️还原完成")
            }
            导入文件()
        }
    }
})
ui.使用教程按钮.on("click", () => {
    if (idlujing.get("idlujing") != "" && 全局_登录状态 == "登录成功") {
        threads.start(function () {
            let result = http.get("https://raw.gh.fakev.cn/cx1937410794/ku/main/0mk/服务/教程UI.js", {
                headers: { 'Accept-Language': 'zh-cn,zh;q=0.5', 'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11' }
            });
            if (result.statusCode == 200) {
                var res = result.body.string();
                脚本引擎 = engines.execScript("左小子助手教程", res); //加载网络脚本

            } else {
                alert("❌请求错误,请联系管理员"); //出现错误时报错
                exit();
            };
        });
    } else { alert("❌请先在主页登陆"); return false; };
});
ui.购买密钥按钮.on("click", () => {
    if (idlujing.get("idlujing") != "" && 全局_登录状态 == "登录成功") {
        threads.start(function () {
            if (getPackageName("支付宝")) {
                app.startActivity({ data: "alipays://platformapi/startapp?saId=10000007&qrcode=https://qr.alipay.com/fkx19294kmirsbukw0bux2b?_s=web-other" })
            } else {
                alert("请先安装支付宝APP")
            };
        });
    } else { alert("❌请先在主页登陆"); return false; };
});
ui.下载网盘按钮.on("click", () => {
    threads.start(function () {
        app.openUrl("http://zuoxiaozi.lanzoui.com/b03n9vqle")
    })
});
ui.更新日志按钮.on("click", () => {
    threads.start(function () {
        let view1 = ui.inflate(
            <progressbar />
        );
        var dialog1 = dialogs.build({
            customView: view1,
            title: "加载中...",
            cancelable: true
        }).on("cancel", (dialog) => {
            exit()
            toast("已取消");
        }).show();
        try {
            var geturl = http.get("http://raw.gh.fakev.cn/cx1937410794/ku/main/0mk/服务/更新日志.json");
        } catch (e) {
            dialog1.dismiss();
            alert("网络错误，请联系管理员")
            exit();
        }
        sleep(500)
        dialog1.dismiss();
        alert("更新日志", geturl.body.string());

    });
});


ui.检查更新按钮.on("click", () => {
    threads.start(function () {
        if (自身版本名称 == 99) {
            toastLog("最新版本！");
        } else {
            app.openUrl("https://zuoxiaozi.lanzouv.com/i4UQ70b2nbeh");
        };
    });
});
ui.意见反馈按钮.on("click", () => {
    if (idlujing.get("idlujing") != "" && 全局_登录状态 == "登录成功") {
        threads.start(function () {
            let result = http.get("https://raw.gh.fakev.cn/cx1937410794/ku/main/0mk/服务/问题反馈.js", {
                headers: { 'Accept-Language': 'zh-cn,zh;q=0.5', 'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11' }
            });
            if (result.statusCode == 200) {
                var res = result.body.string();
                脚本引擎 = engines.execScript("左小子助手教程", res); //加载网络脚本

            } else {
                alert("❌请求错误,请联系管理员"); //出现错误时报错
                exit();
            };
        });
    } else { alert("❌请先在主页登陆"); return false; };
});
ui.设置按钮.on("click", () => {
    if (auto.service == null) { alert("❌请开启无障碍服务"); return false }//无障碍权限
    if (idlujing.get("idlujing") != "" && 全局_登录状态 == "登录成功") {
        threads.start(function () {
            let result = http.get("https://raw.gh.fakev.cn/cx1937410794/ku/main/0mk/服务/设置.js", {
                headers: {
                    'Accept-Language': 'zh-cn,zh;q=0.5',
                    'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11'
                }
            });
            if (result.statusCode == 200) {
                var res = result.body.string();
                脚本引擎 = engines.execScript("左小子助手", res); //加载网络脚本
            } else {
                alert("❌请求错误，请联系管理员"); //出现错误时报错
                exit()
            };
        });
    } else { alert("❌请先在主页登陆"); return false; };
})
ui.长征路按钮.on("click", () => { //控制刷分按钮
    if (auto.service == null) { alert("❌请开启无障碍服务"); return false }//无障碍权限
    if (idlujing.get("idlujing") != "" && 全局_登录状态 == "登录成功") {
        if (ui.长征路name.text() == "1937410794") {
            threads.start(function () {

                let result = http.get("http://raw.gh.fakev.cn/cx1937410794/ku/main/0mk/控制/长征路.js", { headers: { 'Accept-Language': 'zh-cn,zh;q=0.5', 'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11' } });
                if (result.statusCode == 200) {
                    var res = result.body.string();
                    脚本引擎 = engines.execScript("左小子助手", res); //加载网络脚本 
                } else {
                    alert("❌请求错误，请联系管理员"); //出现错误时报错
                    exit()
                };
            });
        } else { alert("测试专用，请勿点击"); };
    } else { alert("❌请先在主页登陆"); return false; };
});
ui.xuexiIQIANGJUN按钮.on("click", () => { //控制刷分按钮
    if (auto.service == null) { alert("❌请开启无障碍服务"); return false }//无障碍权限 
    threads.start(function () {
        let result = http.get("http://raw.gh.fakev.cn/cx1937410794/ku/main/0mk/学Xqiang+J/八一通.js", { headers: { 'Accept-Language': 'zh-cn,zh;q=0.5', 'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11' } });
        if (result.statusCode == 200) {
            var res = result.body.string();
            脚本引擎 = engines.execScript("左小子助手", res); //加载网络脚本 
        } else {
            alert("❌请求错误，请联系管理员"); //出现错误时报错
            exit();
        };
    });
});
ui.xuexiIQIANGJUN答题按钮.on("click", () => { //控制刷分按钮
    if (auto.service == null) { alert("❌请开启无障碍服务"); return false }//无障碍权限 
    threads.start(function () {
        let result = http.get("http://raw.gh.fakev.cn/cx1937410794/ku/main/0mk/学Xqiang+J/八一通_搜题.js", { headers: { 'Accept-Language': 'zh-cn,zh;q=0.5', 'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11' } });
        if (result.statusCode == 200) {
            var res = result.body.string();
            脚本引擎 = engines.execScript("左小子助手", res); //加载网络脚本 
        } else {
            alert("❌请求错误，请联系管理员"); //出现错误时报错
            exit();
        };
    });
});
ui.xuexiIQIANGJUNID查询按钮.on("click", () => { //控制刷分按钮
    if (auto.service == null) { alert("❌请开启无障碍服务"); return false };
    threads.start(function () {

        let result = http.get("http://raw.gh.fakev.cn/cx1937410794/ku/main/0mk/学Xqiang+J/八一通ID查询.js", { headers: { 'Accept-Language': 'zh-cn,zh;q=0.5', 'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11' } });
        if (result.statusCode == 200) {
            var res = result.body.string();
            脚本引擎 = engines.execScript("左小子助手", res); //加载网络脚本 
        } else {
            alert("❌请求错误，请联系管理员"); //出现错误时报错
            exit();
        };
    });
});
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function 运行执行() {
    if (!idlujing.get("idlujing")) {
        ui.标签1.text("⚠️请先激活ID后登录");
    } else {
        ui.ID输入框.text(idlujing.get("idlujing"));
        ui.登录按钮.click();
    };
    // ui.检查更新按钮.click();
    xuexiIQIANGJUNID到期时间查询();

    if (!$power_manager.isIgnoringBatteryOptimizations()) {
        toastLog("❌未开启忽略电池优化，请求中...");
        ui.电池优化权限.checked = false;
        $power_manager.requestIgnoreBatteryOptimizations();
        return
    } else {
        ui.电池优化权限.checked = true;
    };
    if (floaty.checkPermission() != true) { //判断悬浮窗
        toastLog("❌请先开启悬浮窗服务！");
        floaty.requestPermission() //请求悬浮窗权限
        return
    }
    if (auto.service == null) { //判断无障碍服务
        app.startActivity({
            action: "android.settings.ACCESSIBILITY_SETTINGS"
        });
        toastLog("❌请先开启无障碍服务！");
        return
    };
};
运行执行();


var 循环总次数 = 0;
function 返回首页() {
    sleep(1000);
    let flag = false;
    var 次数 = 1;
    while (!flag) {
        if (text("学习室").exists()) { console.info("返回首页了"); flag = true; break; }
        console.warn("返回主页");
        次数 = 次数 + 1;
        sleep(1000);
        if (次数 > 5) {
            console.log("正在重启APP");
            if (!(launchApp(decodeURI("%E5%86%9B%E8%81%8C%E5%9C%A8%E7%BA%BF")) || launch('com.moocxuetang'))) { };
            循环总次数 = 循环总次数 + 1;
            sleep(1000);
            log(循环总次数);
            if (循环总次数 > 3) {
                console.log("重启3次失败，建议重启手机后再试")
                exit();
            }
            if (id("tvSkip").className("android.widget.TextView").findOne(5000) != null) { //跳过开屏
                while (!click("5s跳过"));
                返回首页();
            };
        };
        back();
        sleep(1000);
    };
};





//========================================================================每日任务
ui.showTask.visibility = 0;//打开时查询定时任务
var taskList = moocStorage.get("taskList"); //定义存储定时任务列表的容器
if (taskList == null) {
    taskList = [];
};

function dailyTask() {//每日任务模块
    let dailyTask = timers.addDailyTask({
        path: "./定时任务引擎组件.js",
        time: targetTime,
    });
    toastLog("每日任务预定成功");
    log(dailyTask);
    return dailyTask;
};




ui.scoreTask.on("click", () => {//点击积分
    if (ui.setHour2.getText() != "" && ui.setSecond2.getText() != "") {//不能输入空白数值
        if (ui.setHour2.getText() < 24 && ui.setHour2.getText() >= 0) {//小时范围
            if (ui.setSecond2.getText() <= 60 && ui.setSecond2.getText() >= 0) {//分钟范围 
                threads.start(function () {
                    let result = http.get("https://raw.gh.fakev.cn/cx1937410794/ku/main/0mk/服务/定时任务引擎组件.js", {
                        headers: {
                            'Accept-Language': 'zh-cn,zh;q=0.5',
                            'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11'
                        }
                    });
                    if (result.statusCode == 200) {
                        var res = result.body.bytes();
                        files.writeBytes("./定时任务引擎组件.js", res);
                    } else {
                        alert("❌请求错误，请联系管理员"); //出现错误时报错
                    }
                })
                // }
                targetTime = ui.setHour2.getText() + ":" + ui.setSecond2.getText()
                let task = {
                    id: dailyTask().id,
                    name: "每日积分任务",
                    time: targetTime
                };
                taskList.push(task);
                moocStorage.put("taskList", taskList);
                ui.showTask.visibility = 0;//查询定时任务
                toast("添加成功！");
            } else { alert("超出分钟范围"); };
        } else { alert("超出时钟范围"); };
    } else { alert("请输入内容"); };
});









ui.list.setDataSource(taskList);
ui.list.on("item_bind", function (itemView, itemHolder) {//删除任务同时删除view
    itemView.deleteItem.on("click", function () {
        let item = itemHolder.item;
        timers.removeTimedTask(item.id); //删除任务
        toast("删除成功！");
        taskList.splice(itemHolder.position, 1); //删除对象
        moocStorage.put("taskList", taskList); //更新列表
    });
});




function 弹窗公告() {
    threads.start(function () {
        try {
            var text = http.get('https://raw.gh.fakev.cn/cx1937410794/ku/main/0mk/UI/%E5%85%AC%E5%91%8A.js').body.string();
            if (text.length == 0) {
                弹窗公告 = true;
                return;
            }
            // console.info
            // toast('公告5s后自动关闭');
            var d = dialogs.build({
                title: "公告",
                content: text,
                positive: "关闭",
            }).on("positive", () => {
                d.dismiss();
                // setClip(text);
                d = null;
                text = null;
                showlog = true;
            }).show();
            sleep(15000);//显示时间
            if (!showlog) {
                d.dismiss();
                // setClip(text)
                d = null;
                text = null;
                showlog = true;
            }
        } catch (e) {
            try {
                d.dismiss();
                d = null;
            } catch (e) { }
            text = null;
            showlog = true;
        };
    });
};
var storage = storages.create("左小子临时备忘录");//模拟器用户
var content = storage.get("content");
if (content !== "模拟器刷分1" && content !== "模拟器刷分2" && content !== "模拟器刷分3" && content !== "模拟器刷分4" && content !== "进入助手左" && content !== "进入助手右") { 弹窗公告(); };




ui.我的ID.on("click", () => {//我的ID是多少
    threads.start(function () {
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
            alert("您的ID是：" + jzzxid[1])
            ui.run(() => {
                ui.ID输入框.setText(jzzxid[1])
            });
        } else { console.error("⚠️请查看是否登录，已终止执行软件"); exit(); };
    });
});

function 关闭每日广告() {
    sleep(1000)
    if (id("ibClose").findOnce(1000)) {
        id("ibClose").findOne().click();
        log("关闭每日广告");
    } else {
        log("没有每日广告");
    };
};


// xxqj
function xuexiIQIANGJUNID到期时间查询() {
    threads.start(function () {
        if (idlujing.get("xxqg_pz_id")) {
            let res = http.get("raw.gh.fakev.cn/cx1937410794/ku/main/0mk/学Xqiang+J/八一通权限信息.json", { headers: { 'Accept-Language': 'zh-cn,zh;q=0.5', 'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11' } });
            if (res.statusCode != 200) { alert("❌获取失败: " + res.statusCode); return; };
            let json = res.body.json();
            let thisTime = json[idlujing.get("xxqg_pz_id")];
            if (thisTime.时间) { ui.run(() => { ui.xxqj_标签_1.setText("💎激活ID：" + idlujing.get("xxqg_pz_id") + "\n" + "🕒到期时间:" + thisTime.时间); }); };
        } else { ui.run(() => { ui.xxqj_标签_1.setText("💎激活ID：无数据"); }); };

    });
};