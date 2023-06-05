const initGame = () => {
    let play = confirm("Would you like to play rock paper and scissors?");
    play ? playGame() : alert("Okay, maybe next time!");
};

const playGame = () => {
    while(true){
        let player=getPlayerChoice();
        player=formatPlayerChoice(player);
        if(player===""){
            invalidChoice();
            continue;
        }
        if(!player){
            decidedNotToPlay();
            break;
        }
        player=evaluatePlayerChoice(player);
        if(!player){
            invalidChoice();
            continue;
        }
        let computer=getComputerChoice();
        const result=determineWinner(player, computer);
        displayWinner(result);
        if(askToPlayAgain()){
            continue;
        }
        else{
            thanksForPlaying();
            break;
        }
    }
};

const getPlayerChoice=()=>{
    return prompt("Choose rock, paper or scissors.");
};

const formatPlayerChoice=(player)=>{
    if(player||player===""){
    return player.trim().toLowerCase();
    }
    else{
        return false;
    }
};

const decidedNotToPlay=()=>{
 alert("You changed your mind? Okay, maybe next time!");
};

const evaluatePlayerChoice=(player)=>{
    if(player==="rock"||
    player==="paper"||
    player==="scissors"){
        return player;
    }
    else{
        return false;
    }
};

const invalidChoice=()=>{
    alert("You didn't make a valid choice!");
   };

const getComputerChoice=()=>{
    let computerChoice= Math.floor(Math.random()*3+1);
    let computer=computerChoice===1?"rock":computerChoice===2?"paper":"scissors";
    return computer;
};

const determineWinner=(player, computer)=>{
    const winner=player===computer?"Tie!":
              player==="rock"&&computer==="scissors"?`player:${player}\ncomputer:${computer}\nplayer wins!`:
              player==="scissors"&&computer==="paper"?`player:${player}\ncomputer:${computer}\nplayer wins!`:
              player==="paper"&&computer==="rock"?`player:${player}\ncomputer:${computer}\nplayer wins!`:
              `player:${player}\ncomputer:${computer}\ncomputer wins!`;

    return winner;
};

const displayWinner=(result)=>{
    alert(result);
};

const askToPlayAgain=()=>{
    return confirm("Would you like to play again?");
};

const thanksForPlaying=()=>{
    alert("Ok, thanks for playing.");
};

initGame();