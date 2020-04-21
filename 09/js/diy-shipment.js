var nameInfo = document.querySelector("#billingName");
var tellInfo = document.querySelector("#billingTel");
var addInfo = document.querySelector("#billingAddr");

var check = document.querySelector("#shippingInfo");

check.addEventListener("click", copyInfo);

function copyInfo() {
  if (check.checked == true) {
    document.querySelector("#shippingName").value = nameInfo.value;
    document.querySelector("#shippingTel").value = tellInfo.value;
    document.querySelector("#ShippingAddr").value = addInfo.value;
  }
}
