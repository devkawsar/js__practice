function animalCount(miles) {
	const animalDensityFirst10Miles = 10;
	const animalDensitySecond10Miles = 50;
	const animalDensityRestMiles = 100;
	let totalAnimals = 0;
	if (miles <= 10) {
		totalAnimals = miles * animalDensityFirst10Miles;
		return totalAnimals;
	} else if (miles <= 20) {
		const firstDenseAnimals = 10 * animalDensityFirst10Miles;
		const restMiles = miles - 10;
		const secondDenseAnimals = restMiles * animalDensitySecond10Miles;
		totalAnimals = firstDenseAnimals + secondDenseAnimals;
		return totalAnimals;
	} else {
		const firstDenseAnimals = 10 * animalDensityFirst10Miles;
		const secondDenseAnimals = 10 * animalDensitySecond10Miles;
		const restMiles = miles - 20;
		const restDenseAnimals = restMiles * animalDensityRestMiles;
		totalAnimals = firstDenseAnimals + secondDenseAnimals + restDenseAnimals;
		return totalAnimals;
	}
}

const animals = animalCount(25);
console.log(animals);
