const numbers = [5, 10, -20, 22, -5, 2, 9, 12];
for (let i = 0; i <= numbers.length; i++) {
	if (numbers[i] < 0) {
		break;
	}
	console.log(numbers[i]);
}
