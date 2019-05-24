/*
function toggleDarkLight() {
  var body = document.getElementById("body");
  var currentClass = body.className;
  body.className = currentClass == "dark" ? "light" : "dark";
}

document.addEventListener("keydown", function(event) {
    
    
}
             
document.getElementById("")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("").click();
    }
});
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

//Bron: Youssef

  window.addEventListener("keydown", checkKeyPress, false);

  function checkKeyPress(e){
  
    if(e.keyCode == "76"){
      document.getElementById('Lamp').classList.toggle('Lamp2')
      
    } else if(e.keyCode == "x"){
    
    } 
    
  }



// console.log(checkKeyPress)

function $ (el) {
    return document.querySelector(el);
}

                          