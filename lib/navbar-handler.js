//place this code before the navbar in dom is assigned a variable
//navbar div syntax: <div id="_navtgl">(toggle icon img)</div><div id="_navbar"></div>
//suggested css: _navbar a{text-decoration:none;color:#ffffff;}

const _navbar = document.getElementById("_navbar");
const _navtgl = document.getElementById("_navtgl");
_navtgl.style.cssText =
  "position:fixed;height:min-content;width:min-content;margin:5px;inset:0px;z-index:4;";
_navbar.style.cssText =
  "position:fixed;height:100%;inset:0px;background-color:#000000;z-index:3;";
_navbar.style.display = "none";
_navbar.innerHTML =
  '<div style="margin:5px;">' +
  _navtgl.innerHTML +
  '</div><div style="display:flex;justify-content:center;"><div>' +
  _navbar.innerHTML +
  "</div></div>";
_navtgl.onclick = () => {
  _navbar.style.display = "block";
  _navtgl.style.display = "none";
};
_navbar.onclick = () => {
  _navtgl.style.display = "block";
  _navbar.style.display = "none";
};
