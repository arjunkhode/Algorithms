function missing(arr){
	let tot=0;
	tot = arr.reduce((a,b)=>{return(a+b)});
	console.log(tot);
	let n = Math.max(...arr);
	let expected = n*(n+1)/2;
	return expected-tot;
}