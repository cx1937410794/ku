var idlujing = storages.create("shuju");

importClass(android.webkit.MimeTypeMap);
importClass(android.net.Uri)
let url = idlujing.get("主播链接");
let extension = MimeTypeMap.getFileExtensionFromUrl(url);
let mimeType = MimeTypeMap.getSingleton().getMimeTypeFromExtension(extension);
var mediaIntent = new Intent(Intent.ACTION_VIEW);
mediaIntent.setDataAndType(Uri.parse(url), mimeType);
app.startActivity(mediaIntent);
