//Delay js load so html instructions load first
window.setTimeout(function() {

	var todos = ["Buy new turtle"];

	var input = prompt("What would you like to do?");
	while(input !== "quit") {
		if (input === "list") {
			listTodos();
		}
		else if (input === "new") {
			addTodo();
		}
		else if (input === "delete") {
			deleteTodo();
		}

		input = prompt("What would you like to do?");
	}
	console.log("Thanks for using the app!");


	function listTodos() {
		console.log("**********");
		todos.forEach(function(todo, i) {
			console.log(i + ": " + todo);
		});
		console.log("**********");
	}

	function addTodo() {
		var newTodo = prompt("Enter new todo");
		todos.push(newTodo);
		console.log("Added Todo");
	}

	function deleteTodo() {
		var index = prompt("Enter index of todo to delete");
		todos.splice(index,1);
		console.log("Deleted Todo");
	}

}, 500);










// var numbers = [1,2,3,4,5,6,7,8,9,10];

// for (var i = 0; i < numbers.length; i++) {
// 	if (numbers[i] % 3 === 0) {
// 		console.log(numbers[i]);
// 	}
// }