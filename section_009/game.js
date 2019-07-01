// secret number
let secretNumber = 4;

// ask for guess

let stringGuess = prompt("Guess a number?");
let guess = Number(stringGuess);

// check if guess is correct

if(guess === secretNumber) {
  alert("You got it right!");
} else if (guess > secretNumber) {
    alert("Your guess was too high.");
} else {
    alert("Your guess was too low.")
}