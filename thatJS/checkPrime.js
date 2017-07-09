function checkPrime(n) {
	if (n === 2 || n === 3) {
		return true;
	}
	let divisor = 3;
	const limit = Math.sqrt(n);
	while (divisor <= limit) {
		if (n % divisor === 0) return false;
		divisor += 2;
	}
	return true;
}
