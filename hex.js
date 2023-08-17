var hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
//Hex code=#f11211//
const navme= document.querySelector(".name");
const button= document.querySelector("button");
function randomNo(){
    var randomNo= Math.random();
    randomNo= randomNo*15;
    randomNo=Math.floor(randomNo);
    return randomNo;
};
button.addEventListener("click",()=>{
    var hexNo="#";
    for(i=0;i<6;i++){
        hexNo+=hex[randomNo()];
    };
    navme.innerHTML=hexNo;
    document.body.style.backgroundColor=hexNo;
})