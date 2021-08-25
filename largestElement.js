const ageArray = [9, 19, 10, 25, 5];
function getLargestNumber(arr) {
	let largestNumber = arr[0];
	for (let i = 0; i < arr.length; i++) {
		const element = arr[i];
		if (element > largestNumber) largestNumber = element;
	}
	return largestNumber;
}
// console.log(getLargestNumber(ageArray));
//task: find the lowest number of an array that
let lowestNumber = 0;
function getLowestNumber(arr) {
	let lowestNumber = arr[0];
	for (let i = 0; i < arr.length; i++) {
		const element = arr[i];
		if (element < lowestNumber) {
			lowestNumber = element;
		}
	}
	return lowestNumber;
}

console.log(getLowestNumber([-9, 3, 4, 5, 8]));
