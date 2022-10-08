var first = prompt("what is your name?");
var sec = prompt("What is his/her name?");
var score = Math.random()*100;
score = Math.floor(score)+1;
// alert("Love score of you and your partner is "+score+"%");
document.getElementById("id").innerHTML = score;