/*it convert any value to positive
const myNumber = -5;
const output = Math.abs(myNumber);
console.log(output);*/

// const myNumber = 21.000001;
// const output = Math.ceil(myNumber);
// console.log(output);
// console.log("string 100");
// console.log("number", 100);

// const myNumber = 7.998789;
// const output = Math.floor(myNumber);
// console.log(output);

// const myNumber = 9.000454353455;
// const output = Math.round(myNumber);
// console.log(output);

// const randomNumber = (Math.random() * 10).toFixed(2);
// console.log(randomNumber);

for (let i = 1; i <= 10; i++) {
	const roundedNumber = Math.round(Math.random() * 6);
	console.log(roundedNumber);
}
