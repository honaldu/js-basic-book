var nameList = document.querySelector("#nameList");
nameList.insertBefore(nameList.children[2], nameList.children[0]);
var firstDel = document.querySelectorAll(".del")[0];
var firstP = document.querySelectorAll("p")[0];
firstP.removeChild(firstDel);
