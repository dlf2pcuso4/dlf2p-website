//deckcode handler v2 - makes deck codes even shorter
//encodeDeck(deckcode) - returns encoded deckcode
//decodeDeck(deckcode) - returns decoded deckcode
//pad10(num) - returns 10 digit integer with padded 0s in front
//copy(text) - copies text to clipboard, returns true on success

//custom deckcode encoding function
const deckcodeHandlerJs = true;

function convertToV2(d) {
  switch (d.split("_")[0]) {
    case "2":
      return d.slice(2);
    case "3":
      return v3tov2(d.slice(2));
    default:
      return d;
  }
}

function encodeDeck(a) {
  let deckcodeArray = a.match(/.{1,10}/g);
  let comparecode = "";
  let result = "";
  //replace duplicate cards with "z" and triples with "y"
  for (let c = 0; c < deckcodeArray.length; c++) {
    if (deckcodeArray[c] == comparecode) {
      result += "b";
    } else {
      comparecode = deckcodeArray[c];
      result += deckcodeArray[c];
    }
  }
  result = result.replace(/bb/g, "c");
  result = result.replace(/00/g, "a");
  return base63Encode(base13Decode(result));
}
//custom deckcode decoding function
function decodeDeck(a) {
  result = base13Encode(base63Decode(a));
  if (result[0] != "a") result = "0" + result;
  result = result.replace(/a/g, "00");
  result = result.replace(/c/g, "bb");
  result = result.replace(/b/g, "xxxxxxxxxx");
  let deckcodeArray = result.match(/.{1,10}/g);
  result = "";
  for (let c = 0; c < deckcodeArray.length; c++) {
    if (deckcodeArray[c] == "xxxxxxxxxx") {
      deckcodeArray[c] = deckcodeArray[c - 1];
    }
    result += deckcodeArray[c];
  }
  return result;
}
//convert deck link to ydk
function convertUrlToYdk(url) {
  try {
    console.log(priorityHandlerJs);
  } catch (err) {
    const priorityHandler = document.createElement("script");
    priorityHandler.src = "lib/priority-handler.js";
    document.head.appendChild(priorityHandler);
  }
  const deckcodeArr = decodeDeck(url.split("d=")[1].split("_")[0]).match(
    /.{1,10}/g
  );
  let ydkmain = ["#main"];
  let ydkex = ["\n#extra"];
  for (deckcode of deckcodeArr) {
    if (getPriority(deckcode, "dl") > 200000000000000) {
      ydkex.push(Number(deckcode));
    } else {
      ydkmain.push(Number(deckcode));
    }
  }
  return ydkmain.join("\n") + ydkex.join("\n");
}

//bigint base63 encode/decode
function base63Encode(str) {
  let input = BigInt(str);
  let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-";
  let result = "";
  while (input > 0n) {
    result = chars[input - (input / 63n) * 63n] + result;
    input = BigInt(input / 63n);
  }
  return result;
}
function base63Decode(str) {
  let result = 0n;
  let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-";
  for (let i = str.length - 1; i >= 0; i--) {
    result += BigInt(chars.indexOf(str[i])) * 63n ** BigInt(str.length - 1 - i);
  }
  return result;
}

//big int base 13 encode/decode
function base13Encode(str) {
  let input = BigInt(str);
  let chars = "0123456789abc";
  let result = "";
  while (input > 0n) {
    result = chars[input - (input / 13n) * 13n] + result;
    input = BigInt(input / 13n);
  }
  return result;
}
function base13Decode(str) {
  let result = 0n;
  let chars = "0123456789abc";
  for (let i = str.length - 1; i >= 0; i--) {
    result += BigInt(chars.indexOf(str[i])) * 13n ** BigInt(str.length - 1 - i);
  }
  return result;
}

//pad 0s function
const pad10 = (num) => ("000000000" + num).substr(-10);

