//Theme Switch Functionality

var getVal = localStorage.getItem("theme"); 

if(getVal) {
    document.body.classList.add(getVal);
} 

btnSwitch = document.getElementById("demo"); 
btnSwitch.addEventListener("click", function(){
    var element = document.body; 
    element.classList.toggle("dark-bg");
    if(element.classList.contains("dark-bg")) {
        localStorage.setItem("theme", "dark-bg");
    } else {
        localStorage.setItem("theme", "");
    }
})
