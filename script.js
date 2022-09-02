let maximum = parseInt(prompt("Enter the maximum number, you can quit any time typing letter 'q'"));
while (!maximum) {
    maximum = parseInt(prompt("Enter the valid maximum number"));
}


const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt("Enter your guess!"));
let attempts = 1;

while (parseInt(guess) !== targetNum){
    if (guess === "q") break;
    attempts ++;
    if (guess > targetNum) { 
        guess = prompt("Too high, enter your guess again!");
    }
    else {
        guess = prompt("Too low, enter your guess again!");
    }
}

if (guess === "q"){
    alert("Ok you quit better luck next time!");
} else { 
    alert("You guessed it! It took  you " + attempts + " guesses.");
}
