/*
function toggleDarkLight() {
  var body = document.getElementById("body");
  var currentClass = body.className;
  body.className = currentClass == "dark" ? "light" : "dark";
}
*/

function toggleDarkLight() {
  var body = document.getElementById("body");
  var currentClass = body.className;
  body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
}

function myFunction() {
   var element = document.getElementById("steamFabric");
   element.classList.toggle("stoom");
}