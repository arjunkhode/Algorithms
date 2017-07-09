// print fibo series upto n
function fibo(n){
	return n<1?0:n<=2?1:fibo(n-1)+fibo(n-2);
}
function fibonacci(n){
for(i=0;i<=n;i++){
	console.log(fibo(i));
}
}