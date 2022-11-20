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
checkid()//启动脚本


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
  var ttt = [{ fileName: "欢迎使用左小子搜题系统" }, { fileName: "本功能课程搜题和项目搜题合为一体" }]
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



var 提取的答案 = [];
var 答案 = "";
function 查题(题目) {
  arr1 = []
  arr = []
  w.disableFocus();
  var i = 0
  ui.run(function () {

    w.t1.setText("")
  });



  threads.start(function () {
    var 数据存在函数 = 题目.match(/（来源/);
    if (数据存在函数) {
      var 正则语法 = /(.+(?=（来源))/;
      var 筛选后的题目 = 题目.match(正则语法)[0];
    } else { log("无匹配"); };
    var t4 = http.get("http://fz.51aidian.com/api/apis/getanswer?q=" + 筛选后的题目);
    var 答案 = t4.body.json().list[0].answer;
    arr1.push(答案)
    ui.run(function () {
      if (t4.body.json().code == 1) {
        w.t1.setText(w.t1.getText() + "\n答案4: " + 答案 + "\n");
      } else {
        w.t1.setText(w.t1.getText() + "\n答案4: \n");
      } i++; w.disableFocus();
    });
  });

  threads.start(function () {
    let res = http.get("https://ghproxy.com/https://raw.githubusercontent.com/cx1937410794/ku/main/0mk/控制/项目题库.json", { headers: { 'Accept-Language': 'zh-cn,zh;q=0.5', 'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11' } });
    let json = res.body.json();
    var 答案 = json[题目];
    ui.run(function () {
      if (答案 !== undefined) {
        w.t1.setText(w.t1.getText() + "\n有自备答案: " + 答案 + "\n"); i++; w.disableFocus();
      } else if (答案 == undefined) {
        提取的答案.push(题目); files.write("/sdcard/题库.json", 提取的答案);
      };
    });
  });


  题目 = 题目替换(题目);
  threads.start(function () {
    var t4 = http.get("http://api.51aidian.com/api/Demo/question?token=a7a21b23962333265940242264ab0c671fb1764f&question=" + 题目);
    var 答案 = t4.body.json()
    arr1.push(答案.answer)
    ui.run(function () {
      if (答案.code == 1) {
        w.t1.setText(w.t1.getText() + "\n答案2: " + 答案.answer + "\n");
      } else if (答案.code == 0) {
        w.t1.setText(w.t1.getText() + "\n答案2: \n");
      } i++; w.disableFocus();
    });
  });
  threads.start(function () {
    var t4 = http.get("https://apiv.catpuzi.com/tiku3?question=" + 题目)
    var 答案 = t4.body.json();
    arr1.push(答案.answer);
    ui.run(function () {
      if (答案.code == 100) {
        w.t1.setText(w.t1.getText() + "\n答案1: " + 答案.answer + "\n");
      } else if (答案.code == 200) {
        w.t1.setText(w.t1.getText() + "\n答案1: \n");
      } i++; w.disableFocus();
    });
  });

  threads.start(function () {
    var t4 = http.get("http://ti.fakev.cn/hashTopic?token=RZXbFWrLvfBSHaSI&question=" + 题目)//http://ti.fakev.cn/hashTopic?question=
    var 答案 = t4.body.json()
    arr1.push(答案.data)
    答案 = 答案替换(答案.data)

    ui.run(function () {
      if (答案.code == 1) {
        w.t1.setText(w.t1.getText() + "\n答案5: " + 答案 + "\n");
      } else if (答案.code == -1) {
        w.t1.setText(w.t1.getText() + "\n答案5: \n");
      }; i++; w.disableFocus();
    });
  });


  threads.start(function () {
    var t4 = http.get("http://fz.51aidian.com/api/apis/getanswer?q=" + 题目)
    var 答案 = t4.body.json()
    arr1.push(答案.answer)
    ui.run(function () {
      if (答案.code == 1) {
        w.t1.setText(w.t1.getText() + "\n答案3: " + 答案.answer + "\n");
      } else {
        w.t1.setText(w.t1.getText() + "\n答案3: \n");
      } i++; w.disableFocus();
    });
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
  return 题目;
};

function 答案替换(答案) {
  答案 = 答案.replace("( )", "");
  答案 = 答案.replace("(  )", "");
  答案 = 答案.replace("(   )", "");
  答案 = 答案.replace("(    )", "");
  答案 = 答案.replace("(     )", "");
  答案 = 答案.replace("  ", "");
  答案 = 答案.replace(" ", "");
  答案 = 答案.replace("  ", "");
  答案 = 答案.replace("   ", "");
  答案 = 答案.replace("    ", "");
  答案 = 答案.replace("http://cx.icodef.com/img/token.jpg", "");
  答案 = 答案.replace("一之哥哥", "");
  答案 = 答案.replace("🙌没有人 👐比我 ☝️更懂 👌做题（刷新试试）", "");
  return 答案;
};





















































































//=================================================================================



function checkid() { //检查id函数
  toast("正在进行身份验证");
  console.info("当前安卓版本:" + device.release) //提示信息
  if (device.release < 7) {
    alert("安卓版本太低!请使用安卓7.0以上版本手机。")
    console.hide() //关闭日志窗口
    engines.stopAllAndToast(); //终止所有脚本
    exit();
  }
  //静音
  shell("input keyevent 164", false);
  launchPackage("com.moocxuetang"); //打开APP
  // waitForPackage("com.moocxuetang"); //等待APP出现
  toast("正在进行身份验证");
  if (textContains("跳过").findOne(5000)) {
    while (!click("跳过"));
    toastLog("关闭广告倒计时");
  } else {
    toastLog("没有广告倒计时");
  };
  关闭每日广告()
  返回首页()
  关闭每日广告()
  className("android.widget.TextView").text("我的").findOne().parent().click(); //切换到我的页面
  关闭每日广告()
  if (id("tvID").className("android.widget.TextView").findOne(3000) != null) { //获取个人id，如果没有登录则返回null
    var jzzx_id = id("tvID").findOne().text() //取ID文本
    var jzzxid = /ID\s(\d{4,8})/gi.exec(jzzx_id); //正则提取id号
    idlujing.put("idlujing", jzzxid[1]); //存ID
    toast("正在进行身份验证");
    threads.start(function () {
      function 到期时间() {
        let res = http.get("https://ghproxy.com/https://raw.githubusercontent.com/cx1937410794/ku/main/0mk/UI/右侧账号.json", {
          headers: {
            'Accept-Language': 'zh-cn,zh;q=0.5',
            'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11'
          }
        });
        if (res.statusCode != 200) {
          alert("❌获取失败: " + res.statusCode);
          return;
        }
        let json = res.body.json();
        let thisTime = json[jzzxid[1]];
        服务器一到期时间 = thisTime
        if (thisTime == undefined || thisTime == null) {
          console.error("ID：" + jzzxid[1] + "\n🕒到期时间:查无此号.\n尝试切换第二服务器")
          第二服务器()
          return;
        }

        thisTime = thisTime.replace(/-/g, '/');
        let time = new Date(thisTime);
        return 到期 = time.getTime();

      }
      function 网络时间() { //网络时间
        try {
          let data = "http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp".body.json();
          return Math.floor(data["data"]["t"] / 1000) + "000";
        } catch (error) {
          return Math.floor(new Date().getTime() / 1000) + "000";
        }
      }
      //——————————————————————————————————
      let 结果i = 到期时间() - (网络时间())
      if (结果i > 0) {
        console.log("到期时间:" + 服务器一到期时间)

        搜题权限 = "真"
        alert("验证成功")
      } else if (0 > 结果i) {
        let res = http.get("https://ghproxy.com/https://raw.githubusercontent.com/cx1937410794/ku/main/0mk/UI/右侧账号.json", {
          headers: {
            'Accept-Language': 'zh-cn,zh;q=0.5',
            'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11'
          }
        });
        if (res.statusCode != 200) {
          console.log("❌获取失败: " + res.statusCode);
          return;
        }
        let json = res.body.json();
        let thisTime = json[jzzxid[1]];
        console.error("ID：" + jzzxid[1] + "\n🕒到期时间:" + thisTime + "\nID到期，请充值.\n尝试切换第二服务器")
        第二服务器()
      }


      function 第二服务器() {
        var 登陆信息 = http.post("http://w.eydata.net/F7070128475F611E", {
          "UserName": "a" + jzzxid[1],
          "UserPwd": "a" + jzzxid[1],
          "Version": '3.2.6',
          "Mac": device.model
        }); //登录
        登陆返回信息 = 登陆信息.body.string()
        console.info("♥验证成功♥")
        console.log("本机对接密钥" + 登陆返回信息)
        if (登陆返回信息.length == 32) { //登陆成功时执行以下
          // threads.start(function () {
          var 退出登录 = http.post("http://w.eydata.net/97A7730FD7832AB7", {
            "StatusCode": 登陆返回信息,
            "UserName": "a" + jzzxid[1]
          });
          退出结果 = 退出登录.body.string()
          console.log("对接" + 退出结果 + "次")
          if (退出结果 == "1") { //成功
            搜题权限 = "真"
            alert("验证成功")
          } else {
            console.log("操作失败")
            exit()
          }

          return true //返回登陆成功
        } else if (登陆返回信息.length == -110) {
          toastLog("❌时间已到期,请充值.")
        } else if (登陆返回信息.length == -115) {
          console.log("用户已被禁用，如有疑问请联系客服。")
        } else if (登陆返回信息.length == -102) { //用户不存在
          toastLog("❌用户不存在.请检查登陆的ID是否一致！")
        }
      }
    });

  } else { //没有找到id号
    console.error("⚠️请查看是否登录，已终止执行软件")
    exit();
  }
};


var 循环总次数 = 0;
function 返回首页() {
  sleep(1000);
  let flag = false;
  var 次数 = 1;
  while (!flag) {
    if (text("学习室").exists()) {
      console.info("返回首页了")
      flag = true;
      break;
    }
    console.warn("返回主页");
    次数 = 次数 + 1
    sleep(1000);
    if (次数 > 5) {
      console.log("正在重启APP")
      if (!(launchApp(decodeURI("%E5%86%9B%E8%81%8C%E5%9C%A8%E7%BA%BF")) || launch('com.moocxuetang'))) { }//启动APP
      // sleep(2000)
      循环总次数 = 循环总次数 + 1
      sleep(1000)
      log(循环总次数)
      if (循环总次数 > 3) {
        console.log("重启3次失败，建议重启手机后再试")
        exit();
      }
      if (id("tvSkip").className("android.widget.TextView").findOne(5000) != null) { //跳过开屏
        while (!click("5s跳过"));
        返回首页()
      }
    }
    back()
    sleep(1000)
  }
}


function 关闭每日广告() {
  toast("正在进行身份验证");
  sleep(1000)
  if (id("ibClose").findOnce(1000)) {
    id("ibClose").findOne().click();
    log("关闭每日广告");
  } else {
    log("没有每日广告");
  };
};