function merge(a,b){
	let merged = [];
	let aElm = a[0];
	let bElm = b[0];
	let i=0;
	let j=0;
	while (aElm || bElm){
		if((aElm && !bElm) || (aElm<bElm)){
			merged.push(aElm);
			aElm = a[++i];
		}
		else {
			merged.push(bElm);
			bElm = b[++j];
		}
	}
	return(merged);
}