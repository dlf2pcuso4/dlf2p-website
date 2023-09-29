//deckcode handler v2 - makes deck codes even shorter
//encodeDeck(deckcode) - returns encoded deckcode
//decodeDeck(deckcode) - returns decoded deckcode
//pad10(num) - returns 10 digit integer with padded 0s in front
//copy(text) - copies text to clipboard, returns true on success

//custom deckcode encoding function
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
