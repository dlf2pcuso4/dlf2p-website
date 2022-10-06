var jsonDataMd, imgLoadedCount, cardQuery, cardData;
var imgPerRow = 6;
var cardSize = 0.3;
var selectedSlot = 1;
var cardArray = [];
const btnSearch = document.getElementById("btnSearch");
const btnCalculate = document.getElementById("btnCalculate");
const imgsResults = document.getElementById("imgsResults");
const cnvResults = document.getElementById("cnvResults");
const ctxResults = cnvResults.getContext("2d");
const cardinfoImg = document.getElementById("cardinfoImg");
const cardinfoName = document.getElementById("cardinfoName");
const cardinfoRace = document.getElementById("cardinfoRace");
const cardinfoAttribute = document.getElementById("cardinfoAttribute");
const cardinfoLevel = document.getElementById("cardinfoLevel");
const cardinfoEffect = document.getElementById("cardinfoEffect");
const cardinfoAtk = document.getElementById("cardinfoAtk");
const cardinfoDef = document.getElementById("cardinfoDef");
class Card {
  constructor(id, type, attribute, level, atk, def) {
    this.id = id;
    this.type = type;
    this.attribute = attribute;
    this.level = level;
    this.atk = atk;
    this.def = def;
  }
}
window.onload = async function () {
  btnSearch.innerHTML = "Pending...";
  btnCalculate.innerHTML = "Calculate Missing Card";
  //let jsonResponseDl = await fetch(
  //  "https://dlf2pcuso4.github.io/ygo-deck-builder/lib/carddb-dl.json"
  //);
  //jsonDataDl = await jsonResponseDl.json();
  jsonDataMd = jsonResponseMd;
  document.getElementById("cardImgGlow1").style.backgroundColor = "#ffffa9";
  btnSearch.innerHTML = "Search";
};
//card searching
function searchCard() {
  if (btnSearch.innerHTML == "Search") {
    btnSearch.innerHTML = "Searching...";
    imgsResults.innerHTML = "";
    imgLoadedCount = 0;
    cardQuery = document.getElementById("searchname").value;
    //fetch from api
    cardData = jsonDataMd.filter(function (a) {
      let q = a.name.toLowerCase();
      let r = a.description.toLowerCase();
      return (
        q.includes(cardQuery.toLowerCase()) ||
        r.includes(cardQuery.toLowerCase())
      );
    });
    //sort results
    switch (searchsort.value) {
      case "popularity":
        cardData.sort(function (a, b) {
          return a.popRank - b.popRank;
        });
        break;
      case "release":
        cardData.sort(function (a, b) {
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
    //shorten list
    if (cardQuery == "" && cardData.length > 100) {
      cardData.length = 100;
    }
    //prepare result canvas
    if (cardData.length == 0) {
      cnvResults.style.display = "none";
      btnSearch.innerHTML = "No results found";
      setTimeout(function () {
        btnSearch.innerHTML = "Search";
      }, 1500);
    } else {
      cnvResults.style.display = "block";
    }
    cnvResults.width = imgPerRow * (421 * cardSize + 10);
    cnvResults.height = 688 * cardSize * Math.ceil(cardData.length / imgPerRow);
    imgCount = cardData.length;
    //append images of all search results
    for (let c = 0; c < imgCount; c++) {
      let img = document.createElement("img");
      img.id = "img" + c;
      img.onerror = function () {
        this.onerror = null;
        this.src = "images/noimage.jpg";
      };
      if (cardData[c].konamiID) {
        img.src = "images/cards/" + cardData[c].konamiID + ".jpg";
      } else {
        img.src = "images/cards/" + cardData[c].name + ".jpg";
      }
      imgsResults.appendChild(img);
    }
    //draw all appended images on canvas (after all images are loaded)
    for (let c = 0; c < imgCount; c++) {
      document.getElementById("img" + c).onload = function () {
        imgLoadedCount++;
        btnSearch.innerHTML =
          "Loading images (" + imgLoadedCount + "/" + imgCount + ")...";
        if (imgLoadedCount == imgCount) {
          for (let d = 0; d < imgCount; d++) {
            ctxResults.drawImage(
              document.getElementById("img" + d),
              (421 * cardSize + 10) * (d % imgPerRow),
              688 * cardSize * Math.floor(d / imgPerRow) + 74 * cardSize,
              421 * cardSize,
              614 * cardSize
            );
            if (cardData[d].rarity) {
              ctxResults.drawImage(
                document.getElementById("mdtag" + cardData[d].rarity),
                (421 * cardSize + 10) * (d % imgPerRow) + 205 * cardSize,
                688 * cardSize * Math.floor(d / imgPerRow) + 20 * cardSize,
                216 * cardSize,
                54 * cardSize
              );
            }
            if (cardData[d].banStatus) {
              ctxResults.drawImage(
                document.getElementById(cardData[d].banStatus),
                (421 * cardSize + 10) * (d % imgPerRow),
                688 * cardSize * Math.floor(d / imgPerRow) + 74 * cardSize,
                110 * cardSize,
                110 * cardSize
              );
            }
          }
          btnSearch.innerHTML = "Done!";
          setTimeout(function () {
            btnSearch.innerHTML = "Search";
          }, 1500);
        }
      };
    }
  }
}
//display card info when a search result is clicked
function selectCard(e) {
  //click location detection
  const rect = cnvResults.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  let cardSelected =
    Math.floor(y / (688 * cardSize)) * imgPerRow +
    Math.floor(x / (421 * cardSize + 10));
  //modify dom
  cardinfoImg.src = document.getElementById("img" + cardSelected).src;
  cardinfoName.innerHTML = cardData[cardSelected].name;
  cardinfoRace.innerHTML = "Type: " + cardData[cardSelected].race;
  if (cardData[cardSelected].attribute == null) {
    cardinfoAttribute.innerHTML = "";
  } else {
    cardinfoAttribute.innerHTML =
      "Attribute: " + cardData[cardSelected].attribute;
  }
  if (cardData[cardSelected].level == null) {
    cardinfoLevel.innerHTML = "";
  } else {
    cardinfoLevel.innerHTML = "Level/Rank: " + cardData[cardSelected].level;
  }
  cardinfoEffect.innerHTML = cardData[cardSelected].description
    .replace(/\r\n----------------------------------------\r\n/g, "<br>")
    .replace(/\n/g, "<br>");
  if (cardData[cardSelected].atk == null) {
    cardinfoAtk.innerHTML = "";
  } else {
    cardinfoAtk.innerHTML = "ATK: " + cardData[cardSelected].atk;
  }
  if (cardData[cardSelected].def == null) {
    cardinfoDef.innerHTML = "";
  } else {
    cardinfoDef.innerHTML = "DEF: " + cardData[cardSelected].def;
  }
  if (
    cardData[cardSelected].type == "Monster" &&
    cardData[cardSelected].monsterType.includes("Fusion") == false &&
    cardData[cardSelected].monsterType.includes("Synchro") == false &&
    cardData[cardSelected].monsterType.includes("Xyz") == false &&
    cardData[cardSelected].monsterType.includes("XYZ") == false &&
    cardData[cardSelected].monsterType.includes("Link") == false
  ) {
    cardArray[selectedSlot] = new Card(
      cardData[cardSelected].id,
      cardData[cardSelected].race,
      cardData[cardSelected].attribute,
      cardData[cardSelected].level,
      cardData[cardSelected].atk,
      cardData[cardSelected].def
    );
    document.getElementById("cardImg" + selectedSlot).src = cardinfoImg.src;
  }
}
function selectSlot(id) {
  selectedSlot = id;
  document.getElementById("cardImgGlow1").style.backgroundColor = "#00000000";
  document.getElementById("cardImgGlow2").style.backgroundColor = "#00000000";
  document.getElementById("cardImgGlow3").style.backgroundColor = "#00000000";
  document.getElementById("cardImgGlow" + id).style.backgroundColor = "#ffffa9";
}
function removeCard() {
  cardArray[selectedSlot] = null;
  document.getElementById("cardImg" + selectedSlot).src = "images/noimage.jpg";
}
function calculate() {
  if (btnCalculate.innerHTML == "Calculate Missing Card") {
    let checkFilled = 0;
    for (let c = 1; c < 4; c++) {
      if (cardArray[c]) {
        checkFilled++;
      }
    }
    if (checkFilled == 2) {
      btnCalculate.innerHTML = "Calculating...";
      imgsResults.innerHTML = "";
      imgLoadedCount = 0;
      //fetch from api
      cardData = jsonDataMd.filter(function (a) {
        let match1 = 0;
        let match2 = 0;
        let match3 = 0;
        if (cardArray[2]) {
          if (cardArray[2].type == a.race) {
            match2++;
          }
          if (cardArray[2].attribute == a.attribute) {
            match2++;
          }
          if (cardArray[2].level == a.level) {
            match2++;
          }
          if (cardArray[2].atk == a.atk) {
            match2++;
          }
          if (cardArray[2].def == a.def) {
            match2++;
          }
          match1 = 1;
          match3 = 1;
        } else {
          if (cardArray[1].type == a.race) {
            match1++;
          }
          if (cardArray[1].attribute == a.attribute) {
            match1++;
          }
          if (cardArray[1].level == a.level) {
            match1++;
          }
          if (cardArray[1].atk == a.atk) {
            match1++;
          }
          if (cardArray[1].def == a.def) {
            match1++;
          }
          if (cardArray[3].type == a.race) {
            match3++;
          }
          if (cardArray[3].attribute == a.attribute) {
            match3++;
          }
          if (cardArray[3].level == a.level) {
            match3++;
          }
          if (cardArray[3].atk == a.atk) {
            match3++;
          }
          if (cardArray[3].def == a.def) {
            match3++;
          }
          match2 = 1;
        }
        return (
          match1 == 1 &&
          match2 == 1 &&
          match3 == 1 &&
          a.monsterType.includes("Fusion") == false &&
          a.monsterType.includes("Synchro") == false &&
          a.monsterType.includes("Xyz") == false &&
          a.monsterType.includes("XYZ") == false &&
          a.monsterType.includes("Link") == false
        );
      });
      //sort results
      switch (searchsort.value) {
        case "popularity":
          cardData.sort(function (a, b) {
            return a.popRank - b.popRank;
          });
          break;
        case "release":
          cardData.sort(function (a, b) {
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
      //shorten list
      if (cardData.length > 200) {
        cardData.length = 200;
      }
      //prepare result canvas
      if (cardData.length == 0) {
        cnvResults.style.display = "none";
        btnCalculate.innerHTML = "No results found";
        setTimeout(function () {
          btnCalculate.innerHTML = "Calculate Missing Card";
        }, 1500);
      } else {
        cnvResults.style.display = "block";
      }
      cnvResults.width = imgPerRow * (421 * cardSize + 10);
      cnvResults.height =
        688 * cardSize * Math.ceil(cardData.length / imgPerRow);
      imgCount = cardData.length;
      //append images of all search results
      for (let c = 0; c < imgCount; c++) {
        let img = document.createElement("img");
        img.id = "img" + c;
        img.onerror = function () {
          this.onerror = null;
          this.src = "images/noimage.jpg";
        };
        if (cardData[c].konamiID) {
          img.src = "images/cards/" + cardData[c].konamiID + ".jpg";
        } else {
          img.src = "images/cards/" + cardData[c].name + ".jpg";
        }
        imgsResults.appendChild(img);
      }
      //draw all appended images on canvas (after all images are loaded)
      for (let c = 0; c < imgCount; c++) {
        document.getElementById("img" + c).onload = function () {
          imgLoadedCount++;
          btnCalculate.innerHTML =
            "Loading images (" + imgLoadedCount + "/" + imgCount + ")...";
          if (imgLoadedCount == imgCount) {
            for (let d = 0; d < imgCount; d++) {
              ctxResults.drawImage(
                document.getElementById("img" + d),
                (421 * cardSize + 10) * (d % imgPerRow),
                688 * cardSize * Math.floor(d / imgPerRow) + 74 * cardSize,
                421 * cardSize,
                614 * cardSize
              );
              if (cardData[d].rarity) {
                ctxResults.drawImage(
                  document.getElementById("mdtag" + cardData[d].rarity),
                  (421 * cardSize + 10) * (d % imgPerRow) + 205 * cardSize,
                  688 * cardSize * Math.floor(d / imgPerRow) + 20 * cardSize,
                  216 * cardSize,
                  54 * cardSize
                );
              }
              if (cardData[d].banStatus) {
                ctxResults.drawImage(
                  document.getElementById(cardData[d].banStatus),
                  (421 * cardSize + 10) * (d % imgPerRow),
                  688 * cardSize * Math.floor(d / imgPerRow) + 74 * cardSize,
                  110 * cardSize,
                  110 * cardSize
                );
              }
            }
            btnCalculate.innerHTML = "Done!";
            setTimeout(function () {
              btnCalculate.innerHTML = "Calculate Missing Card";
            }, 1500);
          }
        };
      }
    } else {
      btnCalculate.innerHTML = "Invalid Input";
      setTimeout(function () {
        btnCalculate.innerHTML = "Calculate Missing Card";
      }, 1500);
    }
  }
}
