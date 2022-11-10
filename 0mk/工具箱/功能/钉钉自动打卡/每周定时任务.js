"ui";
var 每周数组 = [];
var 配置项 = storages.create("shuju"); //被存的数据路径
ui.statusBarColor("#000000");
var moocStorage = storages.create("shuju"); //被存的数据路径每日任务
ui.layout(
    <scroll>
        <vertical >
            <appbar bg="#000000">
                <toolbar id="toolbar" title="钉钉打卡助手" />
            </appbar>
            <vertical margin="10" bg="#DCDCDC" w="*" h="auto">
                <text id="日期打卡text" text="每周打卡日期:　" textColor="red" textSize="16sp" marginTop="16" />

                <horizontal gravity="center" >
                    <checkbox id="周一" text="周一" />
                    <checkbox id="周二" text="周二" />
                    <checkbox id="周三" text="周三" />
                    <checkbox id="周四" text="周四" />
                    <checkbox id="周五" text="周五" />
                </horizontal>
                <horizontal gravity="center" >
                    <checkbox id="周六" text="周六" />
                    <checkbox id="周日" text="周日" />
                </horizontal>


                <text id="" text="设置锁屏时间:　" textColor="red" textSize="16sp" marginTop="16" />
                <radiogroup padding="20 20 20 20">
                    <horizontal>
                        <input id="小时输入框" text="1" inputType="number" textSize='24sp' padding="8 8 8 8" />
                        <text text="时" color="black" textSize='24sp' />
                        <input id="分钟输入框" text="00" inputType="number" textSize='24sp' padding="8 8 8 8" />
                        <text text="分 （24小时制）" textSize='24sp' color="black" />
                    </horizontal>
                </radiogroup>
                <horizontal>
                    <button layout_weight="1" style="Widget.AppCompat.Button.Colored" bg='#000000' id="定时按钮任务" text="积分定时" textSize='24sp' margin='5dp' padding="16dp" h="60" w="240" />
                </horizontal>

                <frame id="showTask" visibility="gone">
                    <list id="list" >
                        <relative margin="10" bg="#DCDCDC" w="*" h="auto">
                            <text id="taskName" layout_alighParentLeft="true" textSize="16sp" textColor="#000000" text="任务: {{name}}" />
                            <text id="taskTime" layout_below="taskName" textSize="16sp" textColor="#000000" text="下次运行时间: {{time}}" />
                            <button id="deleteItem" layout_alignParentRight="true" text="删除" style="Widget.AppCompat.Button.Colored" w="auto" h="auto" />
                        </relative>
                    </list>
                </frame>
            </vertical>



            <text id="" text="设置锁屏密码:　(目前仅支持数字9键锁屏密码)" textColor="red" textSize="16sp" marginTop="16" />
            <horizontal gravity="center" >
                <text text="锁屏密码" color="black" textSize='24sp' />
                <input id="锁屏密码输入框" text="" color="black" textSize='24sp' w="*" />
            </horizontal>
            <horizontal gravity="center" >
                <text text=" " color="black" textSize='24sp' />
                <checkbox id="锁屏密码开关" text="保存并开启" color="black" textSize='24sp' />
                <text text=" " color="black" textSize='24sp' />

            </horizontal>
        </vertical>
    </scroll>
);

threads.start(function () {
    let result = http.get("https://zuoxiaozi.top/0mk/工具箱/功能/钉钉自动打卡/钉钉定时任务引擎组件.js", {
        headers: {
            'Accept-Language': 'zh-cn,zh;q=0.5', 'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11'
        }
    });
    if (result.statusCode == 200) {
        var res = result.body.bytes();
        files.writeBytes("./钉钉定时任务引擎组件.js", res);
    } else { alert("❌请求错误，请联系管理员"); };
});


ui.周一.on("click", () => { if (ui.周一.checked == true) { 配置项.put("周一", true); } else { 配置项.put("周一", false); }; 取配置项(); });
ui.周二.on("click", () => { if (ui.周二.checked == true) { 配置项.put("周二", true); } else { 配置项.put("周二", false); }; 取配置项(); });
ui.周三.on("click", () => { if (ui.周三.checked == true) { 配置项.put("周三", true); } else { 配置项.put("周三", false); }; 取配置项(); });
ui.周四.on("click", () => { if (ui.周四.checked == true) { 配置项.put("周四", true); } else { 配置项.put("周四", false); }; 取配置项(); });
ui.周五.on("click", () => { if (ui.周五.checked == true) { 配置项.put("周五", true); } else { 配置项.put("周五", false); }; 取配置项(); });
ui.周六.on("click", () => { if (ui.周六.checked == true) { 配置项.put("周六", true); } else { 配置项.put("周六", false); }; 取配置项(); });
ui.周日.on("click", () => { if (ui.周日.checked == true) { 配置项.put("周日", true); } else { 配置项.put("周日", false); }; 取配置项(); });

