sumMulti(5, 10);
sumMulti(10, 10);
function sumMulti(num1, num2) {
  if (num1 === num2) {
    var multiple = num1 * num2;
    console.log(multiple);
  } else {
    var sum = num1 + num2;
    console.log(sum);
  }
}
