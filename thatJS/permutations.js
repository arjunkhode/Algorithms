function permut(str){
	
	if(str.length<2) return str;
	let permutations = [];

	for(let i=0;i<str.length;i++){
		let char = str[i];
		if(str.indexOf(char)!==i) continue;
		let remaining = str.slice(0,i)+str.slice(i+1,str.length);

		for(let sub of permut(remaining)){
			permutations.push(char+sub);
		}
	}
	return permutations;
}