let close_smart = document.getElementById("close_smart_bar");
let smart = document.getElementById("smart");

close_smart.onclick = function(){
  smart.style.display = 'none';
}

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