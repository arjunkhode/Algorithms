let count=0;
let arr = [0,0,0,0,0,0,0,0,0,0];
function uniquedigits(N,pos,car,arr){

	if(pos>=N){
		console.log(car);
		count++;
		return true;
	}
	for(let i=0;i<arr.length;i++){
		if(arr[i]===0){
		arr[i]=1;
		// console.log("car is:",car);
		car = [...car,i];
		// console.log("num is:",typeof(num));
		uniquedigits(N, pos+1, car,arr);
		//num.splice([...num].length-1,1);
		car.pop();
		arr[i]=0;
		// console.log("splicedno is:",num);
		//>>Clear the arr
		}
	}
	return false;
}
console.log(count);
