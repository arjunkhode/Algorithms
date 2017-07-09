function fibonacci(n) {

	let fibo = [0,1];
	if (n<=2) return 1;
	else {
	for(i=2; i<=n; i++){ // notice the i< = n
		fibo[i] = fibo[i-1] + fibo[i-2];
	}
	return fibo[n];
	}
}

function fibonacci_recursive(n){
	if(n<=1) return n;
	else return fibonacci_recursive(n-1)+fibonacci_recursive(n-2);
}