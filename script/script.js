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
let login_btn = document.getElementById("login_btn");
let login = document.getElementById("login");

login.onclick = function(){
  form_sec.style.display = "flex";
}

login_btn.onclick = function(){
  form_sec.style.display = "flex";
}
form_close.onclick = function(){
  form_sec.style.display = "none";
}

document.getElementById("signin_here").onclick = function(){
  document.getElementById("form_signup_cont").style.display = "none";
  document.getElementById("form_signin_cont").style.display = "flex";
}

document.getElementById("signup_here").onclick = function(){
  document.getElementById("form_signup_cont").style.display = "flex";
  document.getElementById("form_signin_cont").style.display = "none";
}


