"ui";
importClass(java.net.HttpURLConnection);
importClass(java.net.URL);
importClass(java.io.File);
importClass(java.io.FileOutputStream);
importClass(android.graphics.Color);
var idlujing = storages.create("shuju"); //被存的数据路径
var 全局_登录码 = "";
var 全局_登录状态 = "";
var color = "#000000";

ui.statusBarColor("#000000");

ui.layout(
    <drawer id="drawer">
        <vertical>
            <appbar>
                <toolbar id="toolbar" bg="#000000" title="{{unescape('&#26143;&#26376;&#20070;&#32;&#32;&#52;&#46;&#48;&#32;&#80;&#114;&#111;')}}" />
                <tabs id="tabs" bg="#563624" />
            </appbar>
            <viewpager id="viewpager" >
                <frame>
                    <vertical>
                        <webview id="webview" h="*" w="auto" />
                    </vertical>
                </frame>
                <frame>
                    <img src={"http://p7.itc.cn/images01/20200528/124182621db44ea7ae1c9bc135e4f79c.jpeg"} scaleType="centerCrop" alpha="0.55" />
                    <scroll>
                        <vertical>
                            <vertical gravity="center" layout_weight="1">
                                <card w="*" h="70" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" foreground="?selectableItemBackground" alpha="0.45" >
                                    <horizontal gravity="center_vertical">
                                        <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                            <text text="无障碍服务" textColor="#222222" textSize="16sp" maxLines="1" />
                                            <text text="请确保开启" textColor="#004b50" textSize="14sp" maxLines="1" />
                                        </vertical>
                                        <checkbox id="autoService" marginLeft="4" marginRight="6" checked="{{auto.service != null}}" />
                                    </horizontal>
                                </card>
                                <card w="*" h="70" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" foreground="?selectableItemBackground" alpha="0.55">
                                    <horizontal gravity="center_vertical">
                                        <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                            <text text="悬浮窗权限" textColor="#222222" textSize="16sp" maxLines="1" />
                                            <text text="请确保开启" textColor="#004b50" textSize="14sp" maxLines="1" />
                                        </vertical>
                                        <checkbox id="consoleshow" marginLeft="4" marginRight="6" checked="{{floaty.checkPermission()}}" />

                                    </horizontal>
                                </card>
                                <card w="*" h="300" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" foreground="?selectableItemBackground" alpha="0.55">
                                    <horizontal gravity="center_vertical">
                                        <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                            <horizontal gravity="center_vertical">
                                                <text text="您的学号：" textColor="#ffe600" textSize="16sp" maxLines="1" />
                                                <input id="ID输入框" text="" textSize="14sp" w="*" />
                                            </horizontal>
                                            <horizontal gravity="center_vertical">
                                                <text text="输入卡密：" textColor="#ffe600" textSize="16sp" maxLines="1" />
                                                <input id="密钥输入框" text="" textSize="14sp" w="*" />
                                            </horizontal>
                                            <horizontal gravity="center_vertical">
                                                <text text="激活状态：" textColor="#ffe600" textSize="16sp" maxLines="1" />
                                                <text id="标签1" marginTop="0" text="" gravity="center" textColor="MAGENTA" textSize="15" />
                                            </horizontal>
                                            <button id="登录按钮" color="#000000" marginLeft="40" marginRight="40" bg="#45b97c" h="50" textSize="25sp" text="登录/充值" />
                                            <button id="卡密查询按钮" marginLeft="40" marginRight="40" color="#000000" bg="#96582a" h="50" textSize="25sp" text="卡密查询" />
                                            <horizontal gravity="center_vertical">
                                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                                    <text text="输入学号：点击登录" textColor="#222222" textSize="16sp" maxnes="1" />
                                                    <text text="输入学号和卡密：点击充值 " textColor="#222222" textSize="16sp" maxLines="1" />
                                                </vertical>
                                            </horizontal>
                                        </vertical>
                                    </horizontal>
                                </card>
                                <card w="*" h="*" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" foreground="?selectableItemBackground" alpha="0.45">
                                    <horizontal gravity="center_vertical">
                                        <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                            <button id="id_beiyongdenglu" color="#000000" marginLeft="40" marginRight="40" bg="#46485f" h="50" textSize="25sp" text="备用登录" />
                                            <text text="本接口随稳定，但需人工激活，比主接口授权慢。" textColor="#222222" textSize="16sp" maxLines="1" />
                                        </vertical>
                                    </horizontal>
                                </card>
                            </vertical>
                            <vertical>
                                <button h="70" id="start按钮" text="开 始 运 行" margin='15dp' textSize="25sp" color="#000000" bg="#b2d235" foreground="?selectableItemBackground" alpha="0.55" />
                            </vertical>
                        </vertical>
                    </scroll>
                </frame>
                <ScrollView>
                    <frame>
                        <img src={"http://p7.itc.cn/images01/20200528/124182621db44ea7ae1c9bc135e4f79c.jpeg"} scaleType="centerCrop" alpha="0.55" />
                        <vertical id="ttxs_pro" gravity="center">
                            <vertical id="ttxs_pro" gravity="center" marginLeft="80" marginRight="80">
                                <horizontal>
                                    <button style="Widget.AppCompat.Button.Colored" id="id_zhushouwangpan" text="助手网盘" padding="12dp" w="*" alpha="0.55" />
                                </horizontal>
                                <horizontal>
                                    <button style="Widget.AppCompat.Button.Colored" id="id_xiazaizhidingbanben" text="下载指定版本【学习强国】app" padding="12dp" w="*" alpha="0.55" />
                                </horizontal>
                                <horizontal>
                                    <button style="Widget.AppCompat.Button.Colored" id="id_zairuguanwang" text="博客官网" padding="12dp" w="*" alpha="0.55" />
                                </horizontal>
                            </vertical>
                        </vertical>
                    </frame>
                </ScrollView>

            </viewpager>
        </vertical>
    </drawer>
);
http.__okhttp__.setTimeout(10000);
ui.viewpager.setTitles(["📕公告", "📕首页", "📕其他"]);// 设置滑动页面的标题
ui.tabs.setupWithViewPager(ui.viewpager);// 让滑动页面和标签栏联动
var src = "https://jzzx.top/index.php/archives/4/";//帮助页加载
ui.webview.loadUrl(src);
var thread = null;
ui.autoService.on("check", function (checked) { if (checked && auto.service == null) { app.startActivity({ action: "android.settings.ACCESSIBILITY_SETTINGS" }); } if (!checked && auto.service != null) { auto.service.disableSelf(); } });


