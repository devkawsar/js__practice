let business = 500;
let job = 900;
let entrepreneur = 550;

/* function whoIsRich() {
	if (business < job && entrepreneur < job) {
		return "job is best";
	} else if (job < business && entrepreneur < business) {
		return "Do business";
	} else {
		return "Entrepreneur is the best thing to make money";
	}
}

console.log(whoIsRich(entrepreneur)); */
/* const richGuy = Math.max(business, job, entrepreneur);
console.log(richGuy, "really rich");
 */
function findLargest(first, second) {
	if (first > second) {
		return first;
	} else {
		return second;
	}
}
