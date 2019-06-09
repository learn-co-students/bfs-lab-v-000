function bfs(rootNode, vertices, edges){
  rootNode.distance = 0;
  let discovered = [rootNode];
  let discoverOrder = [rootNode];
  while (discovered.length != 0) {
    let currentNode = discovered.shift();
    let adjacentNodes = findAdjacent(currentNode.name, vertices, edges);
    discoverOrder = discoverOrder.concat(adjacentNodes)
    markDistanceAndPredecessor(currentNode, adjacentNodes)
    discovered = discovered.concat(adjacentNodes)
  }
  return discoverOrder;
}


function findAdjacent(rootNode, vertices, edges) {
  let adjacentNodes = [];
  let findEdges =[];
  let endPoints = [];

  edges.map(edge => {
    edge.map(e => {e === rootNode ? findEdges.push(edge): null})
  })

  if (findEdges.length > 0) {
    if (findEdges.length === 1) {
      endPoints.push(findEdges[0][0])
    } else if (findEdges.length === 2) {
      endPoints.push(findEdges[0][0], findEdges[1][1])
    }
    endPoints.map(endPoint => {
        vertices.map(vertex => {vertex.name === endPoint ? adjacentNodes.push(vertex): null})
    })
    return adjacentNodes.filter(node => node.distance == null);
  } else {
    return adjacentNodes;
  }
}

function markDistanceAndPredecessor(vertex, adjacentNodes) {
  adjacentNodes.forEach(adjacentNode => adjacentNode.distance = 1)
  adjacentNodes.forEach(adjacentNode => adjacentNode.predecessor = vertex)
  return adjacentNodes
}
