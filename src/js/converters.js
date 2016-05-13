export function findAge(birthday) {
	var year = (new Date(Date.now())).getYear() + 1900,
		age;

	age = ~~((new Date("12/31/" + year) - birthday) / (31557600000));

	if (age > 12) {
		age = 12;
	} else if (age < 5) {
		age = 5;
	}

	return age;
}
