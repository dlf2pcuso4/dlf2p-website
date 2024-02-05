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
  <a onclick="toggleCardSearch()">Search Card</a>
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
    <a onclick="toggleCardSearch()">
      <p>Search Card (Coming soon for mobile)</p>
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

function toggleCardSearch() {
  if (!document.getElementById("cardSearchOverlay")) {
    const div = document.createElement("div");
    div.id = "cardSearchOverlay";
    div.onclick = (e) => {
      if (e.target == document.getElementById("cardSearchOverlay"))
        div.style.display = "none";
    };
    div.style.cssText =
      "width:100vw;height:100vh;z-index:9;position:fixed;display:flex;justify-content:center;background-color:#00000060;";
    div.innerHTML = `
    <div style="height:100vh;display:flex;flex-direction:column;justify-content:center;">
      <div id="cardSearchWindow" style="width:80vw;height:80vh;padding:1vw;background-color:#000000;">
        <div class="flexdivc">
          <img src="images/search.png" style="width:3vw;" />
          <input id="cardSearchInput" type="text" placeholder="Search card..." autocomplete="off" style="font-size:2vw;" onkeyup="cardSearch(document.getElementById('cardSearchInput').value)" />
          <select id="cardSearchFormat" style="margin-left:1vw;" onchange="cardSearch(document.getElementById('cardSearchInput').value)">
            <option value="dls">Duel Links (Speed)</option>
            <option value="dlr">Duel Links (Rush)</option>
            <option value="md">Master Duel</option>
          </select>
          <select id="cardSearchReleased" style="margin-left:1vw;" onchange="cardSearch(document.getElementById('cardSearchInput').value)">
            <option value="y">Show Released</option>
            <option value="n">Show Unreleased</option>
            <option value="a">Show All</option>
          </select>
          <select id="cardSearchSort" style="margin-left:1vw;" onchange="cardSearch(document.getElementById('cardSearchInput').value)">
            <option value="name">Sort: Name</option>
            <option value="date">Sort: Release Date</option>
            <option value="popularity">Sort: Popularity</option>
          </select>
        </div>
        <div class="flexdivc">
          <div id="cardSearchOutput" style="width:76.1vw;height:70vh;overflow:scroll;margin-top:2vh;"></div>
        </div>
      </div>
    </div>
    `;
    document.body.insertBefore(div, document.body.firstChild);
  } else {
    document.getElementById("cardSearchOverlay").style.display = "flex";
  }
}
let filteredCards = [];
function cardSearch(txt) {
  let format =
    document.getElementById("cardSearchFormat").value == "md" ? "md" : "dl";
  setTimeout(() => {
    if (document.getElementById("cardSearchInput").value == txt) {
      let innerHTML = "";
      let db = format == "dl" ? jsonResponseDl : jsonResponseMd;
      filteredCards = db.filter(
        (a) =>
          a.name.toLowerCase().includes(txt.toLowerCase()) ||
          a.description.toLowerCase().includes(txt.toLowerCase())
      );
      //filter speed/rush
      if (document.getElementById("cardSearchFormat").value == "dlr") {
        filteredCards = filteredCards.filter((a) => a.rush);
      } else if (document.getElementById("cardSearchFormat").value == "dls") {
        filteredCards = filteredCards.filter((a) => !a.rush);
      }
      //filter unreleased
      if (document.getElementById("cardSearchReleased").value == "y")
        filteredCards = filteredCards.filter((a) => a.rarity);
      if (document.getElementById("cardSearchReleased").value == "n")
        filteredCards = filteredCards.filter((a) => !a.rarity);
      //sort
      switch (document.getElementById("cardSearchSort").value) {
        case "popularity":
          filteredCards.sort(function (a, b) {
            return a.popRank - b.popRank;
          });
          break;
        case "date":
          filteredCards.sort(function (a, b) {
            if (a.release == null) {
              return 1;
            } else if (b.release == null) {
              return -1;
            } else {
              return (
                Number(b.release.replace(/\D/g, "")) -
                Number(a.release.replace(/\D/g, ""))
              );
            }
          });
          break;
      }
      //shorten results
      if (filteredCards.length > 300) filteredCards.length = 300;
      for (let item of filteredCards) {
        innerHTML += `<img src="images/cards/${item.konamiID}.jpg" style="width:8vw;height:11.67vw;margin:1.6vw 0.2vw 0.2vw 0.2vw;" onclick="cardSearchPopup(${item.konamiID})" onerror="this.onerror=null;this.src='images/noimage.jpg';" />`;
        if (item.rarity) {
          innerHTML += `<img src="images/${format}tag${item.rarity}.png" style="width:5.5vw;height:1.4vw;margin:0 0.2vw 11.87vw -5.7vw;" />`;
          if (item.banStatus)
            innerHTML += `<img src="images/${
              ["forbidden", "limit1", "limit2", "limit3"][
                ["Forbidden", "Limited 1", "Limited 2", "Limited 3"].indexOf(
                  item.banStatus
                )
              ]
            }.png" style="width:2.5vw;height:2.5vw;margin:0 5.7vw 9.37vw -8.2vw;" />`;
        }
      }
      document.getElementById("cardSearchOutput").innerHTML = innerHTML;
    }
  }, 300);
}
function cardSearchPopup(card) {
  const cardObj = isNaN(card)
    ? filteredCards.filter((a) => a.name == card)[0]
    : filteredCards.filter((a) => a.konamiID == Number(card))[0];
  document.getElementById("cardinfoImg").src = `images/cards/${card}.jpg`;
  document.getElementById("cardinfoName").innerHTML = cardObj.name;
  document.getElementById("cardinfoRace").innerHTML = "Type: " + cardObj.race;
  if (!cardObj.attribute) {
    document.getElementById("cardinfoAttribute").innerHTML = "";
  } else {
    document.getElementById("cardinfoAttribute").innerHTML =
      "Attribute: " + cardObj.attribute;
  }
  if (!cardObj.level) {
    document.getElementById("cardinfoLevel").innerHTML = "";
  } else {
    document.getElementById("cardinfoLevel").innerHTML =
      "Level/Rank: " + cardObj.level;
  }
  document.getElementById("cardinfoEffect").innerHTML = cardObj.description
    .replace(/\r\n----------------------------------------\r\n/g, "<br>")
    .replace(/\n/g, "<br>");
  if (!cardObj.atk) {
    document.getElementById("cardinfoAtk").innerHTML = "";
  } else {
    document.getElementById("cardinfoAtk").innerHTML = "ATK: " + cardObj.atk;
  }
  if (!cardObj.def) {
    document.getElementById("cardinfoDef").innerHTML = "";
  } else {
    document.getElementById("cardinfoDef").innerHTML = "DEF: " + cardObj.def;
  }
  if (!cardObj.obtain.length) {
    document.getElementById("cardinfoObtain").innerHTML = "Cannot be obtained";
  } else {
    document.getElementById("cardinfoObtain").innerHTML = "How to obtain: ";
    for (let i = 0; i < cardObj.obtain.length; i++) {
      document.getElementById("cardinfoObtain").innerHTML +=
        cardObj.obtain[i].source.name + ", ";
    }
    document.getElementById("cardinfoObtain").innerHTML = document
      .getElementById("cardinfoObtain")
      .innerHTML.slice(0, -2);
  }
  showPopup();
}
