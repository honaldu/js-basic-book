function openPop() {
  var newWin = window.open("popup.html", " ", "width=400, height=400");
  if (newWin == null) {
    alert("팝업이 차단 되어 있습니다.");
  }
}

window.onload = openPop;
