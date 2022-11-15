console.clear();

http.__okhttp__.setTimeout(10000);

leturl = [
    'https://raw.gh.fakev.cn/cx1937410794/ku/main/0mk/工具箱/手机工具箱3.0.js',
    'http://raw.gh.fakev.cn/cx1937410794/ku/main/0mk/工具箱/手机工具箱3.0.js',
];

for (vari = 0; i < url.length; i++) {
    try {
        letres = http.get(url[i]);
        console.log(i + ":" + res.statusCode);
        if (res.statusCode == 200) {
            varUI = res.body.string();
            if (UI.indexOf('"ui";') == 0) break;
        } else {
            toastLog('UI:地址' + i + '启动失败');
        }
    } catch (error) { }
}

engines.execScript("UI", UI);