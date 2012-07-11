var imgs = document.getElementById("content").getElementsByTagName("img");
var abcd = document.createElement('a');
abcd.rel = "lightbox[Stories]";

img_length = imgs.length;
for(var i=0; i< img_length; i++){
var clonenode = abcd.cloneNode(true);
clonenode.href = imgs[i].src;
var par = imgs[i].parentNode;
var ref = par.replaceChild(clonenode,imgs[i]);

clonenode.appendChild(ref);

}

var lk = document.createElement('link');
lk.rel = "stylesheet";
lk.href = chrome.extension.getURL('lightbox.css');
lk.type = "text/css";
lk.media = "screen";
document.getElementsByTagName('head')[0].appendChild(lk); 
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = chrome.extension.getURL('lightbox.js');
document.getElementsByTagName('head')[0].appendChild(script); 
