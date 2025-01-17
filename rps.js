let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const genCompChoice=()=>{
const options=["rock","paper","scissors"];
const randidx=Math.floor(Math.random()*3);
return options[randidx];
};
const drawgame=()=>{
    // console.log(" Ooo...Game was Draw ");
    msg.innerText=("Game was Draw...Play Again");
    msg.style.backgroundColor="#081b31";
};
const showwinner=(userwin,userchoice,compChoice)=>{
    if(userwin){
        userscore++;
        userScorePara.innerText=userscore;
        // console.log("You Win...!");
        msg.innerText=`You Win! Your ${userchoice} beats  ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compscore++;
        compScorePara.innerText=compscore;
        console.log("You Lose");
        msg.innerText=`You Lose!  ${compChoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    };
}
const playgame= (userchoice) =>{
    // console.log("user choice=", userchoice);
    const compChoice=genCompChoice();
    // console.log("comp choice=",compChoice);
if(userchoice===compChoice){
    //draw game
    drawgame();
 }else{
    let userwin=true;
    if(userchoice==="rock"){
        userwin=compChoice==="paper"?false:true;
    }else if(userchoice==="paper"){
        userwin =compChoice==="scissors"?false:true;
    }else{
        //rock,paper
        userwin=compChoice==="rock"?false:true;
    }
    showwinner(userwin,userchoice,compChoice);

 }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
      const userchoice=choice.getAttribute("id")
    // console.log("choices was clicked",userchoice);
    playgame(userchoice);
    });
})