function primeFactors(n){
	let primeFact = [];
	
	// check for 2
	while (n%2===0){
	n/=2;
	console.log("Pushed 2, n is now:",n)
	primeFact.push(2);
	}
	
	//Repeat for i unless it is = sqrt(n)
	for(i=3;i<=Math.sqrt(n);i+=2){
		// Repeat as long as i can divide n
		while (n%i===0){
		n/=i;
		primeFact.push(i);
		}
	}

	return primeFact;
}