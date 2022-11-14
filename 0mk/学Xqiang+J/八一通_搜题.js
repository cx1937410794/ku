// http://fz.51aidian.com/api/apis/getanswer?q={文本1}
// https://q.zhizhuoshuma.cn/api/?question={文本1}&token=zhizhuoshuma



function 关闭同名() {
  let currentEngine = engines.myEngine();
  let runningEngines = engines.all();
  let runningSize = runningEngines.length;
  let currentSource = currentEngine.getSource() + ''
  if (runningSize > 1) {
    runningEngines.forEach(compareEngine => {
      let compareSource = compareEngine.getSource() + ''
      if (currentEngine.id !== compareEngine.id && compareSource === currentSource) {
        // 强制关闭同名的脚本
        compareEngine.forceStop();
        toast("关闭其他");
      };
    });
  };
};
关闭同名();

var idlujing = storages.create("shuju");//配置文件
var 搜题权限 = "假";





var 大小 = storages.create("大小")
免费 = storages.create("免费")

var 宽度 = (device.width / 5) * 3
var 高度 = (device.height / 9) * 4
var 背景 = "#90eeeeee"
var 按钮 = "#60eeeeee"
var 字体 = "#90000000"

threads.start(function () {

  if (大小.get("透明") == undefined) {
    大小.put("透明", "1")
  }
  try {
    if (大小.get("w") != undefined) {
      宽度 = 大小.get("w")
    } else { 大小.put("w", 宽度) }

    if (大小.get("按钮") != undefined) {
      if (大小.get("透明") == "1") {

        var str = colors.toString(大小.get("按钮"))
        str = str.replace("ff", "35")
        按钮 = str
      } else {
        if (大小.get("透明") == "2") {

          var str = colors.toString(大小.get("按钮"))
          str = str.replace("ff", "00")
          按钮 = str
        } else { 按钮 = colors.toString(大小.get("按钮")) }

      }
    }

    if (大小.get("背景") != undefined) {
      if (大小.get("透明") == "1") {
        var str = colors.toString(大小.get("背景"))
        str = str.replace("ff", "55")

        背景 = str
      } else {
        if (大小.get("透明") == "2") {
          var str = colors.toString(大小.get("背景"))
          str = str.replace("ff", "00")

          背景 = str
        } else { 背景 = colors.toString(大小.get("背景")) }
      }
    }
    if (大小.get("字体") != undefined) {
      字体 = colors.toString(大小.get("字体"))
    }
    if (大小.get("h") != undefined) {
      高度 = 大小.get("h")
    } else { 大小.put("h", 高度) }
  } catch (e) {
    toast("初始化错误已重置")
    storages.remove("大小")
  }
  时间2 = storages.create("时间2")
});





