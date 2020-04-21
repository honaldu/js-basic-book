var radius = document.querySelector("#radius");
var btn = document.querySelector("#start");

btn.addEventListener("click", cal);

function cal() {
  var round = document.querySelector("#round");
  round.value = radius.value * 2 * Math.PI;
  var area = document.querySelector("#area");
  area.value = radius.value * radius.value * Math.PI;
}
