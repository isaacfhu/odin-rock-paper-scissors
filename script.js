function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1
    console.log("computer choice : " + computerChoice)
    if (computerChoice === 1)
        return "Rock";
    else if (computerChoice === 2)
        return "Paper";
    else 
        return "Scissors";
}

function getHumanChoice() {
    let humanChoice = prompt("hi")
    console.log("human choice : " + humanChoice)

    if (humanChoice == "rock" || 1)
        return "Rock"
    else if (humanChoice == "paper" || 2)
        return "Paper"
    else
        return "Scissors"
}

getComputerChoice()
getHumanChoice()