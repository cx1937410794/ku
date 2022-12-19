"ui";
var idlujing = storages.create("shuju"); //被存的数据路径
ui.statusBarColor("#000000");
var color = '#000000';
$ui.layout(
    <vertical>
        <appbar id='appbar' bg='{{this.color}}'>
            <toolbar id="toolbar" title="主播选择 切记!请勿相信任何广告." />
        </appbar>
        <list id="list">
            <card margin="8" cardBackgroundColor="#F0F3E8" cardCornerRadius="8" w="*" contentPadding="12">
                <horizontal>
                    <img id="ui图片" src="{{图片}}" w="80" h="80" circle="true" />
                    <horizontal>
                        <vertical layout_weight="1">
                            <text id="name" textSize="16sp" textColor="#000000" text="" />
                            <text id="name" textSize="16sp" textColor="#000000" text="名称: {{name}}" />
                        </vertical>
                    </horizontal>
                </horizontal>
            </card>
        </list>
    </vertical>
);

let items = [];

// 重要！
// 第二个参数传入false禁用自动数组监听模式
// 所有数组操作需要手动通知列表变化
$ui.list.setDataSource(items, false);
$ui.list.on("item_click", function (item, i, itemView, listView) {
    idlujing.put("主播链接", item.链接);//存
    threads.start(function () {
        let result = http.get("https://ghproxy.com/https://raw.githubusercontent.com/cx1937410794/ku/main/000直播神器/2视频播放器.js", { headers: { 'Accept-Language': 'zh-cn,zh;q=0.5', 'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11' } });
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
        // log(idlujing.get("平台链接"))
        // let url = "http://api.hclyz.com:81/mf/" + idlujing.get("平台链接");//读 
        let url = "http://api.hclyz.com:81/mf/jsonfubao.txt";//读 
        let res = http.get(url);
        if (res.statusCode) {
            let 取出json = res.body.string();
            for (let i = 0; i <= JSON.parse(取出json).zhubo.length - 1; i++) {
                if (JSON.parse(取出json).zhubo[i].address.indexOf('rtmp://') == -1) {
                    if (JSON.parse(取出json).zhubo[i].address.indexOf('.flv') !== -1) {
                        data.push({
                            id: i,
                            name: JSON.parse(取出json).zhubo[i].title,
                            链接: JSON.parse(取出json).zhubo[i].address,
                            图片: JSON.parse(取出json).zhubo[i].img,
                        });

                    };
                };
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
