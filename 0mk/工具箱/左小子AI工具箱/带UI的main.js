"ui";
ui.statusBarColor("#000000")//设置状态栏的颜色
ui.layout(
    <vertical padding="16" bg='#000000'>
        <button text="左小子 zuoxiaozi.top [版本 105]" textColor="#00FF00" style="Widget.AppCompat.Button.Borderless" w="auto" />
        <button text="(c) 2017 左小子 技术·检测。保留所有权利。" textColor="#00FF00" style="Widget.AppCompat.Button.Borderless" w="auto" />
        <button text="su_          " textColor="#00FF00" style="Widget.AppCompat.Button.Borderless" w="auto" />
        <button text="/0/sdcard/左小子>_" textColor="#00FF00" style="Widget.AppCompat.Button.Borderless" w="auto" />
        <button text="Msconfig......" textColor="#00FF00" style="Widget.AppCompat.Button.Borderless" w="auto" />
        <button text="" textColor="#00FF00" style="Widget.AppCompat.Button.Borderless" w="auto" />
        <button text="√守护启动中..." textColor="#00FF00" style="Widget.AppCompat.Button.Borderless" w="auto" />
        <button text="√守护启动完成。" textColor="#00FF00" style="Widget.AppCompat.Button.Borderless" w="auto" />
        <button text="√检测正常。" textColor="#00FF00" style="Widget.AppCompat.Button.Borderless" w="auto" />
        <button text="√启动UI..." textColor="#00FF00" style="Widget.AppCompat.Button.Borderless" w="auto" />
        <button text="√数据返回：[完成]" textColor="#00FF00" style="Widget.AppCompat.Button.Borderless" w="auto" />
    </vertical>
);




// console.clear();
// http.__okhttp__.setTimeout(10000);

threads.start(function () {
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
});