
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Good day customer, welcome to bank.\n 1)Type '1' to create an account. \n 2)Type '2' to deposite. \n 3)Type '3' to withdraw.");

function create_account(){
    let balance = 0;
    return balance;
}

function deposite(balance, amount) {
    if (isNaN(amount) || amount < 0) {
        console.log("Invalid deposit amount.");
        return balance;
    }
    return balance + amount;
}

function withdraw(balance, amount) {
    if (isNaN(amount) || amount < 0) {
        console.log("Invalid withdrawal amount.");
        return balance;
    }
    if (amount > balance) {
        console.log("Insufficient funds.");
        return balance;
    }
    return balance - amount;
}

rl.question("Enter your choice: ", (choice) => {
    switch (choice) {
        case '1':
            balance = create_account();
            console.log("Account created. Balance:", balance);
            rl.close();
            break;
        case '2':
            rl.question("Enter deposit amount: ", (amount) => {
                balance = deposite(balance, parseFloat(amount));
                console.log("Updated Balance:", balance);
                rl.close();
            });
            break;
        case '3':
            rl.question("Enter withdrawal amount: ", (amount) => {
                balance = withdraw(balance, parseFloat(amount));
                console.log("Updated Balance:", balance);
                rl.close();
            });
            break;
        default:
            console.log("Please enter a valid choice.");
            rl.close();
            break;
    }
});