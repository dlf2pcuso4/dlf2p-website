//place this code before the popup in dom is assigned a variable
//popup div syntax: <div id="_popup" class="_css: (css attributes)"></div>
//showPopup() - displays popup
//hidePopup() - hides popup

document.body.innerHTML += `
<div id="_popup">
  <div class="flexdivc">
    <div id="cardinfo">
      <div class="flexdivc">
        <img id="cardinfoImg" src="images/cards/55144522.jpg" onerror="if(this.src!='images/noimage.jpg'&&this.src!=window.location.href)this.src='images/noimage.jpg';" />
      </div>
      <div class="flexdivc">
        <p id="cardinfoName">Pot of Greed</p>
      </div>
      <div class="flexdiv">
        <p id="cardinfoRace">What does it do?</p>
        <p id="cardinfoAttribute"></p>
        <p id="cardinfoLevel"></p>
      </div>
      <p id="cardinfoEffect"></p>
      <div class="flexdiv">
        <p id="cardinfoAtk"></p>
        <p id="cardinfoDef"></p>
      </div>
      <div class="flexdiv">
        <p id="cardinfoObtain"></p>
      </div>
    </div>
  </div>
</div>
<div id="_notification">
  <img id="notificationImg" src="images/cards/55144522.jpg" />
</div>
`;

//popup (center) code
const _popup = document.getElementById("_popup");
const _popupCss = _popup.className.replace("_css:", "");
_popup.innerHTML = '<div id="_popupwindow">' + _popup.innerHTML + "</div>";
const _popupwindow = document.getElementById("_popupwindow");
_popup.style.cssText =
  "position: fixed; width: 100%; height: 100%; inset: 0px; justify-content: center; align-items: center; background-color: #000000C0; z-index: 99; cursor: pointer;";
_popup.style.display = "none";
_popupwindow.style.cssText = _popupCss;
//close popup on click, but not when dragging upwards/downwards
_popup.onmousedown = (event) => {
  _popup.classList = event.clientY;
};
_popup.onmouseup = (event) => {
  if (event.clientY == _popup.classList)
    document.getElementById("_popup").style.display = "none";
  _popup.classList = "";
};
function showPopup() {
  document.getElementById("_popup").style.display = "flex";
}
function hidePopup() {
  document.getElementById("_popup").style.display = "none";
}

//notification (top right) code
const _notification = document.getElementById("_notification");
_notification.style.display = "none";
const showNotification = (duration) => {
  if (_notification) {
    const _notifClone = document.createElement("div");
    _notifClone.style.cssText =
      "position: fixed; width: fit-content; height: fit-content; inset: 0px; z-index: 2;";
    _notifClone.innerHTML = _notification.innerHTML;
    document.body.appendChild(_notifClone);
    _notifClone.style.marginLeft = -_notifClone.offsetWidth;
    let x = -_notifClone.offsetWidth;
    setInterval(() => {
      x = x / 2;
      _notifClone.style.marginLeft = x + "px";
    }, 25);
    setTimeout(() => document.body.removeChild(_notifClone), duration);
  }
};

//image self correction code
setInterval(() => {
  if (document.getElementById("cardinfoImg").src.includes("noimage")) {
    document.getElementById(
      "cardinfoImg"
    ).src = `https://images.ygoprodeck.com/images/cards/${
      jsonResponseDl.filter(
        (a) => a.name == document.getElementById("cardinfoName").innerHTML
      )[0].konamiID
    }.jpg`;
  }
}, 100);
