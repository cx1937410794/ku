"ui";
const appid = "wxd5eb28cd2aa4bfab";
var 应用名称 = "军职在线"
zzcx()
ui.statusBarColor("#000000")
function zzcx() {
    ui.layout(
        <vertical>
            <horizontal>
                <img h="400" src="http://img04.sogoucdn.com/app/a/100520146/78584786953a1a84982f11d1fcda8261" id="qrCode">
                </img>
            </horizontal>
            <card id="c" w="*" h="40" gravity="center" cardCornerRadius="2dp" margin="2 2" >
                <text id="getAuth" w="*" h="60" gravity="center" textSize="20" text="start">
                </text>
            </card>
            <text id="标签1" marginTop="0" text="定制功能请联系客服。" textSize="30" textColorHint="red" gravity="center" textColor="MAGENTA" textSize="30" />
        </vertical>

    );


    function setNgde(i, i2, str, str2) {
        let f2 = android.graphics.Color.parseColor(str);
        let f3 = android.graphics.Color.parseColor(str2);
        let gradientDrawable = new android.graphics.drawable.GradientDrawable();
        gradientDrawable.setColor(f2);
        if (i2 > 0) {
            gradientDrawable.setCornerRadius(i2);
        }
        if (i > 0) {
            gradientDrawable.setStroke(i, f3);
        }
        return gradientDrawable;
    }
    var thread;

    ui.getAuth.on("click", function () {
        ui.getAuth.setText("正在对接")
        if (thread) {
            thread.interrupt();
            thread = null;
        }
        getAuthImg();


    })
    //alert(idlujing.get("idlujing"))
    //    if (idlujing.get("idlujing") != null || idlujing.get("idlujing") != "") { //正则读取配置

    //        ui.标签1.setText("启动ID:" + idlujing.get("idlujing") + "授权")
    //    }

    function getAuthImg() {
        thread = threads.start(function () {

            var back = "https://open.weixin.qq.com/connect/app/qrconnect?appid=" + appid + "&bundleid=(null)&scope=snsapi_userinfo&state=w&from=message&isappinstalled=0"

            var res = http.get(back, {
                headers: {
                    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Mobile/12A365 MicroMessenger/5.4.1 NetType/WIFI WebView/doc"
                }
            }).body.string();
            try {

                var uuid = res.split("uuid: \"")[1].split("\"")[0]
                var imgUrl = res.split("auth_qrcode\" src=\"")[1].split("\"")[0]
                if (imgUrl) {
                    ui.run(function () {
                        console.log(imgUrl);
                        ui.qrCode.attr("src", imgUrl);
                        ui.getAuth.setText("两个手机配合，用微信扫码。")
                    })
                }
                threads.start(function () {
                    var flag = true;
                    while (flag) {
                        var authUrl = "https://long.open.weixin.qq.com/connect/l/qrconnect?uuid=" + uuid + "&f=url&_=" + new Date().getTime();
                        var resp = http.get(authUrl, {
                            headers: {
                                "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Mobile/12A365 MicroMessenger/5.4.1 NetType/WIFI WebView/doc"
                            }
                        }).body.string();
                        if (resp) {
                            if (resp.indexOf("oauth") != -1) {
                                toast("扫码成功");
                                ui.run(function () {
                                    ui.getAuth.setText("授权成功");
                                    console.log(resp);
                                })
                                flag = false;
                                console.log(resp)
                                var str = resp.split(";");
                                console.log(str);
                                var resUrl = str[1].replace("window.wx_redirecturl=", "").replace("\'", "").replace("\'", "");
                                var uri = android.net.Uri;
                                var Uri = uri.parse(resUrl);
                                var code = Uri.getQueryParameter("code");

                                goGame(应用名称, appid, code);
                            }
                            sleep(1000);
                        }
                    }
                })
            } catch (error) {
                toast(error)
                ui.run(function () {
                    ui.getAuth.setText("获取授权二维码失败,请重试..");
                })
            }

        })
    }

    function goGame(gameName, appid, code) {
        var state = "w"
        var package = app.getPackageName(gameName);
        var intent = new android.content.Intent();
        intent.setClassName(package, package + ".wxapi.WXEntryActivity");
        var bundle = new android.os.Bundle;
        bundle.putString("_wxapi_sendauth_resp_state", state);
        bundle.putString("_wxapi_sendauth_resp_token", code);
        bundle.putString("_wxapi_baseresp_transaction", "weixin_login");
        bundle.putString("_wxapi_sendauth_resp_lang", "zh_CN");
        bundle.putInt("_wxapi_command_type", 1);
        bundle.putString("_wxapi_sendauth_resp_country", "CN");
        bundle.putString("wx_token_key", "com.tencent.mm.openapi.token");
        state = encodeURIComponent(state)
        bundle.putString("_wxapi_sendauth_resp_auth_result", ""); //
        bundle.putString("_wxapi_sendauth_resp_url", appid + "://oauth?code=" + code + "&state=" + state);
        bundle.putInt("_wxapi_baseresp_errcode", 0);
        bundle.putString("_wxapi_baseresp_errstr", "null");
        bundle.putString("_wxapi_baseresp_openId", "null");
        intent.putExtras(bundle);
        intent.putExtra("_mmessage_sdkVersion", 0x26070000); //0x25050800
        intent.putExtra("_mmessage_appPackage", "com.tencent.mm");
        intent.putExtra("_mmessage_content", appid + "://oauth?code=" + code + "&state=" + state);
        intent.putExtra("_mmessage_checksum", gs(appid + "://oauth?code=" + code + "&state=" + state, 0x26070000, "com.tencent.mm"));
        intent.putExtra("_message_token", "null");
        intent.addFlags(android.content.Intent.FLAG_ACTIVITY_NEW_TASK); //0x10000000
        activity.startActivity(intent);
        // exit()
    }

    function gs(str, i, str2) {
        return java.lang.String(md5((str + i + str2 + "mMcShCsTr").substring(1, 9))).getBytes()
    }

    function md5(string) {
        let res = java.math
            .BigInteger(
                1,
                java.security.MessageDigest.getInstance('MD5').digest(
                    java.lang.String(string).getBytes()
                )
            )
            .toString(16);
        while (res.length < 32) res = '0' + res;
        return res;
    }
}