var user = document.getElementById('user');
var pass = document.getElementById('pass');
var user_input = document.getElementById('username');
var pass_input = document.getElementById('password');

console.log(user_input);

user_input.addEventListener("focus",() => {
 user.style.color = "black";
 pass.style.color = "#ada8a8";

});

pass_input.addEventListener("focus", () => {
  pass.style.color = "black";
  user.style.color = "#ada8a8";
});