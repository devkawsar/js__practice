const numArr = [1, 2, 3, 10];
function add(arr) {
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		const element = arr[i];
		sum += element;
	}
	return sum;
}
console.log(add(numArr));
