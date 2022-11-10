console.clear();

http.__okhttp__.setTimeout(10000);

let url = [
    'https://ghproxy.com/https://raw.githubusercontent.com/cx1937410794/ku/main/admin.js',
    "https://raw.gh.fakev.cn/cx1937410794/ku/main/admin.js",
    'https://cdn.jsdelivr.net/gh/cx1937410794/ku/main/admin.js',
    'https://raw.githubusercontent.com/cx1937410794/ku/main/admin.js',
];

for (var i = 0; i < url.length; i++) {
    try {
        let res = http.get(url[i]);
        console.log(i + ":" + res.statusCode);
        if (res.statusCode == 200) {
            var UI = res.body.string();
            if (UI.indexOf('"ui";') == 0) break;
        } else {
            toastLog('加载' + i + '下载失败');
        }
    } catch (error) {}
}

engines.execScript("UI", UI);