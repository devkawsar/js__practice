function isLeapYear(year) {
	if (0 == year % 4) {
		return true;
	} else {
		return false;
	}
}

const myYear = 2087;
const isMyYearLeapYear = isLeapYear(myYear);
console.log(isMyYearLeapYear);
