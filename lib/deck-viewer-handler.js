//dependancies: carddb-dl, carddb-md, skilldb-dl, dlf2pID, deckcode-handler, priority-handler, popup-handler
jsonResponseSkill[-1] = {
  _id: "",
  name: "Skill Not Set",
  description: "",
  characters: [],
  relatedCards: [],
  rush: false,
};
//(deckcode, "dl"/"md"/"tcg", width (vw), height (vh), card width (vw))
function newDeckElement(url, format, w, h, cw) {
  const d = convertToV2(url);
  //append css
  if (!document.getElementById("deck-viewer-css")) {
    const deckViewerHandlerCss = document.createElement("style");
    deckViewerHandlerCss.id = "deck-viewer-css";
    deckViewerHandlerCss.innerHTML = `
    .flexdiv {
      display: flex;
    }
    .flexdivc {
      display: flex;
      justify-content: center;
    }
    .deck-viewer-deck {
      width: ${w}vw;
      ${h == "_AUTO" ? "" : `height: ${h}vh;`}      
      background-color: #00000080;
      text-align: left;
      overflow-y: scroll;
      font-size: 1.3vw;
      font-weight: bold;
      font-family: "Montserrat";
      color: white;
      padding: 0%;
      margin: 0%;
    }
    .deck-viewer-deck div {
      margin: 1.5vh 0;
      padding: 0%;
    }
    .deck-viewer-rarity {
      width: ${(cw / 5.8) * 4}vw;
      height: ${(cw / 5.8) * 1}vw;
      margin: 0 0 ${(cw / 5.8) * 8.46}vw ${(cw / 5.8) * -4}vw;
      padding: 0%;
    }
    .deck-viewer-banStatus {
      width: ${(cw / 5.8) * 2}vw;
      height: ${(cw / 5.8) * 2}vw;
      margin: ${(cw / 5.8) * -6.46}vw ${(cw / 5.8) * 3.8}vw ${
      (cw / 5.8) * 6.46
    }vw ${(cw / 5.8) * -5.8}vw;
      padding: 0%;
    }
    .deck-viewer-deckskillimg {
      width: ${cw / 4}vw;
      height: ${cw / 4}vw;
      margin: 0 0.5vw;
      padding: 0%;
    }
    .deck-viewer-deckskill {
      font-size: ${cw / 5}vw;
      cursor: pointer;
      padding: 0%;
      margin: 0%;
    }
    .deck-viewer-deckcardimg {
      width: ${cw}vw;
      padding: 0%;
      margin: 0%;
    }
    `;
    document.head.appendChild(deckViewerHandlerCss);
  }
  //prepare innerHTML
  const dbresponse = format == "dl" ? jsonResponseDl : jsonResponseMd;
  const deckcodeArr = decodeDeck(d.split("_")[0]).match(/.{1,10}/g);
  if (d.split("_")[3]) {
    const specialArr = d.split("_")[3].split("-");
    for (let specialCard of specialArr) {
      deckcodeArr.push(decodeURIComponent(specialCard));
    }
  }
  //sort deck array
  deckcodeArr.sort((a, b) => getPriority(b, format) - getPriority(a, format));
  //append img
  let maindeckInnerHTML = "";
  let extradeckInnerHTML = "";
  for (let card of deckcodeArr) {
    let cardimgHTML = `<img src="images/cards/${
      isNaN(card) ? card : Number(card)
    }.jpg" class="deck-viewer-deckcardimg" onclick="deckViewerPopup('${
      isNaN(card) ? card : Number(card)
    }','${format}')">`;
    const cardObj = isNaN(card)
      ? dbresponse.filter((a) => a.name == card)[0]
      : dbresponse.filter((a) => a.konamiID == Number(card))[0];
    const monstertype = cardObj.monsterType;
    if (cardObj.rarity && format != "tcg")
      cardimgHTML += `<img class="deck-viewer-rarity" src="images/${format}tag${cardObj.rarity}.png">`;
    if (cardObj.banStatus)
      cardimgHTML += `<img class="deck-viewer-banStatus" src="images/${
        ["forbidden", "limit1", "limit2", "limit3"][
          ["Forbidden", "Limited 1", "Limited 2", "Limited 3"].indexOf(
            cardObj.banStatus
          )
        ]
      }.png">`;
    if (
      monstertype.includes("Fusion") ||
      monstertype.includes("Synchro") ||
      monstertype.includes("Xyz") ||
      monstertype.includes("XYZ") ||
      monstertype.includes("Link")
    ) {
      extradeckInnerHTML += cardimgHTML;
    } else {
      maindeckInnerHTML += cardimgHTML;
    }
  }
  const skill = jsonResponseSkill[d.split("_")[1]].name;
  //prepare element
  const deckElement = document.createElement("div");
  deckElement.classList = "deck-viewer-deck";
  deckElement.class = "flexdivc";
  deckElement.innerHTML = `
    <div>
    ${
      format == "dl"
        ? `<div class="flexdiv">
           <img src="images/skill.png" class="deck-viewer-deckskillimg" />
           <p class="deck-viewer-deckskill" onclick="deckViewerPopupSkill(\`${skill}\`)">${skill}</p>
           </div>`
        : ""
    }
      <div class="deck-viewer-maindeck">${maindeckInnerHTML}</div>
      <div class="deck-viewer-extradeck">${extradeckInnerHTML}</div>
    </div>
    `;
  return deckElement;
}

function deckViewerPopup(card, format) {
  const dbresponse = format == "dl" ? jsonResponseDl : jsonResponseMd;
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
function deckViewerPopupSkill(skill) {
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
    document.getElementById("cardinfoObtain").innerHTML = "";
    showPopup();
  }
}
