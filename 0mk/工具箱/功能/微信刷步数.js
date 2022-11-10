"ui";
var color = '#000000'//设置脚本主题颜色
ui.statusBarColor(color)//设置状态栏的颜色
var 取存配置项 = storages.create("shuju");//配置文件
ui.layout(
    <frame background="#000000">
        <vertical align="top" margin="30">
            <text textSize="26sp" textColor="red" textStyle="bold">微信\QQ\支付宝 奔奔一键</text>
            <text h="18" w="auto" textSize="18sp" text="" />
            <linear>
                <input id="账号" layout_weight="1" bg="#ffffff" h="45" paddingLeft="10sp" maxLines="1" emsMax="11" hint="输入账号" alpha="0.5" />
                <text h="55" w="auto" textSize="18sp" />
            </linear>
            <linear>
                <input id="密码" layout_weight="1" bg="#ffffff" h="45" paddingLeft="10sp" maxLines="1" emsMax="11" hint="输入密码" alpha="0.5" />
                <text h="55" w="auto" textSize="18sp" />
            </linear>
            <linear>
                <input id="步数" layout_weight="1" bg="#ffffff" h="45" paddingLeft="10sp" maxLines="1" inputType="number" emsMax="11" hint="输入步数(1-98000)" alpha="0.5" />
                <text h="55" w="auto" textSize="18sp" />
            </linear>
            <linear>
                <button h="65" w="100" id="提交刷步数" text="提交刷步数" />
                <text id="结果" h="40" w="auto" text="不建议步数太高" textSize="18sp" textColor="red" />
            </linear>
            <linear>
                <text id="教程" h="auto" w="auto" text="" textSize="18sp" textColor="red" />
            </linear>
            <linear>
                <text id="教程" h="auto" w="auto" text="" textSize="18sp" textColor="red" />
            </linear>
            <linear>
                <text id="教程" h="auto" w="auto" text="1.从应用商店下载小米运动原（zeppelin）,打开软件通过手机号注册登录；" textSize="18sp" textColor="red" />
            </linear>
            <linear>
                <text id="教程" h="auto" w="auto" text="2.登录之后，点击我的->第三方接入->绑定需要同步的第三方平台；" textSize="18sp" textColor="red" />
            </linear>
            <linear>
                <text id="教程" h="auto" w="auto" text="3.回到本助手，提交步数即可同步至你绑定的所有平台；" textSize="18sp" textColor="red" />
            </linear>
            <linear>
                <text id="教程" h="auto" w="auto" text="" textSize="18sp" textColor="red" />
            </linear>
            <linear>
                <text id="教程" h="auto" w="auto" text="生活本沉闷，跑起来才有风！" textSize="18sp" textColor="green" />
            </linear>

        </vertical>
    </frame>
);


threads.start(function () {

    if (取存配置项.get("账号") !== undefined) {
        ui.run(() => {
            ui.账号.setText(取存配置项.get("账号"));
        });
    };

    if (取存配置项.get("密码") !== undefined) {
        ui.run(() => {
            ui.密码.setText(取存配置项.get("密码"));
        });
    };
    if (取存配置项.get("步数") !== undefined) {
        ui.run(() => {
            ui.步数.setText(取存配置项.get("步数"));
        });
    };
});



ui.提交刷步数.on("click", () => {
    alert("提交步数");
    ui.run(() => {
        ui.结果.setText("提交步数")
    });
    取存配置项.put("账号", ui.账号.text()); //存
    取存配置项.put("密码", ui.密码.text()); //存
    取存配置项.put("步数", ui.步数.text()); //存
    threads.start(function () {
        var 刷步数API = http.post("https://api.iculture.cc/api/run/?do=shuabu", {
            "user": ui.账号.text(),
            "pass": ui.密码.text(),
            "count": ui.步数.text()
        }).body.json();
        log(刷步数API)

        if (刷步数API["code"] == 200) {
            //ui.run(() => {ui.结果.setText(刷步数API["mess"]);});
            alert("提交成功\n请在稍后查看。");
        } else {
            //ui.run(() => {ui.结果.setText("出现bug,请联系客服.");});
            alert("服务器BUG，请联系客服。");
        };
    });
});