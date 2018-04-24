
function bfs(rootNode, vertices, edges){
  rootNode.distance = 0;
  let discoveredQueue = [rootNode];
  let discoverOrder = [rootNode];

  while(discoveredQueue.length != 0) {
    let currentNode = discoveredQueue.shift();
    let adjacentVertices = findAdjacent(currentNode.name, vertices, edges);
    discoverOrder = discoverOrder.concat(adjacentVertices);
    markDistanceAndPredecessor(currentNode, adjacentVertices)
    discoveredQueue = discoveredQueue.concat(adjacentVertices)
  }
  return discoverOrder;
}


function findAdjacent(node, vertices, edges){
  let adjacentNodes = [];
  let adjacentVertices = [];
  edges.forEach(edge => {
    if(edge[0] === node){
      adjacentNodes = [
        ...adjacentNodes,
        edge[1]
      ]
    }

    if(edge[1] === node){
      adjacentNodes = [
        ...adjacentNodes,
        edge[0]
      ]
    }
  })

  vertices.forEach(vertex => {
    if(vertex.name === adjacentNodes[0] || vertex.name === adjacentNodes[1]) {
      vertex.distance === null ?
        adjacentVertices = [
          ...adjacentVertices,
          vertex
        ]
        :
        adjacentVertices
    }
  })

 return adjacentVertices
}


function markDistanceAndPredecessor(predecessor, adjacentNodes) {
  adjacentNodes.map(adjacentNode => {
    adjacentNode.distance = predecessor.distance + 1;
    adjacentNode.predecessor = predecessor
  })
}
