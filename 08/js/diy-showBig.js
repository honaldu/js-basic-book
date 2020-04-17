var bigPic = document.querySelector("#cup");
var smallPic = document.querySelectorAll(".small");

for (i = 0; i < smallPic.length; i++) {
  smallPic[i].addEventListener("click", changePic);
}

function changePic() {
  bigPic.setAttribute("src", this.src);
}
