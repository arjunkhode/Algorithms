function sum(i,j,arr){
	let tot=0;
	//console.log("INSUM-- findex is:",i,"lindex is:",j,"arr is:",arr);
	for(let w=i;w<=j;w++){
		tot+=Math.floor(arr[w]);
		//console.log("inside==","findex:",i,"value:",arr[i],"tot:",tot);
	}
	return tot;
}

function doit(arr){
	let subarray = [];
	let temp=0;
	findex=0;
	lindex=0;
	prevTotal = arr[0];
	for(let i=1;i<arr.length;i++){
		if(sum(findex,i,arr)>temp) lindex=i;
		//console.log("full sum till i is greater than temp, setting lindex to new pos, lindex:",lindex);
		//set temp
		if(arr[i]>sum(findex,i,arr)) findex=i;
		temp = Math.max(sum(findex,lindex,arr),temp);
		//console.log("sum being compared with temp was:",sum(findex,lindex,arr));
		//console.log("with findex:",findex,"temp is now:",temp);
		}
	console.log(findex,lindex);
}