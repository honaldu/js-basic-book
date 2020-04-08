var num1 = parseInt(prompt("1"));
var num2 = parseInt(prompt("2"));
var result = add(num1, num2);
document.write(result);

function add(a, b) {
  var sum = a + b;
  return sum;
}