w = floaty.window(
  <vertical id="action" bg="{{背景}}"   >

    <horizontal>
      <button id="Bmin" bg="{{按钮}}" textColor="black" text="小化" minWidth="30" textSize="10sp" textStyle="bold" />
      <button id="sz" bg="{{按钮}}" textColor="black" layout_weight="1" text="设置" textSize="10sp" textStyle="bold" />
      <button id="tuichu" bg="{{按钮}}" textColor="black" layout_weight="1" text="退出" textSize="10sp" textStyle="bold" />
    </horizontal>
    <horizontal h="auto">
      <button id="znst" gravity="center" bg="{{按钮}}" textColor="black" layout_weight="1" text="扫题" textSize="10sp" textStyle="bold" />
      <button id="dt" bg="{{按钮}}" textColor="black" layout_weight="1" text="答题" textSize="10sp" textStyle="bold" />
    </horizontal>
    <frame>
      <vertical h="auto" id='设置'>
        <ScrollView w="*"  >
          <vertical>
            <button id="点击按钮改变我" text="显示效果" gravity="center" />
            <button id="changeTextColor" text="改变文字颜色" />
            <button id="changeParentColor" text="改变背景颜色" />
            <button id="按钮" text="改按钮颜色" />

            <button id="变宽" text="变宽" />
            <button id="变小" text="变窄" />
            <button id="变高" text="变高" />
            <button id="变矮" text="变矮" />
            <button id="全透明" text="全透明" />
            <button id="透明" text="透明" />
            <button id="不透明" text="不透明" />
            <button id="重置" text="重置" />
          </vertical>
        </ScrollView>
      </vertical>
      <list w="*" id='jsFiles'>
        <text id='fileName' textColor="black" text='{{this.fileName}}' margin='10 10' bg='#60ffffff' ></text>
      </list>
      <vertical h="*" id="区域" >
        <input textColor="{{字体}}" gravity="left|top" id="tm" w="*" line="4" size="12sp" h="60" textColorHint="black" hint="请输入要搜索的题目..." text="" />
        <horizontal >
          <button bg="{{按钮}}" layout_weight="1" id="清空" text="清除" textColor="black" />
          <button bg="{{按钮}}" layout_weight="1" id="查询" text="查询" textColor="black" />
        </horizontal>
        <text bg="#10251451" id="tta" textSize="10" textColor="black" textStyle="bold" text="接口答案" gravity="center" w="*" />
        <ScrollView>
          <text id="t1" w="*" minHeight="100" color="{{字体}}" textSize="13sp" text="" />
        </ScrollView>
      </vertical>
    </frame>
  </vertical>

);
if (时间2.get("标志2") != "xinke2") {
  //  w.colose()
}
ui.run(function () {
  w.t1.setText("不要太快哦,会卡主的")
  w.setSize(大小.get("w"), 大小.get("h"))
  w.setPosition(40, 605)
  w.区域.visibility = "8"
  w.jsFiles.visibility = "0"
  w.设置.visibility = "8"
  var ttt = [{ fileName: "欢迎使用八一通系统" }, { fileName: "等待提示验证成功后即可进入答题" }]
  ui.run(function () {
    w.jsFiles.setDataSource(ttt)
  });
  w.disableFocus();
});
// w.t1.click(function(){
//     toast("复制成功")
//     setClip(w.t1.text())
//     })
w.sz.click(function () {
  w.requestFocus();
  w.设置.visibility = "0"
  w.区域.visibility = "8"
  w.jsFiles.visibility = "8"


});


w.changeParentColor.on("click", () => {
  var color = rndColor()

  大小.put("背景", color)
  log(大小.get("背景"))
  ui.run(function () {
    w.action.setBackgroundColor(color)
  });
});


w.changeTextColor.on("click", () => {
  var color = rndColor()
  log(colors.toString(color))
  大小.put("字体", color)
  w.点击按钮改变我.setTextColor(color)
});
w.按钮.on("click", () => {
  var color = rndColor()
  大小.put("按钮", color)
  w.点击按钮改变我.setBackgroundColor(color)
});

w.透明.on("click", () => {
  toast("已设置成透明状态，请关闭重新开启")
  大小.put("透明", 1)
});
w.全透明.on("click", () => {
  color = rndColor()
  大小.put("背景", color)
  color = rndColor()
  大小.put("按钮", color)
  toast("已设置成全透明状态，请关闭重新开启")
  大小.put("透明", 2)
});

w.不透明.on("click", () => {
  toast("已设置成不透明状态，请关闭重新开启")
  大小.put("透明", 0)
});




w.变宽.on("click", () => {
  if (大小.get("w") != undefined) {
    宽度 = 大小.get("w")
    宽度 = 宽度 + 30
    大小.put("w", 宽度)
    ui.run(function () {
      log(宽度)
      w.setSize(大小.get("w"), 大小.get("h"))
    });
  } else {
    宽度 = device.width / 2
  }
});
w.变小.on("click", () => {
  if (大小.get("w") != undefined) {
    宽度 = 大小.get("w")
    宽度 = 宽度 - 30
    大小.put("w", 宽度)
    ui.run(function () {
      log(宽度)
      w.setSize(大小.get("w"), 大小.get("h"))
    });
  } else {
    大小.put("w", w.getWidth())
  }
});
w.变高.on("click", () => {

  if (大小.get("h") != undefined) {
    高度 = 大小.get("h")
    高度 = 高度 + 30
    大小.put("h", 高度)
    ui.run(function () {
      log(高度)
      w.setSize(大小.get("w"), 大小.get("h"))
    });
  } else {
    高度度 = (device.height / 7) * 3

  }
});

