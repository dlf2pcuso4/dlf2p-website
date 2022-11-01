//switches stylesheet depending on window size
//put script tag before _ismobile is used

var _isMobile = false;
if (window.innerWidth < window.innerHeight) {
  _isMobile = true;
  document.head.innerHTML +=
    '<link rel="stylesheet" href="lib/stylesheet-mobile.css" />';
} else {
  document.head.innerHTML +=
    '<link rel="stylesheet" href="lib/stylesheet.css" />';
}
