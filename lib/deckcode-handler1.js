function encodeDeckcode1(title, skillname, deckArray) {
  let skillid = "";
  for (let i = 0; i < jsonResponseSkill.length; i++) {
    if (jsonResponseSkill[i].name == skillname) {
      skillid = ("0" + base64Encode(i)).substr(-2);
      break;
    }
  }
  let resultstring = "";
  let deckArchs = [];
  let cardArchs = [];
  let misc = [""];
  for (let i = 0; i < deckArray.length; i++) {
    let found = false;
    for (let j = 0; j < jsonResponseArch.length; j++) {
      for (let k = 0; k < jsonResponseArch[j].members.length; k++) {
        if (jsonResponseArch[j].members[k] == deckArray[i].name) {
          found = true;
          cardArchs.push({ archid: j, index: k });
          if (!deckArchs.includes(j)) deckArchs.push(j);
          break;
        }
      }
      if (found) break;
    }
    if (!found) {
      let id = jsonResponseDl.filter((a) => a.name == deckArray[i].name)[0]._id;
      misc.push(id[7] + id.slice(20));
    }
  }
  let archCount = [];
  let duplicates = [];
  for (let i = 0; i < deckArchs.length; i++) {
    resultstring += ("0" + base64Encode(deckArchs[i])).substr(-2) + ",";
    let filteredCardArchs = cardArchs.filter((a) => a.archid == deckArchs[i]);
    let thisArchCount = 0;
    filteredCardArchs.sort((a, b) => a.index - b.index);
    let previous = null;
    for (let j = 0; j < filteredCardArchs.length; j++) {
      if (filteredCardArchs[j].index != previous) {
        resultstring += base64Encode(filteredCardArchs[j].index);
        duplicates.push(0);
        thisArchCount++;
      } else {
        duplicates[duplicates.length - 1]++;
      }
      previous = filteredCardArchs[j].index;
    }
    archCount.push(thisArchCount.toString(16));
    resultstring += ",";
  }
  let miscstr = "";
  for (let i = 1; i < misc.length; i++) {
    if (misc[i] != misc[i - 1]) {
      duplicates.push(0);
      miscstr += misc[i];
    } else {
      duplicates[duplicates.length - 1]++;
    }
  }
  let encodedCardCount = base64Encode(base3Decode("1" + duplicates.join("")));
  let portionSize = base64Encode(encodedCardCount.length);
  portionSize += base64Encode(parseInt(archCount.join(""), 16));
  let cardstr = resultstring.replace(/,/g, "") + "!" + miscstr;
  return skillid + portionSize + "!" + encodedCardCount + cardstr + title;
}

