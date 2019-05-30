alert("Enjoy this small program to learn why my brother Mike is my mentor!\nPress ok and when prompted type in the number of the route you want to take!");

var route = 0;
var route = Number(prompt("What route would you like to learn about?\n1. General Info\n2. Education\n3. Religion\n4. Career\n5. Relationships\n6. End Program"));
if(route == "null" || route == null || route == "" ) {
	throw "";
}
while(route !== 6) {
	
	if (route == 1) {
		alert("Michael Davis Boyd was born November 23, 1994 as a twin to my sister Bekah. They are the two oldest in our family being age 24. Seven years later I came along as kid number three with my 4 younger simplings to follow soon after. Michael being seven years older and having that age gap between us has made him into a mentor and a friend to me my whole life. Him being that many years ahead of me in life gives me an example of what and what not to do for my own life in many ways. My whole life I have idolized Mike and have wanted to be like him and numbers 2-5 are some of the main ways in which he has infuenced and shaped me in my life.");
	}	
	else if (route == 2) {
		alert("Michael has always been a great example to me when it comes to school and education. All throughout highschool he was always a straight 'A' student and was always getting his stuff done and getting to class. This set a great precedent for me as I got into high school and really started to get into my harder classes. He showed me that if I worked hard, was honest, and stayed disciplined that I would be rewarded down the line. As he got into college and started studying Computer Science and showed me a little bit about it I started to realize that was what I wanted to end up studying and move towards. This has allowed me to take steps earlier than I may have otherwise to help get myself ready for that. Overall what he did in school I basically followed suit and I'm so grateful for that and being able to know my way before having to make the decision for it.");
	}
	else if(route == 3) {
		alert("Mike has always been a great example to me when it comes to religion. All growing up he was the epitome of what I would call a good priesthood man and always was doing what he needed to be doing when he needed to be doing it. This showed me really what it meant to be strong in that aspect and helped me shape my actions to match that to become who I have today. Not only that but him being so willing and ready to go on a mission right out of high school showed me that was what I wanted for myself as well. As he was on his mission and was very obedient and worked like crazy gave me a blueprint for how I should act and what I should be doing on mine. While he has taken slightly different paths away from the church in recent years, in a way that is also an example to me because he is finding his own way and finding what he truly believes. While I would obvoiously like him to come back I repect and admire him for figuring it out for himself in a lot of ways.");
	}
	else if(route == 4) {
		alert("I've always looked to Mike and kind of copied what he has done in most aspects of my life. One that stands out the most to me though is in his career path. This goes hand in hand with education and how he has chosen Computer Science as his degree to study. In turn he has chosed software development and entrepreneurship as his career choice. As I've seen him work at different companies and get different opportunities it has shown me that is exaclty what I want for myself as I get older too. Him leading the way in this aspect helps me have a peace of mind knowing the path that I'm going to take and not having to worry about it. Through this he has also mentored me in the way of helping me and answering any questions I have related to software development as well as entrepreneurship. He has let me tag along at different places, meet different people, and really just get a feel for what that career path is like that most people don't get. This has allowed me to get started earlier than most which I am so grateful for.");
	}
	else if(route == 5) {
		alert("Everyone Mike interacts with he is nice to and truly cares for and makes time for. This has been one of the biggest impacts that he has had on me. Just his overall character and who he is really is a great example for me. All growing up I wanted to hang out with the big kids and hang out with him and his friends. Crazy enough 90% of the time he would let me. I can remember my mom telling me I needed to go to bed during one of his birthday parties and I was confused because I didn't think I needed to leave all my friends who were there. In reality they were my brother's friends but him always including me led me to believe they were mine as well. Him being nice enough to let my little annoying self hang out with him and his friends made a huge impact on me and really gave me a great sense of belonging and strengthened my bond with him a lot. With me having two little brothers of my own I do my best to include them in stuff I may be doing or letting them hangout in my room which a lot of times is hard for me. But when I think of all the times Mike did it for me and how much I loved it, I then am able to do it a little better. But I am still nowhere close to the level that he included me.");
	}
	else if(route == "null" || route == null || route == "" ) {
		throw "";
	}
	else {
		alert("Please input a valid number choice.");
	}

	var route = Number(prompt("What decision route would you like to take?\n1. General Info\n2. Education\n3. Religion\n4. Career\n5. Relationships\n6. End Program"));
}

alert("Thanks for learning a little bit about my mentor and older brother Mike!");