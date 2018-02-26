function bfs(rootNode, vertices, edges){
    rootNode.distance = 0;
    let visited = [];
    let queue = [rootNode];
    while (queue.length > 0) {
        let firstNode = queue.shift();
        visited.push(firstNode);
        let adjacentNodes = findAdjacent(firstNode.name, vertices, edges);
        markDistanceAndPredecessor(firstNode, adjacentNodes);
        queue = queue.concat(adjacentNodes);
    };
    return visited;
}

function findAdjacent(nodeName, vertices, edges) {
    const connectedEdges = edges.filter(edge => edge.includes(nodeName));
    const flattenedConnectedEdges = [].concat.apply([], connectedEdges);
    const adjacentNames = flattenedConnectedEdges.filter(name => name !== nodeName);
    let adjacentVertices = [];
    adjacentNames.forEach(function(name) {
      adjacentVertices.push(...vertices.filter(vertice => (vertice.name === name && vertice.distance === null)))
    })
    return adjacentVertices;
}

function markDistanceAndPredecessor(predecessor, adjacentNodes) {
    return adjacentNodes.forEach(function(node) {
        node.distance = predecessor.distance + 1;
        node.predecessor = predecessor;
    });
}