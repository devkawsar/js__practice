const products = [
	{ name: "laptop", price: 43000 },
	{ name: "shirt", price: 500 },
	{ name: "watch", price: 1500 },
	{ name: "phone", price: 15000 },
];

let totalPrice = 0;

for (const product of products) {
	totalPrice += product.price;
}

// console.log(totalPrice);

let cartTotal = 0;
const cart = [
	{ name: "laptop", price: 43000, qty: 1 },
	{ name: "shirt", price: 500, qty: 2 },
	{ name: "watch", price: 1500, qty: 3 },
	{ name: "phone", price: 15000, qty: 1 },
];

for (const product of cart) {
	const productTotal = product.price * product.qty;
	cartTotal += productTotal;
}
console.log(cartTotal);
