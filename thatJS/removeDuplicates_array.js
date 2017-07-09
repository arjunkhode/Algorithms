//remove duplicates
function removeDuplicates(a){
	let uniques=[];
	a.forEach((item) => {
		if(!uniques.includes(item)) uniques.push(item);
	});
	return uniques;
}