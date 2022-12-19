"ui";
var idlujing = storages.create("shuju"); //被存的数据路径
ui.statusBarColor("#000000");
var color = '#000000';
$ui.layout(
    <vertical>
        <appbar id='appbar' bg='{{this.color}}'>
            <toolbar id="toolbar" title="直播选择" />
        </appbar>
        <list id="list">
            <card margin="8" cardBackgroundColor="#F0F3E8" cardCornerRadius="8" w="*" contentPadding="12">
                <horizontal>
                    <img id="ui图片" src="{{图片}}" w="80" h="80" circle="true" />
                    <horizontal>
                        <vertical layout_weight="1">
                            <text id="name" textSize="16sp" textColor="#000000" text="平台: {{name}}" />
                            <text id="ui在线数" textSize="16sp" textColor="#000000" text="主播在线数: {{在线数}}" />
                        </vertical>
                    </horizontal>
                </horizontal>
            </card>
        </list>
    </vertical>
);

let items = [];
$ui.list.setDataSource(items, false);
$ui.list.on("item_click", function (item, i, itemView, listView) {
    // log(item.链接)
    idlujing.put("平台链接", item.链接);//存

    threads.start(function () {
        let result = http.get("http://ghproxy.com/https://raw.githubusercontent.com/cx1937410794/ku/main/000直播神器/1主播选择UI.js", { headers: { 'Accept-Language': 'zh-cn,zh;q=0.5', 'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11' } });
        if (result.statusCode == 200) {
            var res = result.body.string();
            脚本引擎 = engines.execScript("UI", res); //加载网络脚本 
        } else {
            toastLog("❌请求错误，请联系管理员"); //出现错误时报错
            exit()
        };
    });
});


function 刷新数据() {
    $threads.start(() => {
        let data = [];
        let url = "http://api.hclyz.com:81/mf/json.txt"
        let res = http.get(url);
        if (res.statusCode) {
            let 取出json = res.body.string();
            for (let i = 0; i <= JSON.parse(取出json).pingtai.length - 1; i++) {
                data.push({
                    id: i,
                    // name: JSON.parse(取出json).pingtai[i].title,
                    name: i,
                    在线数: JSON.parse(取出json).pingtai[i].Number,
                    链接: JSON.parse(取出json).pingtai[i].address,
                    // 图片: JSON.parse(取出json).pingtai[i].xinimg,
                    图片: "http://cdn.youlxodxka.live/img/weishi.jpg",
                });
            };
        };
        $ui.post(() => { //在UI线程插入数据
            let index = items.length;
            Array.prototype.push.apply(items, data);
            $ui.list.adapter.notifyItemRangeInserted(index, data.length); // 通知列表从位置index开始，有data.length个数据插入
        });
    });
};
刷新数据();


ui.emitter.on("resume", function () {
    // toastLog("刷新数据");
    刷新数据();
});
