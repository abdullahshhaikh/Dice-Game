
var randomNumber0 = Math.floor(Math.random() * 6 + 1);
document.querySelectorAll("img")[0].setAttribute("src","dice" + randomNumber0 + ".png");
var randomNumber1 = Math.floor(Math.random() * 6 + 1);
document.querySelectorAll("img")[1].setAttribute("src","dice" + randomNumber1 + ".png");

if (randomNumber0 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player 1 wins!";
}
else if(randomNumber0 < randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 wins!";
}
else{
  document.querySelector("h1").innerHTML = "Draw!";
}
