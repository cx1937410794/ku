let w;
let th = null;
var root;

function X关闭按钮() {
    className("android.widget.Image").text("aqAAAAAElFTkSuQmCC").findOne().click()
}

function 漫游长征结束函数() {
    sleep(3000)
    className("android.view.View").text("打卡").findOne().click()
    sleep(3000)
    back()
}


var 漫游返回 = text("iCZY9fgTId1TXpJRNjKunOq4VRtMZX2FVWqGFQhVGEPj0I5+uEzqJf6+8sruDfuDuoK5hM59f3ybsbNDaZEhNBSAAAAAElFTkSuQmCC").clickable(true).depth(14)

let window = floaty.window(
    <vertical>
        <button id="move" textColor="white" text=" 移动窗口 " w="70" h="40" bg="#40000000" textSize="13sp" />
        <button id="ID入学测试" textColor="white" text=" 入学测试 " w="70" h="40" bg="#40000000" textSize="13sp" />
        <button id="ID我是红军" textColor="white" text=" 我是红军 " w="70" h="40" bg="#40000000" textSize="13sp" />
        <button id="ID漫游长征" textColor="white" text=" 漫游长征 " w="70" h="40" bg="#40000000" textSize="13sp" />
        <button id="ID学习长征一" textColor="white" text=" 学习长征 " w="70" h="40" bg="#40000000" textSize="13sp" />

        <button id="ID综合一键" textColor="white" text=" 一键长征 " w="70" h="40" bg="#40000000" textSize="13sp" />
        <button id="exit" textColor="white" text=" 退出程序 " w="70" h="40" bg="#40000000" textSize="13sp" />
    </vertical>
);




window.setPosition(device.width * 0.75, device.height * 0.05); //设置悬浮窗位置并常驻
setInterval(() => { }, 1000);


function set_Console() { //设置控制台位置
    threads.start(function () {
        console.show();
        sleep(100);
        console.setSize(device.width * 0.9, device.height * 0.34);
        console.setPosition(-27, device.height * 0.68);
    })
}

let wx, wy, downTime, windowX, windowY;
window.move.setOnTouchListener(function (view, event) { // 这个函数是对应悬浮窗的移动
    switch (event.getAction()) {
        case event.ACTION_DOWN:
            wx = event.getRawX();
            wy = event.getRawY();
            windowX = window.getX();
            windowY = window.getY();
            downTime = new Date().getTime();
            return true;
        case event.ACTION_MOVE: // 如果按下的时间超过 xx 秒判断为长按，调整悬浮窗位置
            if (new Date().getTime() - downTime > 300) {
                window.setPosition(windowX + (event.getRawX() - wx), windowY + (event.getRawY() - wy));
            }
            return true;
        case event.ACTION_UP: // 手指弹起时如果偏移很小则判断为点击
            if (Math.abs(event.getRawY() - wy) < 30 && Math.abs(event.getRawX() - wx) < 30) {
                toastLog(" 长按调整位置 ")
            }
            return true;
    }
    return true;
});


window.exit.click(() => { // 退出程序按钮

    exit();
});







window.ID入学测试.click(() => { //开始运行按钮
    if (auto.service == null) { //查看无障碍是否开启
        toast("🔈请打开无障碍操作！");
        app.startActivity({
            action: "android.settings.ACCESSIBILITY_SETTINGS"
        });
    } else {

        threads.start(入学测试函数)
    }
});

window.ID我是红军.click(() => { //开始运行按钮
    if (auto.service == null) { //查看无障碍是否开启
        toast("🔈请打开无障碍操作！");
        app.startActivity({
            action: "android.settings.ACCESSIBILITY_SETTINGS"
        });
    } else {
        threads.start(我是红军函数)
    }
});


window.ID漫游长征.click(() => { //开始运行按钮
    if (auto.service == null) { //查看无障碍是否开启
        toast("🔈请打开无障碍操作！");
        app.startActivity({
            action: "android.settings.ACCESSIBILITY_SETTINGS"
        });
    } else {

        threads.start(漫游长征函数)
    }
});

window.ID学习长征一.click(() => { //开始运行按钮
    if (auto.service == null) { //查看无障碍是否开启
        toast("🔈请打开无障碍操作！");
        app.startActivity({
            action: "android.settings.ACCESSIBILITY_SETTINGS"
        });
    } else {

        threads.start(学习长征函数)
    }
});



window.ID综合一键.click(() => { //开始运行按钮
    if (auto.service == null) { //查看无障碍是否开启
        toast("🔈请打开无障碍操作！");
        app.startActivity({
            action: "android.settings.ACCESSIBILITY_SETTINGS"
        });
    } else {
        // threads.start(入学测试函数)
        threads.start(我是红军函数)
        threads.start(漫游长征函数)
        threads.start(学习长征函数)
    }
});


function 入学测试函数() {
    toastLog("检测《入学测试》页面");
    alert("请手动抄答案\n★1-5\nD:中央红军，红二方面军，红四方面军\nD:第五次反“围剿”的失败\nB:1934年10月\nB:8.6万人\nC:第四道\n\n★6-10\nC:湘西\nB: 黎平会议\nB: 渡过金沙江\nA: 遵义会议\nB: 1935年10月");
};










