function newRegister() {
  var newP = document.createElement("p"); // 새 p 요소 만들기
  var userName = document.querySelector("#userName");
  var newText = document.createTextNode(userName.value); // 새 텍스트 노드 만들기
  newP.appendChild(newText); // 텍스트 노드를 p 요소의 자식 요소로 연결하기
  var nameList = document.querySelector("#nameList");
  nameList.insertBefore(newP, nameList.children[0]); // p 요소를 #nameList의 자식 요소로 만들기
  userName.value = ""; // 텍스트 필드 지우기
  var newSpan = document.createElement("span");
  var del = document.createTextNode("X");
  newSpan.appendChild(del);
  newP.appendChild(newSpan);
  newSpan.setAttribute("class", "del");
  var delList = document.querySelectorAll(".del");
  for (i = 0; i < delList.length; i++) {
    delList[i].addEventListener("click", deleteList);
  }
}
function deleteList() {
  var targetDel = this.parentNode;
  nameList.removeChild(targetDel);
}
