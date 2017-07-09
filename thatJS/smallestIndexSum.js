function indexSum(a,b){
	let result={};
	a.forEach((item,firstIndex) => {
		let secondIndex = b.indexOf(item);
		if(secondIndex!==-1) { let sum = firstIndex + secondIndex; result[item]=sum;}
	});
	for(item in result) return item;
}