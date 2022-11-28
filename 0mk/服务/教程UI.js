"ui";
function 关闭同名() {
    let currentEngine = engines.myEngine();
    let runningEngines = engines.all();
    let runningSize = runningEngines.length;
    let currentSource = currentEngine.getSource() + ''
    if (runningSize > 1) {
        runningEngines.forEach(compareEngine => {
            let compareSource = compareEngine.getSource() + ''
            if (currentEngine.id !== compareEngine.id && compareSource === currentSource) {
                // 强制关闭同名的脚本
                compareEngine.forceStop();
                toast("关闭其他");
            };
        });
    };
};
关闭同名();



var wzzjd1 = "https://"
var wzzjd2 = "jzzx."
var wzzjd3 = "top/"
var wzzjd5 = "0mk/"
var 左小子网址 = wzzjd1 + wzzjd2 + wzzjd3 + wzzjd5
ui.statusBarColor("#000000")
ui.layout(
    <vertical>
        <frame layout_weight="1">
            <webview id="webview" w="*" h="*" />
            <list id="list" w="90dp" h="*" bg="#346489" layout_gravity="right">
                <text w="*" h="50" text="{{txt}}" textSize="16sp" bg="#dddddd" margin="5" gravity="center" />
            </list>
        </frame>
        <frame w="*">
            <button id="left" w="auto" text="官网" layout_gravity="left" />
            <button id="center" w="auto" text="某职教程" layout_gravity="center" />
            <button id="right" w="auto" text="退出教程" layout_gravity="right" />
        </frame>
    </vertical>
);

ui.list.setVisibility(8);

var listArray = [{
    txt: "【主页】新手教程",
    url: 左小子网址 + "video/新手教程.mp4"
},
{
    url: 左小子网址 + "video/积分教程.mp4",
    txt: "【控制】积分教程"
},
{
    url: 左小子网址 + "video/课时教程.mp4",
    txt: "【控制】课时教程"
},
{
    url: 左小子网址 + "video/电子书教程.mp4",
    txt: "【控制】电子书教程"
},
{
    url: 左小子网址 + "video/搜题教程.mp4",
    txt: "【控制】搜题教程"
},
{
    url: 左小子网址 + "video/超级登陆.mp4",
    txt: "【服务】超级登陆"
},
{
    url: 左小子网址 + "video/项目搜题.mp4",
    txt: "【服务】项目搜题"
},
{
    url: 左小子网址 + "video/项目音频课.mp4",
    txt: "【服务】项目音频课"
}

];

ui.list.setDataSource(listArray);


var url = "http://jzzx.top/0mk/";
ui.webview.loadUrl(url);


var isCanFinish = false;
var isCanFinishTimeout;


ui.list.on("item_click", function (item, i) {
    ui.run(() => {
        ui.webview.loadUrl(String(item.url));
        ui.list.setVisibility(8);
    });

});

ui.left.click(function (v) {//前进
    // ui.run(() => {
    //     ui.webview.goBack();
    // });
    app.openUrl("http://jzzx.top/0mk/")
});
ui.center.click(function (v) {
    if (ui.list.visibility == 8) {
        ui.run(() => {
            ui.list.setVisibility(0);
        });
    } else {
        ui.run(() => {
            ui.list.setVisibility(8);
        });

    };
});
ui.right.click(function (v) { //后退
    // ui.run(() => {
    //     ui.webview.goForward();
    // });
    exit();
});