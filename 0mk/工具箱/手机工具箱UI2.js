"ui";
var color = '#000000'//设置脚本主题颜色
ui.statusBarColor(color)//设置状态栏的颜色
var 账号身份 = "用户登录";
ui.layout(
    <drawer id="drawer">
        <vertical>
            <appbar id='appbar' bg='{{this.color}}'>
                <horizontal>
                    <toolbar id="toolbar" title="左小子技术提供" />
                </horizontal>
            </appbar>
            <vertical >
                <text id="标签1" text="身份码" textSize='16sp' gravity='center'/>
            </vertical>
            <horizontal gravity='center_vertical'>
                <text text='' margin='5dp' bg='{{this.color}}' w='8dp' h='35dp'></text>
                <text text='功能列表' textSize='16sp' textColor='{{this.color}}'></text>
            </horizontal>
            <button id="微信刷步数" bg='{{this.color}}' margin='5dp' textColor='#ffffff' layout_gravity="center" text="微信刷步数" h="60" w="240" style="Widget.AppCompat.Button.Colored" />
            <button id="挂机赚钱按钮" bg='{{this.color}}' margin='5dp' textColor='#ffffff' layout_gravity="center" text="斗音挂机赚钱项目" h="60" w="240" style="Widget.AppCompat.Button.Colored" />
            <button id="等待添加" bg='{{this.color}}' margin='5dp' textColor='#ffffff' layout_gravity="center" text="等待添加..." h="60" w="240" style="Widget.AppCompat.Button.Colored" />
        </vertical>
    </drawer >
);


function 加载功能(网址) {
    threads.start(function () {//开始获取脚本配置
        let result = http.get(网址, {
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
        };
    });
};
//===========================================================
ui.微信刷步数.on('click', () => {
    加载功能("http://raw.gh.fakev.cn/cx1937410794/ku/main/0mk/工具箱/功能/微信刷步数.js");
});







threads.start(function () {//启动运行
    let res = http.get("https://raw.gh.fakev.cn/cx1937410794/ku/main/0mk/工具箱/权限信息.json", { headers: { 'Accept-Language': 'zh-cn,zh;q=0.5', 'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11' } });
    if (res.statusCode != 200) {
        alert("❌获取失败: " + res.statusCode);
        return;
    };
    let json身份 = res.body.json();
    let thisTime身份 = json身份[$crypto.digest(device.getAndroidId(), "MD5")];
    thisTime身份 = thisTime身份.身份
    // alert(thisTime身份)
    ui.run(() => {
        ui.标签1.setText(thisTime身份)
    });
});