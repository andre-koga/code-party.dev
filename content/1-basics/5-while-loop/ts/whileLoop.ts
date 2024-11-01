import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Enter numbers (enter 0 to stop):");

function askForNumber() {
    rl.question('Enter a number: ', (input) => {
        const number = parseInt(input, 10);

        if (number === 0) {
            console.log("Loop terminated because you entered 0.");
            rl.close();
        } else {
            console.log("You entered: " + number);
            askForNumber();
        }
    });
}

askForNumber();