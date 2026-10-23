const readline = require('readline/promises'); // Load built-in module for reading input in the terminal
const { stdin: input, stdout: output } = require('process') // Get the keyboard input and terminal output streams from Node

const choices = ["rock", "paper", "scissors"];

async function main() {
    const rl = readline.createInterface({ input, output});
    const answer = await rl.question("Please choose Rock, Paper, or Scissors.  ")
    const userInput = answer.trim().toLowerCase();

    if (choices.includes(userInput)) {
        console.log("You chose " + userInput);
    } else {
        console.log("Error!! Please choose and option!!");
    }
    rl.close() // Close program after listening for the user input
}

main()