w.变矮.on("click", () => {
  if (大小.get("h") != undefined) {
    高度 = 大小.get("h")
    高度 = 高度 - 30
    大小.put("h", 高度)
    ui.run(function () {
      log(高度)
      w.setSize(大小.get("w"), 大小.get("h"))
    });
  } else {
    高度度 = (device.height / 7) * 3
  }
});
w.重置.click(function () {
  storages.remove("大小")
});
function rndColor() {
  return colors.rgb(random(1, 255), random(1, 255), random(1, 255))
}
setInterval(() => {
}, 100);
w.dt.click(function () {
  ui.run(function () {
    w.disableFocus();

    w.设置.visibility = "8"
    w.区域.visibility = "0"
    w.jsFiles.visibility = "8"
  });
});
var arr = []
var listView = w.jsFiles
listView.on("item_click", function (item, i, itemView, listView) {
  var info = itemView.fileName.text()
  ui.run(function () {
    w.区域.visibility = "0"
    w.jsFiles.visibility = "8"
    w.设置.visibility = "8"
    w.tm.setText(filter(info))
  });
  setClip(filter(info))
});
var mm1 = [{
  fileName: "再点击一次如果没有题目的话，可能是图片。"
}]
w.znst.click(() => {
  arr = []
  w.disableFocus();
  if (w.查询.text() == "停止") {
    w.查询.setText("查询")
  }
  w.区域.visibility = "8"
  w.jsFiles.visibility = "0"
  w.设置.visibility = "8"
  var jsFiles = 查题1()
  var jsFileObjs = []
  if (jsFiles.length == 0) {
    listView.setDataSource(mm1)
  }
  if (jsFiles.length != 0) {
    jsFiles.map(
      (fileName) => {
        jsFileObjs.push({
          fileName: fileName
        })
      }
    )
    ui.run(function () {

      listView.setDataSource(jsFileObjs)
    });
  }
});
function 查题1() {
  w.disableFocus();
  var obj_text = textMatches(/[\s\S]*/);
  var obj_desc = descMatches(/[\s\S]*/);
  var i = 0
  var 题目 = obj_text.find()
  题目.forEach((vaule) => {

    if (vaule.text().length > 6 && vaule.text().length < 160) {

      arr[i] = vaule.text()
      i++
    }
  });
  var 题目 = obj_desc.find()
  题目.forEach((vaule) => {

    if (vaule.desc().length > 5 && vaule.desc().length < 160) {

      arr[i] = filter(vaule.desc())
      i++
    }
  });
  toast("一共" + i)
  return arr
}
/***********取交点*************/

w.tm.on("key", function (keyCode, event) {
  if (event.getAction() == event.ACTION_DOWN && keyCode == keys.back) {
    w.disableFocus();
    event.consumed = true;
  }
});
w.tm.on("touch_down", () => {
  w.requestFocus();
});
w.tuichu.click(() => {
  toast("退出");
  w.close();
  exit()
});
w.查询.on("click", function () {
  w.disableFocus();
  if (w.tm.text().length < 2) {
    toast("请输入完整的题目,不允许少于2个字哦⊙∀⊙！")
    return;
  }
  if (w.tm.text() != "" && w.查询.text() == "查询") {
    ui.run(function () {
      w.查询.setText("停止")
      log(filter(w.tm.text()))
      题目 = filter(w.tm.text())
      if (搜题权限 == "真") {
        查题(题目)
      } else if (搜题权限 !== "真") {
        alert("请先等待验证权限")
      }

    });
  } else {
    if (w.查询.text() == "停止") {
      ui.run(function () {
        w.查询.setText("查询")
      });
      toastLog("停止")
      threads.shutDownAll()
    }
  }
});

