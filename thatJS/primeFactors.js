function primeFactors(n) {
	let factors = [];
	let divisor = 2;
	while (n > 2) {
		if (n % divisor === 0) {
		factors.push(divisor);
		n /= divisor;
		}
		else divisor++;
	}
	console.log(factors);
}
