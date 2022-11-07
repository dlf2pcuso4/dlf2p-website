const params = new URL(document.location).searchParams;
const paramDeckcode = params.get("d");
var jsonDataDl,
  jsonDataSkill,
  jsonDataMd,
  cardData,
  cardQuery,
  skillData,
  imgCount,
  imgLoadedCount,
  cardSelected,
  title;
var cardSize = 0.3;
var imgPerRow = 10;
var deckArray = [];
var deckIndex = 0;
var deckCardSize = 0.15;
var deckImgPerRow = 10;
var sortDeckBy = "dl";
const btnSearch = document.getElementById("btnSearch");
const searchfrom = document.getElementById("searchfrom");
const searchsort = document.getElementById("searchsort");
const searchfilter = document.getElementById("searchfilter");
const btnImport = document.getElementById("btnImport");
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
const cardinfoObtain = document.getElementById("cardinfoObtain");
const btnSortBy = document.getElementById("btnSortBy");
const btnCopy = document.getElementById("btnCopy");
const autoadd = document.getElementById("autoadd");
const cnvDeck = document.getElementById("cnvDeck");
const ctxDeck = cnvDeck.getContext("2d");
const cnvExDeck = document.getElementById("cnvExDeck");
const ctxExDeck = cnvExDeck.getContext("2d");
const imgsResults = document.getElementById("imgsResults");
const imgsDeck = document.getElementById("imgsDeck");
class Card {
  constructor(id, dlpriority, mdpriority) {
    this.id = id;
    this.dlpriority = dlpriority;
    this.mdpriority = mdpriority;
  }
}
window.onload = async function () {
  btnSearch.innerHTML = "Pending...";
  //mobile size settings
  if (_isMobile == true) {
    imgPerRow = 5;
    cardSize = 0.35;
    deckImgPerRow = 6;
    deckCardSize = 0.25;
  } else {
    document.getElementById("controls").classList.add("flexdivc");
  }
  cnvDeck.height = cnvExDeck.height = 0;
  cnvDeck.width = cnvExDeck.width = (421 * deckCardSize + 1) * deckImgPerRow;
  btnCopy.innerHTML = "Copy Deck Code";
  jsonDataDl = jsonResponseDl;
  jsonDataSkill = jsonResponseSkill;
  jsonDataMd = jsonResponseMd;
  //import search card filters
  for (let i = 0; i < jsonResponseFilters.length; i++) {
    let filter = document.createElement("option");
    filter.value = jsonResponseFilters[i].name;
    filter.innerHTML = jsonResponseFilters[i].name;
    searchfilter.appendChild(filter);
  }
  btnSearch.innerHTML = "Search";
  btnImport.innerHTML = "Import";
  if (paramDeckcode) {
    title = paramDeckcode.split("_")[2];
    document.getElementById("deckname").value = title;
    document.getElementById("importdeck").value = paramDeckcode;
    importDeck();
  }
};
//apply card search filter
function addFilter() {
  if (searchfilter.value != "None") {
    document.getElementById("filterlist").innerHTML +=
      '<div class="appliedFilter"style="margin:5px;padding:5px;width:fit-content;font-weight:lighter;font-size:18px;background-color:#604978;cursor:pointer"onclick="this.remove()">' +
      searchfilter.value +
      "</div>";
  }
}
//Submitting text inputs when enter key is pressed
function keydown(e, func) {
  if (e.key == "Enter") {
    window[func]();
  }
}
//card searching
function searchCard() {
  if (btnSearch.innerHTML == "Search") {
    btnSearch.innerHTML = "Searching...";
    imgsResults.innerHTML = "";
    imgLoadedCount = 0;
    cardQuery = document.getElementById("searchname").value;
    //fetch from api
    if (searchfrom.value == "dl") {
      cardData = jsonDataDl.filter(function (a) {
        let q = a.name.toLowerCase();
        let r = a.description.toLowerCase();
        return (
          q.includes(cardQuery.toLowerCase()) ||
          r.includes(cardQuery.toLowerCase())
        );
      });
    } else if (searchfrom.value == "md") {
      cardData = jsonDataMd.filter(function (a) {
        let q = a.name.toLowerCase();
        let r = a.description.toLowerCase();
        return (
          q.includes(cardQuery.toLowerCase()) ||
          r.includes(cardQuery.toLowerCase())
        );
      });
    }
    //filter search results
    let appliedFilters = document.getElementsByClassName("appliedFilter");
    for (let i = 0; i < appliedFilters.length; i++) {
      let filterData = jsonResponseFilters.filter(
        (a) => a.name == appliedFilters[i].innerHTML
      )[0];
      if (filterData.property == "monsterType") {
        cardData = cardData.filter((a) =>
          a[filterData.property].includes(filterData.value)
        );
      } else {
        cardData = cardData.filter(
          (a) => a[filterData.property] == filterData.value
        );
      }
    }
    //filter unreleased cards
    if (document.getElementById("showunreleased").checked == false) {
      cardData = cardData.filter((a) => a.rarity);
    }
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
    if (cardData.length > 300) {
      cardData.length = 300;
    }
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
                document.getElementById(
                  searchfrom.value + "tag" + cardData[d].rarity
                ),
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
//search skill
function searchSkill() {
  let skillresults = document.getElementById("skillresults");
  let skillQuery = document.getElementById("searchskill").value;
  skillresults.innerHTML = "";
  skillData = jsonDataSkill.filter(function (a) {
    let q = a.name.toLowerCase();
    let r = a.description.toLowerCase();
    return (
      q.includes(skillQuery.toLowerCase()) ||
      r.includes(skillQuery.toLowerCase())
    );
  });
  for (let c = 0; c < skillData.length; c++) {
    let resultItem = document.createElement("option");
    resultItem.value = skillData[c].name;
    resultItem.innerHTML = skillData[c].name;
    skillresults.appendChild(resultItem);
  }
}
//change deck name
function changeName() {
  title = document.getElementById("deckname").value;
}
//display card info when a search result is clicked
function selectCard(e) {
  //click location detection
  const rect = cnvResults.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  cardSelected =
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
  if (cardData[cardSelected].obtain.length == 0) {
    cardinfoObtain.innerHTML = "Cannot be obtained";
  } else {
    cardinfoObtain.innerHTML = "How to obtain: ";
    for (let i = 0; i < cardData[cardSelected].obtain.length; i++) {
      cardinfoObtain.innerHTML +=
        cardData[cardSelected].obtain[i].source.name + ", ";
    }
    cardinfoObtain.innerHTML = cardinfoObtain.innerHTML.slice(0, -2);
  }
  if (autoadd.checked == true) {
    addCard();
  } else {
    showPopup();
  }
}
//add card to deck
function addCard() {
  if (cardSelected != null) {
    let newcard;
    if (cardData[cardSelected].konamiID) {
      //add card id to array, then draw image
      newcard = new Card(
        cardData[cardSelected].konamiID,
        dlCardPriority(
          cardData[cardSelected].konamiID,
          cardData[cardSelected].monsterType,
          cardData[cardSelected].type,
          jsonDataDl.filter(
            (a) => a.konamiID == cardData[cardSelected].konamiID
          )[0].rarity,
          cardData[cardSelected].level,
          cardData[cardSelected].linkRating
        ),
        mdCardPriority(
          cardData[cardSelected].konamiID,
          cardData[cardSelected].monsterType,
          cardData[cardSelected].type,
          cardData[cardSelected].level,
          cardData[cardSelected].linkRating,
          cardData[cardSelected].race
        )
      );
    } else {
      newcard = new Card(
        cardData[cardSelected].name,
        dlCardPriority(
          "0000000000",
          cardData[cardSelected].monsterType,
          cardData[cardSelected].type,
          jsonDataDl.filter(
            (a) => a.konamiID == cardData[cardSelected].konamiID
          )[0].rarity,
          cardData[cardSelected].level,
          cardData[cardSelected].linkRating
        ),
        mdCardPriority(
          "0000000000",
          cardData[cardSelected].monsterType,
          cardData[cardSelected].type,
          cardData[cardSelected].level,
          cardData[cardSelected].linkRating,
          cardData[cardSelected].race
        )
      );
    }
    if (
      deckArray.filter(function (a) {
        return a.id == newcard.id;
      }).length < 3 &&
      checkDeckSpace(newcard.dlpriority)
    ) {
      deckArray[deckIndex] = newcard;
      //append card image if it is not a duplicate
      if (
        document.getElementById("deckimg" + deckArray[deckIndex].id) == null
      ) {
        let img = document.createElement("img");
        img.id = "deckimg" + deckArray[deckIndex].id;
        img.onerror = function () {
          this.onerror = null;
          this.src = "images/noimage.jpg";
          refreshDeck();
        };
        img.src = "images/cards/" + deckArray[deckIndex].id + ".jpg";
        imgsDeck.appendChild(img);
      }
      refreshDeck();
      deckIndex++;
      document.getElementById("notificationImg").src = cardinfoImg.src;
      showNotification(1000);
    }
  }
}
//add skill
function addSkill() {
  document.getElementById("deckSkill").innerHTML = skillresults.value;
}
//checks if deck has space
function checkDeckSpace(priority) {
  if (priority > 200000000000000) {
    if (
      deckArray.filter(function (a) {
        return a.dlpriority > 200000000000000;
      }).length < 15
    ) {
      return true;
    } else {
      return false;
    }
  } else {
    if (
      deckArray.filter(function (a) {
        return a.dlpriority < 200000000000000;
      }).length < 60
    ) {
      return true;
    } else {
      return false;
    }
  }
}
//import deck by deck code
function importDeck() {
  if (btnImport.innerHTML == "Import") {
    btnImport.innerHTML = "Importing...";
    clearDeck();
    //set skill
    let dsSplit = document.getElementById("importdeck").value.split("_");
    if (jsonDataSkill[dsSplit[1]]) {
      document.getElementById("deckSkill").innerHTML =
        jsonDataSkill[dsSplit[1]].name;
    }
    if (dsSplit[2]) {
      title = decodeURIComponent(dsSplit[2]);
      document.getElementById("deckname").value = title;
    }
    //split deck code into individual cards
    let deckcodeArray = decodeDeck(dsSplit[0]).match(/.{1,10}/g);
    let imgLoadedCount = 0;
    for (let c = 0; c < deckcodeArray.length; c++) {
      let jsonDataDlFiltered = jsonDataDl.filter(function (a) {
        return a.konamiID == Number(deckcodeArray[c]);
      });
      //add card id to array
      deckArray[c] = new Card(
        jsonDataDlFiltered[0].konamiID,
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
    }
    //special cards
    if (dsSplit[3]) {
      for (let i = 0; i < dsSplit[3].split("-").length; i++) {
        jsonDataDlFiltered = jsonDataDl.filter(function (a) {
          return a.name == dsSplit[3].split("-")[i];
        });
        deckArray.push(
          new Card(
            jsonDataDlFiltered[0].name,
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
      }
    }
    //append card image if it is not a duplicate
    for (let c = 0; c < deckArray.length; c++) {
      if (document.getElementById("deckimg" + deckArray[c].id) == null) {
        let img = document.createElement("img");
        img.id = "deckimg" + deckArray[c].id;
        img.onerror = function () {
          this.onerror = null;
          this.src = "images/noimage.jpg";
        };
        img.src = "images/cards/" + deckArray[c].id + ".jpg";
        img.onload = function () {
          imgLoadedCount++;
          btnImport.innerHTML =
            "Loading images (" +
            imgLoadedCount +
            "/" +
            imgsDeck.childElementCount +
            ")...";
          if (imgLoadedCount == imgsDeck.childElementCount) {
            refreshDeck();
            btnImport.innerHTML = "Done!";
            setTimeout(function () {
              btnImport.innerHTML = "Import";
            }, 1500);
          }
        };
        imgsDeck.appendChild(img);
      }
    }
    deckIndex = deckArray.length;
  }
}
//remove a card when a card in deck is clicked
function selectDeckCard(e) {
  //click location detection
  const rect = cnvDeck.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const index =
    Math.floor(y / (614 * deckCardSize + 1)) * deckImgPerRow +
    Math.floor(x / (421 * deckCardSize + 1)) +
    deckArray.filter(function (a) {
      return a.dlpriority > 200000000000000;
    }).length;
  //shift all elements
  if (index < deckArray.length) {
    for (let c = index; c < deckArray.length - 1; c++) {
      deckArray[c] = deckArray[c + 1];
    }
    deckArray.length--;
    deckIndex--;
    refreshDeck();
  }
}
//remove a card when a card in extra deck is clicked
function selectExDeckCard(e) {
  //click location detection
  const rect = cnvExDeck.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const index =
    Math.floor(y / (614 * deckCardSize + 1)) * deckImgPerRow +
    Math.floor(x / (421 * deckCardSize + 1));
  //shift all elements
  if (
    index < deckArray.length &&
    deckArray[index].dlpriority > 200000000000000
  ) {
    for (let c = index; c < deckArray.length - 1; c++) {
      deckArray[c] = deckArray[c + 1];
    }
    deckArray.length--;
    deckIndex--;
    refreshDeck();
  }
}
//sort mode toggle
function sortBy() {
  if (sortDeckBy == "dl") {
    sortDeckBy = "md";
    btnSortBy.innerHTML = "Sort: Master Duel";
  } else {
    sortDeckBy = "dl";
    btnSortBy.innerHTML = "Sort: Duel Links";
  }
  refreshDeck();
}
//draw all cards in array to deck canvas
function refreshDeck() {
  //sort deck
  if (deckIndex > 0) {
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
  }
  let indexmain = 0;
  cnvDeck.height =
    (614 * deckCardSize + 1) *
    Math.ceil(
      deckArray.filter(function (a) {
        return a.dlpriority < 200000000000000;
      }).length / deckImgPerRow
    );
  cnvExDeck.height =
    (614 * deckCardSize + 1) *
    Math.ceil(
      deckArray.filter(function (a) {
        return a.dlpriority > 200000000000000;
      }).length / deckImgPerRow
    );
  for (let c = 0; c < deckArray.length; c++) {
    if (deckArray[c].dlpriority > 200000000000000) {
      ctxExDeck.drawImage(
        document.getElementById("deckimg" + deckArray[c].id),
        (421 * deckCardSize + 1) * (c % deckImgPerRow),
        (614 * deckCardSize + 1) * Math.floor(c / deckImgPerRow),
        421 * deckCardSize,
        614 * deckCardSize
      );
    } else {
      ctxDeck.drawImage(
        document.getElementById("deckimg" + deckArray[c].id),
        (421 * deckCardSize + 1) * (indexmain % deckImgPerRow),
        (614 * deckCardSize + 1) * Math.floor(indexmain / deckImgPerRow),
        421 * deckCardSize,
        614 * deckCardSize
      );
      indexmain++;
    }
  }
}
//clear deck
function clearDeck() {
  imgsDeck.innerHTML = "";
  deckArray = [];
  deckIndex = 0;
  cnvDeck.height = cnvExDeck.height = 0;
}
//copy deck code to clipboard
//deckcode + "x" + skill index
function copyDeck() {
  if (btnCopy.innerHTML == "Copy Deck Code") {
    let deckcode = "";
    let specialCards = "";
    for (let c = 0; c < deckArray.length; c++) {
      if (isNaN(deckArray[c].id) == false) {
        deckcode += pad10(deckArray[c].id);
      }
    }
    for (let c = 0; c < deckArray.length; c++) {
      if (isNaN(deckArray[c].id)) {
        specialCards += deckArray[c].id + "-";
      }
    }
    let link =
      encodeDeck(deckcode) +
      "_" +
      jsonDataSkill.findIndex(
        (a) => a.name == document.getElementById("deckSkill").innerHTML
      ) +
      "_" +
      encodeURIComponent(title);
    if (specialCards) {
      link += "_" + specialCards.slice(0, -1);
    }
    if (copy(link)) {
      btnCopy.innerHTML = "Copied!";
      setTimeout(function () {
        btnCopy.innerHTML = "Copy Deck Code";
      }, 1500);
    }
  }
}
//send deck code to deck-display.html
function sendDeck() {
  let deckcode = "";
  let specialCards = "";
  for (let c = 0; c < deckArray.length; c++) {
    if (isNaN(deckArray[c].id) == false) {
      deckcode += pad10(deckArray[c].id);
    }
  }
  for (let c = 0; c < deckArray.length; c++) {
    if (isNaN(deckArray[c].id)) {
      specialCards += deckArray[c].id + "-";
    }
  }
  let link =
    encodeDeck(deckcode) +
    "_" +
    jsonDataSkill.findIndex(
      (a) => a.name == document.getElementById("deckSkill").innerHTML
    ) +
    "_" +
    encodeURIComponent(title);
  if (specialCards) {
    link += "_" + specialCards.slice(0, -1);
  }
  window.location.href = "deck?d=" + link;
}
