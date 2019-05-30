function printReverse(num) {
	for(var i = num.length - 1; i >= 0; i--) {
		console.log(num[i]);
	}
}

function isUniform(num) {
	var first = num[0];
	for(var i = 1; i < num.length; i++) {
		if (first !== num[i]) {
			return false;
		}
	}
	return true;
}

function sumArray(num) {
	var sum = 0;
	num.forEach(function(element) {
		sum += element;
	});
	return sum;

	// var sum = 0;
	// for (var i = 0; i < num.length; i++) {
	// 	sum += num[i];
	// }
	// console.log(sum);
}

function max(num) {
	var max = num[0];
	num.forEach(function(element) {
		if (element > max) {
			max = element;
		}
	})
	return max;

	// var max = num[0];
	// for (var i = 1; i < num.length; i++) {
	// 	if (num[i] > max) {
	// 		max = num[i];
	// 	}
	// }
	// return max;

	// console.log(Math.max(...num));
}

var colors = ["red", "orange", "yellow"];

function myForEach(arr, func) {
	for (var i = 0; i < arr.length; i++) {
		func(arr[i]);
	}
}

Array.prototype.myForEach2 = function(func) {
	for (var i = 0; i < this.length; i++) {
		func(this[i]);
	}
}