w.清空.click(function () {
  if (w.查询.text() == "停止") {
    ui.run(function () {
      w.查询.setText("查询")
    });
    toastLog("停止")
    threads.shutDownAll()
  }
  w.tm.setText("")
  toast("清除成功")
});
var x = 0, y = 0;//记录按键被按下时的触摸坐标
var windowX, windowY;//记录按键被按下时的悬浮窗位置
var downTime;//记录按键被按下的时间以便判断长按等动作
ui.run(function () {
  windowWidth = w.getWidth();
  windowHeight = w.getHeight();
});
w.Bmin.setOnTouchListener(function (view, event) {
  switch (event.getAction()) {
    case event.ACTION_DOWN:
      x = event.getRawX();
      y = event.getRawY();
      windowX = w.getX();
      windowY = w.getY();
      return true;
    case event.ACTION_MOVE:
      //移动手指时调整悬浮窗位置
      w.setPosition(windowX + (event.getRawX() - x),
        windowY + (event.getRawY() - y));
      return true;
    case event.ACTION_UP:

      //手指弹起时如果偏移很小则判断为点击
      if (Math.abs(event.getRawY() - y) < 5 && Math.abs(event.getRawX() - x) < 5) {

        if (w.Bmin.text() == "小化") {
          w.disableFocus()
          windowWidth = w.getWidth();
          windowHeight = w.getHeight();
          w.Bmin.setText("大化");
          w.setSize(180, 180);
        } else {
          w.Bmin.setText("小化");

          w.setSize(windowWidth - 1, windowHeight - 1);
        }
      }
      return true;
  }
  return true;
});

/**
 * 文字过滤
 */
function filter(text) {
  text = text.replace(/单选题|多选题|判断题/g, '');
  text = text.replace(/\[|\]/g, '');
  text = text.replace(/(^\d+\.)/, '');//过滤
  text = text.replace(/(\n)/g, '');//过滤换行
  return text;
}
var arr1 = []




