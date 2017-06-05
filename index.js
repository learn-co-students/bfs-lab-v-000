function findAdjacent(name, vertices, edges) {
	var adjacentNames = {},
		adjacentVertices = [];
	edges.forEach(function(edge) {
		if (edge[0] === name) {
			adjacentNames[edge[1]] = edge[1];
		} else if (edge[1] === name) {
			adjacentNames[edge[0]] = edge[0];
		}
	});
	vertices.forEach(function(vertex) {
		if (adjacentNames.hasOwnProperty(vertex.name) && vertex.distance === null) {
			adjacentVertices.push(vertex);
		}
	});
	return adjacentVertices;
}

function markDistanceAndPredecessor(predecessor, nodesAdjacentToPredecessor) {
	var newDistance = predecessor.distance + 1;
	nodesAdjacentToPredecessor.forEach(function(nodeAdjacentToPredecessor) {
		nodeAdjacentToPredecessor.distance = newDistance;
		nodeAdjacentToPredecessor.predecessor = predecessor;
	});
}

function bfs(rootNode, vertices, edges){

	var visitedNodes = [],
		queue = [rootNode],
		currentNode,
		adjacentNodes;

	rootNode.distance = 0;

	while (queue.length > 0) {
		currentNode = queue.shift();
		visitedNodes.push(currentNode);
		adjacentNodes = findAdjacent(currentNode.name, vertices, edges);
		markDistanceAndPredecessor(currentNode, adjacentNodes);
		queue = queue.concat(adjacentNodes);
	}

	return visitedNodes;

}
