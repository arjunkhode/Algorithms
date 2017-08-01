function sharesProfit(arr){
	prevtot = 0;
	currtot = 0;
	for(i=1;i<arr.length;i++){
		//take the difference of all consecutive pairs
		//note the currtot+= in the statement
		currtot = Math.max(0,currtot+=(arr[i]-arr[i-1]));
		//compare the differences
		prevtot = Math.max(currtot, prevtot);
	}
	return prevtot;
}