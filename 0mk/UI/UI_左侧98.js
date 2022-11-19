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
                <toolbar id="toolbar" title="左小子助手_主服务器  V{{this.自身版本名称}}" />
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
                                        <input id='密钥输入框' hint='充值时输入密钥' w='*' gravity="center" textColor="red" textStyle="bold"></input>
                                    </vertical>
                                    <button margin='5dp' id="登录按钮" text="用户登录(充值)" w="*" bg='{{this.color}}' textColor='#ffffff' textSize='16sp' ></button>
                                    <button margin='5dp' id="卡密查询按钮" text="密钥查询" w="*" bg='{{this.color}}' textColor='#ffffff' textSize='16sp' ></button>
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
                            <button id="xuexiIQIANGJUN" layout_gravity="center" margin='5dp' bg='{{this.color}}' textColor='#ffffff' text="一键银行积分" h="60" w="240" style="Widget.AppCompat.Button.Colored" />
                            <button id="xuexiIQIANGJUNID答题按钮" layout_gravity="center" margin='5dp' bg='{{this.color}}' textColor='#ffffff' text="有问必答 挑战自我" h="60" w="240" style="Widget.AppCompat.Button.Colored" />
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


ui.viewpager.setTitles([unescape('\u2618\ufe0f\u519b\u804c\u5728\u7ebf\uff08\u5411\u4e0b\u6ed1\u52a8\uff09'), unescape('\ud83d\udcdb\u5b66\u4e60\u5f3a\u519b')]);

ui.tabs.setupWithViewPager(ui.viewpager);//让滑动页面和标签栏联动
ui.statusBarColor(color);//设置状态栏的颜色

