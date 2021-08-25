let first = 5;
let second = 7;
////////////////////first approach//////////////////
let temp = first;
first = second;
second = temp;
console.log(first, second);
//////////destructuring///////////////////
[first, second] = [second, first];
