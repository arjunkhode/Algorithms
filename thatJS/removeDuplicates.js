function removeDuplicate(arr){
	let thing = {};
	for(i=0;i<arr.length;i++){
		if (thing[arr[i]]) {}
		else{ thing[arr[i]]=1;}
	}
	for(let item in thing) {
		console.log(item);
	}
}