//dlCardPriority(id, monstertype, type, rarity, level, link) - returns dl priority ranking
//mdCardPriority(id, monstertype, type, level, link, race) - returns md priority ranking

//sort priority function (etrlldddddddddd)(15 char)
//e: extra deck card type
//t: card type (monster, spell, trap)
//r: rarity
//l: level/link
//d: card id
function dlCardPriority(id, monstertype, type, rarity, level, link) {
    let priority = 100000000000000;
    let levellink = 0;
    if (level) {
      levellink = level;
    } else if (link) {
      levellink = link;
    }
    if (monstertype.includes("Fusion")) {
      priority = 500000000000000;
    } else if (monstertype.includes("Synchro")) {
      priority = 400000000000000;
    } else if (monstertype.includes("Xyz") || monstertype.includes("XYZ")) {
      priority = 300000000000000;
    } else if (monstertype.includes("Link")) {
      priority = 200000000000000;
    }
    if (rarity == "UR") {
      priority += 4000000000000;
    } else if (rarity == "SR") {
      priority += 3000000000000;
    } else if (rarity == "R") {
      priority += 2000000000000;
    } else if (rarity == "N") {
      priority += 1000000000000;
    }
    if (type.includes("Monster")) {
      if (monstertype.includes("Ritual")) {
        priority += 50000000000000 + levellink * 10000000000;
      } else if (monstertype.includes("Normal")) {
        priority += 30000000000000 + levellink * 10000000000;
      } else {
        priority += 40000000000000 + levellink * 10000000000;
      }
    } else if (type.includes("Spell")) {
      priority += 20000000000000;
    } else if (type.includes("Trap")) {
      priority += 10000000000000;
    }
    priority += Number(id);
    return priority;
  }
  //master duel sort priority function (etrlldddddddddd)
  //e: extra deck card type
  //t: card type (monster, spell, trap)
  //r: rarity (always 0)
  //l: 99 - level/link or spell/trap type ranking
  //d: card id
  function mdCardPriority(id, monstertype, type, level, link, race) {
    let priority = 100000000000000;
    let levellink = 0;
    if (level) {
      levellink = 99 - level;
    } else if (link) {
      levellink = 99 - link;
    }
    if (monstertype.includes("Fusion")) {
      priority = 500000000000000;
    } else if (monstertype.includes("Synchro")) {
      priority = 400000000000000;
    } else if (monstertype.includes("Xyz") || monstertype.includes("XYZ")) {
      priority = 300000000000000;
    } else if (monstertype.includes("Link")) {
      priority = 200000000000000;
    }
    if (type.includes("Monster")) {
      if (monstertype.includes("Ritual")) {
        priority += 30000000000000 + levellink * 10000000000;
      } else if (monstertype.includes("Normal")) {
        priority += 50000000000000 + levellink * 10000000000;
      } else {
        priority += 40000000000000 + levellink * 10000000000;
      }
    } else if (type.includes("Spell")) {
      if (race.includes("Normal")) {
        priority += 20060000000000;
      } else if (race.includes("Equip")) {
        priority += 20050000000000;
      } else if (race.includes("Field")) {
        priority += 20040000000000;
      } else if (race.includes("Ritual")) {
        priority += 20030000000000;
      } else if (race.includes("Continuous")) {
        priority += 20020000000000;
      } else if (race.includes("Quick-Play")) {
        priority += 20010000000000;
      }
    } else if (type.includes("Trap")) {
      if (race.includes("Normal")) {
        priority += 10030000000000;
      } else if (race.includes("Counter")) {
        priority += 10020000000000;
      } else if (race.includes("Continuous")) {
        priority += 10010000000000;
      }
    }
    priority += Number(id);
    return priority;
  }