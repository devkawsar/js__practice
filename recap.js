//////string
var time = "10:15pm";
//////numeric type data
var bookPrice = 150;
//////boolean type data
isWhiteColor = false;

//ARRAY
//stores multiple value
var friends = ["sajid", "majid", "dalim"];
var elementCount = friends.length;
var dalimPosition = friends.indexOf("dalim");
friends.push("zilan");
friends.pop();

//-1 indicates a missing element

//CONDITIONALS
if (bookPrice < 120) {
	console.log("I will buy the book");
} else {
	console.log("not need to waste money");
}

//LOOP
var i = 0;
while (i <= 17) {
	//do something
	i++;
}

for (var i = 0; i < 10; i++) {
	// do something
}

function isMoonUp(time) {
	if (time >= 19 && time <= 5) {
		return true;
	}
	return false;
}

var moonStatus = isMoonUp(21);
console.log(moonStatus);
