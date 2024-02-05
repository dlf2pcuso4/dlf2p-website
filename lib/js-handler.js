(async function () {
  const scripts = [
    "css-picker",
    "carddb-dl",
    "carddb-md",
    "skilldb-dl",
    "dlf2pID",
    "f2pdeckdb",
    "deckcode-handler",
    "priority-handler",
  ];
  const onloadScripts = [
    "navbar-handler",
    "popup-handler",
    "deck-viewer-handler",
    "f2p-decks-js",
  ];
  for (let item of scripts) {
    const script = document.createElement("script");
    script.src = `lib/${item}.js`;
    document.head.appendChild(script);
  }
})();
