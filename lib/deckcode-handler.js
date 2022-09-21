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
      result += "z";
    } else {
      comparecode = deckcodeArray[c];
      result += deckcodeArray[c];
    }
  }
  result = result.replace(/zz/g, "y");
  //double zeros
  result = result.replace(/001/g, "a");
  result = result.replace(/002/g, "b");
  result = result.replace(/003/g, "c");
  result = result.replace(/004/g, "d");
  result = result.replace(/005/g, "e");
  result = result.replace(/006/g, "f");
  result = result.replace(/007/g, "g");
  result = result.replace(/008/g, "h");
  result = result.replace(/009/g, "i");
  result = result.replace(/000/g, "j");
  //repeated numbers
  result = result.replace(/11/g, "k");
  result = result.replace(/22/g, "l");
  result = result.replace(/33/g, "m");
  result = result.replace(/44/g, "n");
  result = result.replace(/55/g, "o");
  result = result.replace(/66/g, "p");
  result = result.replace(/77/g, "q");
  result = result.replace(/88/g, "r");
  result = result.replace(/99/g, "s");
  result = result.replace(/00/g, "t");
  return result;
}
//custom deckcode decoding function
function decodeDeck(a) {
  //repeated numbers
  let result = a.replace(/k/g, "11");
  result = result.replace(/l/g, "22");
  result = result.replace(/m/g, "33");
  result = result.replace(/n/g, "44");
  result = result.replace(/o/g, "55");
  result = result.replace(/p/g, "66");
  result = result.replace(/q/g, "77");
  result = result.replace(/r/g, "88");
  result = result.replace(/s/g, "99");
  result = result.replace(/t/g, "00");
  //double zeros
  result = result.replace(/a/g, "001");
  result = result.replace(/b/g, "002");
  result = result.replace(/c/g, "003");
  result = result.replace(/d/g, "004");
  result = result.replace(/e/g, "005");
  result = result.replace(/f/g, "006");
  result = result.replace(/g/g, "007");
  result = result.replace(/h/g, "008");
  result = result.replace(/i/g, "009");
  result = result.replace(/j/g, "000");
  //replace duplicate cards with "z" and triples with "y"
  result = result.replace(/y/g, "zz");
  result = result.replace(/z/g, "xxxxxxxxxx");
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
//pad 0s function
const pad10 = (num) => ("000000000" + num).substr(-10); //pad 0 function
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