function 查题(题目) {
  arr1 = []
  arr = []
  w.disableFocus();
  var i = 0
  ui.run(function () {

    w.t1.setText("")
  });
  // 题目 = 题目替换(题目);
  //线程1开始
  threads.start(function () {
    // try {
    //   // while (题目.indexOf(" ") >= 0) {//删空格
    //   //   题目 = 题目.replace(" ", "");
    //   //   题目 = 题目.replace("（", "");
    //   //   题目 = 题目.replace("）", "");
    //   //   题目 = 题目.replace("。", "");
    //   // } {
    //   //   log(题目);
    //   // }
    //   var t4 = http.get("http://api.51aidian.com/api/Demo/question?token=a7a21b23962333265940242264ab0c671fb1764f&question=" + 题目)
    //   var 答案 = t4.body.json()
    //   arr1.push(答案.answer)
    //   ui.run(function () {
    //     if (答案.answer == "") {
    //       w.t1.setText(w.t1.getText() + "\n答案2: 本接口特殊，需联系客服单独付费后使用\n")
    //     } else {
    //       w.t1.setText(w.t1.getText() + "\n答案2: " + 答案.answer + "\n")
    //     }
    //     i++;
    //     w.disableFocus();
    //   });
    // } catch (e) {
    //   log(e)
    //   ui.run(function () {
    //     w.t1.setText(w.t1.getText() + "\n答案2\n没有答案，抱歉" + "\n")
    //     i++;
    //   });
    // };


    // try {
    //   var t4 = http.get("https://apiv.catpuzi.com/tiku3?question=" + 题目)
    //   var 答案 = t4.body.json()
    //   arr1.push(答案.answer)
    //   log("测试结果答案1" + 答案.answer)
    //   ui.run(function () {
    //     w.t1.setText(w.t1.getText() + "\n答案1: " + 答案.answer + "\n")
    //     i++;
    //   });
    // } catch (e) {
    //   log(e)
    //   ui.run(function () {
    //     w.t1.setText(w.t1.getText() + "\n答案1\n没有答案，抱歉" + "\n")
    //   });
    // };

    // try {
    //   var t4 = http.get("http://ti.fakev.cn/hashTopic?question=" + 题目)
    //   var 答案 = t4.body.json()
    //   arr1.push(答案.data)
    //   log("测试结果2" + 答案.data)
    //   ui.run(function () {
    //     w.t1.setText(w.t1.getText() + "\n答案7: " + 答案.data + "\n")
    //     i++;
    //   });
    // } catch (e) {
    //   log(e)
    //   ui.run(function () {
    //     w.t1.setText(w.t1.getText() + "\n答案7\n没有答案，抱歉" + "\n")
    //   });
    // };

    // try {
    //   var t4 = http.get("https://q.zhizhuoshuma.cn/api/?question=" + 题目 + "&token=zhizhuoshuma")
    //   var 答案 = t4.body.json()
    //   arr1.push(答案.answer)
    //   log("测试结果答案B" + 答案)
    //   ui.run(function () {
    //     w.t1.setText(w.t1.getText() + "\n答案B\: " + 答案 + "\n")
    //     i++;
    //     // setClip(a.da)
    //   });
    // } catch (e) {
    //   log(e)
    //   ui.run(function () {
    //     w.t1.setText(w.t1.getText() + "\n答案B：没有答案，抱歉" + "\n")
    //     i++;
    //   });
    // };
    // try {
    //   var t4 = http.get("https://www.vvhan.com/HanWxApi/wkApi.php?key=hansApi-1655466387&ti=" + 题目 + "&times=1585982635000")
    //   var 答案 = t4.body.json()
    //   arr1.push(答案.answer)
    //   log("测试结果答案3" + 答案.answer)
    //   ui.run(function () {
    //     w.t1.setText(w.t1.getText() + "\n答案3\: " + 答案.answer + "\n")
    //     i++;
    //     // setClip(a.da)
    //   });
    // } catch (e) {
    //   log(e)
    //   ui.run(function () {
    //     w.t1.setText(w.t1.getText() + "\n答案3：没有答案，抱歉" + "\n")
    //     i++;
    //   });
    // };

    // http://fz.51aidian.com/api/apis/getanswer?q=人民军队紧紧扭住战斗力这个唯一的根本的标准，扭住（____）这个根本方向。
    // https://q.zhizhuoshuma.cn/api/?question=拥有（__）指导是我们党鲜明的政治品格和强大的政治优势。&token=zhizhuoshuma

    try {
      var t4 = http.get("http://fz.51aidian.com/api/apis/getanswer?q=" + 题目)
      var 答案 = t4.body.json().list[0].answer;
      arr1.push(答案.answer)
      log("测试结果答案A：" + 答案)
      ui.run(function () {
        w.t1.setText(w.t1.getText() + "\n答案A: " + 答案 + "\n")
        i++;
      });
    } catch (e) {
      log(e)
      ui.run(function () {
        w.t1.setText(w.t1.getText() + "\n答案A\n没有答案，抱歉" + "\n")
      });
    };

  });
  threads.start(function () {
    try {
      http.__okhttp__.setTimeout(8000);
      sleep(24000)
      ui.run(function () {
        w.查询.setText("查询")
      });
      toastLog("查询完毕")
      threads.shutDownAll()
    } catch (e) {
      w.查询.setText("查询")
    };
  });

};
function 题目替换(题目) {
  题目 = 题目.replace(" ", "");
  题目 = 题目.replace("（", "");
  题目 = 题目.replace("）", "");
  题目 = 题目.replace("。", "");
  题目 = 题目.replace(" ", "");
  题目 = 题目.replace("（", "");
  题目 = 题目.replace("）", "");
  题目 = 题目.replace("。", "");
  题目 = 题目.replace("()", "");
  题目 = 题目.replace("( )", "");
  题目 = 题目.replace("(  )", "");
  题目 = 题目.replace("(   )", "");
  题目 = 题目.replace("(    )", "");
  题目 = 题目.replace("(     )", "");
  题目 = 题目.replace("  ", "");
  题目 = 题目.replace(" ", "");
  题目 = 题目.replace("  ", "");
  题目 = 题目.replace("   ", "");
  题目 = 题目.replace("    ", "");
  log("题目输出：" + 题目)
  return 题目;
};



















































































