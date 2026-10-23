const readline = require('readline/promises'); // Load built-in module for reading input in the terminal
const { stdin: input, stdout: output } = require('process') // Get the keyboard input and terminal output streams from Node
const { setTimeout: sleep } = require("node:timers/promises");

const choices = ["rock", "paper", "scissors"];

async function main() {
    const rl = readline.createInterface({ input, output});
    
    let userInput;
    let playing = true;
    

    while(playing == true){
        const answer = await rl.question("Please choose Rock, Paper, or Scissors. Type 'quit' to exit.  ")
        userInput = answer.trim().toLowerCase();
        if (userInput == "quit") {
            playing = false;
            console.log("Thanks for playing!");
            rl.close();
        } else {
        if (!choices.includes(userInput)) {
            console.log("Error!! Please choose an option!!");
            continue;
        }
        
        const options = ["rock", "paper", "scissors"];
        let computerInput;
        
        if (choices.includes(userInput)) {
            console.log("You chose " + userInput);
        } else {
                console.log("Error!! Please choose an option!!");
        }
        
        // Set computer input to be a random choice
        computerInput = options[Math.floor(Math.random() * options.length)];
        
        
        // add countdown
        await sleep(750);
        console.log("3...")
        await sleep(750);
        console.log("2...")
        await sleep(750);
        console.log("1...")
        await sleep(750);
        
        console.log(`The computer chose ${computerInput}!`)
        // evaluate result
        if (userInput == computerInput) console.log("It's a draw. Pick again.")
            
        if (userInput == "rock" && computerInput == "scissors") console.log("User wins!");
        if (userInput == "scissors" && computerInput == "rock") console.log("Computer wins!");
        
        if (userInput == "scissors" && computerInput == "paper") console.log("User wins!");
        if (userInput == "paper" && computerInput == "scissors") console.log("Computer wins!");
        
        if (userInput == "paper" && computerInput == "rock") console.log("User wins!");
        if (userInput == "rock" && computerInput == "paper") console.log("Computer wins!");
        
        }
        
    }
}

    
    
    
    


main()
