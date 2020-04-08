var num1 = parseInt(prompt("1"));
var num2 = parseInt(prompt("2"));
hou(num1, num2);
function hou(a, b) {
  /* num1 > num2 // 조건 연산자 사용
    ? alert(a + "가" + b + "보다 큼") 
    : alert(b + "가" + a + "보다 큼"); */
  if (a > b) {
    // if else 사용
    alert(a + "가" + b + "보다 큼");
  } else {
    alert(b + "가" + a + "보다 큼");
  }
}
