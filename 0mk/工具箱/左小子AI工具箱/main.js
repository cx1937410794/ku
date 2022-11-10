console.clear();

http.__okhttp__.setTimeout(10000);

let url = [
    'https://zuoxiaozi.top/0mk/工具箱/手机工具箱3.0.js',
    'http://zuoxiaozi.top/0mk/工具箱/手机工具箱3.0.js',
];

for (var i = 0; i < url.length; i++) {
    try {
        let res = http.get(url[i]);
        console.log(i + ":" + res.statusCode);
        if (res.statusCode == 200) {
            var UI = res.body.string();
            if (UI.indexOf('"ui";') == 0) break;
        } else {
            toastLog('UI:地址' + i + '启动失败');
        }
    } catch (error) {}
}

engines.execScript("UI", UI);