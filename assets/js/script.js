// Declare variables for DOM elements 
let result = document.getElementById("result");

// Declare initial score of player and computer
let computer_score = 0;
let player_score = 0;

// Declare game conditions to win, lose and tie
let gameConditions = {
    Rock: {
        Rock: 'tie',
        Paper: 'win',
        Scissors: 'lose',
        Lizard: 'lose',
        Spock: 'win' 
    },
    Paper: {
        Paper: 'tie',
        Rock: 'lose',
        Scissors: 'win',
        Lizard: 'win',
        Spock: 'lose'
    },
    Scissors: {
        Scissors: 'tie',
        Paper: 'lose',
        Rock: 'win',
        Lizard: 'lose',
        Spock: 'win'
    },
    Lizard: {
        Lizard: 'tie',
        Scissors: 'win',
        Paper: 'lose',
        Rock: 'win',
        Spock: 'lose'
    },
    Spock: {
        Spock: 'tie',
        Lizard: 'win',
        Scissors: 'lose',
        Paper: 'win',
        Rock: 'lose',
    }
}

// Define a function for player to click the choice
// To generate a random choice of the computer 
// To display choices 

function clicked(input) {
    let choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
    let randomNumber = Math.trunc(Math.random() * 5);
    let computer_choice = choices[randomNumber];

    document.getElementById("playerChoice").innerHTML = `Computer: <span>${computer_choice.toUpperCase()}</span>`;
    document.getElementById("computerChoice").innerHTML = `Player: <span>${input.toUpperCase()}</span>`;

    // Show the result, and a message about the result
    // Compare the computer choice with player choice and update the scores of both of them
    switch(gameConditions[computer_choice][input]) {
        case 'win':
            result.innerText = `You Won!`;
            result.style.cssText = "background-color: rgb(203, 246, 203)";
            player_score++;
            document.getElementById("player_score").innerHTML = player_score;
            break;
        case 'lose':
            result.innerText = `Computer Won!`;
            result.style.cssText = "background-color: rgb(245, 192, 192)";
            computer_score++;
            document.getElementById("computer_score").innerHTML = computer_score;
            break;
        case 'tie':
            result.innerText = "It's a tie!";
            result.style.cssText = "background-color: rgb(208, 205, 205)";
            break;  
    }

    // To check player wins or computer wins after limited turns and final popup message
    if (player_score == 20) {
        document.querySelector(".popup-message").innerHTML = 'You <span>Won</span> the Match!';
        resetScore();
    } else if (computer_score == 20) {
        document.querySelector(".popup-message").innerHTML = 'Computer <span>Won</span> the Match!';
        resetScore();
    }
}

// To reset the scores of player and computer after the game is over 
let resetScore = () => {

    setTimeout(() => {
        player_score = 0;
        computer_score = 0;
        document.getElementById("player_score").innerHTML = player_score;
        document.getElementById("computer_score").innerHTML = computer_score;
        document.querySelector(".popup-message").innerHTML = "";
    }, 1500);
    
}

