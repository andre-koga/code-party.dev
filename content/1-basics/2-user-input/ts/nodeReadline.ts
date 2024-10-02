import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your age: ', (input: string) => {
    const age = parseInt(input, 10);

    console.log(`Your age is ${age}`);
    rl.close();
});