let 文章积分;
let 文章时长积分;
let 音视频积分;
let 音视频时长积分;
let 一门课所有课件积分;
let 加入课程表积分;
let 订阅积分;
let 阅读一本图书;
let 收藏积分;
let 分享积分;
let 热点新闻积分;
let 热点微视积分;
let 参与答题积分;
let 答题正确积分;
importClass(android.graphics.drawable.BitmapDrawable);
importClass(java.util.Hashtable);
//importClass(com.google.zxing.qrcode.QRCodeWriter);
importPackage(com.google.zxing);
importPackage(com.google.zxing.common);
importPackage(com.google.zxing.client.j2se);
importClass(android.graphics.Bitmap);
importClass(java.io.FileOutputStream);
importClass(java.io.BufferedOutputStream);






function 启动软件() {
  toast("欢迎使用");
  console.setPosition(0, device.height / 2); //部分华为手机console有bug请注释本行
  // console.show(true); //部分华为手机console有bug请注释本行
  toast("正在启动app...");
  if (!(launchApp("360手机卫士") || launch('com.qihoo360.mobilesafe'))) {
    console.error("正在启动");
    // return;
  };
  var 启动加载次数 = 0;
  while (!text("军队应用").exists()) {
    启动加载次数++;
    if (启动加载次数 > 5) {
      back();
      sleep(1000);
      if (id("tv_content").className("android.widget.TextView").text("您确定要退出吗?").exists()) {
        id("btn_ok").findOne().click();
      };
    };
    toast("等待加载")
    if (id("n4").exists()) {
      id("n4").findOne().click();
    };
    if (textContains("取消").exists() && textContains("立即升级").exists()) {
      text("取消").click();
    };
    sleep(3000);
  };

  toast("完成app启动");
  sleep(1000)

};
function 进入学习强军() {
  if (text("学习强军").exists()) {
    text("学习强军").findOne().parent().click();

  } else {
    id("fr").text("军队应用").findOne().parent().child(1).click();
    sleep(1000);
    className("android.widget.RadioButton").text("  软件仓库  ").click()
    sleep(1000);
    className("android.widget.TextView").id("i2").text("学习强军").findOne().parent().click();
  };
  sleep(3000);    // id("tv_jump").text("跳 过").findOne().click()//跳过
  if (textContains("跳 过").findOne(5000)) { while (!click("跳 过")); toastLog("关闭广告倒计时"); } else {

    toast("没有广告倒计时");
  };
  sleep(1000);
  返回强军主页();
  while (!id("tv_home_tab_index2").text("学习").exists()) {
    toast("等待加载")

    if (textContains("取消").exists() && textContains("立即升级").exists()) {
      text("取消").click();
    };
    sleep(3000);
  };
  toast("完成进入学习强军");
  sleep(1000);
};










function 返回强军主页() {
  var 返回强军主页次数 = 0;
  while (!id("tv_home_tab_index2").text("学习").exists()) {
    toast("等待加载" + 返回强军主页次数);
    if (textContains("取消").exists() && textContains("立即升级").exists()) {
      text("取消").click();
    };
    返回强军主页次数++
    back();
    sleep(2000);
    if (id("tv_content").className("android.widget.TextView").text("您确定要退出吗?").exists()) {
      id("btn_cancel").findOne().click()
    }
    if (返回强军主页次数 == 5) {
      启动软件();
      进入学习强军();
      break;
    };
  };

};










//====================ID检测部分
//====================ID检测部分
//====================ID检测部分
function 删除二维码() {
  device.vibrate(100);
  fileList = new Array; //获取文件内容搜索字段
  searchFiles(String("/sdcard/"), fileList, {
    dir: String("Pictures"),
    file: String(".png"),
  }, 1);
  sleep(250);// log("内容" + fileList.length)
  if (fileList.length !== 0) {// log(fileList)                                 //进行删除
    for (j = 0, len = fileList.length; j < len; j++) {
      var 数据 = fileList[j]
      files.remove(数据.path)
    };
  };

  // });
  // };
};
// 删除二维码();

