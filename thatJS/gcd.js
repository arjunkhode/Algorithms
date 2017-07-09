function gcd(m,n){
	for(i=Math.min(m,n);i>0;i--){
		if(m%i===0 && n%i===0) return i;
	}
}