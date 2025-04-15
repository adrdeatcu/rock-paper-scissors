console.log("Welcome to Rock Paper Scissors!");

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
    console.log(weapon);
}

getComputerChoice();