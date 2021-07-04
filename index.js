var positions=[[0,0,0],[0,0,0],[0,0,0]];
const p1=document.getElementsByClassName("p1")[0];
const p2=document.getElementsByClassName("p2")[0];
p1.innerText="Your Turn";
p2.innerText="Wait for your turn";
let boxes=document.getElementsByClassName('boxes');
var complete=false;
var playercount=1;
var Button=document.getElementById("reset");

const playbutton=document.getElementById("play");
const play=document.getElementsByClassName("megacontainer")[0];
const game=document.getElementsByClassName("megacontainer")[1];
game.style.display='none';

const startgame=()=>{
    play.style.display="none";
    game.style.display="flex";
}
playbutton.addEventListener("click",startgame);

const reset=()=>{
    positions=[[0,0,0],[0,0,0],[0,0,0]];
    playercount=1;
    complete=false;
    Array.from(boxes).forEach(element => {
        element.innerText='';
    });
    p1.innerText="Your Turn";
    p2.innerText="Wait for your turn";

}



Button.addEventListener("click",reset);

const playerWon=(char)=>{
    if(char==='X'){
        // alert("player 1 Won");
        complete=true;
        console.log("player 1 Won");
    }
    else{
        // alert("player 2 Won");
        complete=true;
        console.log("player 2 Won");
    }
    // positions=[[0,0,0],[0,0,0],[0,0,0]];
    
}
const checkdraw=()=>{let bool=true;
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(positions[i][j]===0){
                bool=false;
            }
        }
    }
    return bool;
}
const checkwin=(char)=>{
    let Won=false;
    for(let i=0;i<3;i++){
        let oneRow=true;
        for(let j=0;j<3;j++){
            if(positions[i][j]!==char){
                oneRow=false;
            }
        }
        if(oneRow){
            Won=true;
            return Won;
        }
    }
    for(let i=0;i<3;i++){
        let oneRow=true;
        for(let j=0;j<3;j++){
            if(positions[j][i]!==char){
                oneRow=false;
            }
        }
        if(oneRow){
            Won=true;
            return Won;
        }
    }
    let diagonal=true;
    for(let i=0;i<3;i++){
        if(positions[i][i]!==char){
            diagonal=false;
        }
    }
    if(diagonal){
        Won=true;
        return Won;
    }
    // 02 11 20
    let oppdiagonal=true; 
    for(let i=0;i<3;i++){
        if(positions[i][2-i]!==char){
            oppdiagonal=false;
        }
    }
    if(oppdiagonal){
        Won=true;
        return Won;
    }

    return Won;
}

const setvalue=(e)=>{
    let index1=Number(e.target.id[3]);
    let index2=Number(e.target.id[4]);
  if(!complete){ if(!positions[index1][index2]){
        if(playercount%2!==0){
            p1.innerText="Wait for your turn";
            p2.innerText="Your Turn";
        e.target.innerText="X";
        e.target.style.textShadow=
       ` rgb(255 255 255) 0px 0px 4px, rgb(255 255 255) 0px 0px 11px, rgb(255 255 255) 0px 0px 19px, rgb(245 0 0) 0px 0px 40px, rgb(245 0 0) 0px 0px 80px, rgb(245 0 0) 0px 0px 90px, rgb(245 0 0) 0px 0px 100px, rgb(245 0 0) 0px 0px 150px`
    ;

        playercount++;
        positions[index1][index2]='X';
        if(checkdraw()){
            p1.innerText="Match Draw";
            p2.innerText="Match Draw";
        }
        if(checkwin('X')){
            playerWon('X');
            p1.innerText="Congratulations! You Won";
            p2.innerText="Try again Next time";
        }
        
     }
     else{
        e.target.innerText="O";
        playercount++;
        positions[index1][index2]='O';
        p2.innerText="Wait for your turn";
        p1.innerText="Your Turn";
        e.target.style.textShadow=
        `rgb(255 255 255) 0px 0px 4px, rgb(255 255 255) 0px 0px 11px, rgb(255 255 255) 0px 0px 19px, rgb(27 255 0) 0px 0px 40px, rgb(27 255 0) 0px 0px 80px, rgb(27 255 0) 0px 0px 90px, rgb(27 255 0) 0px 0px 100px, rgb(27 255 0) 0px 0px 150px`
     ;
     if(checkdraw()){
        p1.innerText="Match Draw";
        p2.innerText="Match Draw";
    }
        if(checkwin('O')){
            playerWon('O');
            p2.innerText="Congratulations! You Won";
            p1.innerText="Try again Next time";
        }
       
    }}}

}


Array.from(boxes).forEach(element => {
    element.addEventListener('click',setvalue);
});


