// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//document.getElementById("content").getElementsByTagName("img")
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
console.log(clonenode);
}



var lk = document.createElement('link');
lk.rel = "stylesheet";
lk.href = chrome.extension.getURL('lightbox.css');
lk.type = "text/css";
lk.media = "screen";

// var lk1 = document.createElement('link');
// lk1.rel = "stylesheet";
// lk1.href = chrome.extension.getURL('screen.css');
// lk1.type = "text/css";
// lk.media = "screen";
document.getElementsByTagName('head')[0].appendChild(lk); 
var script = document.createElement('script');
var script1 = document.createElement('script');
var script2 = document.createElement('script');
var script3 = document.createElement('script');
script.type = 'text/javascript';
script1.type = 'text/javascript';
script2.type = 'text/javascript';
script3.type = 'text/javascript';
script.src = chrome.extension.getURL('jquery-1.7.2.min.js');
document.getElementsByTagName('head')[0].appendChild(script); 
// script2.src = chrome.extension.getURL('jquery-ui-1.8.18.custom.min.js');
// document.getElementsByTagName('head')[0].appendChild(script2); 
// script3.src = chrome.extension.getURL('jquery.smooth-scroll.min.js');
// document.getElementsByTagName('head')[0].appendChild(script3);
script1.src = chrome.extension.getURL('lightbox.js');
document.getElementsByTagName('head')[0].appendChild(script1); 



//<link rel="stylesheet" href="lightbox.css" type="text/css" media="screen">
// document.writeln("<link rel='stylesheet' href='extensions/lightbox.css' type='text/css' media='screen' />");
// document.writeln("<script type='text/javascript' src="+chrome.extension.getURL('prototype.js')+"></script>");
//   document.writeln("<script type='text/javascript' src='scriptaculous.js?load=effects'></script>");
// document.writeln("<script type='text/javascript' src='lightbox.js'></script>");
