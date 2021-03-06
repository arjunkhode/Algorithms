
class Node{
	constructor(){
	this.value = 0;
	this.children = [];

	this.setNode=function(v,childs){
		this.value = v;
		// let thing = this.children;
		
		if(childs){
			if(childs.length>0){
				this.children = childs; 
				console.log("SETNODE children has been set:",this.children);
			}
		}
	}

}
}


function visit(node){
	console.log("The value of node is:",node.value);
}

function inorder(node){
	console.log("inorder -- node is:",node);
	if(node){
		// console.log(node);
		// console.log("namo:",node.children[0]);
		if(node.children!==null){
			inorder(node.children[0]); //GOTCHA: inorder operates on nodes not ints
		}
		else {
			console.log("the node-",node.v,"does not have a child");
		}
		visit(node);
		if(node.children!==null){
			if(node.children[1])
			inorder(node.children[1]);
		}
	}
}

//[0, 1,2,3,4,5,6,7,8,9,10] index
//[0, 10,9,8,7,6,5,4,3,2,1] value
// 0th index not considered

function createTree(arr){
// minimum value of i should be 1 at least (0th index is padding)
	let i=1;
	while(i < arr.length){
		console.log("i is:",i);
		let root = new Node; 
		root.setNode(arr[i],[]);
		// console.log("2i:",2*i,"=>",arr[2*i]);
		if(arr[2*i]&&arr[2*i+1]){ // if has both children, pass children array
			let fchild = new Node; // GOTCHA: children is array of Nodes
			fchild.setNode(arr[2*i],null);
			console.log("Fchild:",fchild);
			
			let schild = new Node;
			schild.setNode(arr[2*i+1],null); //** init empty children with "" not blank array
			
			root.setNode(arr[i],[fchild,schild]);
// NEED to connect the root above to it's parent #####
		}
		else if(arr[2*i]) { // if one child, pass on the only child
			let fchild = new Node;
			fchild.setNode(arr[2*i],null);
			root.setNode(arr[i],[fchild]);
		}
		if(i===1) {var mainroot = root;}
	i++;
	}
	// arr.splice(0,1); // delete first number from array
	// createTree(arr,[]);
	console.log("MR:",mainroot.children[0]);
	return mainroot;
}

inorder(createTree([0,10,9,8,7,6,5,4,3,2,1]));

