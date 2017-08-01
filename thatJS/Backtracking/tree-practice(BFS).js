class Node{
	constructor(){
		this.value = 0;
		this.children = [];
		this.visited = 0;

		this.setNode = function(val, childs) {
			this.value = val;
			if(childs && (childs.length > 0)){ this.children = childs; }
			return this;
		};
	}
}

function inorder(root){
	if(root != null && root.value !== undefined){
		if(root.children[0] !== null)
		inorder(root.children[0]);
		console.log("Value is:",root.value);
		if(root.children[1] !== null)
		inorder(root.children[1]);
	}
}

function createTree(arr){
	function visit(parentNode, i){
		while(i<arr.length){
			if(arr[2*i] !== null && arr[2*i+1] !== null){
				let fchild = new Node;
				let schild = new Node;
				parentNode.setNode(arr[i],[fchild.setNode(arr[2*i], visit(fchild, 2*i)), schild.setNode(arr[2*i+1], visit(schild, 2*i+1))]);
			}
			else if(arr[2*i] !== null){
				let fchild = new Node;
				parentNode.setNode(arr[i],[fchild.setNode(arr[2*i], visit(fchild, 2*i)), null]);
			}
		return;
		}
	}


let mainroot = new Node;
visit(mainroot,1);
return mainroot;
}

function dfs(root){

	let queue = [];
	let currentNode = root;
	queue.push(currentNode);
	function doDFS(node){
		while(queue.length > 0){
			// if(currentNode.value === root.value) queue.shift();
			currentNode = queue.shift(); // I had forgotten parantheses after shift
			node = currentNode; // I had forgotten to update node
			console.log("DFS - value is:", currentNode.value);
			// console.log(currentNode);
			currentNode.visited = 1;
			if(node.children && node.children[0].value !== undefined)
				//if first child, add it to queue
				queue.push(node.children[0]);
				// console.log("added 0th child to q", node.children[0]);
				if(node.children && node.children[1].value !== undefined)
				// enqueue second child
				queue.push(node.children[1]);
		}
	}

	doDFS(root);
}


// inorder(createTree([0,10,9,8,7,6,5,4,3,2,1]));
dfs(createTree([0,10,9,8,7,6,5,4,3,2,1]));