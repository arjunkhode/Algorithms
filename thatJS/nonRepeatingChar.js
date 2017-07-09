function nonRepeatingChar(str) {
	let chars = {};
	for(i=0;i<str.length;i++){ //create hashmap of all chars
		if(chars[str[i]]) chars[str[i]]++;
		else chars[str[i]]=1;
	}
	for(item in chars){ // iterate through the object
	if(chars[item]===1) return item;
	}
	return "none unique";
}