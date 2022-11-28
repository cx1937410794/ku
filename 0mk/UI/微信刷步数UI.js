"ui";
var color = '#000000'//设置脚本主题颜色
ui.statusBarColor(color)//设置状态栏的颜色
ui.layout(
    <frame background="#000000">
        <vertical align="top" margin="30">
            <text id="yiyan" h="auto" w="auto" text="生活本沉闷，跑起来才有风！" textSize="24sp" textColor="green" />
            <text id="yiyan2" h="auto" w="auto" text="点文字可以切换" textSize="18sp" textColor="red" />
        </vertical>
    </frame>
);
function 每日一言() {
    threads.start(function () {
        let result = http.get("https://v.api.aa1.cn/api/api-wenan-anwei/index.php?type=json", { headers: { 'Accept-Language': 'zh-cn,zh;q=0.5', 'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11' } });
        if (result.statusCode == 200) { ui.run(() => { ui.yiyan.setText(result.body.json().anwei + "\n"); }); };
    });
}; 每日一言();

ui.yiyan.on("click", () => { 每日一言(); });
ui.yiyan2.on("click", () => { 每日一言(); });