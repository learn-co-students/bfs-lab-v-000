function bfs(rootNode, vertices, edges) {
	let queue = [rootNode]
	let order = [rootNode]
	rootNode.distance = 0
	while(queue.length !== 0) {
		let firstNode = queue.shift()
		let adjacentVertices = findAdjacent(firstNode.name, vertices, edges)
		markDistanceAndPredecessor(firstNode, adjacentVertices);
		queue = queue.concat(adjacentVertices);
		order = order.concat(adjacentVertices);
	}
	return order
}

function findAdjacent(node, vertices, edges) {
	return edges.filter(edge => { 
		return node === edge[0] || node === edge[1] } ).map(edge => {
			return edge[0] === node ? edge[1] : edge[0]
		}).map(node => vertices.find(vertex => vertex.name === node )).filter(vertex => vertex.distance === null)
	}

function markDistanceAndPredecessor(vertex, adjacentVertices) {
	return adjacentVertices.forEach(adjVertex => {
		adjVertex.predecessor = vertex;
		adjVertex.distance = vertex.distance + 1;
	})
}