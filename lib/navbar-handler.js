//place this code before the navbar in dom is assigned a variable
if (!_isMobile) {
  const navCss = document.createElement("style");
  navCss.innerHTML = `
nav {
  background-color: #00000080;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 7vh; /*x0.07, x0.14*/
  margin: 0.7vw 1.4vh;
}
nav a {
  color: white;
  padding: 0.7vw 2.8vh;
  margin: 0 0.7vh;
  border: 0px;
  font-size: 1.4vw;
  transition: background-color 0.3s, font-size 0.3s;
}
nav a:hover {
  background-color: #5e3cb3;
  font-size: 1.6vw;
}
nav .selected {
  background-color: #5e3cb3;
  font-size: 1.6vw;
}
`;
  document.head.appendChild(navCss);
  const ogClass = ["", "", "", "", "", ""];
  const matchPage = [
    "Duel Links F2P",
    "Top Free to Play Decks",
    "Free to Play Decks",
    "Duel Links Guides",
    "Best F2P Duel Links Techs",
    "Deck Builder",
  ];
  for (let i = 0; i < ogClass.length; i++) {
    if (document.getElementsByTagName("h1")[0].innerHTML == matchPage[i]) {
      document.getElementsByTagName("h1")[0].style.display = "none";
      ogClass[i] = 'class="selected"';
    }
  }
  document.body.innerHTML = `
<nav>
  <img
    src="images/nobglogo.png"
    style="height: 5.6vh; margin-right: 1.4vw; cursor: pointer"
    onclick="(window.open('/','_self'))()"
  />
  <a href="/" ${ogClass[0]}>Home</a>
  <a href="top-f2p-decks" ${ogClass[1]}>Top F2P</a>
  <a href="f2p-decks" ${ogClass[2]}>All F2P</a>
  <a href="guides" ${ogClass[3]}>Guides</a>
  <a href="best-techs" ${ogClass[4]}>F2P Techs</a>
  <a href="deck-builder" ${ogClass[5]}>Deck Builder</a>
</nav>
${document.body.innerHTML}
`;
} else {
  //the old stuff
  const navCss = document.createElement("style");
  navCss.innerHTML = `
  #_navbar {
    width: 55%;
    cursor: pointer;
  }
  #_navbar img {
    width: 12vw;
  }
  #_navtgl img {
    width: 12vw;
    cursor: pointer;
  }
  #_navbar p {
    font-size: 4vw;
    margin: 3vh;
  }
  `;
  document.head.appendChild(navCss);
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
    '</div><div style="display:flex;justify-content:center;"><div id="_navlinks">' +
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
}
