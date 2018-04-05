function bfs(rootNode, vertices, edges){
  rootNode.distance = 0;
  let visited = [],
      queue = [rootNode];
  while(queue.length !== 0) {
    let firstNode = queue.shift();
    visited.push(firstNode);
    let adjacentVertices = findAdjacent(firstNode.name, vertices, edges);
    markDistanceAndPredecessor(firstNode, adjacentVertices);
    queue = queue.concat(adjacentVertices);
  }
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


function markDistanceAndPredecessor(node, adjacentNodes) {
  return adjacentNodes.forEach(vertex => {
    vertex.distance = node.distance + 1 ;
    vertex.predecessor = node;
  });
}
