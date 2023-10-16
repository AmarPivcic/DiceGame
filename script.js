const sleep = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time))
  }

var player1score=0;
var player2score=0;
var score1=document.getElementById("player1score");
var score2=document.getElementById("player2score");
var result=document.querySelector(".result");

function showResult(dice1, dice2){

    if(dice1>dice2)
    {
        result.innerHTML="🚩 Player 1 wins!"; 
        player1score++;
    }

    else if(dice1<dice2)
    {
        result.innerHTML="Player 2 wins! 🚩"
        player2score++;
    }

    else{
        result.innerHTML="Draw!";
    }

    score1.innerHTML=player1score;
    score2.innerHTML=player2score;

}

const rollDice = async () => {
    var randomNumber1;
    var randomNumber2; 
    var dice1=document.querySelector(".img1");
    var dice2=document.querySelector(".img2");

    var sound = new Audio("./sounds/dices.mp3");
    sound.play();
    
    for(var i = 0; i<10; i++)
    {
        await sleep(100);
            randomNumber1=Math.floor(Math.random()*6)+1;;
            randomNumber2=Math.floor(Math.random()*6)+1;
            dice1.setAttribute("src", "./images/dice"+randomNumber1+".png");
            dice2.setAttribute("src", "./images/dice"+randomNumber2+".png");    
    }

    showResult(randomNumber1,randomNumber2);
}

function reset(){
    score1.innerHTML=0;
    score2.innerHTML=0;
    player1score=0;
    player2score=0;
    result.innerHTML="Roll the dices!";
}
