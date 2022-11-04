var cardArray = [];
for (let i = 0; i < jsonResponseTechs.length; i++) {
  cardArray[i] = jsonResponseDl.filter(
    (a) => a.name == jsonResponseTechs[i].name
  )[0];
  let cardID = cardArray[i].name;
  if (cardArray[i].konamiID) {
    cardID = cardArray[i].konamiID;
  }
  document.getElementsByTagName("table")[0].innerHTML +=
    '<tr onclick="displayCard(' +
    i +
    ')"><td><img id="cardimg' +
    i +
    '" src="images/cards/' +
    cardID +
    '.jpg"></td><td><span style="font-size:20px;font-weight:bold">' +
    cardArray[i].name +
    "</span><br><br>" +
    jsonResponseTechs[i].description +
    "</td></tr>";
}
//display card info in dom
function displayCard(index) {
  cardinfoImg.src = document.getElementById("cardimg" + index).src;
  cardinfoName.innerHTML = cardArray[index].name;
  cardinfoRace.innerHTML = "Type: " + cardArray[index].race;
  if (cardArray[index].attribute == null) {
    cardinfoAttribute.innerHTML = "";
  } else {
    cardinfoAttribute.innerHTML = "Attribute: " + cardArray[index].attribute;
  }
  if (cardArray[index].level == null) {
    cardinfoLevel.innerHTML = "";
  } else {
    cardinfoLevel.innerHTML = "Level/Rank: " + cardArray[index].level;
  }
  cardinfoEffect.innerHTML = cardArray[index].description
    .replace(/\r\n----------------------------------------\r\n/g, "<br>")
    .replace(/\n/g, "<br>");
  if (cardArray[index].atk == null) {
    cardinfoAtk.innerHTML = "";
  } else {
    cardinfoAtk.innerHTML = "ATK: " + cardArray[index].atk;
  }
  if (cardArray[index].def == null) {
    cardinfoDef.innerHTML = "";
  } else {
    cardinfoDef.innerHTML = "DEF: " + cardArray[index].def;
  }
  cardinfoObtain.innerHTML = "How to obtain: ";
  for (let i = 0; i < cardArray[index].obtain.length; i++) {
    cardinfoObtain.innerHTML += cardArray[index].obtain[i].source.name + ", ";
  }
  cardinfoObtain.innerHTML = cardinfoObtain.innerHTML.slice(0, -2);
  showPopup();
}
