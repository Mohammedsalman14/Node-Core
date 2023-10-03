// 1. Despot some money
// 2. Detemine number of lines of bet on
// 3. Collect a bet amount
// 4. spin the slot machine
// 5. check if the user won
// 6. give the user their winnings
// 7. play again

const prompt = require('prompt-sync')();
const deposit = () => {
    while (true) {
        const depositAmount = prompt("Enter the deposit amount:")
        const numberDepositNumber = parseFloat(depositAmount);
        if (isNaN(numberDepositNumber) || depositAmount <= 0) {
            console.log("Invalid deposit Amount, try again");
        } else {
            return numberDepositNumber;
        }
    }
}
const getNoofLines = () => {
    while (true) {
        const lines = prompt("Enter the no of lines:")
        const nooflines = parseFloat(lines);
        if (isNaN(lines) || nooflines <= 0 || nooflines > 3) {
            console.log("Invalid no of lines, try again");
        } else {
            return nooflines ;
        }
    }
}



// const depositAmount = deposit();
const nooflines=getNoofLines();
console.log(nooflines);
console.log("End of the line:)")
console.log("trying rebase...")
