const number = 131;

function isEven(number) {
	if (number % 2 == 0) {
		console.log("this is an even number");
		return true;
	}
	return false;
}

const myNumber = 1641;
const isMyNumberEven = isEven(myNumber);
