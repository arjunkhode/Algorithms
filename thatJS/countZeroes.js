function count0(n){
	let tot = 0;
	while(n>0){
		tot += Math.floor(n/10);
		n/=10;
	}
	console.log(tot);
}