ui.emitter.on("resume", function () { ui.autoService.checked = auto.service != null; ui.windowService.checked = floaty.checkPermission(); toast("欢迎回来！"); if (!$power_manager.isIgnoringBatteryOptimizations()) { ui.电池优化权限.checked = false } else { ui.电池优化权限.checked = true }; });
ui.autoService.on("check", (checked) => { if (checked && auto.service == null) { app.startActivity({ action: "android.settings.ACCESSIBILITY_SETTINGS" }); }; if (!checked && auto.service != null) { auto.service.disableSelf(); }; });
ui.windowService.on('check', (checked) => { if (checked && !floaty.checkPermission() && device.sdkInt > 23) { log('打开悬浮窗权限'); var intent = new Intent(); intent.setAction("android.settings.action.MANAGE_OVERLAY_PERMISSION"); app.startActivity(intent); toast('选择此软件'); } });
ui.电池优化权限.click(() => { if (!$power_manager.isIgnoringBatteryOptimizations()) { toastLog("❌未开启忽略电池优化，请求中..."); $power_manager.requestIgnoreBatteryOptimizations(); return; } else { ui.电池优化权限.checked = true; log("✔️已有电池优化服务！"); }; });

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
function 模拟器自动化() {
    var storage = storages.create("左小子临时备忘录");//模拟器用户
    var content = storage.get("content");
    if (content == "模拟器刷分1") {
        if (idlujing.get("idlujing") != "") {
            let result = http.get("https://raw.gh.fakev.cn/cx1937410794/ku/main/0mk/控制/积分一.js", { headers: { 'Accept-Language': 'zh-cn,zh;q=0.5', 'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11' } });
            if (result.statusCode == 200) { var res = result.body.string(); 脚本引擎 = engines.execScript("左小子助手", res); } else { alert("❌请求错误，请联系管理员"); };
        };
    };
    if (content == "模拟器刷分2") {
        if (idlujing.get("idlujing") != "") {
            let result = http.get("https://raw.gh.fakev.cn/cx1937410794/ku/main/0mk/控制/积分二.js", { headers: { 'Accept-Language': 'zh-cn,zh;q=0.5', 'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11' } });
            if (result.statusCode == 200) { var res = result.body.string(); 脚本引擎 = engines.execScript("左小子助手", res); } else { alert("❌请求错误，请联系管理员"); };
        };
    };
};
ui.登录按钮.on("click", () => {
    if (ui.ID输入框.text() !== "") {//先判断ID输入框有无输入ID，
        threads.start(function () {
            var 登陆返回信息 = http.post("http://w.eydata.net/F7070128475F611E", { "UserName": "a" + ui.ID输入框.text(), "UserPwd": "a" + ui.ID输入框.text(), "Version": '3.2.6', "Mac": device.model }).body.string();
            var 查询到期返回信息 = http.post("http://w.eydata.net/D38724275A1A9A80", { "UserName": "a" + ui.ID输入框.text() }).body.string();
            if (登陆返回信息.length == 32) {
                if (ui.密钥输入框.text() == "") {
                    idlujing.put("idlujing", ui.ID输入框.text());
                    全局_登录码 = 登陆返回信息; 全局_登录状态 = "登录成功";
                    ui.run(() => { ui.标签1.setText("💎激活ID：" + ui.ID输入框.text() + "\n🕒到期时间:" + 查询到期返回信息 + "\n登录成功"); });
                    模拟器自动化();
                    var 退出结果 = http.post("http://w.eydata.net/97A7730FD7832AB7", { "StatusCode": 全局_登录码, "UserName": "a" + idlujing.get("idlujing") }).body.string(); if (退出结果 == "1") { }; return true;
                } else if (ui.密钥输入框.text() !== "") {//没到期，也有密钥
                    var 充值返回结果 = http.post("http://w.eydata.net/AB8E6F2222A82EF7", { "UserName": "a" + ui.ID输入框.text(), "CardPwd": ui.密钥输入框.text() }).body.string();
                    var 充值查询到期时间 = http.post("http://w.eydata.net/D38724275A1A9A80", { "UserName": "a" + ui.ID输入框.text() }).body.string();
                    if (充值返回结果 == 101) {
                        if (ui.ID输入框.text() != "") { ui.run(() => { ui.密钥输入框.setText(""); }); alert("✔️ID:" + ui.ID输入框.text() + "充值成功  到期时间：" + 充值查询到期时间); };
                        var 登陆返回信息 = http.post("http://w.eydata.net/F7070128475F611E", { "UserName": "a" + ui.ID输入框.text(), "UserPwd": "a" + ui.ID输入框.text(), "Version": '3.2.6', "Mac": device.model }).body.string();
                        var 查询到期返回信息 = http.post("http://w.eydata.net/D38724275A1A9A80", { "UserName": "a" + ui.ID输入框.text() }).body.string();
                        if (登陆返回信息.length == 32) {
                            idlujing.put("idlujing", ui.ID输入框.text());
                            全局_登录码 = 登陆返回信息; 全局_登录状态 = "登录成功";
                            ui.run(() => { ui.标签1.setText("💎激活ID：" + ui.ID输入框.text() + "\n🕒到期时间:" + 查询到期返回信息 + "\n登录成功"); });
                            模拟器自动化();
                            var 退出结果 = http.post("http://w.eydata.net/97A7730FD7832AB7", { "StatusCode": 全局_登录码, "UserName": "a" + idlujing.get("idlujing") }).body.string(); if (退出结果 == "1") { }; return true;
                        } else { alert(错误代码(登陆返回信息)); return false; };
                    } else { alert(错误代码(充值返回结果)); return false; };
                };
            } else if (登陆返回信息 == -110) {//用户到期        
                if (ui.密钥输入框.text() !== "") {
                    var 充值返回结果 = http.post("http://w.eydata.net/AB8E6F2222A82EF7", { "UserName": "a" + ui.ID输入框.text(), "CardPwd": ui.密钥输入框.text() }).body.string();
                    var 充值查询到期时间 = http.post("http://w.eydata.net/D38724275A1A9A80", { "UserName": "a" + ui.ID输入框.text() }).body.string();
                    if (充值返回结果 == 101) {
                        if (ui.ID输入框.text() != "") { ui.run(() => { ui.密钥输入框.setText(""); }); alert("✔️ID:" + ui.ID输入框.text() + "充值成功  到期时间：" + 充值查询到期时间); };
                        var 登陆返回信息 = http.post("http://w.eydata.net/F7070128475F611E", { "UserName": "a" + ui.ID输入框.text(), "UserPwd": "a" + ui.ID输入框.text(), "Version": '3.2.6', "Mac": device.model }).body.string();
                        var 查询到期返回信息 = http.post("http://w.eydata.net/D38724275A1A9A80", { "UserName": "a" + ui.ID输入框.text() }).body.string();
                        if (登陆返回信息.length == 32) {
                            idlujing.put("idlujing", ui.ID输入框.text());
                            全局_登录码 = 登陆返回信息; 全局_登录状态 = "登录成功";
                            ui.run(() => { ui.标签1.setText("💎激活ID：" + ui.ID输入框.text() + "\n🕒到期时间:" + 查询到期返回信息 + "\n登录成功"); });
                            模拟器自动化();
                            var 退出结果 = http.post("http://w.eydata.net/97A7730FD7832AB7", { "StatusCode": 全局_登录码, "UserName": "a" + idlujing.get("idlujing") }).body.string(); if (退出结果 == "1") { }; return true;
                        } else { alert(错误代码(登陆返回信息)); return false; };
                    } else { alert(错误代码(充值返回结果)); return false; };
                } else { alert("❌您的ID到期，请输入密钥后才能激活！"); return false; };
            } else if (登陆返回信息 == -102) {//用户不存在
                if (ui.密钥输入框.text() !== "") {//先进行一个注册 再进行一个充值
                    var 注册返回信息 = http.post("http://w.eydata.net/DEA4208FCF789F63", { "UserName": "a" + ui.ID输入框.text(), "UserPwd": "a" + ui.ID输入框.text(), "Email": '123456@qq.com', "Mac": "a" + ui.ID输入框.text() }).body.string();
                    if (注册返回信息 == 1) {//注册成功 进行充值操作
                        var 注册的充值返回结果 = http.post("http://w.eydata.net/AB8E6F2222A82EF7", { "UserName": "a" + ui.ID输入框.text(), "CardPwd": ui.密钥输入框.text() }).body.string();
                        var 充值查询到期时间 = http.post("http://w.eydata.net/D38724275A1A9A80", { "UserName": "a" + ui.ID输入框.text() }).body.string();
                        if (注册的充值返回结果 == 101) {
                            if (ui.ID输入框.text() != "") { ui.run(() => { ui.密钥输入框.setText(""); }); alert("✔️ID:" + ui.ID输入框.text() + "充值成功  到期时间：" + 充值查询到期时间); };
                            var 登陆返回信息 = http.post("http://w.eydata.net/F7070128475F611E", { "UserName": "a" + ui.ID输入框.text(), "UserPwd": "a" + ui.ID输入框.text(), "Version": '3.2.6', "Mac": device.model }).body.string();
                            var 查询到期返回信息 = http.post("http://w.eydata.net/D38724275A1A9A80", { "UserName": "a" + ui.ID输入框.text() }).body.string();
                            if (登陆返回信息.length == 32) {
                                idlujing.put("idlujing", ui.ID输入框.text());
                                全局_登录码 = 登陆返回信息; 全局_登录状态 = "登录成功";
                                ui.run(() => { ui.标签1.setText("💎激活ID：" + ui.ID输入框.text() + "\n🕒到期时间:" + 查询到期返回信息 + "\n登录成功"); });
                                模拟器自动化();
                                var 退出结果 = http.post("http://w.eydata.net/97A7730FD7832AB7", { "StatusCode": 全局_登录码, "UserName": "a" + idlujing.get("idlujing") }).body.string(); if (退出结果 == "1") { }; return true;
                            } else { alert(错误代码(登陆返回信息)); return false; };
                        } else { alert(错误代码(注册的充值返回结果)); return false; };
                    } else { alert(错误代码(注册返回信息)); return false; };
                } else { alert("❌您的ID不存在，请输入密钥后才能激活！"); return false; };
            } else { alert(错误代码(登陆返回信息)); return false; };
        });
    } if (ui.ID输入框.text() == "") { alert("❌请输入ID后才能登录！"); return false; };
});
ui.卡密查询按钮.on("click", () => { //卡密查询
    threads.start(function () {
        var 登陆返回信息 = http.post("http://w.eydata.net/314B8BA2EBF1BCF1", { "card": ui.密钥输入框.text() }); 登陆返回信息 = 登陆返回信息.body.string();
        if (登陆返回信息 == -301) {
            alert("❌请输入正确的卡密。");
        } else {
            const a = 登陆返回信息;
            var shuzu = a.split('|');
            var 密钥 = (shuzu.slice()[0]);
            var 状态 = (shuzu.slice()[1]);
            var 使用人 = (shuzu.slice()[2]);
            var 使用日期 = (shuzu.slice()[3]);
            var 类型 = (shuzu.slice()[4]);
            使用人 = 使用人.replace("a", "");
            alert("查询结果:" + "\n密钥:" + 密钥 + "\n状态:" + 状态 + "\n使用人ID:" + 使用人 + "\n使用日期:" + 使用日期 + "\n类型:" + 类型);
        };
    });
});

