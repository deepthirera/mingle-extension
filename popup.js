// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

//document.getElementById("content").getElementsByTagName("img")
var imgs = document.getElementById("content").getElementsByTagName("img");

  e = document.getElementById("card_show_container")
e.parentNode.removeChild(e)
for(var i = 0; i < imgs.length; ++i) {
       // alert(imgs[i].src);
//  var newImg = document.createElement("img");

  //var newImg = new Image()
  //newImg.src = imgs[i].src;
//newImg.height = 100;
//newImg.width = 100;
//document.body.appendChild(newImg);
var j = document.createElement("img");
j.src = imgs[i].src;
j.height = 500;
j.width = 500;
var a = document.createElement('a');
a.appendChild(j);
a.href = j.src;
a.rel = "lightbox[Stories]"
document.body.appendChild(a);
}
var script = document.createElement('script');
var script1 = document.createElement('script');
var script2 = document.createElement('script');
var script3 = document.createElement('script');
script.type = 'text/javascript';
script1.type = 'text/javascript';
script2.type = 'text/javascript';
script3.type = 'text/javascript';
script.src = chrome.extension.getURL('prototype.js');
document.getElementsByTagName('head')[0].appendChild(script); 
script1.src = chrome.extension.getURL('lightbox.js');
document.getElementsByTagName('head')[0].appendChild(script1); 
script2.src = chrome.extension.getURL('scriptaculous.js?load=effects');
document.getElementsByTagName('head')[0].appendChild(script2); 
script3.src = chrome.extension.getURL('effects.js');
document.getElementsByTagName('head')[0].appendChild(script3);
var lk = document.createElement('link');

//<link rel="stylesheet" href="lightbox.css" type="text/css" media="screen">
// document.writeln("<link rel='stylesheet' href='extensions/lightbox.css' type='text/css' media='screen' />");
// document.writeln("<script type='text/javascript' src="+chrome.extension.getURL('prototype.js')+"></script>");
//   document.writeln("<script type='text/javascript' src='scriptaculous.js?load=effects'></script>");
// document.writeln("<script type='text/javascript' src='lightbox.js'></script>");
// 
