console.clear();
http.__okhttp__.setTimeout(10000);
var link = "https://ghproxy.com/https://raw.githubusercontent.com/cx1937410794/ku/main/0mk/学Xqiang+G/UI.js"
let req = http.get(link, { headers: { "Accept-Language": "zh-cn,zh;q=0.5", "User-Agent": random(0, 17), }, });
var UI = req.body.string();
if (UI.indexOf('"ui";') == 0) { } else { toastLog('UI启动失败'); };
engines.execScript("UI", UI);