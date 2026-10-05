/*
 * ygol-nav.js
 * Slide-in page navigator for the YGO Lightning pages.
 *
 * Usage: <script src="ygol-nav.js"></script>  (in <head> or <body>)
 *
 * Adds a hamburger icon at the top left of the page. Clicking it opens a
 * navigator from the left, layered above everything else, with the page
 * slightly dimmed behind it. Clicking the icon again, clicking the dimmed
 * background or pressing Escape closes it. Nothing on the page moves.
 *
 * Optional API: window.ygolNav.open() / .close() / .toggle()
 */
(function () {
  "use strict";
  if (window.ygolNav) return; //already loaded

  //=== page links (placeholders) ===
  const LINKS = [
    { label: "Home", href: "/" },
    { label: "Card Search", href: "#" },
    { label: "Deck Editor", href: "editor" },
    { label: "Probability Calculator", href: "#" },
    { label: "DLZG Info", href: "#" },
    { label: "DLZG Banlist", href: "dlzg-banlist" },
    { label: "DLZG Tournaments", href: "#" },
  ];

  const P = "ygol-nav"; //prefix for every id/class, to avoid clashing with page css
  const Z = 2147483000; //above everything (the editor popup uses 9999)

  //=== styles ===
  //all dimensions are multiples of one viewport-based unit (U), so everything scales together
  //and keeps its proportions. U = 1vw on a 16:9 screen (1.78vh == 1vw at 16:9);
  //on portrait screens the vh term takes over so the navigator stays usable on phones.
  const UNIT = "max(1vw, 1.78vh)";
  const u = (n) => `calc(var(--${P}-u) * ${n})`;
  const BAR_H = 0.14; //hamburger bar thickness
  const BAR_GAP = 0.42; //space between bars
  const BAR_SHIFT = BAR_H + BAR_GAP; //distance each outer bar moves to form the X
  const DRAWER_W = `min(${u(19.4)}, 80vw)`;

  //every element starts from "all: unset" so the pages' own button/img/p/* rules can't leak in
  //colours are scoped to the navigator (prefixed), so they never clash with the page's own
  const CSS = `
/* ===== colour scheme "Indigo": every colour in this navigator is defined here ===== */
.${P}-toggle, .${P}-overlay, .${P}-drawer {
  --${P}-page-bg: #07060c;
  --${P}-text: #dee0f7;
  --${P}-text-muted: #98a1ec; /* secondary text and placeholders */
  --${P}-frame-border: #8672cb; /* outline around the whole page */
  --${P}-panel-bg: #0e0b1e; /* boxes inside the frame */
  --${P}-panel-border: #8672cb;
  --${P}-input-bg: #2a2e54;
  --${P}-input-text: #dee0f7;
  --${P}-btn-bg: #2a2e54;
  --${P}-btn-border: #4a50be;
  --${P}-btn-text: #dee0f7;
  --${P}-highlight-bg: #4474c9; /* hovered/selected buttons (blues) */
  --${P}-highlight-border: #93e3fa; /* also used for focus outlines */
  --${P}-highlight-text: #cfeaff;
  --${P}-highlight-glow: #2f58c2cc;
  --${P}-popup-bg: #07060cf0; /* popups (semi-transparent) */
  --${P}-skill-text: #ffff77;
  --${P}-scroll-track: #0c0c24;
  --${P}-scroll-thumb: #34358f;
  --${P}-nav-dim: #07060c73; /* page dimming behind the open navigator */
  --${P}-nav-icon: #dee0f7; /* hamburger bars */
  --${P}-shadow: #00000080; /* navigator edge shadow */
}
/* Barlow (SIL Open Font License, see fonts/OFL.txt), bundled so every system shows the same font */
@font-face {
  font-family: "Barlow";
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url("fonts/barlow-latin-300-normal.woff2") format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: "Barlow";
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url("fonts/barlow-latin-ext-300-normal.woff2") format("woff2");
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: "Barlow";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("fonts/barlow-latin-400-normal.woff2") format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: "Barlow";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("fonts/barlow-latin-ext-400-normal.woff2") format("woff2");
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: "Barlow";
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url("fonts/barlow-latin-500-normal.woff2") format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: "Barlow";
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url("fonts/barlow-latin-ext-500-normal.woff2") format("woff2");
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: "Barlow Semi Condensed";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("fonts/barlow-semi-condensed-latin-400-normal.woff2") format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: "Barlow Semi Condensed";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("fonts/barlow-semi-condensed-latin-ext-400-normal.woff2") format("woff2");
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

.${P}-toggle, .${P}-overlay, .${P}-drawer, .${P}-drawer * {
  all: unset;
  box-sizing: border-box;
}
.${P}-toggle, .${P}-overlay, .${P}-drawer {
  --${P}-u: ${UNIT};
}
.${P}-toggle {
  position: fixed;
  top: ${u(0.83)};
  left: ${u(0.83)};
  z-index: ${Z + 2};
  width: ${u(3.06)};
  height: ${u(3.06)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${u(BAR_GAP)};
  background-color: var(--${P}-btn-bg);
  border: ${u(0.14)} solid var(--${P}-btn-border);
  cursor: pointer;
  /* fades both ways: lighting up on hover and dimming when the cursor leaves */
  transition: background-color 0.25s ease, border-color 0.25s ease, color 0.25s ease, box-shadow 0.25s ease;
}
.${P}-toggle:hover,
.${P}-toggle:focus-visible {
  background-color: var(--${P}-highlight-bg);
  border-color: var(--${P}-highlight-border);
  box-shadow: 0 0 ${u(0.7)} var(--${P}-highlight-glow);
}
.${P}-toggle:focus-visible {
  outline: ${u(0.14)} solid var(--${P}-highlight-border);
  outline-offset: ${u(0.14)};
}
.${P}-bar {
  display: block;
  width: ${u(1.53)};
  height: ${u(BAR_H)};
  flex-shrink: 0;
  background-color: var(--${P}-nav-icon);
  transition: transform 0.25s, opacity 0.25s;
}
.${P}-open .${P}-bar:nth-child(1) { transform: translateY(${u(BAR_SHIFT)}) rotate(45deg); }
.${P}-open .${P}-bar:nth-child(2) { opacity: 0; }
.${P}-open .${P}-bar:nth-child(3) { transform: translateY(${u(-BAR_SHIFT)}) rotate(-45deg); }

.${P}-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: ${Z};
  background-color: var(--${P}-nav-dim);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.25s, visibility 0s linear 0.25s;
}
.${P}-overlay.${P}-open {
  opacity: 1;
  visibility: visible;
  transition: opacity 0.25s, visibility 0s;
}

.${P}-drawer {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: ${Z + 1};
  width: ${DRAWER_W};
  display: flex;
  flex-direction: column;
  gap: ${u(0.69)};
  padding: ${u(5)} ${u(1.11)} ${u(1.11)}; /* top padding leaves room for the toggle icon */
  overflow-y: auto;
  background-color: var(--${P}-panel-bg);
  border-right: ${u(0.14)} solid var(--${P}-frame-border);
  box-shadow: ${u(0.28)} 0 ${u(1.11)} var(--${P}-shadow);
  font-family: "Barlow", "Bahnschrift", "Segoe UI", Roboto, -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
  font-weight: lighter;
  color: var(--${P}-text);
  /* moved fully off-screen, shadow included */
  transform: translateX(calc(-1 * ${DRAWER_W} - ${u(2)}));
  visibility: hidden;
  transition: transform 0.25s ease, visibility 0s linear 0.25s;
}
.${P}-drawer.${P}-open {
  transform: translateX(0);
  visibility: visible;
  transition: transform 0.25s ease, visibility 0s;
}
.${P}-title {
  display: block;
  flex-shrink: 0;
  margin-bottom: ${u(0.42)};
  font-size: ${u(1.53)};
  color: var(--${P}-text);
}
.${P}-link {
  display: block;
  flex-shrink: 0;
  padding: ${u(0.83)} ${u(0.97)};
  background-color: var(--${P}-btn-bg);
  border: ${u(0.14)} solid var(--${P}-btn-border);
  font-size: ${u(1.25)};
  color: var(--${P}-btn-text);
  cursor: pointer;
  transition: background-color 0.25s ease, border-color 0.25s ease, color 0.25s ease, box-shadow 0.25s ease;
}
.${P}-link:hover,
.${P}-link:focus-visible {
  background-color: var(--${P}-highlight-bg);
  border-color: var(--${P}-highlight-border);
  color: var(--${P}-highlight-text);
  box-shadow: 0 0 ${u(0.7)} var(--${P}-highlight-glow);
}
.${P}-link:focus-visible {
  outline: ${u(0.14)} solid var(--${P}-highlight-border);
  outline-offset: ${u(0.14)};
}
/* the link to the page you're on is lit up */
.${P}-link.${P}-current {
  background-color: var(--${P}-highlight-bg);
  border-color: var(--${P}-highlight-border);
  color: var(--${P}-highlight-text);
  font-weight: normal;
  cursor: default;
}
@media (prefers-reduced-motion: reduce) {
  .${P}-toggle, .${P}-bar, .${P}-overlay, .${P}-drawer { transition: none !important; }
}`;

  //=== current page detection ===
  //normalise a path so equivalent forms compare equal:
  //"%20" vs " ", "/dir/" vs "/dir", and "/dir/index.html" vs "/dir/"
  function normalisePath(path) {
    try {
      path = decodeURIComponent(path);
    } catch (e) {} //malformed escapes: compare as-is
    path = path.replace(/\/index\.html?$/i, "/");
    if (path.length > 1) path = path.replace(/\/+$/, "");
    return path;
  }
  //true if href points to the page currently open (query string and #hash are ignored)
  function isCurrentPage(href) {
    if (!href || href.startsWith("#")) return false; //placeholder / same-page anchors
    let target;
    try {
      target = new URL(href, location.href);
    } catch (e) {
      return false;
    }
    return (
      target.protocol === location.protocol &&
      target.host === location.host &&
      normalisePath(target.pathname) === normalisePath(location.pathname)
    );
  }

  let toggle, overlay, drawer;
  let isOpen = false;

  function build() {
    const style = document.createElement("style");
    style.id = `${P}-style`;
    style.textContent = CSS;
    document.head.appendChild(style);

    toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = `${P}-toggle`;
    toggle.setAttribute("aria-label", "Open navigation");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-controls", `${P}-drawer`);
    for (let i = 0; i < 3; i++) {
      const bar = document.createElement("span");
      bar.className = `${P}-bar`;
      toggle.appendChild(bar);
    }

    overlay = document.createElement("div");
    overlay.className = `${P}-overlay`;

    drawer = document.createElement("nav");
    drawer.id = `${P}-drawer`;
    drawer.className = `${P}-drawer`;
    drawer.setAttribute("aria-label", "Pages");
    drawer.inert = true;
    const title = document.createElement("span");
    title.className = `${P}-title`;
    title.textContent = "DLF2P.com";
    drawer.appendChild(title);
    for (const link of LINKS) {
      const a = document.createElement("a");
      a.className = `${P}-link`;
      a.href = link.href;
      a.textContent = link.label;
      if (isCurrentPage(link.href)) {
        a.classList.add(`${P}-current`);
        a.setAttribute("aria-current", "page");
      }
      a.addEventListener("click", close);
      drawer.appendChild(a);
    }

    toggle.addEventListener("click", toggleNav);
    overlay.addEventListener("click", close);

    //keep clicks/wheel on the navigator from reaching the page's own listeners
    //(the editor and test-hands listen on document/window)
    for (const el of [toggle, overlay, drawer]) {
      for (const type of ["mousedown", "mouseup", "click", "wheel", "contextmenu"]) {
        el.addEventListener(type, (e) => e.stopPropagation());
      }
    }
    //while open, keyboard input belongs to the navigator (test-hands uses r/s/digits)
    window.addEventListener(
      "keydown",
      (e) => {
        if (!isOpen) return;
        if (e.key === "Escape") close();
        if (!drawer.contains(e.target) && e.target !== toggle) e.preventDefault();
        if (e.key !== "Tab") e.stopPropagation();
      },
      true
    );

    document.body.append(overlay, drawer, toggle);
  }

  function setOpen(open) {
    if (open === isOpen) return;
    isOpen = open;
    for (const el of [toggle, overlay, drawer]) el.classList.toggle(`${P}-open`, open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    drawer.inert = !open;
    if (open) {
      const first = drawer.querySelector(`.${P}-link`);
      if (first) first.focus({ preventScroll: true });
    } else if (drawer.contains(document.activeElement)) {
      toggle.focus({ preventScroll: true });
    }
  }
  function open() {
    setOpen(true);
  }
  function close() {
    setOpen(false);
  }
  function toggleNav() {
    setOpen(!isOpen);
  }

  window.ygolNav = { open, close, toggle: toggleNav };
  if (document.body) build();
  else document.addEventListener("DOMContentLoaded", build);
})();
