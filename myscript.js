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
    let caseInsensitiveHumanChoice = String(humanChoice).charAt(0).toUpperCase() + String(humanChoice).slice(1);
    if(caseInsensitiveHumanChoice==computerChoice)
    {
        console.log(`It's a tie! You both choosed the ${computerChoice}`);
        humanScore++;
        computerScore++;
    }else if(caseInsensitiveHumanChoice=="Rock" && computerChoice=="Paper")
    {
        console.log("You lost! Rock is defeated by the Paper! :(");
        computerScore++;
    }else if(caseInsensitiveHumanChoice=="Rock" && computerChoice=="Scissors")
    {
        console.log("You won! Rock is destroying the Scissors :)");
        humanScore++;
    }else if(caseInsensitiveHumanChoice=="Paper" && computerChoice=="Rock")
    {
        console.log("You won! Paper is destroying the Rock :)");
        humanScore++;
    }else if(caseInsensitiveHumanChoice=="Paper" && computerChoice=="Scissors")
    {
        console.log("You lost! Scissors are destroying the Paper :(");
        computerScore++;
    }else if(caseInsensitiveHumanChoice=="Scissors" && computerChoice=="Paper")
    {
        console.log("You won! Scissors are destroying the Paper :)");
        humanScore++;
    }else if(caseInsensitiveHumanChoice=="Scissors" && computerChoice=="Rock")
    {
        console.log("You lost! Scissors are destroyed by the Rock :(");
        computerScore++;
    }
}


let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();



playRound(humanSelection,computerSelection);