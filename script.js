let computerScore = 0
let humanScore = 0

function getChoice(choice) {
    if (choice == "rock" || 1)
        return "Rock"
    else if (choice == "paper" || 2)
        return "Paper"
    else
        return "Scissors"
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1
    return getChoice(choice)
}

function getHumanChoice() {
    let choice = prompt("hi")
    return getChoice(choice.toLowerCase)
}

function playRound() {
    let humanChoice = getHumanChoice()
    let computerChoice = getComputerChoice()
    console.log(computerChoice + " " + humanChoice)
}

playRound()