function 查询二维码() {
  device.vibrate(100);
  fileList = new Array; //获取文件内容搜索字段 
  searchFiles(String("/sdcard/"), fileList, {
    dir: String("Pictures"),
    file: String(".png"),
  }, 1);
  sleep(250);// log("内容" + fileList.length)
  if (fileList.length == 1) {
    var 数据 = fileList[0]
    return (数据.name)
  } else if (fileList.length !== 1) {
    删除二维码();
    // 点击保存二维码()
    if (fileList.length == 1) {
      var 数据 = fileList[0]
      return (数据.name)
    } else if (fileList.length !== 1) {
      删除二维码();
      // 点击保存二维码()
    };
  };
};
function searchFiles(dir, list, matchObj, C, D) {
  files.listDir(dir).forEach(fileName => { //遍历该文件夹的文件
    var path = files.join(dir, fileName);
    if (files.isDir(path)) { //如果是子文件夹则继续扫描子文件夹的文件
      if ((!C && C != 0) || C > 0) {
        if (!D) {
          if (!matchObj.dir || isMatch(fileName, matchObj.dir)) {
            searchFiles(path, list, matchObj, C - 1, true);
          };
        } else {
          searchFiles(path, list, matchObj, C - 1, D);
        };
      };
    } else {
      if (!matchObj.dir || D) {
        if (!matchObj.file || isMatch(fileName, matchObj.file)) {
          if (!matchObj.fileIn || isMatch(String(files.read(path)), matchObj.fileIn)) {
            list.push({//则把它添加到列表中
              name: fileName,
              parent: dir,
              path: path
            });
          };
        };
      };
    };
  });
};
function isMatch(string, match) {
  if (typeof string != "string") {
    throw ">" + string + "< must be string"
  };
  return match instanceof RegExp ? match.test(string) : (string.indexOf(match) + 1);
};


