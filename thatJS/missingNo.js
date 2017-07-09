function missingNo(arr){
	let n = arr.length+1;
	let expectedSum = n*(n+1)/2;
	let originalSum = 0;
	for(i=0;i < arr.length; i++){
		originalSum+=arr[i];
	}
	console.log("missing no is:",expectedSum-originalSum);
}