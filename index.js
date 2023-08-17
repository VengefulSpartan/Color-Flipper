var color=["red","green","blue","pink"];
const nvame= document.querySelector(".name");
const button= document.querySelector("button");
var kill=0;
button.addEventListener("click",function(){
    var randomNo= Math.random();
    randomNo= randomNo*4;
    randomNo=Math.floor(randomNo);
    document.body.style.backgroundColor=color[randomNo];
   nvame.innerHTML= color[randomNo];    

})