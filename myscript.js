let rockSelected = document.getElementById("rock-button");
let paperSelected = document.getElementById("paper-button");
let scissorSelected = document.getElementById("scissor-button");
let outputText= document.getElementById("outputText");
let outputScore = document.getElementById("outputScore");
let outputResult = document.getElementById("outputResult");


let humanScore = 0;
let computerScore = 0;

let resetButton = document.createElement("button");
resetButton.textContent="Play Again";
resetButton.classList.add("playAgainButton");
resetButton.addEventListener('click', playAgain);

rockSelected.addEventListener('click', rockOption);
paperSelected.addEventListener('click', paperOption);
scissorSelected.addEventListener('click', scissorOption);



function getComputerChoice()
{
    let odd = Math.random();
    let weapon = undefined;
    if(odd<=0.33)
        {
            weapon="Rock";
        }else if(odd>0.33 && odd<=0.66)
            {
                weapon="Paper";
            }else{
                weapon="Scissors";
            }
            return weapon;
}

function rockOption()
{
    let userChoice = "Rock";
    let computerChoice = getComputerChoice();
    playRound(userChoice,computerChoice);
    
}


function paperOption()
{
    let userChoice="Paper";
    let computerChoice= getComputerChoice();
    playRound(userChoice, computerChoice);
}

function scissorOption()
{
    let userChoice="Scissors"
    let computerChoice= getComputerChoice();
    playRound(userChoice, computerChoice);
}



        
function playRound(humanChoice, computerChoice)
{
    
    
        if(humanChoice==computerChoice)
            {
                
                outputText.textContent = `It's a tie! You both chose the ${computerChoice}`;
                humanScore++;
                computerScore++;
                
                
                
            }else if(humanChoice=="Rock" && computerChoice=="Paper")
            {
                outputText.textContent = "You lost! 🪨Rock is defeated by the 📃Paper! :(";
                computerScore++;
                
            }else if(humanChoice=="Rock" && computerChoice=="Scissors")
            {
                outputText.textContent ="You won! 🪨Rock is destroying the ✂️Scissors :)";
                humanScore++;
                
            }else if(humanChoice=="Paper" && computerChoice=="Rock")
            {
                outputText.textContent ="You won! 📃Paper is destroying the 🪨Rock :)";
                humanScore++;
               
            }else if(humanChoice=="Paper" && computerChoice=="Scissors")
            {
                outputText.textContent ="You lost! ✂️Scissors are destroying the 📃Paper :(";
                computerScore++;
                
            }else if(humanChoice=="Scissors" && computerChoice=="Paper")
            {
                outputText.textContent ="You won! ✂️Scissors are destroying the 📃Paper :)";
                humanScore++;
                
            }else if(humanChoice=="Scissors" && computerChoice=="Rock")
            {
                outputText.textContent ="You lost! ✂️Scissors are destroyed by the 🪨Rock :(";
                computerScore++;
                
            }
        
            outputScore.textContent= `The Score is: ${humanScore} - ${computerScore}`;

            if(humanScore==5 && computerScore==5)
            {
                outputText.textContent= "IT'S A DRAW, IT WAS A GOOD MATCH";
                rockSelected.disabled = true;
                paperSelected.disabled = true;
                scissorSelected.disabled = true;
                
                outputResult.appendChild(resetButton);
                

            }else if(computerScore==5 )
            {
                outputText.textContent="YOU LOSE! BETTER LUCK NEXT TIME";
                rockSelected.disabled = true;
                paperSelected.disabled = true;
                scissorSelected.disabled = true;
                
                outputResult.appendChild(resetButton);
                
            }else if(humanScore ==5)
            {
                outputText.textContent="YOU WIN!!! CONGRATS";
                rockSelected.disabled = true;
                paperSelected.disabled = true;
                scissorSelected.disabled = true;
                outputResult.appendChild(resetButton);
                
                
            }
    }




function playAgain()
{
        humanScore=0;
        computerScore=0;
        outputText.textContent= "Choose your weapon:";
        outputScore.textContent= `The Score is: ${humanScore} - ${computerScore}`;
        rockSelected.disabled = false;
        paperSelected.disabled = false;
        scissorSelected.disabled = false;
        outputResult.removeChild(resetButton);
        
}
    
   












