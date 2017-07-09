function primefactors(num){
	let i=2;
	let arr=[];
	
// first check if it is prime to improve performance

	while(num>0 && i<=num){
		while(num%i===0){
		arr.push(i);
		num/=i;
		}
		i++;
	}

	return arr;
}