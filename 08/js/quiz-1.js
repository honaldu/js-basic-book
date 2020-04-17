var select = document.querySelector("p");
select.addEventListener("click", changeTheme);

function changeTheme() {
  select.style.backgroundColor = "#ccc";
  select.style.color = "blue";
  select.style.fontSize = "20px";
}