//basic copy text function
function copy(text) {
  let input = document.createElement("textarea");
  input.innerHTML = text;
  document.body.appendChild(input);
  input.select();
  let result = document.execCommand("copy");
  document.body.removeChild(input);
  return result;
}

//using new dlf2pIDs
function v2tov3(d) {
  const dcomps = d.split("_");
  const arrKonamiID = decodeDeck(dcomps[0]).match(/.{1,10}/g);
  const arrDlf2pID = [];
  for (let item of arrKonamiID) {
    arrDlf2pID.push(
      pad5(dlf2pIDResponse.filter((a) => a.konamiID == Number(item))[0].dlf2pID)
    );
  }
  if (dcomps[3]) {
    const specialCards = dcomps[3].split("-");
    for (let item of specialCards) {
      arrDlf2pID.push(
        pad5(
          dlf2pIDResponse.filter((a) => a.name == decodeURIComponent(item))[0]
            .dlf2pID
        )
      );
    }
  }
  let deckcode = "";
  let prev = "";
  for (let item of arrDlf2pID) {
    if (item != prev) {
      prev = item;
      deckcode += item;
    } else {
      deckcode += "a";
    }
  }
  return `${base63Encode(
    base12Decode("1" + deckcode.replace(/aa/g, "b"))
  )}_${base63Encode(dcomps[1])}_${scramble(dcomps[2])}`;
}
function v3tov2(d) {
  const dcomps = d.split("_");
  const arrDlf2pID = base12Encode(base63Decode(dcomps[0]))
    .slice(1)
    .replace(/a/g, "xxxxx")
    .replace(/b/g, "xxxxxxxxxx")
    .match(/.{1,5}/g);
  const arrKonamiID = [];
  const arrName = [];
  for (let i = 0; i < arrDlf2pID.length; i++) {
    if (arrDlf2pID[i] != "xxxxx") {
      const card = dlf2pIDResponse.filter(
        (a) => a.dlf2pID == Number(arrDlf2pID[i])
      )[0];
      if (card.konamiID) {
        arrKonamiID.push(pad10(card.konamiID));
      } else {
        arrName.push(card.name);
      }
    } else {
      arrKonamiID.push(arrKonamiID[i - 1]);
    }
  }
  let specialCards = "";
  if (arrName.length > 0) specialCards = `_${arrName.join("-")}`;
  return `${encodeDeck(arrKonamiID.join(""))}_${base63Decode(
    dcomps[1]
  )}_${unscramble(dcomps[2])}${specialCards}`;
}
//big int base 12 encode/decode
function base12Encode(str) {
  let input = BigInt(str);
  let chars = "0123456789ab";
  let result = "";
  while (input > 0n) {
    result = chars[input - (input / 12n) * 12n] + result;
    input = BigInt(input / 12n);
  }
  return result;
}
function base12Decode(str) {
  let result = 0n;
  let chars = "0123456789ab";
  for (let i = str.length - 1; i >= 0; i--) {
    result += BigInt(chars.indexOf(str[i])) * 12n ** BigInt(str.length - 1 - i);
  }
  return result;
}
//pad 0s function
const pad5 = (num) => ("0000" + num).substr(-5);
//scramble text
function scramble(str) {
  const txt = decodeURIComponent(str);
  const normal =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const scrambled =
    "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ9876543210";
  let result = "";
  for (let letter of txt) {
    if (normal.indexOf(letter) != -1) {
      result += scrambled[normal.indexOf(letter)];
    } else {
      result += letter;
    }
  }
  return encodeURIComponent(result);
}
function unscramble(str) {
  const txt = decodeURIComponent(str);
  const normal =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const scrambled =
    "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ9876543210";
  let result = "";
  for (let letter of txt) {
    if (normal.indexOf(letter) != -1) {
      result += normal[scrambled.indexOf(letter)];
    } else {
      result += letter;
    }
  }
  return encodeURIComponent(result);
}
