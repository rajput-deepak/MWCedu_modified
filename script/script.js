//===============nav script
let nav_toggle = document.getElementById("nav_toggle");
// sidenav
let sidenav = document.getElementById("sidenav");

nav_toggle.onclick = function(){
  //nav toggle
  nav_toggle.classList.toggle("active");
  // sidenav toggle
  sidenav.classList.toggle("active");
}