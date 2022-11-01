//place this code before the navbar in dom is assigned a variable
//navbar div syntax: <div id="_navtgl">(toggle icon img)</div><div id="_navbar"></div>
//suggested css: _navbar a{text-decoration:none;color:#ffffff;}

const _navbar = document.getElementById("_navbar");
const _navtgl = document.getElementById("_navtgl");
_navtgl.style.cssText =
  "position:fixed;height:min-content;width:min-content;margin:5px;inset:0px;z-index:4;";
_navbar.style.cssText =
  "position:fixed;height:100%;inset:0px;padding-top:" +
  _navtgl.offsetHeight +
  "px;background-color:#000000;z-index:3;justify-content:center;";
_navbar.style.display = "none";
_navbar.innerHTML = "<div>" + _navbar.innerHTML + "</div>";
_navtgl.onclick = () => {
  if (_navbar.style.display == "none") {
    _navbar.style.display = "flex";
  } else {
    _navbar.style.display = "none";
  }
};
