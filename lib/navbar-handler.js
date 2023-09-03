//place this code before the navbar in dom is assigned a variable
//navbar div syntax: <div id="_navtgl">(toggle icon img)</div><div id="_navbar"></div>
//suggested css: _navbar a{text-decoration:none;color:#ffffff;}

document.body.innerHTML += `
<div id="_navtgl" onclick="showNav()">
  <img src="images/navtgl.png" />
</div>
<div id="_navbar" onclick="hideNav()">
  <a href="/">
    <p>Homepage</p>
  </a>
  <a href="top-f2p-decks">
    <p>Top F2P Decks</p>
  </a>
  <a href="f2p-decks">
    <p>All F2P Decks</p>
  </a>
  <a href="kog-decks">
    <p>KOG Decks</p>
  </a>
  <a href="guides">
    <p>Duel Links Guides</p>
  </a>
  <a href="best-techs">
    <p>Best F2P Techs</p>
  </a>
  <a href="deck-builder">
    <p>Deck Builder</p>
  </a>
</div>
`;

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

function showNav() {
  document.getElementById("_navbar").style.display = "block";
  document.getElementById("_navtgl").style.display = "none";
}
function hideNav() {
  document.getElementById("_navbar").style.display = "none";
  document.getElementById("_navtgl").style.display = "block";
}
