if ((document.getElementById("content").getElementsByTagName("img")).length > 0) {
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

var buttonnode= document.createElement('input');
buttonnode.setAttribute('type','button');
buttonnode.setAttribute('value','Slideshow');

var top_header = document.getElementById("card_show_actions_without_back_link_top");
top_header.appendChild(buttonnode);
buttonnode.onclick = Start_slide_show;
}

function Start_slide_show()
{
var all_images = document.getElementById("content").getElementsByTagName("img");
all_images[0].click();
}
