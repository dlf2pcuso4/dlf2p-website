jsonResponseSkill[-1] = {
  _id: "",
  name: "Skill Not Set",
  description: "",
  characters: [],
  relatedCards: [],
  rush: false,
};
function refreshMenu(change) {
  //update selectors
  switch (change) {
    case "category":
      const categories = ["2022", "2023", "2024", "All"];
      document.getElementById("menucategory").innerHTML =
        categories[
          (categories.indexOf(
            document.getElementById("menucategory").innerHTML
          ) +
            1) %
            categories.length
        ];
      break;
    case "speed/rush":
      document.getElementById("menuformat").innerHTML =
        document.getElementById("menuformat").innerHTML == "Speed"
          ? "Rush"
          : "Speed";
      break;
    case "typing":
      document.getElementById("menucategory").innerHTML = "All";
      break;
  }
  const months = "0,Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(",");
  document.getElementById("menuitems").textContent = "";
  //filter decks
  let filteredDecks = jsonResponseF2pDecks.filter(
    (a) =>
      (document.getElementById("menuformat").innerHTML == "Speed"
        ? !jsonResponseSkill[a.url.split("_")[1]].description.includes(
            "[EFFECT]"
          )
        : jsonResponseSkill[a.url.split("_")[1]].description.includes(
            "[EFFECT]"
          )) &&
      (document.getElementById("menucategory").innerHTML != "All"
        ? a.date.slice(8) == document.getElementById("menucategory").innerHTML
        : true)
  );
  if (document.getElementById("filter").value)
    filteredDecks = filteredDecks.filter((a) =>
      a.archetype
        .toLowerCase()
        .includes(document.getElementById("filter").value.toLowerCase())
    );
  filteredDecks.reverse();
  filteredDecks.length = 10;
  //create html elements
  for (item of filteredDecks) {
    try {
      const numDate = `${("0" + months.indexOf(item.date.slice(0, 3))).substr(
        -2
      )}/${item.date.slice(4, 6)}`;
      //get keycard
      const deckcodeArr = decodeDeck(
        item.url.split("d=")[1].split("_")[0]
      ).match(/.{1,10}/g);
      let keycard = "images/noimage.jpg";
      for (card of deckcodeArr) {
        let currentcard = jsonResponseDl.filter(
          (a) => a.konamiID == Number(card)
        )[0];
        if (currentcard.type.includes("Monster")) {
          keycard = `images/cards/${Number(card)}.jpg`;
          if (
            currentcard.name.includes(item.archetype) ||
            currentcard.description.includes(item.archetype)
          )
            break;
        }
      }
      //create div
      const menuitem = document.createElement("div");
      menuitem.innerHTML = `
      <div class="menurow" onclick="loaddeck('${item.url}','dl')">
        <div class="menudesc">
          <img src="${keycard}" class="menucard" />
        </div>
        <div class="menudesc">
          <p class="menuname">${item.archetype} (${numDate})</p>
          <div class="menuskill flexdiv">
            <p>✦ ${jsonResponseSkill[item.url.split("_")[1]].name}</p>
          </div>
        </div>
      </div>
      `;
      document.getElementById("menuitems").appendChild(menuitem);
    } catch (err) {
      continue;
    }
  }
}
function loaddeck(url, format) {
  document.querySelector("title").innerHTML = decodeURIComponent(
    url.split("_")[2]
  );
  document.getElementById("deckskillimg").style.display = "block";
  document.getElementById("maindeck").textContent = "";
  document.getElementById("extradeck").textContent = "";
  if (document.getElementById("deckbtns"))
    document.getElementById("deckbtns").remove();
  document.getElementById("deckskill").innerHTML =
    jsonResponseSkill[url.split("_")[1]].name;
  const dbresponse = format == "dl" ? jsonResponseDl : jsonResponseMd;
  const deckcodeArr = decodeDeck(url.split("d=")[1].split("_")[0]).match(
    /.{1,10}/g
  );
  if (url.split("_")[3]) {
    const specialArr = url.split("_")[3].split("-");
    for (specialCard of specialArr) {
      deckcodeArr.push(decodeURIComponent(specialCard));
    }
  }
  //sort deck array
  deckcodeArr.sort((a, b) => getPriority(b, format) - getPriority(a, format));
  //append img
  for (card of deckcodeArr) {
    const cardimg = document.createElement("img");
    cardimg.src = `images/cards/${isNaN(card) ? card : Number(card)}.jpg`;
    cardimg.classList = "deckcardimg fade-in";
    cardimg.setAttribute(
      "onclick",
      `popup("${isNaN(card) ? card : Number(card)}")`
    );
    const cardObj = isNaN(card)
      ? dbresponse.filter((a) => a.name == card)[0]
      : dbresponse.filter((a) => a.konamiID == Number(card))[0];
    const monstertype = cardObj.monsterType;
    const cardlocation =
      monstertype.includes("Fusion") ||
      monstertype.includes("Synchro") ||
      monstertype.includes("Xyz") ||
      monstertype.includes("XYZ") ||
      monstertype.includes("Link")
        ? "extradeck"
        : "maindeck";
    document.getElementById(cardlocation).appendChild(cardimg);
    if (cardObj.rarity) {
      const rarity = document.createElement("img");
      rarity.classList = "rarity fade-in";
      rarity.src = `images/${format}tag${cardObj.rarity}.png`;
      document.getElementById(cardlocation).appendChild(rarity);
    }
    if (cardObj.banStatus) {
      const banStatus = document.createElement("img");
      banStatus.classList = "banStatus fade-in";
      banStatus.src = `images/${
        ["forbidden", "limit1", "limit2", "limit3"][
          ["Forbidden", "Limited 1", "Limited 2", "Limited 3"].indexOf(
            cardObj.banStatus
          )
        ]
      }.png`;
      document.getElementById(cardlocation).appendChild(banStatus);
    }
  }
  //buttons
  const deckbtns = document.createElement("div");
  deckbtns.id = "deckbtns";
  deckbtns.innerHTML = `
      <button id='sortDeck' onclick='sortDeck("${url}")'>Sort: ${
    format == "dl" ? "Duel Links" : "Master Duel"
  }</button>
      <button onclick='(window.open("${url.replace(
        "deck",
        "deck-builder"
      )}", "_blank"))()'>Open In Editor</button>
      <button id='testHands' onclick='testHands("${url}")'>Test Hands (Beta)</button>
      <button id='copyYdk' onclick='copyYdk("${url}")'>Copy YDK</button>
      <button id='downloadImg' onclick='downloadImg()'>Download Deck PNG</button>
      <button onclick='(window.open("${url.replace(
        "deck",
        "probability-calculator"
      )}&s=${format}", "_blank"))()'>Calculate Probabilities</button>
      `;
  document.getElementById("deck").firstElementChild.appendChild(deckbtns);
  document.getElementById("deckskill").parentElement.style.display =
    format == "md" ? "none" : "flex";
}
function popup(card) {
  const dbresponse =
    document.getElementById("sortDeck").innerHTML == "Sort: Duel Links"
      ? jsonResponseDl
      : jsonResponseMd;
  const cardObj = isNaN(card)
    ? dbresponse.filter((a) => a.name == card)[0]
    : dbresponse.filter((a) => a.konamiID == Number(card))[0];
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
function popupSkill() {
  const skill = document.getElementById("deckskill").innerHTML;
  const skillObj = jsonResponseSkill.filter((a) => a.name == skill);
  if (skillObj.length) {
    document.getElementById("cardinfoImg").src = "";
    document.getElementById("cardinfoName").innerHTML = skillObj[0].name;
    document.getElementById("cardinfoRace").innerHTML = "";
    document.getElementById("cardinfoAttribute").innerHTML = "";
    document.getElementById("cardinfoLevel").innerHTML = "";
    document.getElementById("cardinfoEffect").innerHTML =
      skillObj[0].description;
    document.getElementById("cardinfoAtk").innerHTML = "";
    document.getElementById("cardinfoDef").innerHTML = "";
    showPopup();
  }
}
function sortDeck(url) {
  if (document.getElementById("sortDeck").innerHTML == "Sort: Duel Links") {
    loaddeck(url, "md");
  } else {
    loaddeck(url, "dl");
  }
}
function copyYdk(url) {
  if (document.getElementById("copyYdk").innerHTML == "Copy YDK") {
    if (copy(convertUrlToYdk(url))) {
      document.getElementById("copyYdk").innerHTML = "Copied!";
      setTimeout(() => {
        document.getElementById("copyYdk").innerHTML = "Copy YDK";
      }, 2000);
    }
  }
}
function downloadImg() {
  //card: 180x262.5 exdeck gap: 40px tag: 120x30
  const cnv = document.createElement("canvas");
  const ctx = cnv.getContext("2d");
  cnv.width = 1800;
  cnv.height = 4000;
  document.body.appendChild(cnv);
  let cardDrawn = 0;
  for (let item of document
    .getElementById("maindeck")
    .querySelectorAll("img")) {
    switch (item.classList[0]) {
      case "deckcardimg":
        ctx.drawImage(
          item,
          (cardDrawn % 10) * 180,
          30 + Math.floor(cardDrawn / 10) * 292.5,
          180,
          262.5
        );
        cardDrawn++;
        break;
      case "rarity":
        ctx.drawImage(
          item,
          ((cardDrawn - 1) % 10) * 180 + 60,
          Math.floor((cardDrawn - 1) / 10) * 292.5,
          120,
          30
        );
        break;
      case "banStatus":
        ctx.drawImage(
          item,
          ((cardDrawn - 1) % 10) * 180,
          30 + Math.floor((cardDrawn - 1) / 10) * 292.5,
          60,
          60
        );
        break;
    }
  }
  let currentY = 40 + Math.ceil(cardDrawn / 10) * 292.5;
  let cardDrawnEx = 0;
  for (let item of document
    .getElementById("extradeck")
    .querySelectorAll("img")) {
    switch (item.classList[0]) {
      case "deckcardimg":
        ctx.drawImage(
          item,
          (cardDrawnEx % 10) * 180,
          30 + currentY + Math.floor(cardDrawnEx / 10) * 292.5,
          180,
          262.5
        );
        cardDrawnEx++;
        break;
      case "rarity":
        ctx.drawImage(
          item,
          ((cardDrawnEx - 1) % 10) * 180 + 60,
          currentY + Math.floor((cardDrawnEx - 1) / 10) * 292.5,
          120,
          30
        );
        break;
      case "banStatus":
        ctx.drawImage(
          item,
          ((cardDrawnEx - 1) % 10) * 180,
          30 + currentY + Math.floor((cardDrawnEx - 1) / 10) * 292.5,
          60,
          60
        );
        break;
    }
  }
  currentY += Math.ceil(cardDrawnEx / 10) * 292.5;
  const cnvTemp = document.createElement("canvas");
  const ctxTemp = cnvTemp.getContext("2d");
  cnvTemp.width = cnv.width;
  cnvTemp.height = currentY + 100;
  document.body.appendChild(cnvTemp);
  ctxTemp.drawImage(cnv, 0, 100);
  if (document.getElementById("sortDeck").innerHTML == "Sort: Duel Links") {
    ctxTemp.drawImage(document.getElementById("deckskillimg"), 0, 10, 60, 60);
    ctxTemp.font = "bold 40px Montserrat";
    ctxTemp.fillStyle = "white";
    ctxTemp.fillText(document.getElementById("deckskill").innerHTML, 70, 62);
  }
  const a = document.createElement("a");
  a.href = cnvTemp.toDataURL("image/png");
  a.download = "deck.png";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  document.body.removeChild(cnvTemp);
  document.body.removeChild(cnv);
}

function testHands(url) {
  if (!document.querySelector("ygol")) {
    document.body.insertAdjacentHTML(
      "afterbegin",
      `<div id='ygol-popup' class="flexdivc" style="flex-direction:column;position:fixed;width:100%;height:100%;inset:0px;align-items:center;background-color:#000000C0;z-index:90;cursor:pointer;">
        <div class="flexdivc">
          <ygol ydk="${convertUrlToYdk(
            url
          )}" style="width:1280px;height:720px;background-color:#000000" clicked="false"></ygol>
        </div>
      </div>`
    );
    document.querySelector("ygol").onmousedown = (event) => {
      document.querySelector("ygol").setAttribute("clicked", "true");
    };
    document.getElementById("ygol-popup").onmouseup = (event) => {
      if (document.querySelector("ygol").getAttribute("clicked") == "false")
        document.getElementById("ygol-popup").style.display = "none";
      document.querySelector("ygol").setAttribute("clicked", "false");
    };
    const s = document.createElement("script");
    s.src = "https://dlf2pcuso4.github.io/ygo-lightning-solo/v1/main.js";
    document.head.appendChild(s);
  } else {
    document.getElementById("ygol-popup").style.display = "block";
  }
}

refreshMenu();
const params = new URL(document.location).searchParams;
if (params.get("d")) {
  let format = "dl";
  if (params.get("s") == "md") {
    format = "md";
  }
  loaddeck(`deck?d=${convertToV2(params.get("d"))}`, format);
}
if (params.get("stats")) {
  document.getElementById("menuitems").style.height = "30vh";
  //stats
  const statimg = document.createElement("img");
  statimg.src = "images/topf2pstat.png";
  statimg.style.display = "none";
  statimg.onload = () => {
    const statcnv = document.createElement("canvas");
    statcnv.width = 519;
    statcnv.height = 416;
    statcnv.style.cssText = "width: 22vw; margin-left: -1vw;";
    document.getElementById("menu").appendChild(statcnv);
    const ctx = statcnv.getContext("2d");
    const data = params.get("stats").split("");
    ctx.drawImage(statimg, 0, 0, 519, 416);
    ctx.fillStyle = "#380176E0";
    ctx.beginPath(); //mid pt: 257 204
    ctx.moveTo(257, 204 - 27.9 * data[0]);
    ctx.lineTo(257 + 23.9 * data[1], 204 - 14 * data[1]);
    ctx.lineTo(257 + 23.9 * data[2], 204 + 14 * data[2]);
    ctx.lineTo(257, 204 + 27.9 * data[3]);
    ctx.lineTo(257 - 23.9 * data[4], 204 + 14 * data[4]);
    ctx.lineTo(257 - 23.9 * data[5], 204 - 14 * data[5]);
    ctx.closePath();
    ctx.fill();
  };
  document.body.appendChild(statimg);
  const website = document.createElement("p");
  website.style.marginTop = "3vh";
  website.innerHTML =
    "Visit <span style='color:#ccaa00'>dlf2p.com/f2p-decks</span>";
  document.getElementById("menu").appendChild(website);
  //right click to trigger transition
  document.body.oncontextmenu = () => {
    document.body.querySelectorAll("*").forEach(function (node) {
      node.style.display = "none";
    });
    document.body.style.backgroundColor = "#00000000";

    document.body.insertBefore(
      newDeckElement(params.get("d"), "dl", "28", "_AUTO", "4.5"),
      document.body.firstChild
    );
    document.querySelector(".deck-viewer-deck").style.cssText = `
       margin-left: 1385px;
       position: fixed;`;
    return false;
  };
}