ui.consoleshow.on("check", function (checked) {// 悬浮窗权限
    if (checked && !floaty.checkPermission()) { app.startActivity({ packageName: "com.android.settings", className: "com.android.settings.Settings$AppDrawOverlaySettingsActivity", data: "package:" + context.getPackageName(), }); }
});
ui.emitter.on("resume", function () {// 当用户回到本界面时，resume事件会被触发
    ui.autoService.checked = auto.service != null; ui.consoleshow.checked = floaty.checkPermission();// 此时根据无障碍服务的开启情况，同步开关的状态
});








ui.id_zhushouwangpan.on("click", () => { app.openUrl("http://zuoxiaozi.lanzoui.com/b03n9vqle") });
ui.id_xiazaizhidingbanben.on("click", () => { app.openUrl("https://share.weiyun.com/EhHh9KzX") });
ui.id_zairuguanwang.on("click", () => { app.openUrl("http://jzzx.top") });

//+++++++++++++++++++++++++++++++++++++++++++++
function 错误代码(代码编号) {
    if (代码编号 == 1) { return ("成功"); };
    if (代码编号 == -1) { return ("网络链接失败"); };
    if (代码编号 == -2) { return ("请填写程序密钥"); };
    if (代码编号 == -3 || 代码编号 == -4) { return ("数据异常"); };
    if (代码编号 == -5) { return ("错误的参数,请检查参数是否正确."); };
    if (代码编号 == -6) { return ("还未登录"); };
    if (代码编号 == -7) { return ("私人服务器,没有权限进行登录."); };
    if (代码编号 == -8) { return ("账户余额不足."); };
    if (代码编号 == -9) { return ("注册用户达到上限."); };
    if (代码编号 == -10) { return ("非Vip无法使用此接口"); };
    if (代码编号 == -11) { return ("开启自动状态检测失败,还未登陆!"); };
    if (代码编号 == -12) { return ("开启自动状态检测失败!"); };
    if (代码编号 == -13) { return ("动态算法只支持独立服务器调用."); };
    if (代码编号 == -14) { return ("错误的调用."); };
    if (代码编号 == -15) { return ("频繁调用,请等待10分钟后再做尝试."); };
    if (代码编号 == -16) { return ("接口未开启."); };
    if (代码编号 == -17) { return ("错误的调用方式,请确认后台接口的调用方式."); };
    if (代码编号 == -18) { return ("单IP频繁访问限制."); };
    if (代码编号 == -19) { return ("接口调用失败,调用次数不足."); };
    if (代码编号 == -20) { return ("变量数据不存在."); };
    if (代码编号 == -21) { return ("机器码一样,无需转绑."); };
    if (代码编号 == -23) { return ("此接口开启了强制算法,但是没使用."); };
    if (代码编号 == -24) { return ("操作频繁,请重试!"); };
    if (代码编号 == -101) { return ("用户名填写错误,必须以字母开头6-16位字母或数字!"); };
    if (代码编号 == -102) { return ("用户不存在."); };
    if (代码编号 == -103) { return ("请先登陆再调用此方法."); };
    if (代码编号 == -104) { return ("密码填写错误,请输入6-16位密码！."); };
    if (代码编号 == -105) { return ("邮箱填写错误,请正确输入邮箱,最大长度 32！."); };
    if (代码编号 == -106) { return ("用户名重复."); };
    if (代码编号 == -107) { return ("邮箱重复."); };
    if (代码编号 == -108) { return ("新密码输入错误."); };
    if (代码编号 == -109) { return ("用户名或密码错误"); };
    if (代码编号 == -110) { return ("用户使用时间已到期"); };
    if (代码编号 == -111) { return ("用户未在绑定的电脑上登陆."); };
    if (代码编号 == -112) { return ("用户在别的地方登陆.(主要原因是后台检测不到用户的状态码 后台->用户管理->在线用户 里面不存在这个状态码就会提示这个错误)"); };
    if (代码编号 == -113) { return ("过期时间有误."); };
    if (代码编号 == -114) { return ("登录数据不存在"); };
    if (代码编号 == -115) { return ("用户已被禁用."); };
    if (代码编号 == -116) { return ("密码修改申请过于频繁."); };
    if (代码编号 == -117) { return ("未输入机器码."); };
    if (代码编号 == -118) { return ("重绑次数超过限制."); };
    if (代码编号 == -119) { return ("使用天数不足,重绑失败."); };
    if (代码编号 == -120) { return ("注册失败,注册次数超过限制."); };
    if (代码编号 == -121) { return ("用户机器码不能超过32位."); };
    if (代码编号 == -122) { return ("用户已经被删除"); };
    if (代码编号 == -123) { return ("用户密码输入错误"); };
    if (代码编号 == -124) { return ("用户登录数达到最大"); };
    if (代码编号 == -125) { return ("错误的用户操作类别"); };
    if (代码编号 == -126) { return ("过期时间变更记录创建失败"); };
    if (代码编号 == -127) { return ("用户充值失败"); };
    if (代码编号 == -128) { return ("用户数据超过最大限制"); };
    if (代码编号 == -129) { return ("用户被开发者禁止使用,请咨询开发者是否被拉到黑名单"); };
    if (代码编号 == -131) { return ("用户使用次数不足"); };
    if (代码编号 == -132) { return ("用户使用点数不足"); };
    if (代码编号 == -133) { return ("用户状态码错误"); };
    if (代码编号 == -134) { return ("用户状态码不存在"); };
    if (代码编号 == -201) { return ("程序不存在"); };
    if (代码编号 == -202) { return ("程序密钥输入错误"); };
    if (代码编号 == -203) { return ("程序版本号错误"); };
    if (代码编号 == -204) { return ("程序版本不存在"); };
    if (代码编号 == -205) { return ("用户未申请使用程序"); };
    if (代码编号 == -206) { return ("程序版本需要更新"); };
    if (代码编号 == -207) { return ("程序版本已停用"); };
    if (代码编号 == -208) { return ("程序未开启后台接口功能.(可在“程序”的“修改”界面开启后台接口功能)"); };
    if (代码编号 == -209) { return ("程序接口密码错误"); };
    if (代码编号 == -210) { return ("程序停止新用户注册"); };
    if (代码编号 == -211) { return ("程序不允许用户机器码转绑"); };
    if (代码编号 == -213) { return ("非Vip无法使用此接口"); };
    if (代码编号 == -301) { return ("卡密输入错误"); };
    if (代码编号 == -302) { return ("卡密不存在"); };
    if (代码编号 == -303) { return ("卡密已经使用\n登陆的时候不需要输入卡密"); };
    if (代码编号 == -304) { return ("卡密已经过期"); };
    if (代码编号 == -305) { return ("卡密已经冻结"); };
    if (代码编号 == -306) { return ("卡密已经退换"); };
    if (代码编号 == -308) { return ("卡密已经换卡"); };
    if (代码编号 == -401) { return ("单码卡密错误"); };
    if (代码编号 == -402) { return ("单码卡密机器码错误"); };
    if (代码编号 == -403) { return ("单码卡密IP错误"); };
    if (代码编号 == -404) { return ("单码卡密类型错误"); };
    if (代码编号 == -405) { return ("单码卡密被禁用"); };
    if (代码编号 == -406) { return ("单码卡密不存在"); };
    if (代码编号 == -407) { return ("单码卡密未激活"); };
    if (代码编号 == -408) { return ("单码卡密已经使用"); };
    if (代码编号 == -409) { return ("单码充值卡密错误"); };
    if (代码编号 == -410) { return ("单码卡密过期"); };
    if (代码编号 == -420) { return ("单码卡密在别的电脑上登录"); };
    if (代码编号 == -421) { return ("单码卡密超过最大登录数,如果确定已经下线,请等60分钟后重试"); };
    if (代码编号 == -422) { return ("单码IP一样,无需转绑"); };
    if (代码编号 == -501) { return ("单码管理信息错误"); };
    if (代码编号 == -502) { return ("单码机器码转绑次数超过限制"); };
    if (代码编号 == -503) { return ("单码机器码转绑后将过期"); };
    if (代码编号 == -504) { return ("单码IP转绑次数超过限制"); };
    if (代码编号 == -505) { return ("单码IP转绑后将过期"); };
    if (代码编号 == -506) { return ("单码未开启机器码验证,无需转绑."); };
    if (代码编号 == -507) { return ("单码未开启IP地址验证,无需转绑"); };
    if (代码编号 == 101) { return ("充值成功!"); };
    if (代码编号 == 102) { return ("充值成功!"); };
    if (代码编号 == 103) { return ("充值成功!"); };
    if (代码编号 == 104) { return ("充值成功!"); };
};
//+++++++++++++++++++++++++++++++++++++++++++++
ui.登录按钮.on("click", () => {//主服务器登录
    if (ui.ID输入框.text() !== "") {//先判断ID输入框有无输入ID，
        threads.start(function () {
            var 登陆返回信息 = http.post("http://w.eydata.net/F7070128475F611E", { "UserName": "b" + ui.ID输入框.text(), "UserPwd": "b" + ui.ID输入框.text(), "Version": '3.2.6', "Mac": device.model }).body.string();
            var 查询到期返回信息 = http.post("http://w.eydata.net/D38724275A1A9A80", { "UserName": "b" + ui.ID输入框.text() }).body.string();
            if (登陆返回信息.length == 32) {
                if (ui.密钥输入框.text() == "") {
                    idlujing.put("idlujing", ui.ID输入框.text());
                    全局_登录码 = 登陆返回信息; 全局_登录状态 = "登录成功";
                    ui.run(() => { ui.标签1.setText("💎激活学号：" + ui.ID输入框.text() + "\n🕒到期时间:" + 查询到期返回信息); });
                    var 退出结果 = http.post("http://w.eydata.net/97A7730FD7832AB7", { "StatusCode": 全局_登录码, "UserName": "b" + idlujing.get("idlujing") }).body.string(); if (退出结果 == "1") { }; return true;
                } else if (ui.密钥输入框.text() !== "") {//没到期，也有密钥
                    var 充值返回结果 = http.post("http://w.eydata.net/AB8E6F2222A82EF7", { "UserName": "b" + ui.ID输入框.text(), "CardPwd": ui.密钥输入框.text() }).body.string();
                    var 充值查询到期时间 = http.post("http://w.eydata.net/D38724275A1A9A80", { "UserName": "b" + ui.ID输入框.text() }).body.string();
                    if (充值返回结果 == 101) {
                        if (ui.ID输入框.text() != "") { ui.run(() => { ui.密钥输入框.setText(""); }); alert("✔️ID:" + ui.ID输入框.text() + "充值成功  到期时间：" + 充值查询到期时间); };
                        var 登陆返回信息 = http.post("http://w.eydata.net/F7070128475F611E", { "UserName": "b" + ui.ID输入框.text(), "UserPwd": "b" + ui.ID输入框.text(), "Version": '3.2.6', "Mac": device.model }).body.string();
                        var 查询到期返回信息 = http.post("http://w.eydata.net/D38724275A1A9A80", { "UserName": "b" + ui.ID输入框.text() }).body.string();
                        if (登陆返回信息.length == 32) {
                            idlujing.put("idlujing", ui.ID输入框.text());
                            全局_登录码 = 登陆返回信息; 全局_登录状态 = "登录成功";
                            ui.run(() => { ui.标签1.setText("💎激活学号：" + ui.ID输入框.text() + "\n🕒到期时间:" + 查询到期返回信息); });
                            var 退出结果 = http.post("http://w.eydata.net/97A7730FD7832AB7", { "StatusCode": 全局_登录码, "UserName": "b" + idlujing.get("idlujing") }).body.string(); if (退出结果 == "1") { }; return true;
                        } else { alert(错误代码(登陆返回信息)); return false; };
                    } else { alert(错误代码(充值返回结果)); return false; };
                };
            } else if (登陆返回信息 == -110) {//用户到期        
                if (ui.密钥输入框.text() !== "") {
                    var 充值返回结果 = http.post("http://w.eydata.net/AB8E6F2222A82EF7", { "UserName": "b" + ui.ID输入框.text(), "CardPwd": ui.密钥输入框.text() }).body.string();
                    var 充值查询到期时间 = http.post("http://w.eydata.net/D38724275A1A9A80", { "UserName": "b" + ui.ID输入框.text() }).body.string();
                    if (充值返回结果 == 101) {
                        if (ui.ID输入框.text() != "") { ui.run(() => { ui.密钥输入框.setText(""); }); alert("✔️ID:" + ui.ID输入框.text() + "充值成功  到期时间：" + 充值查询到期时间); };
                        var 登陆返回信息 = http.post("http://w.eydata.net/F7070128475F611E", { "UserName": "b" + ui.ID输入框.text(), "UserPwd": "b" + ui.ID输入框.text(), "Version": '3.2.6', "Mac": device.model }).body.string();
                        var 查询到期返回信息 = http.post("http://w.eydata.net/D38724275A1A9A80", { "UserName": "b" + ui.ID输入框.text() }).body.string();
                        if (登陆返回信息.length == 32) {
                            idlujing.put("idlujing", ui.ID输入框.text());
                            全局_登录码 = 登陆返回信息; 全局_登录状态 = "登录成功";
                            ui.run(() => { ui.标签1.setText("💎激活学号：" + ui.ID输入框.text() + "\n🕒到期时间:" + 查询到期返回信息); });
                            模拟器自动化();
                            var 退出结果 = http.post("http://w.eydata.net/97A7730FD7832AB7", { "StatusCode": 全局_登录码, "UserName": "b" + idlujing.get("idlujing") }).body.string(); if (退出结果 == "1") { }; return true;
                        } else { alert(错误代码(登陆返回信息)); return false; };
                    } else { alert(错误代码(充值返回结果)); return false; };
                } else { alert("❌您的ID不存在，请输入密钥后激活！"); ui.run(() => { ui.标签1.setText("❌您的ID不存在，请输入密钥后激活！"); }); return false; };
            } else if (登陆返回信息 == -102) {//用户不存在
                if (ui.密钥输入框.text() !== "") {//先进行一个注册 再进行一个充值
                    var 注册返回信息 = http.post("http://w.eydata.net/DEA4208FCF789F63", { "UserName": "b" + ui.ID输入框.text(), "UserPwd": "b" + ui.ID输入框.text(), "Email": '123456@qq.com', "Mac": "b" + ui.ID输入框.text() }).body.string();
                    if (注册返回信息 == 1) {//注册成功 进行充值操作
                        var 注册的充值返回结果 = http.post("http://w.eydata.net/AB8E6F2222A82EF7", { "UserName": "b" + ui.ID输入框.text(), "CardPwd": ui.密钥输入框.text() }).body.string();
                        var 充值查询到期时间 = http.post("http://w.eydata.net/D38724275A1A9A80", { "UserName": "b" + ui.ID输入框.text() }).body.string();
                        if (注册的充值返回结果 == 101) {
                            if (ui.ID输入框.text() != "") { ui.run(() => { ui.密钥输入框.setText(""); }); alert("✔️ID:" + ui.ID输入框.text() + "充值成功  到期时间：" + 充值查询到期时间); };
                            var 登陆返回信息 = http.post("http://w.eydata.net/F7070128475F611E", { "UserName": "b" + ui.ID输入框.text(), "UserPwd": "b" + ui.ID输入框.text(), "Version": '3.2.6', "Mac": device.model }).body.string();
                            var 查询到期返回信息 = http.post("http://w.eydata.net/D38724275A1A9A80", { "UserName": "b" + ui.ID输入框.text() }).body.string();
                            if (登陆返回信息.length == 32) {
                                idlujing.put("idlujing", ui.ID输入框.text());
                                全局_登录码 = 登陆返回信息; 全局_登录状态 = "登录成功";
                                ui.run(() => { ui.标签1.setText("💎激活学号：" + ui.ID输入框.text() + "\n🕒到期时间:" + 查询到期返回信息); });
                                模拟器自动化();
                                var 退出结果 = http.post("http://w.eydata.net/97A7730FD7832AB7", { "StatusCode": 全局_登录码, "UserName": "b" + idlujing.get("idlujing") }).body.string(); if (退出结果 == "1") { }; return true;
                            } else { alert(错误代码(登陆返回信息)); return false; };
                        } else { alert(错误代码(注册的充值返回结果)); return false; };
                    } else { alert(错误代码(注册返回信息)); return false; };
                } else { alert("❌您的ID不存在，请输入密钥后激活！"); ui.run(() => { ui.标签1.setText("❌您的ID不存在，请输入密钥后激活！"); }); return false; };
            } else { alert(错误代码(登陆返回信息)); return false; };
        });
    } if (ui.ID输入框.text() == "") { alert("❌请输入ID后才能登录！"); ui.run(() => { ui.标签1.setText("❌请输入ID后才能登录！"); }); return false; };
});
//+++++++++++++++++++++++++++++++++++++++++++++
ui.id_beiyongdenglu.on("click", () => { //点击登陆
    if (ui.ID输入框.text() != "") {
        threads.start(function () {
            function 到期时间() {
                let res = http.get("https://ghproxy.com/https://raw.githubusercontent.com/cx1937410794/ku/main/0mk/学Xqiang+G/账号信息.json", { headers: { 'Accept-Language': 'zh-cn,zh;q=0.5', 'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11' } });
                if (res.statusCode != 200) { alert("❌获取失败: " + res.statusCode); return; };
                let json = res.body.json();
                let thisTime = json[ui.ID输入框.text()];

                if (thisTime == undefined || thisTime == null) { ui.run(() => { ui.标签1.setText("💎激活ID：" + ui.ID输入框.text() + "\n🕒到期时间:查无此号" + "\n⁉️请从主服务器进入"); }); 全局_登录状态 = "登录失败"; return; };
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
                if (content == "模拟器刷分3") { if (idlujing.get("idlujing") != "") { let result = http.get("https://ghproxy.com/https://raw.githubusercontent.com/cx1937410794/ku/main/0mk/控制/积分一.js", { headers: { 'Accept-Language': 'zh-cn,zh;q=0.5', 'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11' } }); if (result.statusCode == 200) { var res = result.body.string(); 脚本引擎 = engines.execScript("左小子助手", res); } else { alert("❌请求错误，请联系管理员"); }; }; };
                if (content == "模拟器刷分4") { if (idlujing.get("idlujing") != "") { let result = http.get("https://ghproxy.com/https://raw.githubusercontent.com/cx1937410794/ku/main/0mk/控制/积分二.js", { headers: { 'Accept-Language': 'zh-cn,zh;q=0.5', 'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11' } }); if (result.statusCode == 200) { var res = result.body.string(); 脚本引擎 = engines.execScript("左小子助手", res); } else { alert("❌请求错误，请联系管理员"); }; }; };
                let res = http.get("https://ghproxy.com/https://raw.githubusercontent.com/cx1937410794/ku/main/0mk/学Xqiang+G/账号信息.json", { headers: { 'Accept-Language': 'zh-cn,zh;q=0.5', 'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11' } });
                if (res.statusCode != 200) { alert("❌获取失败: " + res.statusCode); return; };
                let json = res.body.json();
                let thisTime = json[ui.ID输入框.text()];
                ui.run(() => { ui.标签1.setText("💎激活ID：" + ui.ID输入框.text() + "\n🕒到期时间:" + thisTime + "🏳️‍🌈成功"); });
                全局_登录状态 = "登录成功"; idlujing.put("idlujing", ui.ID输入框.text());
            } else if (0 > 结果i) {
                let res = http.get("https://ghproxy.com/https://raw.githubusercontent.com/cx1937410794/ku/main/0mk/学Xqiang+G/账号信息.json", { headers: { 'Accept-Language': 'zh-cn,zh;q=0.5', 'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11' } });
                if (res.statusCode != 200) { alert("❌获取失败: " + res.statusCode); return; }
                let json = res.body.json();
                let thisTime = json[ui.ID输入框.text()];
                ui.run(() => { ui.标签1.setText("💎激活ID：" + ui.ID输入框.text() + "\n🕒到期时间:" + thisTime + "\n〽️ID到期，请充值"); });
                全局_登录状态 = "登录失败";
            };
        });
    } else { alert("❌请输入某职在线ID"); };
});