ui.锁屏密码开关.on("click", () => {
    if (ui.锁屏密码输入框.text() !== "") {
        if (ui.锁屏密码开关.checked == true) {
            // ui.锁屏密码开关.checked = true;
            配置项.put("锁屏密码输入框", ui.锁屏密码输入框.text());
            配置项.put("锁屏密码开关", true);
            取配置项();
        } else {
            // ui.锁屏密码开关.checked = false;
            配置项.put("锁屏密码输入框", "");
            配置项.put("锁屏密码开关", false);
            取配置项();
        };
    } else {
        ui.锁屏密码开关.checked = false;
        alert("请输入锁屏密码");
        配置项.put("锁屏密码开关", false);
        取配置项();
    };

});

function 取配置项() {
    if (配置项.get("小时") && 配置项.get("分钟")) { ui.run(() => { ui.小时输入框.setText(配置项.get("小时")); ui.分钟输入框.setText(配置项.get("分钟")); }); };
    ui.run(() => { ui.日期打卡text.setText("每周打卡日期: "); });
    if (配置项.get("周一") == true) { ui.周一.checked = true; ui.日期打卡text.setText(ui.日期打卡text.getText() + "周一"); 每周数组.push("一"); };
    if (配置项.get("周二") == true) { ui.周二.checked = true; ui.日期打卡text.setText(ui.日期打卡text.getText() + "周二"); 每周数组.push("二"); };
    if (配置项.get("周三") == true) { ui.周三.checked = true; ui.日期打卡text.setText(ui.日期打卡text.getText() + "周三"); 每周数组.push("三"); };
    if (配置项.get("周四") == true) { ui.周四.checked = true; ui.日期打卡text.setText(ui.日期打卡text.getText() + "周四"); 每周数组.push("四"); };
    if (配置项.get("周五") == true) { ui.周五.checked = true; ui.日期打卡text.setText(ui.日期打卡text.getText() + "周五"); 每周数组.push("五"); };
    if (配置项.get("周六") == true) { ui.周六.checked = true; ui.日期打卡text.setText(ui.日期打卡text.getText() + "周六"); 每周数组.push("六"); };
    if (配置项.get("周日") == true) { ui.周日.checked = true; ui.日期打卡text.setText(ui.日期打卡text.getText() + "周日"); 每周数组.push("日"); };
    if (配置项.get("锁屏密码开关") == true) { ui.锁屏密码开关.checked = true; ui.run(() => { ui.锁屏密码输入框.setText(配置项.get("锁屏密码输入框")); }); };
    每周数组 = [];
    if (配置项.get("周一") == true) { 每周数组.push("一"); };
    if (配置项.get("周二") == true) { 每周数组.push("二"); };
    if (配置项.get("周三") == true) { 每周数组.push("三"); };
    if (配置项.get("周四") == true) { 每周数组.push("四"); };
    if (配置项.get("周五") == true) { 每周数组.push("五"); };
    if (配置项.get("周六") == true) { 每周数组.push("六"); };
    if (配置项.get("周日") == true) { 每周数组.push("日"); };
};
取配置项();





//========================================================================每日任务
ui.showTask.visibility = 0;//打开时查询定时任务
var taskList = moocStorage.get("taskList"); //定义存储定时任务列表的容器
if (taskList == null) { taskList = []; };



function dailyTask() {//每周任务模块
    let dailyTask = timers.addWeeklyTask({
        path: "./钉钉定时任务引擎组件.js",
        time: targetTime,
        daysOfWeek: 每周数组
    });
    toastLog("每周任务预定成功");
    log(dailyTask);
    return dailyTask;
};

ui.定时按钮任务.on("click", () => {//点击积分
    if (ui.小时输入框.getText() == 24 && ui.分钟输入框.getText() != 0) {//小时范围
        alert("24点不能超出0分钟");
    } else {
        if (ui.小时输入框.getText() == "" || ui.分钟输入框.getText() == "") {//不能输入空白数值
            alert("内容不能为空");
        } else {
            if (ui.小时输入框.getText() > 24 || ui.小时输入框.getText() < 0) {//小时范围
                alert("超出小时范围");
            } else {
                if (ui.分钟输入框.getText() > 60 || ui.分钟输入框.getText() < 0) {//分钟范围
                    alert("超出分钟范围");
                } else {
                    if (ui.小时输入框.getText() == 24 && ui.分钟输入框.getText() == 0) {//分钟范围
                        alert("24:00请使用00:00");
                    } else {

                        配置项.put("小时", ui.小时输入框.text()); // 存数据
                        配置项.put("分钟", ui.分钟输入框.text());

                        targetTime = ui.小时输入框.getText() + ":" + ui.分钟输入框.getText();
                        let task = {
                            id: dailyTask().id,
                            name: 每周数组,
                            time: targetTime
                        };
                        taskList.push(task);
                        moocStorage.put("taskList", taskList);
                        ui.showTask.visibility = 0;//查询定时任务
                        toast("添加成功！");

                    };
                };
            };
        };
    };
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
