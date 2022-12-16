"ui";
var idlujing = storages.create("shuju"); //被存的数据路径
ui.statusBarColor("#000000");
ui.layout(
    <vertical gravity="center_horizontal" bg="#000000">
        <VideoView id="video" w="*" h="*" />
        <frame w="360" h="360">
            <text id="公告" textSize="16sp" textColor="#000000" text="公告:五秒左右会卡一下,请稍等几秒." />
        </frame>
    </vertical>
);



//播放网络视频链接
ui.video.setVideoURI(android.net.Uri.parse(idlujing.get("主播链接")));
ui.video.start();
