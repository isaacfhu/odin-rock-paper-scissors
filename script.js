let computerScore = 0
let humanScore = 0

function getChoice(choice) {
    if (choice == "rock" || choice == 1)
        return "Rock"
    else if (choice == "paper" || choice == 2)
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
    return getChoice(choice.toLowerCase())
}

function playRound(humanChoice, computerChoice) {
    let outcome

    if (humanChoice == computerChoice)
        outcome = "draw"
    else if (humanChoice == "Rock" && computerChoice == "Scissors" ||
        humanChoice == "Paper" && computerChoice == "Rock" || 
        humanChoice == "Scissors" && computerChoice == "Paper")
        outcome = "win"
    else
        outcome = "lose"

    if (outcome == "draw")
        console.log(`Draw! You both played ${humanChoice} and ${computerChoice}. No points awarded.`)
    else if (outcome == "win") {
        humanScore += 1
        console.log(`You win! ${humanChoice} beats ${computerChoice}. +1 Point awarded to you.`)
    }
    else {
        computerScore += 1
        console.log(`You lose! ${computerChoice} beats ${humanChoice}. +1 Point awarded to computer.`)
    }

    console.log(`Current Score: `)
    console.log(`You: ${humanScore}`)
    console.log(`Computer: ${computerScore}`)
}

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()
playRound(humanSelection, computerSelection)