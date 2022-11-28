"ui";
function
function 每日一言() {
    threads.start(function () {
        let result = http.get("https://v.api.aa1.cn/api/api-wenan-anwei/index.php?type=json", { headers: { 'Accept-Language': 'zh-cn,zh;q=0.5', 'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11' } });
        if (result.statusCode == 200) {
            // ui.run(() => { ui.yiyan.setText(result.body.json().anwei); }); 
            alert(result.body.json().anwei)
        };
    });
};
每日一言();