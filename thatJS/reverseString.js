function rev(str){
	console.log(str.split("").reverse().join(""));
}

function revArr(str){
	let result = [];
	if(!str || typeof(str)!='string') return str;
	for(i=str.length-1; i>=0; i--){ // start from the end and go on pushing in new array
		result.push(str[i]);
	}
	console.log(result.join(""));
}