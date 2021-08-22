//3! =3*2*1
//4! =4*3*1

// let factorial = 1;
// for (let i = 1; i <= 5; i++) {
// 	factorial *= i;
// }

// function factorial(n) {
// 	let fact = 1;
// 	for (let i = 1; i <= n; i++) {
// 		fact *= i;
// 	}
// 	return fact;
// }

// const myFactorial = factorial(7);
// console.log("factorial of 7 is: ", myFactorial);

// function getFactorial(n) {
// 	let factorial = 1;
// 	let i = 1;
// 	while (i <= n) {
// 		factorial *= i;
// 		i++;
// 	}
// 	return factorial;
// }

// const myFactorial = getFactorial(6);
// console.log(myFactorial);

// function getFactorial(n) {
// 	let factorial = 1;
// 	let i = n;
// 	while (i >= 1) {
// 		factorial *= i;
// 		i--;
// 	}
// 	return factorial;
// }

// const myFactorial = getFactorial(6);
// console.log(myFactorial);

//FACTORIAL RECURSIVE
function factorialRecursive(n) {
	if (n == 1) {
		return 1;
	}
	return n * factorialRecursive(n - 1);
}

const myFactorialInRecursive = factorialRecursive(7);
console.log(myFactorialInRecursive);