function decodeDeckcode1(code) {
  let portionSize = code.split("!")[0];
  let processingCode = code.slice(portionSize.length + 1);
  let skillid = portionSize.slice(0, 2);
  portionSize = portionSize.slice(2);
  let skillname = jsonResponseSkill[base64Decode(skillid)].name;
  let encodedCardCountLength = Number(base64Decode(portionSize[0]));
  let archCountArr = base64Decode(portionSize.slice(1)).toString(16).split("");
  let encodedCardCount = processingCode.slice(0, encodedCardCountLength);
  encodedCardCount = base3Encode(base64Decode(encodedCardCount)).slice(1);
  processingCode = processingCode.slice(encodedCardCountLength);
  let cardArr = [];
  for (let i = 0; i < archCountArr.length; i++) {
    if (processingCode.slice(0, 1) == "!") break;
    let archid = base64Decode(processingCode.slice(0, 2));
    processingCode = processingCode.slice(2);
    let archCards = processingCode.slice(0, parseInt(archCountArr[i], 16));
    processingCode = processingCode.slice(parseInt(archCountArr[i], 16));
    for (let j = 0; j < archCards.length; j++) {
      cardArr.push(
        jsonResponseArch[archid].members[base64Decode(archCards[j])]
      );
    }
  }
  let result = [];
  for (let i = 0; i < cardArr.length; i++) {
    for (let j = 0; j <= encodedCardCount[i]; j++) {
      result.push(cardArr[i]);
    }
  }
  processingCode = processingCode.slice(1);
  let miscstr = processingCode.slice(
    0,
    (encodedCardCount.length - cardArr.length) * 5
  );
  processingCode = processingCode.slice(miscstr.length);
  for (let i = 0; i < miscstr.length; i += 5) {
    for (let j = 0; j <= encodedCardCount[cardArr.length + i / 5]; j++) {
      result.push(
        jsonResponseDl.filter(
          (a) =>
            a._id[7] + a._id.slice(20) ==
            miscstr[i] +
              miscstr[i + 1] +
              miscstr[i + 2] +
              miscstr[i + 3] +
              miscstr[i + 4]
        )[0].name
      );
    }
  }
  let deckArray = [];
  for (let i = 0; i < result.length; i++) {
    jsonDataDlFiltered = jsonResponseDl.filter((a) => a.name == result[i]);
    jsonDataMdFiltered = jsonResponseMd.filter((a) => a.name == result[i]);
    deckArray.push({
      id: jsonDataDlFiltered[0].konamiID
        ? jsonDataDlFiltered[0].konamiID
        : jsonDataDlFiltered[0].name,
      name: jsonDataDlFiltered[0].name,
      race: jsonDataDlFiltered[0].race,
      attribute: jsonDataDlFiltered[0].attribute,
      level: jsonDataDlFiltered[0].level,
      dlrarity: jsonDataDlFiltered[0].rarity,
      mdrarity: jsonDataMdFiltered[0].rarity,
      effect: jsonDataDlFiltered[0].description,
      atk: jsonDataDlFiltered[0].atk,
      def: jsonDataDlFiltered[0].def,
      dlobtain: jsonDataDlFiltered[0].obtain,
      mdobtain: jsonDataMdFiltered[0].obtain,
      dlBanStatus: jsonDataDlFiltered[0].banStatus,
      mdBanStatus: jsonDataMdFiltered[0].banStatus,
      dlpriority: dlCardPriority(
        jsonDataDlFiltered[0].konamiID
          ? jsonDataDlFiltered[0].konamiID
          : "0000000000",
        jsonDataDlFiltered[0].monsterType,
        jsonDataDlFiltered[0].type,
        jsonDataDlFiltered[0].rarity,
        jsonDataDlFiltered[0].level,
        jsonDataDlFiltered[0].linkRating
      ),
      mdpriority: mdCardPriority(
        jsonDataDlFiltered[0].konamiID
          ? jsonDataDlFiltered[0].konamiID
          : "0000000000",
        jsonDataDlFiltered[0].monsterType,
        jsonDataDlFiltered[0].type,
        jsonDataDlFiltered[0].level,
        jsonDataDlFiltered[0].linkRating,
        jsonDataDlFiltered[0].race
      ),
    });
  }
  return { title: processingCode, skill: skillname, deckArray: deckArray };
}

function base64Encode(str) {
  let input = BigInt(str);
  let chars =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";
  let result = "";
  while (input > 0n) {
    result = chars[input - (input / 64n) * 64n] + result;
    input = BigInt(input / 64n);
  }
  return result ? result : "0";
}
function base64Decode(str) {
  let result = 0n;
  let chars =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";
  for (let i = str.length - 1; i >= 0; i--) {
    result += BigInt(chars.indexOf(str[i])) * 64n ** BigInt(str.length - 1 - i);
  }
  return result;
}
function base3Encode(str) {
  let input = BigInt(str);
  let chars = "012";
  let result = "";
  while (input > 0n) {
    result = chars[input - (input / 3n) * 3n] + result;
    input = BigInt(input / 3n);
  }
  return result;
}
function base3Decode(str) {
  let result = 0n;
  let chars = "012";
  for (let i = str.length - 1; i >= 0; i--) {
    result += BigInt(chars.indexOf(str[i])) * 3n ** BigInt(str.length - 1 - i);
  }
  return result;
}
