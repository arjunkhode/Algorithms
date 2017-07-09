function twoSum(arr,sum){
	let obj = {};
	answer=0;
	arr.forEach((item) => {
		if(obj[sum-item]||obj[sum-item]===0) answer=[sum-item,item];
		else {
			obj[item]=1;
		}
	});
	return(answer);
}