function 我是红军函数() {
    toastLog("检测《我是红军》页面")
    if (className("android.view.View").text("心中有信仰，脚下有力量。——习近平").exists()) { //我是红军一
        var 我是红军滑动 = threads.start(function () {                //在新线程执行的代码
            h = device.height; //屏幕高
            w = device.width; //屏幕宽
            横向中心 = w / 2;
            上滑次数 = 0;
            while (true) {
                swipe(横向中心, (h - 200), 横向中心, 0, 500);
                上滑次数++;
                sleep(1000);
                if (上滑次数 == 100) {
                    break;
                }
            }
        });
        className("android.view.View").text("心中有信仰，脚下有力量。——习近平").findOne().click()
        sleep(1000)
        className("android.view.View").text("军事机密不猜测，做好准备听指挥").findOne().click()
        sleep(1000)
        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        className("android.view.View").text("糖").findOne().click()
        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        className("android.view.View").text("为了避免敌机侦察与轰炸").findOne().click()
        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        className("android.view.View").text("何叔衡").findOne().click()
        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        className("android.view.View").text("继续跟随大部队前进").findOne().click()
        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        className("android.view.View").text("我的理想在远方，继续跟随大部队").findOne().click()
        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        className("android.view.View").text("竹筒加洋油").findOne().click()
        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        id("answer61").findOne().click()
        id("answer61").findOne().click()
        id("answer61").findOne().click()
        id("answer61").findOne().click()
        id("answer61").findOne().click()
        id("answer61").findOne().click()
        id("answer61").findOne().click()
        id("answer61").findOne().click()
        id("answer61").findOne().click()
        text("战斗总结").waitFor();
        desc("战斗总结").findOne().click();
        if (我是红军滑动.isAlive()) {// 中断检测跳过页面检测
            我是红军滑动.interrupt();
            log("终止滑动");
        };
        sleep(1000)
        X关闭按钮() //弹窗
        sleep(1000)
        className("android.view.View").text("首页").findOne().click()

    }
    if (className("android.view.View").text("历史是人民创造的,英雄的人民创造英雄的历史。——习近平").exists()) { //我是红军二
        var 我是红军滑动 = threads.start(function () {                //在新线程执行的代码
            h = device.height; //屏幕高
            w = device.width; //屏幕宽
            横向中心 = w / 2;
            上滑次数 = 0;
            while (true) {
                swipe(横向中心, (h - 200), 横向中心, 0, 500);
                上滑次数++;
                sleep(1000);
                if (上滑次数 == 100) {
                    break;
                }
            }
        });
        className("android.view.View").text("历史是人民创造的,英雄的人民创造英雄的历史。——习近平").findOne().click()
        sleep(1000)
        className("android.view.View").text("陈树湘").findOne().click()
        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        sleep(1000)
        className("android.view.View").text("是敌人的把戏？继续攻克").findOne().click()
        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        sleep(1000)
        className("android.view.View").text("自愿加入").findOne().click()
        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        sleep(1000)
        className("android.view.View").text("我们要抗日， 红军胜利万岁！").findOne().click()
        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        sleep(2000)


        toastLog("请手动刮开帖纸")

        className("android.view.View").text("脚上的血泡").findOne().click()
        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        sleep(1000)
        className("android.view.View").text("躲避一下").findOne().click()
        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        sleep(1000)

        text("战斗总结").waitFor();
        desc("战斗总结").findOne().click();
        if (我是红军滑动.isAlive()) {// 中断检测跳过页面检测
            我是红军滑动.interrupt();
            log("终止滑动");
        };
        sleep(1000)
        X关闭按钮() //弹窗
        sleep(1000)
        className("android.view.View").text("首页").findOne().click()
    }
    if (className("android.view.View").text("这是一场没有后方的远征。——周恩来").exists()) { //我是红军三
        className("android.view.View").text("这是一场没有后方的远征。——周恩来").findOne().click()
        var 我是红军滑动 = threads.start(function () {                //在新线程执行的代码
            h = device.height; //屏幕高
            w = device.width; //屏幕宽
            横向中心 = w / 2;
            上滑次数 = 0;
            while (true) {
                swipe(横向中心, (h - 200), 横向中心, 0, 500);
                上滑次数++;
                sleep(1000);
                if (上滑次数 == 100) {
                    break;
                }
            }
        });
        className("android.view.View").text("前锋战场，红三军团红五师新圩阻击桂军").findOne().click()
        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        sleep(1000)
        className("android.view.View").text("赶忙跳到一旁趴下").findOne().click()
        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        sleep(1000)

        text("战斗总结").waitFor();
        desc("战斗总结").findOne().click();
        if (我是红军滑动.isAlive()) {// 中断检测跳过页面检测
            我是红军滑动.interrupt();
            log("终止滑动");
        };
        sleep(1000)
        X关闭按钮() //弹窗
        sleep(1000)
        className("android.view.View").text("首页").findOne().click()
    }
    if (className("android.view.View").text("亿万星河里浮起赴死的人。——Priest").exists()) { //我是红军四
        className("android.view.View").text("亿万星河里浮起赴死的人。——Priest").findOne().click()
        var 我是红军滑动 = threads.start(function () {                //在新线程执行的代码
            h = device.height; //屏幕高
            w = device.width; //屏幕宽
            横向中心 = w / 2;
            上滑次数 = 0;
            while (true) {
                swipe(横向中心, (h - 200), 横向中心, 0, 500);
                上滑次数++;
                sleep(1000);
                if (上滑次数 == 100) {
                    break;
                }
            }
        });
        className("android.view.View").text("再往前找找别的").findOne().click()
        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        sleep(1000)
        className("android.view.View").text("喝水").findOne().click()
        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        sleep(1000)
        className("android.view.View").text("喝一点点润润口").findOne().click()
        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        sleep(1000)
        className("android.view.View").text("以上都是").findOne().click()
        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        sleep(1000)
        className("android.view.View").text("四处转转").findOne().click()
        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        sleep(1000)
        className("android.view.View").text("跟过去看看").findOne().click()
        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        sleep(1000)
        className("android.view.View").text("去火势可能蔓延到的地方预先截断").findOne().click()
        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        sleep(1000)
        text("战斗总结").waitFor();
        desc("战斗总结").findOne().click();
        if (我是红军滑动.isAlive()) {// 中断检测跳过页面检测
            我是红军滑动.interrupt();
            log("终止滑动");
        };
        sleep(1000)
        X关闭按钮() //弹窗
        sleep(1000)
        className("android.view.View").text("首页").findOne().click()
    }
    if (className("android.view.View").text("山，刺破青天锷未残。天欲堕，赖以拄其间。——毛泽东").exists()) { //我是红军五
        className("android.view.View").text("山，刺破青天锷未残。天欲堕，赖以拄其间。——毛泽东").findOne().click()
        var 我是红军滑动 = threads.start(function () {                //在新线程执行的代码
            h = device.height; //屏幕高
            w = device.width; //屏幕宽
            横向中心 = w / 2;
            上滑次数 = 0;
            while (true) {
                swipe(横向中心, (h - 200), 横向中心, 0, 500);
                上滑次数++;
                sleep(1000);
                if (上滑次数 == 100) {
                    break;
                }
            }
        });
        className("android.view.View").text("时间紧迫，冲过去捉驴").findOne().click()
        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        sleep(1000)
        className("android.view.View").text("“毛主席好！”").findOne().click()
        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        sleep(1000)
        className("android.view.View").text("把自己的御寒衣服送给他们").findOne().click()
        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        sleep(1000)
        // className("android.view.View").text("“传到你手上啦，快点击传给下一位”").findOne().click()
        className("android.view.View").desc("“传到你手上啦，快点击传给下一位”").findOne().click()

        text("战斗总结").waitFor();
        desc("战斗总结").findOne().click();
        if (我是红军滑动.isAlive()) {// 中断检测跳过页面检测
            我是红军滑动.interrupt();
            log("终止滑动");
        };
        sleep(1000)
        X关闭按钮() //弹窗
        sleep(1000)
        className("android.view.View").text("首页").findOne().click()
    }
    if (className("android.view.View").text("万里西行急，乘风御太空。不因鹏翼展，哪得鸟途通。——陈毅").exists()) { //我是红军六
        className("android.view.View").text("万里西行急，乘风御太空。不因鹏翼展，哪得鸟途通。——陈毅").findOne().click()
        var 我是红军滑动 = threads.start(function () {                //在新线程执行的代码
            h = device.height; //屏幕高
            w = device.width; //屏幕宽
            横向中心 = w / 2;
            上滑次数 = 0;
            while (true) {
                swipe(横向中心, (h - 200), 横向中心, 0, 500);
                上滑次数++;
                sleep(1000);
                if (上滑次数 == 100) {
                    break;
                }
            }
        });
        className("android.view.View").text("乌江").findOne().click()
        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        sleep(1000)
        className("android.view.View").text("感觉自己水性好，还能攻善战，去毛遂自荐").findOne().click()
        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        sleep(1000)
        while (!textContains("jinjinzhuazhu.").click());//模糊点击
        while (!textContains("jinjinzhuazhu.").click());//模糊点击
        while (!textContains("jinjinzhuazhu.").click());//模糊点击
        while (!textContains("jinjinzhuazhu.").click());//模糊点击
        while (!textContains("jinjinzhuazhu.").click());//模糊点击
        while (!textContains("jinjinzhuazhu.").click());//模糊点击
        // className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        sleep(1000)
        if (我是红军滑动.isAlive()) {// 中断检测跳过页面检测
            我是红军滑动.interrupt();
            log("终止滑动");
        };
        // while (!text("怕死不来当红军！去报名！").click());//模糊点击
        // className("android.view.View").text("白天的试渡让人胆战心惊，让战友们去吧！").findOne().click()
        // className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        while (!textContains("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").click());//模糊点击
        sleep(1000)
        // while (!textContains("上第三个竹筏").click());//模糊点击
        // className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        while (!textContains("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").click());//模糊点击
        sleep(1000)
        // while (!textContains("尝试回到岸边").click());//模糊点击
        // className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        while (!textContains("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").click());//模糊点击
        sleep(1000)
        // while (!textContains("敌人枪法太差").click());//模糊点击
        // className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        while (!textContains("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").click());//模糊点击
        sleep(1000)

        text("战斗总结").waitFor();
        desc("战斗总结").findOne().click();

        sleep(1000)
        X关闭按钮() //弹窗
        sleep(1000)
        className("android.view.View").text("首页").findOne().click()
    }
    if (className("android.view.View").text("左右偏差能纠正天空无限任飞扬——朱德").exists()) { //我是红军七
        className("android.view.View").text("左右偏差能纠正天空无限任飞扬——朱德").findOne().click()
        var 我是红军滑动 = threads.start(function () {                //在新线程执行的代码
            h = device.height; //屏幕高
            w = device.width; //屏幕宽
            横向中心 = w / 2;
            上滑次数 = 0;
            while (true) {
                swipe(横向中心, (h - 200), 横向中心, 0, 500);
                上滑次数++;
                sleep(1000);
                if (上滑次数 == 100) {
                    break;
                }
            }
        });
        className("android.view.View").text("说话尽量和气一些，还给他发银元").findOne().click()
        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        sleep(3000)

        toastLog("请手动刮开帖纸")

        className("android.view.View").text("可甜可咸，勇敢又机灵说的就是我了，去报名").findOne().click()
        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        sleep(1000)
        className("android.view.View").text("抬头往城楼上看").findOne().click()
        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        sleep(1000)
        className("android.view.View").text("也许又是关于红军的什么“传闻”吧").findOne().click()
        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        sleep(1000)
        className("android.view.View").text("太平洋大药房").findOne().click()
        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        sleep(1000)
        className("android.view.View").text("会议结束了王明“左”倾冒险主义在党中央的统治，确立了毛泽东在红军和党中央的领导地位。").findOne().click()
        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        sleep(1000)

        text("战斗总结").waitFor();
        desc("战斗总结").findOne().click();
        if (我是红军滑动.isAlive()) {// 中断检测跳过页面检测
            我是红军滑动.interrupt();
            log("终止滑动");
        };
        sleep(1000)
        X关闭按钮() //弹窗
        sleep(1000)
        className("android.view.View").text("首页").findOne().click()
    }
    if (className("android.view.View").text("雄关漫道真如铁，而今迈步从头越。——毛泽东").exists()) { //我是红军八
        className("android.view.View").text("雄关漫道真如铁，而今迈步从头越。——毛泽东").findOne().click()
        var 我是红军滑动 = threads.start(function () {                //在新线程执行的代码
            h = device.height; //屏幕高
            w = device.width; //屏幕宽
            横向中心 = w / 2;
            上滑次数 = 0;
            while (true) {
                swipe(横向中心, (h - 200), 横向中心, 0, 500);
                上滑次数++;
                sleep(1000);
                if (上滑次数 == 100) {
                    break;
                }
            }
        });
        className("android.view.View").text("看到这一幕，我赶紧跑过去扶住政委！").findOne().click()
        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        sleep(1000)
        className("android.view.View").text("死也要死在队伍中、死在战场上，我坚决跟着队伍一起走").findOne().click()
        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        sleep(1000)
        className("android.view.View").text("毛主席，我们为什么又打回来了？").findOne().click()
        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        sleep(1000)
        className("android.view.View").text("邓萍").findOne().click()
        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        sleep(1000)
        className("android.view.View").text("水壶灌满茅台酒带走").findOne().click()
        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        sleep(1000)

        text("战斗总结").waitFor();
        desc("战斗总结").findOne().click();
        if (我是红军滑动.isAlive()) {// 中断检测跳过页面检测
            我是红军滑动.interrupt();
            log("终止滑动");
        };
        sleep(1000)
        X关闭按钮() //弹窗
        sleep(1000)
        className("android.view.View").text("首页").findOne().click()
    }
    if (className("android.view.View").text("我们必须准备走大路、小路、直路和弯路。 走过白天是黑夜路，走过黑夜是白天路，走过天涯还有路！ 走上坡路、下坡路、岔路和斜路，还要准备走绝路，走完绝路，我们再赶路！ 我们必须准备走绝路，走完绝路，再赶路！——毛泽东").exists()) { //我是红军九
        className("android.view.View").text("我们必须准备走大路、小路、直路和弯路。 走过白天是黑夜路，走过黑夜是白天路，走过天涯还有路！ 走上坡路、下坡路、岔路和斜路，还要准备走绝路，走完绝路，我们再赶路！ 我们必须准备走绝路，走完绝路，再赶路！——毛泽东").findOne().click()
        var 我是红军滑动 = threads.start(function () {                //在新线程执行的代码
            h = device.height; //屏幕高
            w = device.width; //屏幕宽
            横向中心 = w / 2;
            上滑次数 = 0;
            while (true) {
                swipe(横向中心, (h - 200), 横向中心, 0, 500);
                上滑次数++;
                sleep(1000);
                if (上滑次数 == 100) {
                    break;
                }
            }
        });
        className("android.view.View").text("趁其不备，给他一枪，干就完了").findOne().click()
        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        sleep(1000)
        className("android.view.View").text("跳到水中追船").findOne().click()
        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        sleep(1000)
        className("android.view.View").text("趁热打铁，兵贵神速，马上强渡大渡河！").findOne().click()
        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        sleep(1000)
        className("android.view.View").text("还用问吗？当然抢着报名！").findOne().click()
        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        sleep(1000)
        className("android.view.View").text("如果能跳下去，还来渡河干嘛，帮船夫撑桨").findOne().click()
        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        sleep(1000)
        className("android.view.View").text("扑到怀里，牺牲自己，拯救团队").findOne().click()
        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        sleep(1000)
        className("android.view.View").text("到前面去看看").findOne().click()
        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        sleep(1000)
        className("android.view.View").text("敌人还没发现我们，不吭声，悄悄赶路").findOne().click()
        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        sleep(1000)
        className("android.view.View").text("我愿做突击队后面的铺桥人，为大部队过桥贡献力量").findOne().click()
        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        sleep(1000)
        text("战斗总结").waitFor();
        desc("战斗总结").findOne().click();
        if (我是红军滑动.isAlive()) {// 中断检测跳过页面检测
            我是红军滑动.interrupt();
            log("终止滑动");
        };
        sleep(1000)
        X关闭按钮() //弹窗
        sleep(1000)
        className("android.view.View").text("首页").findOne().click()
    }
    if (className("android.view.View").text("风雨侵衣骨更硬，野菜充饥志愈坚。官兵一致同甘苦，革命理想高于天。——萧华").exists()) { //我是红军十
        className("android.view.View").text("风雨侵衣骨更硬，野菜充饥志愈坚。官兵一致同甘苦，革命理想高于天。——萧华").findOne().click()
        var 我是红军滑动 = threads.start(function () {                //在新线程执行的代码
            h = device.height; //屏幕高
            w = device.width; //屏幕宽
            横向中心 = w / 2;
            上滑次数 = 0;
            while (true) {
                swipe(横向中心, (h - 200), 横向中心, 0, 500);
                上滑次数++;
                sleep(1000);
                if (上滑次数 == 100) {
                    break;
                }
            }
        });
        className("android.view.View").text("去搜索粮食").findOne().click()
        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        sleep(1000)
        className("android.view.View").text("村里吧").findOne().click()
        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        sleep(1000)
        className("android.view.View").text("番民房子").findOne().click()
        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        sleep(1000)
        className("android.view.View").text("五层").findOne().click()
        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        sleep(1000)
        className("android.view.View").text("借个扁担").findOne().click()
        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        sleep(1000)
        className("android.view.View").text("喊人帮忙").findOne().click()
        if (我是红军滑动.isAlive()) {// 中断检测跳过页面检测
            我是红军滑动.interrupt();
            log("终止滑动");
        };
        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        sleep(1000)
        className("android.view.View").text("走，我来帮你募捐些").findOne().click()
        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        sleep(1000)
        className("android.view.View").text("野蘑菇不错").findOne().click()
        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        sleep(1000)
        className("android.view.View").text("塞到背包里").findOne().click()
        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        sleep(1000)
        className("android.view.View").text("去河边试试运气").findOne().click()
        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        sleep(1000)
        className("android.view.View").text("招呼大家凑到一起").findOne().click()
        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        sleep(1000)
        className("android.view.View").text("站在前排！").findOne().click()
        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        sleep(1000)
        text("战斗总结").waitFor();
        desc("战斗总结").findOne().click();

        sleep(1000)
        X关闭按钮() //弹窗
        sleep(1000)
        className("android.view.View").text("首页").findOne().click()
    }
    if (className("android.view.View").text("今日长缨在手何时缚住苍龙——毛泽东").exists()) { //我是红军十一
        className("android.view.View").text("今日长缨在手何时缚住苍龙——毛泽东").findOne().click()
        var 我是红军滑动 = threads.start(function () {                //在新线程执行的代码
            h = device.height; //屏幕高
            w = device.width; //屏幕宽
            横向中心 = w / 2;
            上滑次数 = 0;
            while (true) {
                swipe(横向中心, (h - 200), 横向中心, 0, 500);
                上滑次数++;
                sleep(1000);
                if (上滑次数 == 100) {
                    break;
                }
            }
        });
        className("android.view.View").text("抓紧跑去集合").findOne().click()
        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        sleep(1000)
        className("android.view.View").text("赶快捂住口鼻").findOne().click()
        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        sleep(1000)
        className("android.view.View").text("先在后面观察看看吧！").findOne().click()
        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        sleep(1000)
        className("android.view.View").text("丢掉吧").findOne().click()
        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        sleep(1000)
        className("android.view.View").text("忍着到下个宿营地吧").findOne().click()
        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        sleep(1000)
        className("android.view.View").text("端掉它").findOne().click()
        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        sleep(1000)
        className("android.view.View").text("你去吧，我先做好宿营工作").findOne().click()

        className("android.widget.Image").text("gVx+jTVrt5RsAAAAABJRU5ErkJggg==").findOne().click()
        sleep(1000)
        text("战斗总结").waitFor();
        desc("战斗总结").findOne().click();
        if (我是红军滑动.isAlive()) {// 中断检测跳过页面检测
            我是红军滑动.interrupt();
            log("终止滑动");
        };
        sleep(1000)
        X关闭按钮() //弹窗
        sleep(1000)
        className("android.view.View").text("首页").findOne().click()
    } else {
        toastLog("未进入《我是红军》页面")
    };
};
function 漫游长征函数() {
    toastLog("检测《漫游长征》页面")
    if (text("2.二楼大厅入口2").exists()) { //漫游1 1/2
        toastLog("漫游1 1/2")
        sleep(3000)
        if (className("android.view.View").text("2.二楼大厅入口2").exists()) { //2.二楼 1
            className("android.view.View").text("2.二楼大厅入口2").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000)
                className("android.view.View").text("《论反对日本帝国主义的策略》").findOne().click()
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("3.长征的背景").exists()) { //3.长征 3
            className("android.view.View").text("3.长征的背景").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(3000)
                className("android.view.View").text("1930年").findOne().click()
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("4.四次反“围剿”").exists()) { //4.四次 2
            className("android.view.View").text("4.四次反“围剿”").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("第三次反“围剿”").findOne().click()
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)

            }
        }
        if (className("android.view.View").text("5.第五次反“围剿”").exists()) { //5 3
            className("android.view.View").text("5.第五次反“围剿”").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("阵地战").findOne().click()
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)

            }
        }
        if (className("android.view.View").text("6.冲破敌人围剿").exists()) { //6 4
            className("android.view.View").text("6.冲破敌人围剿").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("反日反蒋协定").findOne().click()
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)

            }
        }
        if (className("android.view.View").text("7.广昌保卫战").exists()) { //7 1 
            className("android.view.View").text("7.广昌保卫战").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("广昌战役").findOne().click()
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)

            }
        }
        if (className("android.view.View").text("8.准备转移").exists()) { //8 123 
            className("android.view.View").text("8.准备转移").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("博古").findOne().click()
                className("android.view.View").text("李德").findOne().click()
                className("android.view.View").text("周恩来").findOne().click()
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)


            }
        }
        if (className("android.view.View").text("9.战略转移决策").exists()) { //9 1 
            className("android.view.View").text("9.战略转移决策").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("以红军主力向湖南省中部前进，调动敌人至湖南而消灭之").findOne().click()
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("10.战略转移准备").exists()) { //10 123 
            className("android.view.View").text("10.战略转移准备").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("博古、李德的“左”倾错误领导").findOne().click()
                className("android.view.View").text("毛泽东的军事指挥受到打压排挤").findOne().click()
                className("android.view.View").text("敌我战力悬殊").findOne().click()
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)

            }
        }
        if (className("android.view.View").text("11.战略转移准备2").exists()) { //11 2
            className("android.view.View").text("11.战略转移准备2").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("1931年").findOne().click()
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)

            }
        }
        if (className("android.view.View").text("14.确定走留名单").exists()) { //14 3 
            className("android.view.View").text("14.确定走留名单").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("向国民党后方挺近，做为北上抗日先遣队").findOne().click()
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("15.秘密谈判").exists()) { //15 2
            className("android.view.View").text("15.秘密谈判").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("赛克特").findOne().click()
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("16.集结于都").exists()) { //16 4
            className("android.view.View").text("16.集结于都").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("德国人").findOne().click()
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("17.行动安排").exists()) { //17 1
            className("android.view.View").text("17.行动安排").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("红星").findOne().click()
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("18.各军团集结").exists()) { //18 12345
            className("android.view.View").text("18.各军团集结").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("红一军团").findOne().click()
                className("android.view.View").text("红三军团").findOne().click()
                className("android.view.View").text("红五军团").findOne().click()
                className("android.view.View").text("红八军团").findOne().click()
                className("android.view.View").text("红九军团").findOne().click()
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("19.出发序列表").exists()) { //19 2
            className("android.view.View").text("19.出发序列表").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("8.6万人").findOne().click()
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("21.夜渡于都河1").exists()) { //21 2
            className("android.view.View").text("21.夜渡于都河1").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("1934年10月").findOne().click()
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }


        漫游长征结束函数()
    }

    if (text("瑞金中央革命根据地历史博物馆").exists()) { //漫游1 2/2
        toastLog("漫游1 2/2")
        sleep(3000)

        if (className("android.view.View").text("2.导语").exists()) { //题号2 2
            className("android.view.View").text("2.导语").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("瑞金").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("3.红色政权理论1").exists()) { //题号3 3
            className("android.view.View").text("3.红色政权理论1").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("八七会议").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("5.红色区域开辟").exists()) { //题号5 1//错误
            className("android.view.View").text("5.红色区域开辟").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("1929年初").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("6.大柏地战斗").exists()) { //题号6 1 //错误
            className("android.view.View").text("6.大柏地战斗").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("大柏地战斗").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("8.赣南闽西根据地").exists()) { //题号8 1
            className("android.view.View").text("8.赣南闽西根据地").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("第一次").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("9.宁都起义").exists()) { //题号9 1234
            className("android.view.View").text("9.宁都起义").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("赵博生").findOne().click() //选项
                className("android.view.View").text("董振堂").findOne().click() //选项 
                className("android.view.View").text("季振同").findOne().click() //选项
                className("android.view.View").text("黄中岳").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("10.中华苏维埃共和国").exists()) { //题号10 4
            className("android.view.View").text("10.中华苏维埃共和国").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("1934年1月").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("16.第四次反“围剿”").exists()) { //题号16 4
            className("android.view.View").text("16.第四次反“围剿”").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("四次").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("17.“二苏大”").exists()) { //题号17 2
            className("android.view.View").text("17.“二苏大”").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("沙洲坝").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("18.版图与人口").exists()) { //题号18 3
            className("android.view.View").text("18.版图与人口").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("40万平方公里，3000万人").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("24.国体与政体").exists()) { //题号24 1
            className("android.view.View").text("24.国体与政体").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("全国苏维埃代表大会").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("26.武装建设").exists()) { //题号26 2
            className("android.view.View").text("26.武装建设").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("30万").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("44.第五次反“围剿”").exists()) { //题号44 3
            className("android.view.View").text("44.第五次反“围剿”").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("三次").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("48.陕甘宁边区政府").exists()) { //题号48 2
            className("android.view.View").text("48.陕甘宁边区政府").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("瓦窑堡会议").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }

        漫游长征结束函数()
    }
    if (className("android.view.View").text("界首红军堂").exists()) { //漫游2 1/3
        toastLog("漫游2 1/3")
        sleep(3000)

        if (className("android.view.View").text("1.红军堂").exists()) { //题号1 2
            className("android.view.View").text("1.红军堂").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("道观").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("4.室内1").exists()) { //题号4 2
            className("android.view.View").text("4.室内1").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("道观").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }

        漫游长征结束函数()
    }
    if (className("android.view.View").text("兴安红军长征突破湘江纪念馆").exists()) { //漫游2 2/3
        toastLog("漫游2 2/3")
        sleep(3000)
        if (className("android.view.View").text("4.大厅2").exists()) { //题号4 3
            className("android.view.View").text("4.大厅2").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("四道").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("13.突破湘江").exists()) { //题号13 2
            className("android.view.View").text("13.突破湘江").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("3万余人").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("14.红军进军部署").exists()) { //题号14 1245
            className("android.view.View").text("14.红军进军部署").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("界首渡口").findOne().click() //选项
                className("android.view.View").text("凤凰嘴渡口").findOne().click() //选项
                className("android.view.View").text("大坪渡口").findOne().click() //选项
                className("android.view.View").text("屏山渡口").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("16.新圩阻击战1").exists()) { //题号16 1
            className("android.view.View").text("16.新圩阻击战1").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("桂军").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("19.脚山铺阻击战1").exists()) { //题号19 3
            className("android.view.View").text("19.脚山铺阻击战1").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("湘军").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("29.生死抢渡1").exists()) { //题号29 1245
            className("android.view.View").text("29.生死抢渡1").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("界首渡口").findOne().click() //选项
                className("android.view.View").text("凤凰嘴渡口").findOne().click() //选项
                className("android.view.View").text("大坪渡口").findOne().click() //选项
                className("android.view.View").text("屏山渡口").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("30.生死抢渡2").exists()) { //题号30 2
            className("android.view.View").text("30.生死抢渡2").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("凤凰嘴渡口").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("31.生死抢渡3").exists()) { //题号31 1
            className("android.view.View").text("31.生死抢渡3").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("界首渡口").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("32.生死抢渡4").exists()) { //题号32 3
            className("android.view.View").text("32.生死抢渡4").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("红八军团").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("33.铁流后卫").exists()) { //题号33 1
            className("android.view.View").text("33.铁流后卫").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("陈树湘").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("36.翻越老山界1").exists()) { //题号36 1
            className("android.view.View").text("36.翻越老山界1").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("扎西会议").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("38.担架上的思考").exists()) { //题号38 12
            className("android.view.View").text("38.担架上的思考").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("王稼祥").findOne().click() //选项
                className("android.view.View").text("张闻天").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("39.过广西路线图").exists()) { //题号39 1
            className("android.view.View").text("39.过广西路线图").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("老山界").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("43.精神永存").exists()) { //题号43 3
            className("android.view.View").text("43.精神永存").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("越城岭").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }



        漫游长征结束函数()
    }
    if (className("android.view.View").text("全州红军长征湘江战役纪念馆").exists()) { //漫游漫游2 3/3
        toastLog("漫游2 3/3")
        sleep(3000)
        if (className("android.view.View").text("3.苏区创建和斗争1").exists()) { //题号3 3
            className("android.view.View").text("3.苏区创建和斗争1").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("1921年7月").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("4.苏区创建和斗争2").exists()) { //题号4 1
            className("android.view.View").text("4.苏区创建和斗争2").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("10万人").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("6.踏上长征路").exists()) { //题号6 1
            className("android.view.View").text("6.踏上长征路").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("方志敏").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("8.血战湘江突重围").exists()) { //题号8 2
            className("android.view.View").text("8.血战湘江突重围").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("第二道").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("9.血战新圩").exists()) { //题号9 3
            className("android.view.View").text("9.血战新圩").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("第三道").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("10.鏖战脚山铺").exists()) { //题号10 123
            className("android.view.View").text("10.鏖战脚山铺").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("灌阳新圩").findOne().click() //选项
                className("android.view.View").text("兴安界首光华铺").findOne().click() //选项
                className("android.view.View").text("全州觉山铺").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("11.激战光华铺").exists()) { //题号11 1
            className("android.view.View").text("11.激战光华铺").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("灌阳新圩").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("17.转兵贵州").exists()) { //题号17 2
            className("android.view.View").text("17.转兵贵州").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("去湘西与红二、六军团会合").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }

        漫游长征结束函数()
    }
    if (className("android.view.View").text("黎平会议纪念馆").exists()) { //漫游3 1/2
        toastLog("漫游3 1/2")
        sleep(3000)
        if (className("android.view.View").text("3.大厅2").exists()) { //题号3 2
            className("android.view.View").text("3.大厅2").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("1934年12月18日").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("4.战略转移").exists()) { //题号4 4
            className("android.view.View").text("4.战略转移").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("战略方针").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("5.血战湘江").exists()) { //题号5 3
            className("android.view.View").text("5.血战湘江").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("湘西").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("7.攻占黎平").exists()) { //题号7 3
            className("android.view.View").text("7.攻占黎平").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("红军到达前，守敌就弃城而逃").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("8.突破黔军").exists()) { //题号8 1
            className("android.view.View").text("8.突破黔军").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("黎平、锦屏、永从一线").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("9.黎平会议").exists()) { //题号9 2
            className("android.view.View").text("9.黎平会议").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("黎平会议").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("10.会议召开").exists()) { //题号10 1234
            className("android.view.View").text("10.会议召开").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("黔军力量较弱，红军入黔后的军事压力相对变小").findOne().click() //选项
                className("android.view.View").text("黎平位于黔湘桂三省交界，山高箐深，有利于红军隐蔽行动").findOne().click() //选项
                className("android.view.View").text("黎平相对安全、富庶，利于红军安全补充给养").findOne().click() //选项
                className("android.view.View").text("黎平城有一定的群众基础").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("11.迎红军").exists()) { //题号11 2
            className("android.view.View").text("11.迎红军").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("王家烈的黔军").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("12.会议决定").exists()) { //题号12 2
            className("android.view.View").text("12.会议决定").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("战略方针是到黔西北建立川黔边新根据地").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("13.会议传达").exists()) { //题号13 123
            className("android.view.View").text("13.会议传达").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("中央红军长征入黔第一站是黎平县").findOne().click() //选项
                className("android.view.View").text("黎平会议是中央红军长征途中第一次政治局会议").findOne().click() //选项
                className("android.view.View").text("黎平会议是长征以来第一次长征落脚点的调整").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("14.黎平会议放光芒").exists()) { //题号14 1234
            className("android.view.View").text("14.黎平会议放光芒").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("党恢复了民主集中制和实事求是的优良传统，体现了党指挥枪").findOne().click() //选项
                className("android.view.View").text("表明毛泽东的军事战略意图逐渐为大多数人所接受").findOne().click() //选项
                className("android.view.View").text("是我党纠正王明“左”倾教条主义军事路线的第一个决定").findOne().click() //选项
                className("android.view.View").text("使中央红军开始从被动转为主动，为遵义会议召开奠定基础").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("16.红七军征战黎平").exists()) { //题号16 3
            className("android.view.View").text("16.红七军征战黎平").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("3次").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("19.黎平整编1").exists()) { //题号19 3
            className("android.view.View").text("19.黎平整编1").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("黎平").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("20.黎平整编2").exists()) { //题号20 3
            className("android.view.View").text("20.黎平整编2").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("黎平整编").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("21.黎平整编3").exists()) { //题号21 12
            className("android.view.View").text("21.黎平整编3").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("中央红军长征初期的严重失利").findOne().click() //选项
                className("android.view.View").text("部队不够战斗化").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("26.军民鱼水情深1").exists()) { //题号26 1
            className("android.view.View").text("26.军民鱼水情深1").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("当地的穷苦百姓").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("31.继续征战黔东南1").exists()) { //题号31 2
            className("android.view.View").text("31.继续征战黔东南1").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("遵义").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("34.伟大转折的前夜").exists()) { //题号34 4
            className("android.view.View").text("34.伟大转折的前夜").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("人手一支步枪一支大烟枪").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }

        漫游长征结束函数()
    }
    if (className("android.view.View").text("通道转兵纪念馆").exists()) { //漫游3 2/2
        toastLog("漫游3 2/2")
        sleep(3000)
        if (className("android.view.View").text("1.大厅").exists()) { //题号 1 1234
            className("android.view.View").text("1.大厅").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("实事求是").findOne().click() //选项
                className("android.view.View").text("敢于斗争").findOne().click() //选项
                className("android.view.View").text("独立自主").findOne().click() //选项
                className("android.view.View").text("勇于担当").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("2.大事记").exists()) { //题号 2 2
            className("android.view.View").text("2.大事记").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("1934年12月12日").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("3.红六先遣探路").exists()) { //题号 3 2
            className("android.view.View").text("3.红六先遣探路").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("贵州木黄").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("7.到哪里去").exists()) { //题号 7 2
            className("android.view.View").text("7.到哪里去").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("黎平").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("8.挺进通道1").exists()) { //题号 8 2
            className("android.view.View").text("8.挺进通道1").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("西入贵州的行军路线").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("9.挺进通道2").exists()) { //题号 9 3
            className("android.view.View").text("9.挺进通道2").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("湘西").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("10.浴血通道").exists()) { //题号 10 3
            className("android.view.View").text("10.浴血通道").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("通道").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("12.通道会议").exists()) { //题号 12 4
            className("android.view.View").text("12.通道会议").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("不存在").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("15.行军方向之争").exists()) { //题号 15 13
            className("android.view.View").text("15.行军方向之争").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("拂袖而去").findOne().click() //选项
                className("android.view.View").text("坚持北上湘西的原定计划").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("17.伟大转兵").exists()) { //题号 17 1
            className("android.view.View").text("17.伟大转兵").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("通道会议").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }

        漫游长征结束函数()
    }
    if (className("android.view.View").text("3第一部分 战略转移").exists()) { //漫游4 1/2
        toastLog("漫游4 1/2 ")
        sleep(3000)
        if (className("android.view.View").text("3第一部分 战略转移").exists()) { //题号3 2
            className("android.view.View").text("3第一部分 战略转移").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("1935年1月").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("4粉碎“围剿").exists()) { //题号4 2
            className("android.view.View").text("4粉碎“围剿").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("第五次反“围剿”失败").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("6“左”倾错误的危害").exists()) { //题号6 1
            className("android.view.View").text("6“左”倾错误的危害").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("王明").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("10坚持苏区斗争").exists()) { //题号10 1
            className("android.view.View").text("10坚持苏区斗争").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("红二十四师").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("13第二部分 伟大转折").exists()) { //题号13 3
            className("android.view.View").text("13第二部分 伟大转折").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("湘江战役后").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("14黎平会议").exists()) { //题号14 2
            className("android.view.View").text("14黎平会议").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("黎平会议").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("15猴场会议").exists()) { //题号15 3
            className("android.view.View").text("15猴场会议").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("猴场会议").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("16突破乌江").exists()) { //题号16 124
            className("android.view.View").text("16突破乌江").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("茶山关").findOne().click() //选项
                className("android.view.View").text("江界河").findOne().click() //选项
                className("android.view.View").text("回龙场").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("17乌江英模").exists()) { //题号17 3
            className("android.view.View").text("17乌江英模").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("22人").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("20会议内容").exists()) { //题号20 2
            className("android.view.View").text("20会议内容").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("鸡鸣三省会议").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("26遵义会议的延续").exists()) { //题号 26 2
            className("android.view.View").text("26遵义会议的延续").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("鸡鸣三省会议").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("30苟坝会议").exists()) { //题号30 124
            className("android.view.View").text("30苟坝会议").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("毛泽东").findOne().click() //选项
                className("android.view.View").text("周恩来").findOne().click() //选项
                className("android.view.View").text("王稼祥").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("36四渡赤水").exists()) { //题号 36 23
            className("android.view.View").text("36四渡赤水").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("土城").findOne().click() //选项
                className("android.view.View").text("元厚").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("39二渡赤水").exists()) { //题号39 3
            className("android.view.View").text("39二渡赤水").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("黔北").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("43三渡赤水").exists()) { //题号43 4
            className("android.view.View").text("43三渡赤水").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("茅台").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("47第四部分 勇往直前").exists()) { //题号47 2
            className("android.view.View").text("47第四部分 勇往直前").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("巧渡金沙江").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("56红二十五军长征").exists()) { //题号56 2
            className("android.view.View").text("56红二十五军长征").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("何家冲").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("57红二、红六长征").exists()) { //题号57 4
            className("android.view.View").text("57红二、红六长征").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("桑植").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("60征服雪山").exists()) { //题号60 4
            className("android.view.View").text("60征服雪山").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("米拉山").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("65中央红军到达陕北").exists()) { //题号65 2
            className("android.view.View").text("65中央红军到达陕北").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("俄界会议").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("69三军会师").exists()) { //题号69 4
            className("android.view.View").text("69三军会师").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("直罗镇战役").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }

        漫游长征结束函数()
    }
    if (className("android.view.View").text("5沙盘").exists()) { //漫游4 2/2
        toastLog("漫游4 2/2")
        sleep(3000)
        if (className("android.view.View").text("5沙盘").exists()) { //题号 5 2
            className("android.view.View").text("5沙盘").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("猴场会议").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("8红六过瓮安").exists()) { //题号8 3
            className("android.view.View").text("8红六过瓮安").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("红六军团").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("10红六过瓮安路线").exists()) { //题号 10 4
            className("android.view.View").text("10红六过瓮安路线").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("红六军团").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("12甘溪战斗").exists()) { //题号12 1
            className("android.view.View").text("12甘溪战斗").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("龙云").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("14中央红军战略转移").exists()) { //题号14 3
            className("android.view.View").text("14中央红军战略转移").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("于都").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("15通道会议").exists()) { //题号15 123
            className("android.view.View").text("15通道会议").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("兴安光华铺").findOne().click() //选项
                className("android.view.View").text("全州觉山铺").findOne().click() //选项
                className("android.view.View").text("灌阳新圩").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("17兵临瓮安").exists()) { //题号17 1
            className("android.view.View").text("17兵临瓮安").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("抢渡乌江").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("25红五军团").exists()) { //题号25 3
            className("android.view.View").text("25红五军团").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("宁都起义").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("28遵义会议").exists()) { //题号28 3
            className("android.view.View").text("28遵义会议").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("遵义会议").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("29红一军团过瓮安").exists()) { //题号29 2
            className("android.view.View").text("29红一军团过瓮安").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("假造声势，迷惑敌人").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("31会师西北").exists()) { //题号31 2 
            className("android.view.View").text("31会师西北").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("红二方面军").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("32鱼水情深").exists()) { //题号32 2
            className("android.view.View").text("32鱼水情深").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("红二、六军团").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("35结束语").exists()) { //题号35 3
            className("android.view.View").text("35结束语").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("红军三大主力会师").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }

        漫游长征结束函数()
    }
    if (className("android.view.View").text("扎西会议纪念馆").exists()) { //漫游5 1/2
        toastLog("漫游5 1/2")
        sleep(3000)
        if (className("android.view.View").text("2大厅").exists()) { //题号 2 3
            className("android.view.View").text("2大厅").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("扎西会议").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("5第一部分 危急关头 集结扎西").exists()) { //题号5 4
            className("android.view.View").text("5第一部分 危急关头 集结扎西").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("15个").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("6反“围剿”失败").exists()) { //题号6 123 
            className("android.view.View").text("6反“围剿”失败").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("中共党内“左”倾教条主义的错误领导").findOne().click() //选项
                className("android.view.View").text("共产国际军事顾问指挥上的失误").findOne().click() //选项
                className("android.view.View").text("国民党军事力量的强大").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("7血战湘江 突破封锁").exists()) { //题号7 2
            className("android.view.View").text("7血战湘江 突破封锁").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("3万").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("8通道会议 转兵贵州").exists()) { //题号8 1
            className("android.view.View").text("8通道会议 转兵贵州").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("与红二、六军团会合").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("17随军西行见闻录").exists()) { //题号17 2
            className("android.view.View").text("17随军西行见闻录").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("陈云").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("24第二部分 扎西会议 实现转折").exists()) { //题号24 1234
            className("android.view.View").text("24第二部分 扎西会议 实现转折").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("张闻天接替博古负总的责任").findOne().click() //选项
                className("android.view.View").text("毛泽东为周恩来军事指挥上的帮助者").findOne().click() //选项
                className("android.view.View").text("中央红军目前的战略行动方针").findOne().click() //选项
                className("android.view.View").text("中央苏区、闽浙赣苏区的战略方针").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("28大河滩庄子上中央政治局会议").exists()) { //题号28 1234
            className("android.view.View").text("28大河滩庄子上中央政治局会议").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("审议通过了遵义会议决议").findOne().click() //选项
                className("android.view.View").text("指定张闻天、毛泽东、陈云等赴红军各部传达贯彻决议精神").findOne().click() //选项
                className("android.view.View").text("决定中央红军暂缓北渡长江").findOne().click() //选项
                className("android.view.View").text("重新确立运动战方针").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("31扎西镇江西会馆中央政治局扩大会议").exists()) { //题号31 1234
            className("android.view.View").text("31扎西镇江西会馆中央政治局扩大会议").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("精简缩编中央红军").findOne().click() //选项
                className("android.view.View").text("成立中共川南特委和红军川南游击纵队").findOne().click() //选项
                className("android.view.View").text("中央红军回师东进，二渡赤水，重占遵义").findOne().click() //选项
                className("android.view.View").text("红二、六军团的战略方针和组织领导").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("34川南游击纵队").exists()) { //题号34 1
            className("android.view.View").text("34川南游击纵队").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("扎西").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("36二渡赤水 回师黔北").exists()) { //题号36 3
            className("android.view.View").text("36二渡赤水 回师黔北").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("20个团").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("39威逼昆明 巧渡金沙 强渡大渡河").exists()) { //题号39 2
            className("android.view.View").text("39威逼昆明 巧渡金沙 强渡大渡河").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("1935年5月").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("40征服雪山草地 到达陕北").exists()) { //题号40 1
            className("android.view.View").text("40征服雪山草地 到达陕北").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("夹金山").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("42三边转战 铁血忠魂").exists()) { //题号42 2
            className("android.view.View").text("42三边转战 铁血忠魂").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("川滇黔").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("44第一次、第二次反“会剿”").exists()) { //题号44 1
            className("android.view.View").text("44第一次、第二次反“会剿”").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("徐策").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("47武装反抗 追求进步").exists()) { //题号47 2
            className("android.view.View").text("47武装反抗 追求进步").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("1936年夏").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("49以兵屯田").exists()) { //题号49 3
            className("android.view.View").text("49以兵屯田").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("六次").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("50殷禄才、陈华久壮烈牺牲").exists()) { //题号50 1
            className("android.view.View").text("50殷禄才、陈华久壮烈牺牲").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("殷禄才").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }


        漫游长征结束函数()
    }
    if (className("android.view.View").text("土城四渡赤水纪念馆").exists()) { //漫游5 2/2
        toastLog("漫游5 2/2")
        sleep(3000)
        if (className("android.view.View").text("6到达土城").exists()) { //题号6 1
            className("android.view.View").text("6到达土城").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("北渡长江").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("7一渡赤水 摆脱被动").exists()) { //题号7 2
            className("android.view.View").text("7一渡赤水 摆脱被动").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("1935年1月29日").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("8青杠坡战斗").exists()) { //题号8 1
            className("android.view.View").text("8青杠坡战斗").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("川军").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("9青杠坡战斗").exists()) { //题号9 3
            className("android.view.View").text("9青杠坡战斗").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("对敌人实力预判有误").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("16扎西会议").exists()) { //题号16 3
            className("android.view.View").text("16扎西会议").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("扎西会议").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("18二渡赤水 避实击虚").exists()) { //题号18 2
            className("android.view.View").text("18二渡赤水 避实击虚").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("二渡赤水").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("19二渡赤水").exists()) { //题号19 123
            className("android.view.View").text("19二渡赤水").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("太平渡").findOne().click() //选项
                className("android.view.View").text("二郎滩").findOne().click() //选项
                className("android.view.View").text("淋滩").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("20遵义大捷").exists()) { //题号20 2
            className("android.view.View").text("20遵义大捷").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("遵义大捷").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("22娄山关大捷").exists()) { //题号22 4
            className("android.view.View").text("22娄山关大捷").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("1935年2月27日").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("23老鸦山战斗").exists()) { //题号23 2
            className("android.view.View").text("23老鸦山战斗").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("黔军").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("24邓萍牺牲").exists()) { //题号24 4
            className("android.view.View").text("24邓萍牺牲").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("邓萍").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("25三渡赤水 调敌西进").exists()) { //题号25 3
            className("android.view.View").text("25三渡赤水 调敌西进").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("调敌西进").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("27攻打打鼓新场的争论").exists()) { //题号27 1
            className("android.view.View").text("27攻打打鼓新场的争论").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("取消攻打打鼓新场计划").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("28鲁班场战斗").exists()) { //题号28 4
            className("android.view.View").text("28鲁班场战斗").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("国民党中央军").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("30保护茅台酒").exists()) { //题号30 13
            className("android.view.View").text("30保护茅台酒").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("打土豪").findOne().click() //选项
                className("android.view.View").text("购买").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("31三渡赤水").exists()) { //题号31 34
            className("android.view.View").text("31三渡赤水").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("派一个团佯装主力向西北挺进").findOne().click() //选项
                className("android.view.View").text("主力隐蔽在附近山沟丛林里").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("34南渡乌江").exists()) { //题号34 2
            className("android.view.View").text("34南渡乌江").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("曾希圣冒充蒋介石发电调动国民党中央军").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("35红九军团行动").exists()) { //题号35 4
            className("android.view.View").text("35红九军团行动").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("红九军团").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("39巧渡金沙江").exists()) { //题号39 2
            className("android.view.View").text("39巧渡金沙江").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("7只").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("41强渡大渡河").exists()) { //题号41 123
            className("android.view.View").text("41强渡大渡河").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("总结了四渡赤水以来的作战").findOne().click() //选项
                className("android.view.View").text("确定渡过金沙江后的行动计划").findOne().click() //选项
                className("android.view.View").text("决定北进渡过大渡河与红四方面军靠拢").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("42游击武装").exists()) { //题号42 3
            className("android.view.View").text("42游击武装").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("扎西会议").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("43黔北游击队").exists()) { //题号43 123
            className("android.view.View").text("43黔北游击队").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("川南游击纵队").findOne().click() //选项
                className("android.view.View").text("黔北游击队").findOne().click() //选项
                className("android.view.View").text("遵绥湄游击队").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }

        漫游长征结束函数()
    }
    if (text("红军飞夺泸定桥纪念馆").exists()) {//漫游6 1/2
        toastLog("漫游6 1/2")
        sleep(3000)
        if (className("android.view.View").text("4前言").exists()) { //题号4 123
            className("android.view.View").text("4前言").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("安顺场强渡").findOne().click() //选项
                className("android.view.View").text("飞夺泸定桥").findOne().click() //选项
                className("android.view.View").text("大树堡佯攻").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("9大渡河畔的决策").exists()) { //题号9 2
            className("android.view.View").text("9大渡河畔的决策").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("4").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("10兵分两路 夹河而上").exists()) { //题号10 3
            className("android.view.View").text("10兵分两路 夹河而上").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("红四团").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("11英雄的部队红四团").exists()) { //题号11 1234
            className("android.view.View").text("11英雄的部队红四团").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("南昌起义").findOne().click() //选项
                className("android.view.View").text("井冈山会师").findOne().click() //选项
                className("android.view.View").text("飞夺泸定桥").findOne().click() //选项
                className("android.view.View").text("突破腊子口").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("13左右纵队夹河而上").exists()) { //题号13 12
            className("android.view.View").text("13左右纵队夹河而上").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("刘伯承").findOne().click() //选项
                className("android.view.View").text("聂荣臻").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("14左右纵队夹河而上").exists()) { //题号14 4
            className("android.view.View").text("14左右纵队夹河而上").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("22").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("15铁索桥上的激战").exists()) { //题号15 1
            className("android.view.View").text("15铁索桥上的激战").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("川军").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }


        漫游长征结束函数()
    }
    if (className("android.view.View").text("中国工农红军强渡大渡河纪念馆").exists()) { //漫游6 2/2
        toastLog("漫游6 2/2")
        sleep(3000)
        if (className("android.view.View").text("3前言").exists()) { //题号3 1
            className("android.view.View").text("3前言").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("分两批乘1条小船").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("5遵义会议").exists()) { //题号5 3
            className("android.view.View").text("5遵义会议").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("董振堂").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("6强渡天险大渡河").exists()) { //题号6 12
            className("android.view.View").text("6强渡天险大渡河").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("刘伯承").findOne().click() //选项
                className("android.view.View").text("聂荣臻").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("8疾进安顺场").exists()) { //题号8 34
            className("android.view.View").text("8疾进安顺场").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("左权").findOne().click() //选项
                className("android.view.View").text("刘亚楼").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("11夜袭安顺场").exists()) { //题号11 4
            className("android.view.View").text("11夜袭安顺场").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("纳尔坝").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("12佯攻大树堡").exists()) { //题号12 1
            className("android.view.View").text("12佯攻大树堡").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("佯攻牵制敌人，掩护安顺场强渡大渡河").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("14夜袭安顺 巧夺孤舟").exists()) { //题号14 3
            className("android.view.View").text("14夜袭安顺 巧夺孤舟").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("17").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("15夜袭安顺场的部署").exists()) { //题号15 4
            className("android.view.View").text("15夜袭安顺场的部署").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("77").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("22强渡大渡河勇士").exists()) { //题号22 1
            className("android.view.View").text("22强渡大渡河勇士").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("孙继先").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("25飞夺泸定桥").exists()) { //题号25 123
            className("android.view.View").text("25飞夺泸定桥").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("船只少").findOne().click() //选项
                className("android.view.View").text("追敌将至").findOne().click() //选项
                className("android.view.View").text("寻找新的渡河点").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("26中革军委夺取泸定桥的部署").exists()) { //题号26 3
            className("android.view.View").text("26中革军委夺取泸定桥的部署").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("320里").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("27第一天行军80华里").exists()) { //题号27 1
            className("android.view.View").text("27第一天行军80华里").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("80里").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("28第二天行军240华里").exists()) { //题号28 3
            className("android.view.View").text("28第二天行军240华里").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("240里").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("29大渡河战斗大事记").exists()) { //题号29 3
            className("android.view.View").text("29大渡河战斗大事记").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("1935年5月29日").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }

        漫游长征结束函数()
    }
    if (className("android.view.View").text("巴西会议纪念馆").exists()) { //漫游7 1/2
        toastLog("漫游7 1/2")
        sleep(3000)
        if (className("android.view.View").text("2前言").exists()) { //题号2 3
            className("android.view.View").text("2前言").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("5次").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("3巴西会议会址确定过程").exists()) { //题号3 3
            className("android.view.View").text("3巴西会议会址确定过程").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("阿西牙弄寨").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("4巴西筹粮会议").exists()) { //题号4 1234
            className("android.view.View").text("4巴西筹粮会议").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("打借条").findOne().click() //选项
                className("android.view.View").text("写借牌").findOne().click() //选项
                className("android.view.View").text("付银元").findOne().click() //选项
                className("android.view.View").text("付苏维埃纸币").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("7巴西会议（阿西牙弄中共中央政治局非正式会议）").exists()) { //题号7 3
            className("android.view.View").text("7巴西会议（阿西牙弄中共中央政治局非正式会议）").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("9月8日").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("8阿西牙弄紧急会议的地位和作用").exists()) { //题号8 3
            className("android.view.View").text("8阿西牙弄紧急会议的地位和作用").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("朱德").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("10过草地").exists()) { //题号10 2
            className("android.view.View").text("10过草地").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("班佑").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("11二过草地").exists()) { //题号11 12
            className("android.view.View").text("11二过草地").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("红一军").findOne().click() //选项
                className("android.view.View").text("红三军").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("14七根火柴").exists()) { //题号14 1
            className("android.view.View").text("14七根火柴").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("姜冬").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("17包座战役的概况").exists()) { //题号17 2
            className("android.view.View").text("17包座战役的概况").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("围点打援").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("18包座战役地形图").exists()) { //题号18 1
            className("android.view.View").text("18包座战役地形图").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("国民党胡宗南部").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("19包座战役遗址").exists()) { //题号19 2 
            className("android.view.View").text("19包座战役遗址").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("王友钧").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("22潘州前敌总指挥部遗址").exists()) { //题号22 2
            className("android.view.View").text("22潘州前敌总指挥部遗址").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("4000").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("26过草地前言（1936年）").exists()) { //题号26 3
            className("android.view.View").text("26过草地前言（1936年）").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("红四方面军").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("27行军路线图").exists()) { //题号27 2
            className("android.view.View").text("27行军路线图").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("三路").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("33走过草地的九大元帅").exists()) { //题号33 3
            className("android.view.View").text("33走过草地的九大元帅").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("陈毅").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }

        漫游长征结束函数()
    }
    if (className("android.view.View").text("川主寺红军长征纪念馆").exists()) { //漫游7 2/2
        toastLog("漫游7 2/2")
        sleep(3000)
        if (className("android.view.View").text("3战略转移").exists()) { //题号3 3
            className("android.view.View").text("3战略转移").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("红7军团").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("7遵义会议").exists()) { //题号7 12
            className("android.view.View").text("7遵义会议").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("组织问题").findOne().click() //选项
                className("android.view.View").text("军事问题").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("8四渡赤水 巧渡金沙江 强渡大渡河").exists()) { //题号8 2
            className("android.view.View").text("8四渡赤水 巧渡金沙江 强渡大渡河").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("树桔渡口").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("12红一、四方面军会师").exists()) { //题号12 1
            className("android.view.View").text("12红一、四方面军会师").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("达维").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("13北上").exists()) { //题号13 12
            className("android.view.View").text("13北上").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("红一、红四方面军会师后应集中主力向北进攻，以创建川陕甘苏区").findOne().click() //选项
                className("android.view.View").text("增补张国焘为中革军委副主席，徐向前、陈昌浩为中革军委委员").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("14芦花会议").exists()) { //题号14 3
            className("android.view.View").text("14芦花会议").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("1935年8月20日").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("15巴西会议").exists()) { //题号15 2
            className("android.view.View").text("15巴西会议").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("1935年9月9日").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("16阿坝召开的会议").exists()) { //题号16 1
            className("android.view.View").text("16阿坝召开的会议").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("卓木碉").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("34长征中牺牲的省军职以上领导干部").exists()) { //题号34 4
            className("android.view.View").text("34长征中牺牲的省军职以上领导干部").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("陈树湘").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("37三支劲旅大会师").exists()) { //题号37 234
            className("android.view.View").text("37三支劲旅大会师").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("红25军").findOne().click() //选项
                className("android.view.View").text("红26军").findOne().click() //选项
                className("android.view.View").text("红27军").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("38党中央率陕甘支队胜利到达陕北").exists()) { //题号38 1
            className("android.view.View").text("38党中央率陕甘支队胜利到达陕北").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("哈达铺").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("39红二、四方面军会师北上").exists()) { //题号39 14
            className("android.view.View").text("39红二、四方面军会师北上").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("红2、6军团").findOne().click() //选项
                className("android.view.View").text("红32军").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("40红军三大主力会师").exists()) { //题号40 4
            className("android.view.View").text("40红军三大主力会师").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("将台堡").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }

        漫游长征结束函数()
    }
    if (className("android.view.View").text("直罗镇战役纪念馆").exists()) { //漫游8 1/2
        toastLog("漫游8 1/2")
        sleep(3000)
        if (className("android.view.View").text("5突出重围 遵义会议").exists()) { //题号5 2
            className("android.view.View").text("5突出重围 遵义会议").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("4道").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("10陕甘苏区和三次反“围剿”").exists()) { //题号10 1234
            className("android.view.View").text("10陕甘苏区和三次反“围剿”").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("刘志丹").findOne().click() //选项
                className("android.view.View").text("谢子长").findOne().click() //选项
                className("android.view.View").text("习仲勋").findOne().click() //选项
                className("android.view.View").text("阎红彦").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("11永坪会师").exists()) { //题号11 234
            className("android.view.View").text("11永坪会师").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("红二十五军").findOne().click() //选项
                className("android.view.View").text("红二十六军").findOne().click() //选项
                className("android.view.View").text("红二十七军").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("12直罗镇战役").exists()) { //题号12 3
            className("android.view.View").text("12直罗镇战役").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("东村").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("13歼灭之战").exists()) { //题号13 1
            className("android.view.View").text("13歼灭之战").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("东北军").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("16战斗过程").exists()) { //题号16 1
            className("android.view.View").text("16战斗过程").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("牛元峰").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("24立足陕北 圣地延安").exists()) { //题号24 2
            className("android.view.View").text("24立足陕北 圣地延安").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("抗日先锋军东征中牺牲").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("25圣地延安").exists()) { //题号25 3
            className("android.view.View").text("25圣地延安").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("1936年10月").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }

        漫游长征结束函数()
    }
    if (className("android.view.View").text("吴起中央红军长征胜利纪念馆").exists()) { //漫游8 2/2
        toastLog("漫游8 2/2")
        sleep(3000)
        if (className("android.view.View").text("2前言").exists()) { //题号 2 3
            className("android.view.View").text("2前言").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("11").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("3红军不怕远征难").exists()) { //题号 3 2
            className("android.view.View").text("3红军不怕远征难").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("吴起").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("6四渡赤水、巧渡金沙、强渡大渡河").exists()) { //题号6 2
            className("android.view.View").text("6四渡赤水、巧渡金沙、强渡大渡河").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("大渡河").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("8懋功会师").exists()) { //题号8 3
            className("android.view.View").text("8懋功会师").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("右路军").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("9坚持北上的战略方针").exists()) { //题号9 2
            className("android.view.View").text("9坚持北上的战略方针").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("俄界会议").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("10创建西北根据地").exists()) { //题号10 123 
            className("android.view.View").text("10创建西北根据地").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("刘志丹").findOne().click() //选项
                className("android.view.View").text("谢子长").findOne().click() //选项
                className("android.view.View").text("习仲勋").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("20陕甘边、陕北两块根据地的统一").exists()) { //题号20 1
            className("android.view.View").text("20陕甘边、陕北两块根据地的统一").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("应对国民党军的“围剿”").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }

        if (className("android.view.View").text("21红二十五军长征到陕北").exists()) { //题号21 4
            className("android.view.View").text("21红二十五军长征到陕北").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("永坪").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("22长征胜利到吴起").exists()) { //题号22 4
            className("android.view.View").text("22长征胜利到吴起").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("榜罗镇会议").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("23历史的选择").exists()) { //题号23 4
            className("android.view.View").text("23历史的选择").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("川康").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("25毛泽东与彭德怀之间的电文").exists()) { //题号25 2
            className("android.view.View").text("25毛泽东与彭德怀之间的电文").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("吴起镇中央政治局扩大会议").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("28“切尾巴”战役").exists()) { //题号28 3
            className("android.view.View").text("28“切尾巴”战役").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("“切尾巴”战斗").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("31吴起镇战斗").exists()) { //题号31 2
            className("android.view.View").text("31吴起镇战斗").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("“切尾巴”战斗").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("32纠正陕北错误肃反").exists()) { //题号32 1234
            className("android.view.View").text("32纠正陕北错误肃反").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("刘志丹").findOne().click() //选项
                className("android.view.View").text("习仲勋").findOne().click() //选项
                className("android.view.View").text("金理科").findOne().click() //选项
                className("android.view.View").text("张景文").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("37毛泽东在陕甘支队团以上干部会议上的讲话").exists()) { //题号37 123
            className("android.view.View").text("37毛泽东在陕甘支队团以上干部会议上的讲话").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("长征是宣言书").findOne().click() //选项
                className("android.view.View").text("长征是宣传队").findOne().click() //选项
                className("android.view.View").text("长征是播种机").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }
        if (className("android.view.View").text("42走向胜利").exists()) { //题号42 3
            className("android.view.View").text("42走向胜利").findOne().click()
            sleep(1000)
            if (className("android.view.View").text("答题").exists()) {
                className("android.view.View").text("答题").findOne().click()
                sleep(4000) //答题
                className("android.view.View").text("瓦窑堡会议").findOne().click() //选项
                sleep(2000)
                text("提交").findOne().click()
                sleep(2000)
                X关闭按钮()
                sleep(3000)
            }
        }

        漫游长征结束函数()
    } else {
        toastLog("未进入《漫游长征》页面")
    }
};
function 学习长征函数() {
    toastLog("检测《学习长征》页面")
    if (className("android.view.View").text("倍速").exists()) { //学习长征一
        toastLog("正在：学习长征")
        className("android.view.View").text("倍速").findOne().click()
        className("android.view.View").text("2.0x").findOne().click()
        var 次数 = 0;
        while (true) {
            次数++;
            if (className("android.view.View").text("返回").exists()) {
                toastLog("播放完成....")
                back()
                flag = true;
                break;
            }
            text("提交").waitFor()
            学习长征函数题()
            console.log("正在检测...");
            次数 = 次数 + 1
            sleep(1000);
            if (次数 > 500) {
                toastLog("请重新运行助手")
                break;
            }
        }
    } else {
        toastLog("未进入《学习长征》页面")
    }
};
function 学习长征函数题() {
    //学习长征1
    log("启动学习长征函数★")
    if (className("android.view.View").text("大革命失败后，中国共产党武装反抗国民党反对派的起义有哪些？").exists()) {
        className("android.view.View").text("A、南昌起义").findOne().parent().click();
        className("android.view.View").text("B、秋收起义").findOne().parent().click();
        className("android.view.View").text("C、广州起义").findOne().parent().click();
        click("提交")
    }

    if (className("android.view.View").text("从1930年到1934年，蒋介石先后调集大批兵力对中央革命根据地及湘赣、湘鄂赣、闽浙赣等根据地进行了五次军事“围剿”。其中，中央苏区一共胜利粉碎了几次“围剿”？").exists()) {
        className("android.view.View").text("B、四次").findOne().click();
        click("提交")
    }

    if (className("android.view.View").text("中央红军长征出发的时间是？").exists()) {
        className("android.view.View").text("B、1934年10月").findOne().click();
        click("提交")
    }
    if (className("android.view.View").text("中央红军被迫离开中央根据地，从于都渡河出发长征，客观的原因是由于国民党的兵力过于强大，而主观原因有哪些呢？").exists()) {
        className("android.view.View").text("A、“左”倾领导者不了解中国革命战争的特点，排斥以毛泽东为代表的正确主张，实行进攻中的冒险主义，严重削弱了红军的力量，丧失了有利时机，导致第五次反“围剿”一直处于十分被动地位。").findOne().click();
        className("android.view.View").text("B、“左”倾领导者以“短促突击”战术支持消极防御的战略路线，导致第五次反“围剿”的失败。").findOne().click();
        className("android.view.View").text("C、“左”倾领导者要求红军全线出击，分兵六路，全线抵御，推行军事平均，导致兵力分散，进攻时不能大量有效地消灭敌人。与敌人拼消耗，促使苏区内的人力、物力资源濒临枯竭。").findOne().click();
        click("提交")
    }
    //学习长征2
    if (className("android.view.View").text("湘江战役是关系中央红军生死存亡的一战。中央红军在湘江战役是要突破敌人的第几道封锁线？").exists()) {
        className("android.view.View").text("B、第四道").findOne().click();
        click("提交")
    }
    if (className("android.view.View").text("中央红军在湘江战役前实际兵力有多少？").exists()) {
        className("android.view.View").text("A、6.4万人").findOne().click();
        click("提交")
    }
    if (className("android.view.View").text("中央红军在第四道封锁线面对的敌人有多少？").exists()) {
        className("android.view.View").text("C、30余万人").findOne().click();
        click("提交")
    }
    if (className("android.view.View").text("中央红军长征中湘江战役前锋的三大战场是哪些？").exists()) {
        className("android.view.View").text("A、灌阳新圩").findOne().parent().click();
        className("android.view.View").text("B、兴安界首光华铺").findOne().parent().click();
        className("android.view.View").text("C、全州觉山铺").findOne().parent().click();
        click("提交")
    }
    if (className("android.view.View").text("湘江一战，中央红军折损了3万多人，中央红军在此战遭受这么大的损失，主观上的原因有哪些？").exists()) {
        className("android.view.View").text("A、坚持“左倾”错误路线的领导选择错误的转移方向的恶果").findOne().click();
        className("android.view.View").text("B、坚持“左倾”错误、拒绝接受正确建议导致的结果").findOne().click();
        className("android.view.View").text("C、坚持错误路线的领导实行大搬家甬道式行军的恶果").findOne().click();
        click("提交")
    }
    //学习长征3
    if (className("android.view.View").text("中央红军突破湘江后，原计划的行军方向和战略目标是哪里？").exists()) {
        className("android.view.View").text("C、湘西").findOne().click();
        click("提交")
    }
    if (className("android.view.View").text("红军过了老山界，到了湖南通道，面临着行军方向的抉择，中央红军原计划的行军路线是往哪里走？").exists()) {
        className("android.view.View").text("A、北上").findOne().click();
        click("提交")
    }
    if (className("android.view.View").text("中央红军长征途中在通道召开紧急会议的时间是？").exists()) {
        className("android.view.View").text("A、1934年12月1日").findOne().click();
        click("提交")
    }
    if (className("android.view.View").text("红军在黎平遇到的“干人”是什么人？").exists()) {
        className("android.view.View").text("D、当地的穷苦百姓").findOne().click();
        click("提交")
    }
    if (className("android.view.View").text("黎平会议的主题是？").exists()) {
        className("android.view.View").text("C、战略方针").findOne().click();
        click("提交")
    }
    if (className("android.view.View").text("黎平会议的历史意义有哪些？").exists()) {
        className("android.view.View").text("A、它最重要的成果就是首次调整了长征落脚点").findOne().click();
        className("android.view.View").text("B、表明毛泽东的军事战略意图逐渐为大多数人所接受").findOne().click();
        className("android.view.View").text("C、是我党纠正王明“左”倾教条主义军事战线的第一个决定").findOne().click();
        className("android.view.View").text("D、使中央红军开始从被动转为主动，为遵义会议召开奠定基础").findOne().click();
        click("提交")
    }
    //学习长征4
    if (className("android.view.View").text("1935年元旦的凌晨，毛泽东参加了一场重要的政治局会议，这个重要会议是什么？").exists()) {
        className("android.view.View").text("B、猴场会议").findOne().click();
        click("提交")
    }
    if (className("android.view.View").text("为什么会在跨年夜召开猴场会议？").exists()) {
        className("android.view.View").text("A、为了讨论黎平会议的决议").findOne().click();
        click("提交")
    }
    if (className("android.view.View").text("猴场会议做出了三大决策，这三大决策是什么？").exists()) {
        className("android.view.View").text("A、再次否定了博古、李德的错误主张，重申应在川黔边地区先以黔北遵义为中心，建立新的根据地。").findOne().click();
        className("android.view.View").text("B、限制了博古、李德的军事指挥权，强调作战方针与作战时间地点须在政治局会上报告。").findOne().click();
        className("android.view.View").text("C、作出了强渡乌江及渡江后挺进黔北的新的行动方针。").findOne().click();
        click("提交")
    }
    if (className("android.view.View").text("指挥智取遵义的红军领导是谁？").exists()) {
        className("android.view.View").text("D、刘伯承").findOne().click();
        click("提交")
    }
    if (className("android.view.View").text("遵义会议是一场什么规格的会议？").exists()) {
        className("android.view.View").text("C、政治局扩大会议").findOne().click();
        click("提交")
    }
    if (className("android.view.View").text("遵义会议实现了党的历史的伟大转折，这个转折体现在哪些方面？").exists()) {
        className("android.view.View").text("A、党中央领导核心改变了").findOne().click();
        className("android.view.View").text("B、党的思想路线改变了").findOne().click();
        className("android.view.View").text("C、党的军事战略方针改变了").findOne().click();
        click("提交")
    }
    //学习长征5
    if (className("android.view.View").text("中央红军一占遵义后，面对国民党军队40万大军对遵义地区的紧逼包围，计划如何应对？").exists()) {
        className("android.view.View").text("C、北渡长江前往四川，与川北活动的红四方面军会合，在川西或川北一带开辟根据地。").findOne().click();
        click("提交")
    }
    if (className("android.view.View").text("土城战斗后，原定北渡长江的计划无法实现，党中央决定下一步怎么做？").exists()) {
        className("android.view.View").text("C、再打赤水城，震慑川军").findOne().click();
        click("提交")
    }
    if (className("android.view.View").text("1935年2月在一个叫“鸡鸣三省”的地方，博古将党内总负责的权力正式移交给张闻天，“鸡鸣三省”指的是哪三省？").exists()) {
        className("android.view.View").text("A、云南四川贵州").findOne().click();
        click("提交")
    }
    if (className("android.view.View").text("“雄关漫道真如铁，而今迈步从头越。”这首诗描写的是哪里？").exists()) {
        className("android.view.View").text("B、娄山关").findOne().click();
        click("提交")
    }
    if (className("android.view.View").text("长征路上，毛主席正式恢复执掌军事指挥权是在哪次会议上？").exists()) {
        className("android.view.View").text("D、苟坝会议").findOne().click();
        click("提交")

    }
    if (className("android.view.View").text("红军长征经过茅台镇时，许多人用水壶装满了茅台酒带走，这是要做什么？").exists()) {
        className("android.view.View").text("C、消毒杀菌").findOne().click();
        className("android.view.View").text("D、擦脚").findOne().click();
        click("提交")
    }
    if (className("android.view.View").text("长征路上，毛主席复出第一战是哪场战斗？").exists()) {
        className("android.view.View").text("B、土城之战").findOne().click();
        click("提交")
    }
    //学习长征6
    if (className("android.view.View").text("中央红军从于都出发，越过了许多大江大河，湘江、乌江、金沙江……其中哪一条河是最难渡过的？").exists()) {
        className("android.view.View").text("A、大渡河").findOne().click();
        click("提交")
    }
    if (className("android.view.View").text("中央红军在安顺场面临的处境比1863年石达开的处境更加危险，原因有哪些？").exists()) {
        className("android.view.View").text("B、红军到达大渡河时间更晚，进入洪水期").findOne().click();
        className("android.view.View").text("C、敌人对大渡河的布防更加严密").findOne().click();
        click("提交")
    }
    if (className("android.view.View").text("中央红军先头部队原计划在哪里强渡大渡河？").exists()) {
        className("android.view.View").text("B、安顺场渡口").findOne().click();
        click("提交")
    }
    if (className("android.view.View").text("在安顺场强渡大渡河的战斗中，第一批强渡突击队有多少人？").exists()) {
        className("android.view.View").text("B、17人").findOne().click();
        click("提交")
    }
    if (className("android.view.View").text("中央军委决定兵分两路，一路红军在安顺场渡河，另一路前往泸定桥渡河，为什么说这是一个破釜沉舟的冒险决定？").exists()) {
        className("android.view.View").text("A、红军无法确定上游的泸定桥是否被川军破坏").findOne().click();
        className("android.view.View").text("B、安顺场距离泸定桥160公里，沿途情况未知").findOne().click();
        className("android.view.View").text("C、兵分两路有可能导致红军被分割").findOne().click();
        click("提交")
    }
    if (className("android.view.View").text("中央红军左纵队先头部队红四团28日接到第二天夺取泸定桥的命令，此时他们距离泸定桥还有多远？").exists()) {
        className("android.view.View").text("A、120公里").findOne().click();
        click("提交")
    }
    if (className("android.view.View").text("泸定桥的全长有多少米？").exists()) {
        className("android.view.View").text("B、101米").findOne().click();
        click("提交")
    }
    if (className("android.view.View").text("飞夺泸定桥战斗结束后，中央政治局在泸定县城召开了简短的会议，会议上作出了哪两项决定？").exists()) {
        className("android.view.View").text("A、大渡河后红军前进的行动路线").findOne().click();
        className("android.view.View").text("B、红军的目标要北上陕北").findOne().click();
        click("提交")
    }
    //学习长征7
    if (className("android.view.View").text("从红一方面军和红四方面军在小金会师，到8月下旬中共中央率领右路军离开毛尔盖北上，走进茫茫草地，其间中央接连召开了多次会议，来解决两军会合后的战略方针、组织问题和行动计划。这些会议都有哪些？").exists()) {
        className("android.view.View").text("A、两河口会议").findOne().click();
        className("android.view.View").text("B、芦花会议").findOne().click();
        className("android.view.View").text("C、沙窝会议").findOne().click();
        className("android.view.View").text("D、毛儿盖会议").findOne().click();
        click("提交")
    }
    if (className("android.view.View").text("大多数红军战士开始过草地时携带了多少粮食？").exists()) {
        className("android.view.View").text("A、每人15斤左右").findOne().click();
        click("提交")
    }
    if (className("android.view.View").text("老红军们说：没过草地路，难知长征苦。除了食难，过草地的艰苦还体现在哪些方面？").exists()) {
        className("android.view.View").text("A、行难").findOne().click();
        className("android.view.View").text("B、暖难").findOne().click();
        className("android.view.View").text("C、宿难").findOne().click();
        click("提交")
    }
    if (className("android.view.View").text("红军能够克服恶劣的自然环境，走出草地，凭借的是什么？").exists()) {
        className("android.view.View").text("A、坚定的信念，顽强的意志").findOne().click();
        className("android.view.View").text("B、阶级的友爱，革命的情谊").findOne().click();
        className("android.view.View").text("C、严格的纪律，乐观的情绪").findOne().click();
        click("提交")
    }
    if (className("android.view.View").text("党中央和红军在过草地这段时间里，面临着与党内分裂主义斗争的危机。斗争的对象是谁？").exists()) {
        className("android.view.View").text("D、张国焘").findOne().click();
        click("提交")
    }
    if (className("android.view.View").text("张国焘为什么一直违抗中央指示，顽固坚持南下？").exists()) {
        className("android.view.View").text("B、对革命前途悲观失望").findOne().click();
        click("提交")
    }
    //学习长征8
    if (className("android.view.View").text("中央红军从榜罗镇到陕北面临着国民党20万大军的两道封锁，这两道封锁线在哪里？").exists()) {
        className("android.view.View").text("A、西安兰州公路").findOne().click();
        className("android.view.View").text("B、六盘山").findOne().click();
        click("提交")
    }
    if (className("android.view.View").text("吴起反击战胜利的意义是什么？").exists()) {
        className("android.view.View").text("A、“切尾巴”战斗的胜利迫使敌军停止了追击").findOne().click();
        className("android.view.View").text("B、红军表明了自己在陕北立足的决心和力量").findOne().click();
        className("android.view.View").text("C、是中央红军长征的最后一仗").findOne().click();
        click("提交")
    }
    if (className("android.view.View").text("党中央在吴起召开会议，宣告中央红军长征结束，并决定党和红军今后的任务是在这里建立西北苏区，领导全国革命，确定周边三省是未来发展的主要区域。这里说的周边三省指的是哪三省？").exists()) {
        className("android.view.View").text("D、陕西甘肃山西").findOne().click();
        click("提交")
    }
    if (className("android.view.View").text("红十五军团是由哪些队伍合编而来的？").exists()) {
        className("android.view.View").text("A、红二十五军、二十六军、二十七军合编而来").findOne().click();
        click("提交")
    }
    if (className("android.view.View").text("中央红军与红十五军团胜利会师后，党中央恢复了红一方面军和红一军团番号，红十五军团编入红一方面军。这时新的红一方面军总兵力达到了多少人？").exists()) {
        className("android.view.View").text("A、7千人左右").findOne().click();
        click("提交")
    }
    if (className("android.view.View").text("直罗镇战役打了多长时间？").exists()) {
        className("android.view.View").text("C、5天").findOne().click();
        click("提交")
    }


};





// threads.start(function () {//启动另一个线程
//     while (true) {
//         sleep(10000);
//         toast("弹窗检测....")
//         if (id("tvRight").exists()) {
//             text("不，继续学习").click()
//             toastLog("选择继续学习")
//         }
//         if (id("exo_player_error_btn_id").text("播放异常,视频地址异常，或者网络不可用").exists()) {
//             id("exo_player_error_btn_id").text("播放异常,视频地址异常，或者网络不可用").findOne().click()
//             toastLog("选择重新播放")
//         }
//         if (className("android.widget.TextView").text("您当前网络不是wifi，是否继续观看").exists()) {
//             id("button1").findOne().click()
//             toastLog("选择继续观看")
//         }
//         if (text("继续")) {//默认使用数据网络
//             click("继续");
//             click("确定");
//         }
//     }
// });