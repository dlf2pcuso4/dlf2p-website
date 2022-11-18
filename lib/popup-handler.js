//place this code before the popup in dom is assigned a variable
//popup div syntax: <div id="_popup" class="_css: (css attributes)"></div>
//showPopup() - displays popup
//hidePopup() - hides popup

//popup (center) code
const _popup = document.getElementById("_popup");
if (_popup) {
  const _popupCss = _popup.className.replace("_css:", "");
  _popup.innerHTML = '<div id="_popupwindow">' + _popup.innerHTML + "</div>";
  const _popupwindow = document.getElementById("_popupwindow");
  _popup.style.cssText =
    "position: fixed; width: 100%; height: 100%; inset: 0px; justify-content: center; align-items: center; background-color: #000000C0; z-index: 2; cursor: pointer;";
  _popup.style.display = "none";
  _popupwindow.style.cssText = _popupCss;
  _popup.onclick = () => (_popup.style.display = "none");
}
const showPopup = () => (_popup.style.display = "flex");
const hidePopup = () => (_popup.style.display = "none");

//notification (top right) code
const _notification = document.getElementById("_notification");
if (_notification) {
  _notification.style.display = "none";
}
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
