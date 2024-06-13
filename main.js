let icon = document.getElementById("lightIcon");

icon.onclick = function(){
   document.body.classList.toggle("dark-theme")
   if(document.body.classList.contains("dark-theme")){
      icon.style.color ="cyan"
      icon.setAttribute("class", "fa-solid fa-moon")

     
   }
}

