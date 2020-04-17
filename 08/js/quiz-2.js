var buttons = document.querySelectorAll(".check");
for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    this.parentNode.style.color = "#ccc";
  });
}
