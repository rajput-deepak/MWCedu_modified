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

//============= category toggle

let category_toggle = document.getElementById("category_toggle");
let list = document.getElementById("drop_down");

category_toggle.onclick = function(){
  list.classList.toggle("active")
}

//=================== form

let form_close = document.getElementById("form_close");
let form_sec = document.getElementById("form_sec");
let form_signin = document.getElementById("form_sec");
let form_signup = document.getElementById("form_sec");





