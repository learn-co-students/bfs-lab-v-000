function bfs(rootNode, vertices, edges){
	rootNode.distance = 0;

	let discovered = [rootNode]
	let discoveredOrder = [rootNode]

	while(discovered.length !=0){
		let currentNode = discovered.shift()
		let adjacentNodes = findAdjacent(currentNode.name, vertices, edges)

		discoveredOrder = discoveredOrder.concat(adjacentNodes);

		markDistanceAndPredecessor(currentNode, adjacentNodes)
		discovered = discovered.concat(adjacentNodes)
	}

	return discoveredOrder;
}


function findAdjacent(node,  vertices, edges){
	let connections = edges.filter( edge =>  edge.includes(node) )
	let nodeConnections = connections.map( arr => arr.filter( element => element != node ))
	let connectedNodes = []

	for(let i = 0; i < nodeConnections.length; i++){
		connectedNodes.push( vertices.filter( vertex => vertex.name === nodeConnections[i][0] && vertex.distance === null )[0])
	}


	return connectedNodes.filter( element => element != undefined )
}



function markDistanceAndPredecessor(predecessor, adjacentNodes){
	adjacentNodes.map( node => 
		{
			node.distance = predecessor.distance + 1
			node.predecessor = predecessor
		})
}

