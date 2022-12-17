var btn = document.getElementById("btn");
var light = document.getElementById("light");
var herolight1 = document.getElementById("herolight");
var logolight1 = document.getElementById("logo")


function toggleBtn(){
    btn.classList.toggle("active")
    light.classList.toggle("on")
    herolight1.classList.toggle("herolight1")
    logolight1.classList.toggle("logolight1")
}