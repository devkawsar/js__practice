const str = "so before you go. is there something i could have say";

function reverseString(str) {
	let reversed = "";
	for (const char of str) {
		reversed = char + reversed;
	}
	return reversed;
}

console.log(reverseString(str));
