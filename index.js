let edges = [
	['14th&6th', '23rd&6th'],
	['23rd&6th', '34th&6th'],
	['34th&6th', '28th&Bwy'],
	['28th&Bwy', '23rd&Bwy'],
	['23rd&Bwy', '14th&Lex'],
	['14th&Lex', '23rd&Lex']
]

let vertices = [
	{name: '34th&6th', distance: null, predecessor: null},
	{name: '23rd&6th', distance: null, predecessor: null},
	{name: '28th&Bwy', distance: null, predecessor: null},
	{name: '14th&6th', distance: null, predecessor: null},
	{name: '23rd&Bwy', distance: null, predecessor: null},
	{name: '14th&Lex', distance: null, predecessor: null},
	{name: '23rd&Lex', distance: null, predecessor: null}
]

let queue = [];
let explored = [];

function addVertexToQueue(node){
	queue.unshift(node);
}

function findVertex(name){
	let foundVertex;
	foundVertex = vertices.find(function(vertex){
		return vertex.name === name && vertex.distance === null;
	})
	return foundVertex;
}

function findAdjacentNodes(name, vertices, edges){
	let adjacentNodes = [];
	edges.forEach(function(edge){
		if (edge[0] === name) {
			adjacentNodes.push(findVertex(edge[1]));
		} else if (edge[1] === name) {
			adjacentNodes.push(findVertex(edge[0]));
		}
	})
	return adjacentNodes;
}

function markDistanceAndPredecessor(firstNode, adjacentNodes){
	adjacentNodes.forEach(function(node){
		if (!!node) {
			node.predecessor = firstNode;
			node.distance = 1 + firstNode.distance;
			addVertexToQueue(node);
		}
	})	
}

function bfs(rootNode, vertices, edges){
	rootNode.distance = 0;
	addVertexToQueue(rootNode);
	while (queue.length !== 0) {
		let firstNode = queue.pop();
		let adjacentNodes = findAdjacentNodes(firstNode.name, vertices, edges);
		markDistanceAndPredecessor(firstNode, adjacentNodes);
		explored.push(firstNode);
	}
	return explored;
}
