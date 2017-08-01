// I forgot to put let before i in nqueensUtil for loop!

function initialize(n){
	var board = [];
	for(let i=0;i<n;i++){
		board[i]= [];
		for(let j=0;j<n;j++){
			board[i][j]=0;
		}
	}
	return board;
}

function display(board, n){
	for(let i=0;i<n;i++){
		console.log(board[i]+"\n")
	}
	console.log("-----");
}

function isSafe(board,row,col){
	// console.log("issafe col is:",row,col);
	for(i=0;i<col;i++){
		if(board[row][i]) return false;
	}
	for(i=row,j=col;i>=0 && j>=0; i--,j--){
		if(board[i][j]) return false;
	}
	for(i=row,j=col;j>=0 && i<4; i++,j--){
		if(board[i][j]) return false;
	}
	return true;
}

function nqueensUtil(board,col){
	// display(board,4);
		// console.log(display);
	if(col>=4){
		display(board,4);
		return true;
	}
	for(let i=0;i<4;i++){
		if(isSafe(board, i, col)){
			// console.log("is safe");
			// console.log("col is:",col);
			board[i][col]=1;
			nqueensUtil(board, col+1)
			
			board[i][col]=0;
		}
	}

// console.log("I reached here");
	return false;
}

function nqueens(){
let b = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
let res = nqueensUtil(b,0);
console.log(res);
}