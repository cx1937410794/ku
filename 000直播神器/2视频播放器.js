var idlujing = storages.create("shuju"); //被存的数据路径

importClass(android.webkit.MimeTypeMap);
importClass(android.net.Uri)
let url = idlujing.get("主播链接"); //示例，实际填你的网络视频链接
let extension = MimeTypeMap.getFileExtensionFromUrl(url);
let mimeType = MimeTypeMap.getSingleton().getMimeTypeFromExtension(extension);
var mediaIntent = new Intent(Intent.ACTION_VIEW);
mediaIntent.setDataAndType(Uri.parse(url), mimeType);
app.startActivity(mediaIntent);
