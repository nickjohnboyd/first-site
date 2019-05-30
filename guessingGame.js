// create secretNumber
var secretNumber = 4;

//ask user for guess
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

//check if guess is correct
if (guess === secretNumber) {
	alert("You got it right!");
}
//otherwise, check if higher
else if(guess > secretNumber) {
	alert("Your guess is too high good sir");
}
//otherwise, check if lower
else {
	alert("Your guess is too low good sir");
}