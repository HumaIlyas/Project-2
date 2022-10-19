// Declare variables for DOM elements 
let result = document.getElementById("result");

// Declare initial score of player and computer
let comp_score = 0;
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
    let comp_choice = choices[randomNumber];

    console.log(randomNumber);
    document.getElementById("playerChoice").innerHTML = `Computer chose: <span>${comp_choice.toUpperCase()}</span>`;
    document.getElementById("compChoice").innerHTML = `You chose: <span>${input.toUpperCase()}</span>`;

    console.log('input', input, 'comp-choice', comp_choice);

    // Show the result, and a message about the result
    // Compare the computer choice with player choice and update the scores of both of them
    switch(gameConditions[comp_choice][input]) {
        case 'win':
            result.innerText = `You Won!`;
            result.style.cssText = "background-color: rgb(128, 247, 128)";
            player_score++;
            document.getElementById("player_score").innerHTML = player_score;
            console.log("PS: ", player_score);
            break;
        case 'lose':
            result.innerText = `Computer Won!`;
            result.style.cssText = "background-color: rgb(240, 124, 124)";
            comp_score++;
            document.getElementById("comp_score").innerHTML = comp_score;
            console.log("CS: ", comp_score);
            break;
        case 'tie':
            result.innerText = "It's a tie!";
            result.style.cssText = "background-color: rgb(168, 161, 161)";
            break;  
    }

    // To check player wins or computer wins after limited turns
    if (player_score == 20) {
        document.querySelector(".popup-text").innerHTML = 'You <span>Won</span> the Match!';
        resetScore();
    } else if (comp_score == 20) {
        document.querySelector(".popup-text").innerHTML = 'Computer <span>Won</span> the Match!';
        resetScore();
    }
}

// To reset the scores of player and computer after the game is over 
let resetScore = () => {

    setTimeout(() => {
        player_score = 0;
        comp_score = 0;
        document.getElementById("player_score").innerHTML = player_score;
        document.getElementById("comp_score").innerHTML = comp_score;
        document.querySelector(".popup-text").innerHTML = "";
    }, 1500);
}

