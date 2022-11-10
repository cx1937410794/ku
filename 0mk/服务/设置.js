"ui";
var idlujing = storages.create("shuju");//配置文件
ui.statusBarColor("#000000")
ui.layout(
    <ScrollView>
        <vertical>
            <appbar bg="#000000">
                <toolbar id="toolbar" title="设置" />
            </appbar>
            <card w="*" h="auto" margin="10 5" cardCornerRadius="20dp"
                cardElevation="10dp" gravity="center_vertical">

                <vertical padding="18 8" h="auto">
                    <text text="电子书设置" size="70px" textColor="black" gravity="center" />
                    <text textColor="black" textSize="18sp" layout_weight="0">最大翻页时间 单位:分</text>
                    <horizontal>
                        <input inputType="number" id="电子书总阅读的时间" h="auto" w="250" gravity="top" />
                    </horizontal>

                    <text textColor="black" textSize="18sp" layout_weight="0">最快翻页秒数 单位:秒</text>
                    <horizontal>
                        <input inputType="number" id="电子书翻页的时间" h="auto" w="250" gravity="top" />
                    </horizontal>

                    <text textColor="black" textSize="18sp" layout_weight="0">最慢翻页秒数 单位:秒</text>
                    <horizontal>
                        <input inputType="number" id="电子书翻页的最慢时间" h="auto" w="250" gravity="top" />
                    </horizontal>


                    <text text="八一通设置" size="70px" textColor="black" gravity="center" />
                    <radiogroup>
                        <checkbox id="八一通评论开关" text="一键积分银行  评论开关" ></checkbox>
                    </radiogroup>


                </vertical>



            </card>
            <button text="一键保存" gravity="center" style="Widget.AppCompat.Button.Colored" id="saveall" marginLeft="50" marginRight="50" />
            <text textColor="black" textSize="18sp" layout_weight="0">PS：建议每月更换范围数</text>
        </vertical>
    </ScrollView>
);







//————————————————————————————————————————————————————————————————————————————————电子书部分
var 电子书翻页总时间 = idlujing.get("电子书翻页总时间");//读
if (电子书翻页总时间 !== undefined) {//如果查询不是空白
    ui.电子书总阅读的时间.setText(电子书翻页总时间);//显示读取的内容
} else {
    idlujing.put("电子书翻页总时间", "10080");  //保存的内容
}

var 电子书翻页时间 = idlujing.get("电子书翻页时间");//读
if (电子书翻页时间 !== undefined) {//如果查询不是空白
    ui.电子书翻页的时间.setText(电子书翻页时间);//显示读取的内容
} else {
    idlujing.put("电子书翻页时间", "3");  //保存的内容
}

var 电子书翻页最慢时间 = idlujing.get("电子书翻页最慢时间");//读
if (电子书翻页最慢时间 !== undefined) {//如果查询不是空白
    ui.电子书翻页的最慢时间.setText(电子书翻页最慢时间);//显示读取的内容
} else {
    idlujing.put("电子书翻页最慢时间", "7");  //保存的内容
}

var 八一通评论开关 = idlujing.get("八一通评论开关");//读
if (八一通评论开关 !== undefined) {//如果查询不是空白
    ui.八一通评论开关.checked = 八一通评论开关;//显示读取的内容
} else {
    idlujing.put("八一通评论开关", true);  //保存的内容
}




//————————————————————————————————————————————————————————————————————————————————保存部分
ui.saveall.click(() => {

    //电子书
    if (ui.电子书总阅读的时间.text() < 10) {
        alert("电子书总阅读时间10-10080分")
        return false;
    }
    if (ui.电子书总阅读的时间.text() > 10081) {
        alert("电子书总阅读时间10-10080分")
        return false;
    }
    if (ui.电子书翻页的时间.text() < 2) {
        alert("电子书最快翻页速度2-60秒")
        return false;
    }
    if (ui.电子书翻页的时间.text() > 60) {
        alert("电子书最快翻页速度2-60秒")
        return false;
    }
    if (ui.电子书翻页的最慢时间.text() < 2) {
        alert("不建议最慢翻页速度2-120秒")
        return false;
    }
    if (ui.电子书翻页的最慢时间.text() > 121) {
        alert("不建议最慢翻页速度2-120秒")
        return false;
    }
    if (ui.电子书翻页的最慢时间.text() > ui.电子书翻页的最慢时间.text()) {
        alert("翻页最快速度不得比最慢速度慢")
        return false;
    }




    idlujing.put("电子书翻页总时间", ui.电子书总阅读的时间.text());
    idlujing.put("电子书翻页时间", ui.电子书翻页的时间.text());
    idlujing.put("电子书翻页最慢时间", ui.电子书翻页的最慢时间.text());



    if (ui.八一通评论开关.checked == true) {//如果查询不是空白
        idlujing.put("八一通评论开关", true);  //保存的内容
    } else if (ui.八一通评论开关.checked == false) {
        idlujing.put("八一通评论开关", false);  //保存的内容
    }


    toastLog("已保存所有设置");
});

