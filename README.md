# odin-rock-paper-scissors
My Rock Papers Scissors project being tutored by Foundations, Odin Project.


Logic:
Game start >

    loop playRound x5 >
        Bot choice = randomNum (1-3) > Rock || Paper || Scissors
        Prompt human = Rock || Paper || Scissors
        
        If human has the same as computer then
        Output "Draw"
        If (human has rock and computer has scissors) OR (human has paper and computer has rock) OR (human has scissors and computer has paper) then
        Output "human wins"
        Else
        Output "computer wins"

        Output Scores points
    
    Output WIN/LOSE/DRAW

Game end

    
    