function isEven(num) {
	// if (num % 2 === 0) {
	// 	return true;
	// }
	// return false;

	return num % 2 === 0;
}



// function factorial(num) {
// 	var factor = 1;
// 	for (; num > 0; num--) {
// 		factor = factor * num;
// 	}
// 	return factor;
// }

function factorial(num) {
	var factor = 1;
	for (var i = 2; i <= num; i++) {
		factor *= i;
	}
	return factor;
}




function kebabToSnake(kebab) {
	var snake = kebab.replace(/-/g,"_");
	return snake;
}