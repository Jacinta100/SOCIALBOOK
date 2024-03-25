let settingsmenu = document.querySelector(".settings-menu");
let darkBtn  = document.getElementById("dark-btn");





// Button of the drop bar 

function settingsMenuToggle(){
  settingsmenu.classList.toggle("settings-menu-height");
}

 darkBtn.onclick  = function(){
  darkBtn.classList.toggle("dark-btn-on");
  document.body.classList.toggle("dark-theme")

 // update the local storage when ever the toggle is clicked

  if(localStorage.setItem("theme") == "light"){
    localStorage.setItem("theme", "dark");
  }
  else{
    localStorage.setItem("theme", "light");
 }
}


// To maintain the dark mode even after refreshing


if (localStorage.getItem("theme") == "light"){
  darkBtn.classList.remove("dark-btn-on");
  document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme") == "dark"){
  darkBtn.classList.add("dark-btn-on");
  document.body.classList.add("dark-theme");
}
else{
  localStorage.setItem("theme", "light");
}




localStorage.setItem("theme", "light");
localStorage.getItem("theme");