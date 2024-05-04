var mediabtn = document.getElementById("navbarbtn")
var sidebar = document.querySelector(".side-bar")

mediabtn.addEventListener("click",myFunction)
function myFunction(){
  if( sidebar.style.top === '-1200px'){
    
    sidebar.style.top ='45px'

   }
   else{
    sidebar.style.top ='-1200px'
   }   
  }

  