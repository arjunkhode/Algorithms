function twosum(arr,num){
	let obj={};

	for(let i=0;i<arr.length;i++){
		if(!obj[arr[i]]){obj[arr[i]]=1;}
		if(obj[num-arr[i]]) return ([arr[i],num-arr[i]]);
	}
}