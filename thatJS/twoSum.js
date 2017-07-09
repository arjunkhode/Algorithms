function twoSum(arr,target){
	let temp = {};
	for(i=0;i<arr.length;i++){
		if(temp[target-arr[i]]||temp[target-arr[i]]===0){
			console.log(temp[target-arr[i]], i);
		}
		else{
			temp[arr[i]]=i;
		}
	}
}