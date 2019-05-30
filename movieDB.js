var movies = [
	{
		title: "Baby Driver",
		rating: 5,
		watched: true
	},
	{
		title: "Cinderella",
		rating: 3,
		watched: false
	},
	{
		title: "Tangled",
		rating: 4.5,
		watched: true
	},
	{
		title: "Mission Impossible",
		rating: 5,
		watched: false
	},
];

movies.forEach(function(element) {
	var watch = "You have "
	if (element.watched) {
		var watch = "watched ";
	}
	else {
		watch = "not seen ";
	}
	//Optional: create variable called result to keep adding elements into then just console.log(result)
	
	console.log(watch + element.title + " - " + element.rating + " stars");
})