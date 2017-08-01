//given an array of nos from 1 to N
//find all arrangements in which
// pos i of result has result[i] divisible by it
//or result[i] is divisible by pos

//so [1,2] and [2,1] are results for N=2


/*** My current solution returns only 1 result from start to end 
Need to consider other combinations!
***/

function initiate(N){
	//array is the solution array
	let arr = [];
	//initiate arr to 0
	for(let i=0;i<=N;i++){
		arr[i]=0;
	}
	//funk is the numbers array
	let funk = [];
	//initiate funk to 0
	for(let i=0;i<=N;i++){
		funk[i]=0;
	}
	doit(N,1,arr,funk);	
}

//funk is the actual numbers array
//arr is result array

function doit(N,pos,arr,funk){
	if(pos>=funk.length){
		console.log("rez:",arr);
		return true;
		}
	
		if(arr[pos]===0){
			for(let j=1;j<=N;j++){
				if(funk[j]===0 && (pos%j===0||j%pos===0)){
					funk[j]=1;
					arr[pos]=j;
					doit(N,pos+1,arr,funk)
					arr[pos]=0;
					//this is the key part. I forgot to re-init funk
					for(let k=0;k<=N;k++){
						funk[k]=0;
					}
				}
			}

		}
	return false;

}