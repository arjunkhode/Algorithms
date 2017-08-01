class Node{
	constructor(){
		this.data = 0;
		this.lchild = null;
		this.rchild = null;
	}

	setNode(num,l,r){
		this.data = num;
		this.lchild = l;
		this.rchild = r;
		return this;
	}
}

//////////
function visit(node){
	console.log("The value of node is:",node.data);
}

function inorder(node){
	// console.log("inorder -- node is:",node);
	if(node){
		// console.log(node);
		// console.log("namo:",node.children[0]);
		if(node.lchild!==null){
			inorder(node.lchild); //GOTCHA: inorder operates on nodes not ints
		}
		visit(node);
		if(node.rchild!==null){
			inorder(node.rchild);
		}
	}
}
//////////

function bst(){
	let arr = [25,20,30,5,15,80];
	arr.reverse();
	for(let y=arr.length;y>0;y--){
		arr[y]=arr[y-1];
	}
	arr[0]=0;
	let root = new Node();
	root.setNode(arr[1],null,null);
	// let i=2;

	function doit(currentNode,num){
		if(arr[num+1]>currentNode.data){
			if(arr[num+1]){
			let temp = new Node();
			temp.setNode(arr[num+1], null, null);
			currentNode.setNode(currentNode.data, currentNode.lchild, doit(temp, num+1));
		}}
		else{
			if(arr[num+1]){
			let temp = new Node();
			temp.setNode(arr[num+1], null, null);
			currentNode.setNode(currentNode.data, doit(temp, num+1), currentNode.rchild);
		}
	}
	console.log("current node is:",currentNode,"array index currently at:",num)
	return currentNode;
	}

	// final call
	inorder(doit(root,1));
}


