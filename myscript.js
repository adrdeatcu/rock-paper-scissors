function getHumanChoice()
{
    let yourChoice = prompt("Choose Your Weapon:");
    return yourChoice;
    
}

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

function playRound(humanChoice, computerChoice)
{
    String(humanChoice).
}


let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection,computerSelection);