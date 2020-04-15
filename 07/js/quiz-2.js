var wiseSaying = [
  "Time is tickling - hou -",
  "I'm Jenius -hou-",
  "Everythings changed by your thinking -hou-",
  "Age can't be excuse -hou-",
  "Our Brain have infinity",
];
var showList = function () {
  var number = Math.floor(Math.random() * 4);
  document.write(wiseSaying[number]);
};
showList();
