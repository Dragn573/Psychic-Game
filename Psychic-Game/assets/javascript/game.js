var guesses="";
var index;
var answer;
var currentGuess;
var win=0;
var loses=0;
var letters= [ "a", "b", "c", "d", "e", "f", "g",
"h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
"u", "v", "w", "x", "y", "z" ];

function pickAnswer(){
index=Math.floor(Math.random()*letters.length);
answer=letters[index];
};
pickAnswer();
function reset(){
     guesses="";
     pickAnswer();
   
     document.getElementById("guesses").innerHTML="";
}

document.onkeyup=function(){
currentGuess=event.key;

console.log(currentGuess);
console.log(answer);
if(currentGuess==answer){
    win++;
    document.getElementById("wins").innerHTML=win;
    alert("you Win!");
    reset();
}
else{
guesses+=currentGuess+" ";
document.getElementById("guesses").innerHTML=guesses;
    if(guesses.length>19)
    {loses++;
    alert("you Lose!");
    document.getElementById("loses").innerHTML=loses;
    reset();
    
    };  

    


};

};