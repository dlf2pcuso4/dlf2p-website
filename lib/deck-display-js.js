const params = new URL(document.location).searchParams;
const paramDeckcode = params.get("d");
var jsonDataDl,
  jsonDataDlFiltered,
  jsonDataMd,
  jsonDataMdFiltered,
  jsonDataSkill,
  title;
var deckcodeArray = [];
var deckArray = [];
var deckCardSize = 0.2;
var deckImgPerRow = 10;
var sortDeckBy = "dl";
const loaddeck = document.getElementById("loaddeck");
const btnLoad = document.getElementById("btnLoad");
const btnDownload = document.getElementById("btnDownload");
const cnvDeck = document.getElementById("cnvDeck");
const ctxDeck = cnvDeck.getContext("2d");
const cnvExDeck = document.getElementById("cnvExDeck");
const ctxExDeck = cnvExDeck.getContext("2d");
const cardinfoImg = document.getElementById("cardinfoImg");
const cardinfoName = document.getElementById("cardinfoName");
const cardinfoRace = document.getElementById("cardinfoRace");
const cardinfoAttribute = document.getElementById("cardinfoAttribute");
const cardinfoLevel = document.getElementById("cardinfoLevel");
const cardinfoEffect = document.getElementById("cardinfoEffect");
const cardinfoAtk = document.getElementById("cardinfoAtk");
const cardinfoDef = document.getElementById("cardinfoDef");
const cardinfoObtain = document.getElementById("cardinfoObtain");
const imgsDeck = document.getElementById("imgsDeck");
class Card {
  constructor(
    id,
    name,
    race,
    attribute,
    level,
    dlrarity,
    mdrarity,
    effect,
    atk,
    def,
    dlobtain,
    mdobtain,
    dlBanStatus,
    mdBanStatus,
    dlpriority,
    mdpriority
  ) {
    this.id = id;
    this.name = name;
    this.race = race;
    this.attribute = attribute;
    this.level = level;
    this.dlrarity = dlrarity;
    this.mdrarity = mdrarity;
    this.effect = effect;
    this.atk = atk;
    this.def = def;
    this.dlobtain = dlobtain;
    this.mdobtain = mdobtain;
    this.dlBanStatus = dlBanStatus;
    this.mdBanStatus = mdBanStatus;
    this.dlpriority = dlpriority;
    this.mdpriority = mdpriority;
  }
}
//onload setup + prepare json
window.onload = async function () {
  btnLoad.innerHTML = "Pending...";
  btnDownload.innerHTML = "Download Deck Image";
  cnvDeck.width = cnvExDeck.width = 0;
  cnvDeck.height = cnvExDeck.height = 0;
  if (_isMobile == true) {
    deckImgPerRow = 6;
    deckCardSize = 0.25;
  }
  jsonDataDl = jsonResponseDl;
  jsonDataSkill = jsonResponseSkill;
  jsonDataMd = jsonResponseMd;
  btnLoad.innerHTML = "Load";
  if (params.get("s")) {
    if (params.get("s") == "md") {
      sortBy();
    }
  }
  if (paramDeckcode) {
    loaddeck.value = paramDeckcode;
    loadDeck();
  }
};
//import deck
function loadDeck() {
  if (btnLoad.innerHTML == "Load" && loaddeck.value) {
    btnLoad.innerHTML = "Loading...";
    imgsDeck.innerHTML = "";
    deckArray = [];
    cnvDeck.height = cnvExDeck.height = 0;

    //set skill
    let dsSplit = loaddeck.value.split("_");
    if (jsonDataSkill[dsSplit[1]]) {
      document.getElementById("deckSkill").innerHTML =
        jsonDataSkill[dsSplit[1]].name;
    }
    if (dsSplit[2]) {
      title = decodeURIComponent(dsSplit[2]);
      document.getElementsByTagName("title")[0].innerHTML = title;
      document.getElementsByTagName("h1")[0].innerHTML = title;
    }
    //split deck code into individual cards
    deckcodeArray = decodeDeck(dsSplit[0]).match(/.{1,10}/g);
    for (let c = 0; c < deckcodeArray.length; c++) {
      jsonDataDlFiltered = jsonDataDl.filter(function (a) {
        return a.konamiID == Number(deckcodeArray[c]);
      });
      jsonDataMdFiltered = jsonDataMd.filter(function (a) {
        return a.konamiID == Number(deckcodeArray[c]);
      });
      jsonDataMdFiltered.push({
        rarity: null,
        obtain: null,
        banStatus: null,
      });
      //store information
      if (jsonDataDlFiltered[0]) {
        deckArray[c] = new Card(
          jsonDataDlFiltered[0].konamiID,
          jsonDataDlFiltered[0].name,
          jsonDataDlFiltered[0].race,
          jsonDataDlFiltered[0].attribute,
          jsonDataDlFiltered[0].level,
          jsonDataDlFiltered[0].rarity,
          jsonDataMdFiltered[0].rarity,
          jsonDataDlFiltered[0].description,
          jsonDataDlFiltered[0].atk,
          jsonDataDlFiltered[0].def,
          jsonDataDlFiltered[0].obtain,
          jsonDataMdFiltered[0].obtain,
          jsonDataDlFiltered[0].banStatus,
          jsonDataMdFiltered[0].banStatus,
          dlCardPriority(
            jsonDataDlFiltered[0].konamiID,
            jsonDataDlFiltered[0].monsterType,
            jsonDataDlFiltered[0].type,
            jsonDataDlFiltered[0].rarity,
            jsonDataDlFiltered[0].level,
            jsonDataDlFiltered[0].linkRating
          ),
          mdCardPriority(
            jsonDataDlFiltered[0].konamiID,
            jsonDataDlFiltered[0].monsterType,
            jsonDataDlFiltered[0].type,
            jsonDataDlFiltered[0].level,
            jsonDataDlFiltered[0].linkRating,
            jsonDataDlFiltered[0].race
          )
        );
      } else {
        btnLoad.innerHTML = "Invalid code";
        break;
      }
    }
    //store information for special cards (dl exclusives)
    if (dsSplit[3]) {
      for (let i = 0; i < dsSplit[3].split("-").length; i++) {
        jsonDataDlFiltered = jsonDataDl.filter(function (a) {
          return a.name == dsSplit[3].split("-")[i];
        });
        //store information
        if (jsonDataDlFiltered[0]) {
          deckArray.push(
            new Card(
              jsonDataDlFiltered[0].name,
              jsonDataDlFiltered[0].name,
              jsonDataDlFiltered[0].race,
              jsonDataDlFiltered[0].attribute,
              jsonDataDlFiltered[0].level,
              jsonDataDlFiltered[0].rarity,
              null,
              jsonDataDlFiltered[0].description,
              jsonDataDlFiltered[0].atk,
              jsonDataDlFiltered[0].def,
              jsonDataDlFiltered[0].obtain,
              jsonDataMdFiltered[0].obtain,
              jsonDataDlFiltered[0].banStatus,
              null,
              dlCardPriority(
                "0000000000",
                jsonDataDlFiltered[0].monsterType,
                jsonDataDlFiltered[0].type,
                jsonDataDlFiltered[0].rarity,
                jsonDataDlFiltered[0].level,
                jsonDataDlFiltered[0].linkRating
              ),
              mdCardPriority(
                "0000000000",
                jsonDataDlFiltered[0].monsterType,
                jsonDataDlFiltered[0].type,
                jsonDataDlFiltered[0].level,
                jsonDataDlFiltered[0].linkRating,
                jsonDataDlFiltered[0].race
              )
            )
          );
        } else {
          btnLoad.innerHTML = "Invalid code";
          break;
        }
      }
    }

    //append card image if it is not a duplicate
    if (btnLoad.innerHTML != "Invalid code") {
      let imgCount = 0;
      let imgLoadedCount = 0;
      for (let c = 0; c < deckArray.length; c++) {
        if (document.getElementById("deckimg" + deckArray[c].id) == null) {
          let img = document.createElement("img");
          img.id = "deckimg" + deckArray[c].id;
          img.onerror = function () {
            this.onerror = null;
            this.src = "images/noimage.jpg";
          };
          img.src = "images/cards/" + deckArray[c].id + ".jpg";
          imgsDeck.appendChild(img);
          imgCount++;
        }
      }
      for (let c = 0; c < deckArray.length; c++) {
        document.getElementById("deckimg" + deckArray[c].id).onload =
          function () {
            imgLoadedCount++;
            if (imgLoadedCount == imgCount) {
              refreshDeck();
            }
          };
      }
      btnLoad.innerHTML = "Loaded!";
    }
    setTimeout(function () {
      btnLoad.innerHTML = "Load";
    }, 2000);
  }
}
//sort by
function sortBy() {
  if (sortDeckBy == "dl") {
    sortDeckBy = "md";
    btnSortBy.innerHTML = "Sort: Master Duel";
    document.getElementById("skillbox").style.display = "none";
  } else {
    sortDeckBy = "dl";
    btnSortBy.innerHTML = "Sort: Duel Links";
    document.getElementById("skillbox").style.display = "block";
  }
  if (jsonDataDlFiltered) {
    refreshDeck();
  }
}
//draw all cards in array to deck canvas
function refreshDeck() {
  //sort deck
  switch (sortDeckBy) {
    case "dl":
      deckArray.sort(function (a, b) {
        return b.dlpriority - a.dlpriority;
      });
      break;
    case "md":
      deckArray.sort(function (a, b) {
        return b.mdpriority - a.mdpriority;
      });
      break;
  }
  let indexmain = 0;
  cnvDeck.width = cnvExDeck.width = (421 * deckCardSize + 1) * deckImgPerRow;
  cnvDeck.height =
    688 *
    deckCardSize *
    Math.ceil(
      deckArray.filter(function (a) {
        return a.dlpriority < 200000000000000;
      }).length / deckImgPerRow
    );
  cnvExDeck.height =
    688 *
    deckCardSize *
    Math.ceil(
      deckArray.filter(function (a) {
        return a.dlpriority > 200000000000000;
      }).length / deckImgPerRow
    );
  //draw
  for (let c = 0; c < deckArray.length; c++) {
    if (deckArray[c].dlpriority > 200000000000000) {
      ctxExDeck.drawImage(
        document.getElementById("deckimg" + deckArray[c].id),
        (421 * deckCardSize + 1) * (c % deckImgPerRow),
        688 * deckCardSize * Math.floor(c / deckImgPerRow) + 74 * deckCardSize,
        421 * deckCardSize,
        614 * deckCardSize
      );
      if (sortDeckBy == "dl" && deckArray[c].dlrarity) {
        ctxExDeck.drawImage(
          document.getElementById("dltag" + deckArray[c].dlrarity),
          (421 * deckCardSize + 1) * (c % deckImgPerRow) + 125 * deckCardSize,
          688 * deckCardSize * Math.floor(c / deckImgPerRow),
          296 * deckCardSize,
          74 * deckCardSize
        );
        if (deckArray[c].dlBanStatus) {
          ctxExDeck.drawImage(
            document.getElementById(deckArray[c].dlBanStatus),
            (421 * deckCardSize + 1) * (c % deckImgPerRow),
            688 * deckCardSize * Math.floor(c / deckImgPerRow) +
              74 * deckCardSize,
            110 * deckCardSize,
            110 * deckCardSize
          );
        }
      } else if (sortDeckBy == "md" && deckArray[c].mdrarity) {
        ctxExDeck.drawImage(
          document.getElementById("mdtag" + deckArray[c].mdrarity),
          (421 * deckCardSize + 1) * (c % deckImgPerRow) + 165 * deckCardSize,
          688 * deckCardSize * Math.floor(c / deckImgPerRow) +
            10 * deckCardSize,
          256 * deckCardSize,
          64 * deckCardSize
        );
        if (deckArray[c].mdBanStatus) {
          ctxExDeck.drawImage(
            document.getElementById(deckArray[c].mdBanStatus),
            (421 * deckCardSize + 1) * (c % deckImgPerRow),
            688 * deckCardSize * Math.floor(c / deckImgPerRow) +
              74 * deckCardSize,
            110 * deckCardSize,
            110 * deckCardSize
          );
        }
      }
    } else {
      ctxDeck.drawImage(
        document.getElementById("deckimg" + deckArray[c].id),
        (421 * deckCardSize + 1) * (indexmain % deckImgPerRow),
        688 * deckCardSize * Math.floor(indexmain / deckImgPerRow) +
          74 * deckCardSize,
        421 * deckCardSize,
        614 * deckCardSize
      );
      if (sortDeckBy == "dl" && deckArray[c].dlrarity) {
        ctxDeck.drawImage(
          document.getElementById("dltag" + deckArray[c].dlrarity),
          (421 * deckCardSize + 1) * (indexmain % deckImgPerRow) +
            125 * deckCardSize,
          688 * deckCardSize * Math.floor(indexmain / deckImgPerRow),
          296 * deckCardSize,
          74 * deckCardSize
        );
        if (deckArray[c].dlBanStatus) {
          ctxDeck.drawImage(
            document.getElementById(deckArray[c].dlBanStatus),
            (421 * deckCardSize + 1) * (indexmain % deckImgPerRow),
            688 * deckCardSize * Math.floor(indexmain / deckImgPerRow) +
              74 * deckCardSize,
            110 * deckCardSize,
            110 * deckCardSize
          );
        }
      } else if (sortDeckBy == "md" && deckArray[c].mdrarity) {
        ctxDeck.drawImage(
          document.getElementById("mdtag" + deckArray[c].mdrarity),
          (421 * deckCardSize + 1) * (indexmain % deckImgPerRow) +
            165 * deckCardSize,
          688 * deckCardSize * Math.floor(indexmain / deckImgPerRow) +
            10 * deckCardSize,
          256 * deckCardSize,
          64 * deckCardSize
        );
        if (deckArray[c].mdBanStatus) {
          ctxDeck.drawImage(
            document.getElementById(deckArray[c].mdBanStatus),
            (421 * deckCardSize + 1) * (indexmain % deckImgPerRow),
            688 * deckCardSize * Math.floor(indexmain / deckImgPerRow) +
              74 * deckCardSize,
            110 * deckCardSize,
            110 * deckCardSize
          );
        }
      }
      indexmain++;
    }
  }
}
//show info when a card in deck is clicked
function selectDeckCard(e) {
  //click location detection
  const rect = cnvDeck.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const index =
    Math.floor(y / (688 * deckCardSize)) * deckImgPerRow +
    Math.floor(x / (421 * deckCardSize + 1)) +
    deckArray.filter(function (a) {
      return a.dlpriority > 200000000000000;
    }).length;
  displayCard(index);
}
//show info when a card in extra deck is clicked
function selectExDeckCard(e) {
  //click location detection
  const rect = cnvExDeck.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const index =
    Math.floor(y / (688 * deckCardSize)) * deckImgPerRow +
    Math.floor(x / (421 * deckCardSize + 1));
  if (deckArray[index].dlpriority > 200000000000000) {
    displayCard(index);
  }
}
//display card info in dom
function displayCard(index) {
  cardinfoImg.src = document.getElementById(
    "deckimg" + deckArray[index].id
  ).src;
  cardinfoName.innerHTML = deckArray[index].name;
  cardinfoRace.innerHTML = "Type: " + deckArray[index].race;
  if (deckArray[index].attribute == null) {
    cardinfoAttribute.innerHTML = "";
  } else {
    cardinfoAttribute.innerHTML = "Attribute: " + deckArray[index].attribute;
  }
  if (deckArray[index].level == null) {
    cardinfoLevel.innerHTML = "";
  } else {
    cardinfoLevel.innerHTML = "Level/Rank: " + deckArray[index].level;
  }
  cardinfoEffect.innerHTML = deckArray[index].effect
    .replace(/\r\n----------------------------------------\r\n/g, "<br>")
    .replace(/\n/g, "<br>");
  if (deckArray[index].atk == null) {
    cardinfoAtk.innerHTML = "";
  } else {
    cardinfoAtk.innerHTML = "ATK: " + deckArray[index].atk;
  }
  if (deckArray[index].def == null) {
    cardinfoDef.innerHTML = "";
  } else {
    cardinfoDef.innerHTML = "DEF: " + deckArray[index].def;
  }
  if (sortDeckBy == "dl") {
    if (deckArray[index].dlobtain.length == 0) {
      cardinfoObtain.innerHTML = "Cannot be obtained";
    } else {
      cardinfoObtain.innerHTML = "How to obtain: ";
      for (let i = 0; i < deckArray[index].dlobtain.length; i++) {
        cardinfoObtain.innerHTML +=
          deckArray[index].dlobtain[i].source.name + ", ";
      }
      cardinfoObtain.innerHTML = cardinfoObtain.innerHTML.slice(0, -2);
    }
  } else {
    if (deckArray[index].mdobtain.length == 0) {
      cardinfoObtain.innerHTML = "Cannot be obtained";
    } else {
      cardinfoObtain.innerHTML = "How to obtain: ";
      for (let i = 0; i < deckArray[index].mdobtain.length; i++) {
        cardinfoObtain.innerHTML +=
          deckArray[index].mdobtain[i].source.name + ", ";
      }
      cardinfoObtain.innerHTML = cardinfoObtain.innerHTML.slice(0, -2);
    }
  }
  showPopup();
}
//select and display skill
function selectSkill() {
  let skillQuery = document.getElementById("deckSkill").innerHTML;
  let skillData = jsonDataSkill.filter(function (a) {
    return a.name == skillQuery;
  });
  if (skillData.length) {
    cardinfoImg.src = "";
    cardinfoName.innerHTML = skillData[0].name;
    cardinfoRace.innerHTML = "";
    cardinfoAttribute.innerHTML = "";
    cardinfoLevel.innerHTML = "";
    cardinfoEffect.innerHTML = skillData[0].description;
    cardinfoAtk.innerHTML = "";
    cardinfoDef.innerHTML = "";
    showPopup();
  }
}
//download deck as png
function download() {
  if (btnDownload.innerHTML == "Download Deck Image") {
    btnDownload.innerHTML = "Downloading...";
    const cnvTemp = document.createElement("canvas");
    const ctxTemp = cnvTemp.getContext("2d");
    cnvTemp.width = cnvDeck.width;
    cnvTemp.height = cnvDeck.height + cnvExDeck.height + 70;
    document.body.appendChild(cnvTemp);
    ctxTemp.drawImage(cnvDeck, 0, 50);
    ctxTemp.drawImage(cnvExDeck, 0, cnvDeck.height + 70);
    if (sortDeckBy == "dl") {
      ctxTemp.drawImage(document.getElementById("skillstar"), 0, 10, 30, 30);
      ctxTemp.font = "bold 20px Montserrat";
      ctxTemp.fillStyle = "white";
      ctxTemp.fillText(document.getElementById("deckSkill").innerHTML, 40, 31);
    }
    const a = document.createElement("a");
    a.href = cnvTemp.toDataURL("image/png");
    a.download = "deck.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    document.body.removeChild(cnvTemp);
    btnDownload.innerHTML = "Downloaded!";
    setTimeout(function () {
      btnDownload.innerHTML = "Download Deck Image";
    }, 2000);
  }
}
//download each individual card
function downloadCards() {
  const cnvTemp = document.createElement("canvas");
  const ctxTemp = cnvTemp.getContext("2d");
  cnvTemp.width = 540;
  cnvTemp.height = 788;
  document.body.appendChild(cnvTemp);
  const cardimgs = imgsDeck.children;
  let i = 0;
  const dlloop = () => {
    ctxTemp.drawImage(cardimgs[i], 0, 0, 540, 788);
    const a = document.createElement("a");
    a.href = cnvTemp.toDataURL("image/jpeg");
    a.download = cardimgs[i].id.replace("deckimg", "") + ".jpg";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    i++;
    if (i < cardimgs.length) {
      setTimeout(dlloop, 300);
    } else {
      document.body.removeChild(cnvTemp);
    }
  };
  dlloop();
}
//get ydk data
function getYdk() {
  let ydk = "";
  let ydkmain = ["#main"];
  let ydkex = ["#extra"];
  for (let i = 0; i < deckArray.length; i++) {
    if (!isNaN(deckArray[i].id)) {
      if (deckArray[i].dlpriority > 200000000000000) {
        ydkex.push(deckArray[i].id);
      } else {
        ydkmain.push(deckArray[i].id);
      }
    }
  }
  for (let i = 0; i < ydkmain.length; i++) {
    ydk += ydkmain[i] + "\n";
  }
  for (let i = 0; i < ydkex.length; i++) {
    ydk += ydkex[i] + "\n";
  }
  return ydk;
}
//copy ydk text
function copyYdk() {
  let tag = document.createElement("textarea");
  tag.innerHTML = getYdk();
  document.body.appendChild(tag);
  tag.select();
  document.execCommand("copy");
  document.body.removeChild(tag);
  document.getElementById("btnCopyYdk").innerHTML = "Copied!";
  setTimeout(function () {
    document.getElementById("btnCopyYdk").innerHTML = "Copy YDK";
  }, 2000);
}
//download ydk file
function downloadYdk() {
  let tag = document.createElement("a");
  tag.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(getYdk())
  );
  tag.setAttribute("download", (title ? title : "deck") + ".ydk");
  tag.style.display = "none";
  document.body.appendChild(tag);
  tag.click();
  document.body.removeChild(tag);
  document.getElementById("btnDownloadYdk").innerHTML = "Downloaded!";
  setTimeout(function () {
    document.getElementById("btnDownloadYdk").innerHTML = "Download YDK";
  }, 2000);
}
//edit deck in deck builder
function editDeck() {
  window.location.href =
    "deck-builder?d=" + loaddeck.value + (sortDeckBy == "md" ? "&s=md" : "");
}
