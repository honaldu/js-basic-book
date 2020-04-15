var itemList = [];
var btn = document.querySelector("#add");
btn.addEventListener("click", addList);
function addList() {
  var newItem = document.querySelector("#item").value;
  itemList.push(newItem);
  document.querySelector("#item").value = "";
  showList();
}
function showList() {
  var list = "<ul>";
  for (i = 0; i < itemList.length; i++) {
    list +=
      "<li>" +
      itemList[i] +
      "<span class=close id=" +
      i +
      "> X </span>" +
      "</li>";
  }
  list += "</ul>";
  document.querySelector("#itemList").innerHTML = list;
  var remove = document.querySelectorAll(".close"); // 중요한 부분 배열화 됨.
  for (var i = 0; i < remove.length; i++) {
    remove[i].addEventListener("click", removeList);
  }
}

function removeList() {
  var id = this.getAttribute("id");
  itemList.splice(id, 1);
  showList();
}
