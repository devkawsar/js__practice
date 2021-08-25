const phones = [
	{ name: "samsung", price: 45000, camera: 12, storage: 24 },
	{ name: "nokia", price: 34000, camera: 22, storage: 32 },
	{ name: "walton", price: 24000, camera: 10, storage: 22 },
	{ name: "shaomi", price: 1000, camera: 8, storage: 10 },
	{ name: "redmi", price: 38000, camera: 5, storage: 4 },
	{ name: "oppo", price: 15000, camera: 2, storage: 12 },
];

let cheapest = phones[0];
for (const phone of phones) {
	if (phone.price < cheapest.price) {
		cheapest = phone;
	}
}

console.log(cheapest);
