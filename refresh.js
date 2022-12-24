
 var Random = Math.floor(Math.random() * 6) +1;

 var random22 = "dice" + Random + ".png";

 var shuffle = "images/" + random22;
 
 var hosst = document.querySelectorAll("img")[0].setAttribute("src", shuffle);

 

//  2nd dice

var Random1 = Math.floor(Math.random() * 6) +1;

var random221 = "dice" + Random1 + ".png";

var shuffle = "images/" + random221;

 var hosst = document.querySelectorAll("img")[1].setAttribute("src", shuffle);

 
//  if statement
 if (Random > Random1){
     document.querySelector("h1").innerHTML = "🚩 1 player won";
     document.querySelector("h1").style.webkitTextFillColor="#000"
     document.querySelector("h1").style.webkitTextStroke="1px white"
 }
 else if(Random < Random1){
    document.querySelector("h1").innerHTML = "2 player won 🚩";
    document.querySelector("h1").style.webkitTextFillColor="#000"
    document.querySelector("h1").style.webkitTextStroke="1px white"
 }
 else{
    document.querySelector("h1").innerHTML = "🚩DRAW🚩";
    document.querySelector("h1").style.webkitTextFillColor="#000"
    document.querySelector("h1").style.webkitTextStroke="1px white"
 }
 