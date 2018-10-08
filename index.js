function bfs(rootNode, vertices, edges){
    rootNode.distance = 0
    let discovered = [rootNode]
    let discoverOrder = [rootNode]
    while(discovered.length != 0){
      let currentNode = discovered.shift()
      let adjacentNodes = findAdjacent(currentNode.name, vertices, edges)
      discoverOrder = discoverOrder.concat(adjacentNodes);
      markDistanceAndPredecessor(currentNode, adjacentNodes)
      discovered = discovered.concat(adjacentNodes)
    }
    return discoverOrder
  }
  
function findAdjacent(node, vertices, edges) {
    let adjacentNodes = []
    for (let i = 0; i < edges.length; i++) {
        if (edges[i][0] === node) {
            for (let j = 0; j < vertices.length; j++) {
                if (vertices[j].name === edges[i][1] && vertices[j].distance === null) {
                    adjacentNodes.push(vertices[j])
                }
            } 
        } else if (edges[i][1] === node) {
            for (let j = 0; j < vertices.length; j++) {
                if (vertices[j].name === edges[i][0] && vertices[j].distance === null) {
                    adjacentNodes.push(vertices[j])
                }
            } 
        }
    }
    return adjacentNodes
}

function markDistanceAndPredecessor(vertice, adjacentNodes) {
    for (let i = 0; i < adjacentNodes.length; i++) {
        adjacentNodes[i].predecessor = vertice;
        adjacentNodes[i].distance = vertice.distance + 1;
    }
}