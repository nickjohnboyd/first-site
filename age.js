/*var age = prompt("How old are you?");

var ageDays = age * 365.25;

alert("You have been alive for approximately " + ageDays + " days");*/

var age = Number(prompt("How old are you?"));

if (age < 0) {
	console.log("I hope to attend your birth when it happens");
}

if (age === 21) {
	console.log("Happy 21st birthday!");
}

if (age % 2 !== 0) {
	console.log("Your age is odd!");
}

if (age % Math.sqrt(age) === 0) {
	console.log("Your age is a perfect square. Congrats.");
}