function 解析二维码(imgPath) {
  try {
    var pixels = images.readPixels(imgPath);
    var w = pixels.width;
    var h = pixels.height;
    var binaryBitmap = new BinaryBitmap(new HybridBinarizer(new RGBLuminanceSource(w, h, pixels.data)));
    var qrCodeResult = new MultiFormatReader().decode(binaryBitmap);
    var 结果 = qrCodeResult.getText()
    setClip(结果);
    return 结果;

  } catch (e) {
    toast("查询失败")
  }
};
function 使用权限验证() {
  返回强军主页();
  id("iv_mine_top").findOne().click()
  id("im_my_user_view").waitFor()
  sleep(100);
  id("im_my_user_view").findOne().click()
  id("tv_title").className("android.widget.TextView").text("我的二维码").waitFor()
  sleep(100);
  id("tv_title").className("android.widget.TextView").text("我的二维码").findOne().parent().click()
  id("profile_tv_qr_save_phone").text("保存到手机").waitFor()
  sleep(100);
  id("profile_tv_qr_save_phone").text("保存到手机").findOne().click()
  sleep(100);


  device.vibrate(100);
  fileList = new Array;
  searchFiles(String("/sdcard/"), fileList, {
    dir: String("Pictures"),
    file: String(".png"),
  }, 1);
  sleep(250);
  if (fileList.length == 1) {
    var 数据 = fileList[0]
    var 取二维码文件名 = 数据.name
  } else if (fileList.length !== 1) {
    删除二维码();
    if (fileList.length == 1) {
      var 数据 = fileList[0]
      var 取二维码文件名 = 数据.name
    } else if (fileList.length !== 1) {
      删除二维码();
    };
  };





  sleep(100);
  // var 取文件完整目录 = files.path("/sdcard/Pictures/" + 取二维码文件名);
  // sleep(100);
  // runtime.loadDex("./res/zxing.dex");
  // importPackage(com.google.zxing);
  // importPackage(com.google.zxing.common);
  // importPackage(com.google.zxing.client.j2se);



  let dexFilePath = "./res/zxing.dex";
  runtime.loadDex(dexFilePath);
  var imgPath = files.path("/sdcard/Pictures/" + 取二维码文件名)
  importClass(android.graphics.drawable.BitmapDrawable);
  importClass(java.util.Hashtable);
  //importClass(com.google.zxing.qrcode.QRCodeWriter);
  importPackage(com.google.zxing);
  importPackage(com.google.zxing.common);
  importPackage(com.google.zxing.client.j2se);
  importClass(android.graphics.Bitmap);
  importClass(java.io.FileOutputStream);
  importClass(java.io.BufferedOutputStream);
  sleep(100);

  sleep(100);
  var 二维码分析结果 = /[\u4e00-\u9fa5_a-zA-Z0-9_]{8,11}/gi.exec(解析二维码(imgPath)); //正则



  // 解析二维码(imgPath)


  threads.start(function () {
    function 到期时间() {
      let res = http.get("raw.gh.fakev.cn/cx1937410794/ku/main/0mk/学Xqiang+J/八一通权限信息.json", { headers: { 'Accept-Language': 'zh-cn,zh;q=0.5', 'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11' } });
      if (res.statusCode != 200) {
        alert("❌获取失败: " + res.statusCode);
        return;
      };
      let json = res.body.json();
      let thisTime = json[二维码分析结果[0]];
      if (!thisTime) {//先判断有无这个ID
        // ui.run(() => { ui.验证结果显示窗口.setText("登录失败"); });
        // ui.run(() => { ui.有效期显示窗口.setText("1970-1-1"); });
        // ui.run(() => { ui.验证权限显示窗口.setText("无权限"); });
        toast("无使用权限");
        alert("请先激活\n您的ID：" + 二维码分析结果[0] + "\n(已帮您复制)");
        setClip(二维码分析结果[0]);
        exit();
        // return;
      };
      let thisTime时间 = thisTime.时间
      thisTime时间 = thisTime时间.replace(/-/g, '/');
      let time = new Date(thisTime时间);
      return 到期 = time.getTime() / 1000;
    };
    function 网络时间() { //网络时间
      try { let data = "http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp".body.json(); return Math.floor(data["data"]["t"] / 1000) + "000"; } catch (error) {
        return Math.floor(new Date().getTime() / 1000);
      };
    };

    //——————————————————————————————————
    let 结果i = 到期时间() - (网络时间());
    // alert(结果i, 到期时间(), 网络时间())
    if (结果i > 0) {
      let res = http.get("raw.gh.fakev.cn/cx1937410794/ku/main/0mk/学Xqiang+J/八一通权限信息.json", { headers: { 'Accept-Language': 'zh-cn,zh;q=0.5', 'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11' } });
      if (res.statusCode != 200) {
        alert("❌获取失败: " + res.statusCode);
        return;
      };
      let json = res.body.json();
      let thisTime = json[二维码分析结果[0]]
      let thisTime时间 = thisTime.时间
      let thisTime身份 = json[二维码分析结果[0]];
      thisTime身份 = thisTime身份.身份
      // ui.run(() => { ui.验证结果显示窗口.setText("登录成功"); });
      // ui.run(() => { ui.有效期显示窗口.setText(thisTime时间); });
      // ui.run(() => { ui.验证权限显示窗口.setText(thisTime身份); });
      toast("验证成功\n到期时间:" + thisTime时间)
      toast("" + thisTime身份)

      搜题权限 = "真"
      alert("验证成功");
      return;
    } else if (0 > 结果i) {
      let res = http.get("raw.gh.fakev.cn/cx1937410794/ku/main/0mk/学Xqiang+J/八一通权限信息.json", { headers: { 'Accept-Language': 'zh-cn,zh;q=0.5', 'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11' } });
      if (res.statusCode != 200) {
        alert("❌获取失败: " + res.statusCode);
        return;
      };
      let json = res.body.json();
      let thisTime = json[二维码分析结果[0]]
      let thisTime时间 = thisTime.时间
      alert("权限已到期");
      toast("时间:" + thisTime时间);
      exit();

    };
  });

};

删除二维码();
启动软件();
进入学习强军();
使用权限验证();


删除二维码(); 