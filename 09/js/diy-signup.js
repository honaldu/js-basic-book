var userId = document.querySelector("#user-id");
var pw1 = document.querySelector("#user-pw1");
var pw2 = document.querySelector("#user-pw2");

function checkId() {
  if (userId.value.length < 4 || userId.value.length > 12) {
    alert("ID는 4자리 초과, 12자리 미만 일 때 사용 가능합니다");
    userId.select();
  }
}
function checkPw() {
  if (pw1.value.length < 4) {
    alert("비밀번호는 4차리 이상이여야 합니다");
    pw1.value = "";
    pw1.focus();
  }
}
function comparePw() {
  if (pw1.value != pw2.value) {
    alert("비밀번호가 일치하지 않습니다");
    pw2.value = "";
    pw2.focus();
  }
}