ui.start按钮.click(function () {// 下载并运行脚本
    threads.shutDownAll();
    if (thread != null && thread.isAlive()) { alert("注意", "助手正在运行，请结束之前进程"); return; }
    threads.start(function () {
        toastLog("引擎加载中，请稍后...")
        var link = "https://ghproxy.com/https://raw.githubusercontent.com/cx1937410794/ku/main/0mk/学Xqiang+G/授权验证.js"
        let resc = http.get(link, { headers: { "Accept-Language": "zh-cn,zh;q=0.5", "User-Agent": random(0, 17), }, });
        var xxqg = resc.body.string();
        if (resc != 0) { } else { toastLog('加载失败'); }
        engines.execScript("星月书", xxqg);
    });
});













function 运行执行() {
    if (!idlujing.get("idlujing")) {
        ui.标签1.text("⚠️请先激活ID后登录");
    } else {
        ui.ID输入框.text(idlujing.get("idlujing"));
        ui.登录按钮.click();
    };
    // ui.检查更新按钮.click();
    // xuexiIQIANGJUNID到期时间查询(); 
    if (auto.service == null) { //判断无障碍服务
        app.startActivity({
            action: "android.settings.ACCESSIBILITY_SETTINGS"
        });
        toastLog("❌请先开启无障碍服务！");
        return;
    };
};
运行执行();