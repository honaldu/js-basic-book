var newP = document.createElement("p");
var newText = document.createTextNode("주문이 완료되었습니다.");
newP.appendChild(newText);
document.body.appendChild(newP);
var attr = document.createAttribute("class");
attr.value = "accent";
newP.setAttributeNode("class", "accent");
