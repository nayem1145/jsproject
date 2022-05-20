var colors = ["red", "green", "blue", "orange", "pink"]; 
var btn = document.getElementById("btn"); 
btn.addEventListener("click", function(){

    var randomNumber = getRandomNumber(); 
    document.body.style.backgroundColor = colors[randomNumber]; 

    console.log(randomNumber); 
}); 


function getRandomNumber(){
    Math.random(); 
}

