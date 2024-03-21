var randomnumber1=Math.floor(Math.random()*6)+1;
var randomdiceimg="dice"+randomnumber1+".png";
var randomimgsrc1="images/"+randomdiceimg;
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randomimgsrc1);
var randomnumber2=Math.floor(Math.random()*6)+1;
var randomimgsrc2="images/dice"+randomnumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomimgsrc2);
if(randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML="Player1 Wins";
}
else if(randomnumber2 > randomnumber1){
    document.querySelector("h1").innerHTML="Player2 Wins";
}
else{
    document.querySelector("h1").innerHTML="Draw match";
}