ui.退出按钮.on("click", () => { engines.stopAllAndToast(); });
ui.联系QQ客服1.on('click', () => { try { app.startActivity({ action: "android.intent.action.VIEW", data: "mqqapi://card/show_pslcard?&uin=3289631470" }); } catch (e) { toast("您还没有安装QQ"); }; });
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
});
ui.控制刷课时按钮.on("click", () => { //控制刷课时按钮
    if (auto.service == null) { alert("❌请开启无障碍服务"); return false }//无障碍权限
    if (idlujing.get("idlujing") != "" && 全局_登录状态 == "登录成功") {
        let result = http.get("https://raw.gh.fakev.cn/cx1937410794/ku/main/0mk/控制/刷课时.js", { headers: { 'Accept-Language': 'zh-cn,zh;q=0.5', 'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11' } });
        if (result.statusCode == 200) {
            var res = result.body.string();
            脚本引擎 = engines.execScript("左小子助手", res);
        } else {
            alert("❌请求错误，请联系管理员");
        }
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
            alert("安卓版本太低!请使用安卓7.0以上版本手机。");
            console.hide() //关闭日志窗口
            // engines.stopAllAndToast(); //终止所有脚本;
        };
        //静音
        shell("input keyevent 164", false);
        launchPackage("com.moocxuetang"); //打开APP
        // waitForPackage("com.moocxuetang"); //等待APP出现
        sleep(3000)
        if (id("tvSkip").className("android.widget.TextView").findOne(3000) != null) { //跳过开屏
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
ui.xuexiIQIANGJUN.on("click", () => { //控制刷分按钮
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

ui.xuexiIQIANGJUNID答题按钮.on("click", () => { //控制刷分按钮
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

ui.scoreTask.on("click", () => {//下载定时任务
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
            alert("您的ID是：" + jzzxid[1]);
            ui.run(() => { ui.ID输入框.setText(jzzxid[1]); });
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





