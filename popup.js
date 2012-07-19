if ((document.getElementById("content").getElementsByTagName("img")).length > 0) {
  var mingle_images = document.getElementById("content").getElementsByTagName("img");
  var image_link = document.createElement('a');
  image_link.rel = "lightbox[Stories]";

  img_length = mingle_images.length;
  for(var i=0; i< img_length; i++){
    var clonenode = image_link.cloneNode(true);
    clonenode.href = mingle_images[i].src;
    var par = mingle_images[i].parentNode;
    var ref = par.replaceChild(clonenode,mingle_images[i]);

    clonenode.appendChild(ref);

  }

  var css_link = document.createElement('link');
  css_link.rel = "stylesheet";
  css_link.href = chrome.extension.getURL('lightbox.css');
  css_link.type = "text/css";
  css_link.media = "screen";
  document.getElementsByTagName('head')[0].appendChild(css_link); 
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = chrome.extension.getURL('lightbox.js');
  document.getElementsByTagName('head')[0].appendChild(script); 

  var icon_link = document.createElement('a');
  var img = document.createElement("img");
  img.src=chrome.extension.getURL('new.png');
  img.setAttribute('height',70);
  img.setAttribute('width',70);
  icon_link.href = "#";
  icon_link.appendChild(img);

  var top_header = document.getElementById("card_show_actions_without_back_link_top");
  top_header.appendChild(icon_link);
  icon_link.onclick = Start_slide_show;
}

function Start_slide_show()
{
  var all_images = document.getElementById("content").getElementsByTagName("img");
  all_images[0].click();
}
