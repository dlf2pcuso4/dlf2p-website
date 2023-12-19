var jsonResponseTechs = [
  {
    name: "Ancient Warriors - Loyal Guan Yun",
    description: "A free summon that pops monsters and hits hard.",
  },
  {
    name: "Thunder King, the Lightningstrike Kaiju",
    description:
      "A non-targeting, non-destroying monster removal at the cost of giving your opponent a big monster.",
  },
  {
    name: "Lava Golem",
    description:
      "Basically a double Kaiju with the added cost of using up your normal summon.",
  },
  {
    name: "Chaos Hunter",
    description:
      "A anti-banish monster that special summons itself while having decent stats.",
  },
  {
    name: "Skull Meister",
    description:
      "An anti-graveyard handtrap that can be useful against certain decks like Blue Eyes.",
  },
  {
    name: "Kiteroid",
    description:
      "A battle handtrap that blocks 2 direct attacks, letting you trigger skills like Destiny Draw more safely.",
  },
  {
    name: "Wightprincess",
    description:
      "A handtrap that lowers all opponent's monsters' ATK to help you survive. Unfortunately does not work against link monsters.",
  },
  {
    name: "Battlin' Boxer Veil",
    description:
      "A battle handtrap that heals you and special summons itself when you take battle damage, letting you trigger LP based skills while blocking 2 attacks.",
  },
  {
    name: "Tackle Crusader",
    description:
      "When used along with cards like Rock Bombardment, this card can act as disruption during your opponent's turn, or to disable opponents' cards during your turn.",
  },
  {
    name: "Amano-Iwato",
    description:
      "A spirit monster that shuts down all monster effects, best used in decks that don't normal summon.",
  },
  {
    name: "Enemy Controller",
    description:
      "The best F2P staple, mainly used for its second effect to temporary steal an opponent's monster for attacking or as material for an extra deck monster.",
  },
  {
    name: "Spiritual Entanglement",
    description:
      "A generic non-destroying monster removal that lasts until the end phase.",
  },
  {
    name: "World Legacy Clash",
    description:
      "A quick-play spell that permanently lowers a monster's stats, while also having a beneficial cost that can be used to dodge targeting effects.",
  },
  {
    name: "Monster Reborn",
    description:
      "A generic spell to revive your boss monsters or to extend your combos.",
  },
  {
    name: "Super Polymerization",
    description:
      "A non-targeting non-destroying monster removal when used along with fusion monsters like Mudragon of the Swamp.",
  },
  {
    name: "Back to Square One",
    description:
      "A generic non-destroying monster removal with a discard cost that could be beneficial for graveyard focused decks.",
  },
  {
    name: "Share the Pain",
    description:
      "A generic non-targeting, non-destroying monster removal at the cost of 1 of your own monsters.",
  },
  {
    name: "Spiritualism",
    description:
      "An easily obtainable temporary backrow removal for OTK decks.",
  },
  {
    name: "Storm",
    description:
      "A non-targeting multi backrow removal that can also trigger on-destruction effects of your own backrow.",
  },
  {
    name: "Sky Striker Mecha - Eagle Booster",
    description:
      "A budget version of Forbidden Lance, only works if your main monster zones are empty but makes the monster unaffected by monster effects as well.",
  },
  {
    name: "Anti-Magic Arrows",
    description:
      "An anti-backrow tech that shuts down all backrow during the battle phase.",
  },
  {
    name: "Strike of the Monarchs",
    description:
      "An omni-negate with a free draw that can be used in very specific decks with skills that allow you to normal summon high level monsters without tributing.",
  },
  {
    name: "Earthshattering Event",
    description:
      "An anti-graveyard continuous spell that can disrupt your opponent's graveyard or recycle your own cards.",
  },
  {
    name: "Extra Net",
    description:
      "A 2-sided Maxx C on a field spell, which lets you gain a ton of card advantage if your opponent spams extra deck monsters.",
  },
  {
    name: "Summoning Curse",
    description:
      "A floodgate that severely punishes players that special summon at a low cost of 500LP per turn.",
  },
  {
    name: "Summon Over",
    description:
      "A devastating non-targeting non-destroying board wipe, but requires a turn of setup.",
  },
  {
    name: "Summon Breaker",
    description:
      "A floodgate that forces players to special summon less than 3 times per turn.",
  },
  {
    name: "Amaze Attraction Horror House",
    description:
      "A budget Book of Moon that flips a monster face down. Just remember to turn on the toggle to immediately use its effect after it's equipped to a monster.",
  },
  {
    name: "Cloak and Dagger",
    description:
      "A non-targeting monster removal that banishes a monster on summon by preemptively declaring its card name. Works especially well for experienced players who understand the cards commonly used in the meta.",
  },
  {
    name: "Fiend Griefing",
    description:
      "An anti-graveyard trap that removes a monster from your opponent's graveyard. It also acts as a budget IDP if you send Farfa from your deck.",
  },
  {
    name: "Ultimate Providence",
    description:
      "A counter trap that can negate any effect, but usually you would discard a monster to negate a monster effect.",
  },
  {
    name: "Solemn Scolding",
    description:
      "An omni-negate with a hefty LP cost, which can be useful to trigger skills. It negates both card effects and monster summons.",
  },
  {
    name: "Magic Deflector",
    description:
      "A spell negate that lasts for the entire turn. It negates all kinds of spells except normal and ritual spells.",
  },
  {
    name: "Magical Cylinders",
    description:
      "A Magical Cylinder searcher that also lets it deal double damage.",
  },
  {
    name: "Stygian Dirge",
    description:
      "A one-sided floodgate that counters synchro and XYZ decks by messing with their materials' levels.",
  },
  {
    name: "Powersink Stone",
    description:
      "A skill drain that becomes active after 2 monster effects have activated, including your own.",
  },
  {
    name: "Different Dimension Ground",
    description:
      "An anti-graveyard trap that banishes all monsters that are sent to the graveyard this turn.",
  },
  {
    name: "Darklight",
    description:
      "A non-targeting board wipe for Dark decks that destroys all special summoned monsters that turn.",
  },
  {
    name: "Appointer of the Red Lotus",
    description:
      "A useful trap that has a LP cost to trigger skills and temporarily rip an important combo starter from your opponent's hand.",
  },
  {
    name: "Scrap-Iron Scarecrow",
    description:
      "Negates 1 attack per turn. The trap can only be activated once per turn despite not explicitly stating it.",
  },
  {
    name: "Head Judging",
    description:
      "A situational monster negate, but can win you games if it succeeds.",
  },
  {
    name: "Shadow-Imprisoning Mirror",
    description:
      "Negates all Dark monster effects. Very useful when Dark decks are meta.",
  },
  {
    name: "Light-Imprisoning Mirror",
    description:
      "Negates all Light monster effects. Very useful when Light decks are meta.",
  },
  {
    name: "Counter Gate",
    description:
      "A battle trap that negates a direct attack and lets you draw a card.",
  },
  {
    name: "Trap Hole of Spikes",
    description:
      "A non-targeting monster removal on a battle trap, while dealing a tiny bit of effect damage.",
  },
  {
    name: "Metamorphortress",
    description:
      "A versatile trap monster that can help your monsters dodge targeting effects, or be used for an extra attack.",
  },
  {
    name: "Showdown of the Secret Sense Scroll Techniques",
    description:
      "A negate that works for effects that activate from the graveyard (because the card itself counts as a card with the same name).",
  },
  {
    name: "Hallowed Life Barrier",
    description:
      "Protects yourself and your monsters from your opponent's attacks with a discard cost.",
  },
  {
    name: "Rainbow Life",
    description:
      "Similar to Hallowed Life Barrier but doesn't protect your monsters, instead converting damage into LP gain.",
  },
];
