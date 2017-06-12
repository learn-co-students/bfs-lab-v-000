function bfs(rootNode, vertices, edges){
  rootNode.distance = 0;
  let visited = [];
  let queue = [rootNode];

  while(queue.length > 0) {
    const currentNode = queue.shift();
    visited.push(currentNode);
    const adjacentVertices = findAdjacent(currentNode.name, vertices, edges);
    markDistanceAndPredecessor(currentNode, adjacentVertices);
    queue = queue.concat(adjacentVertices);
  }

  return visited;
}

function findAdjacent(vertexName, vertices, edges) {
  const adjacentEdges = findEdges(vertexName, edges);
  const adjacentNodeNames = [].concat(adjacentEdges[0], adjacentEdges[1]).filter(e => e !== vertexName);

  return vertices.filter(v => {
    if (adjacentNodeNames.includes(v.name) && v.distance === null) { return v };
  });
}

function findEdges(vertexName, edges) {
  return edges.filter(edge => {
    if (edge.includes(vertexName)) { return edge; }
  });
}

function findAndRemoveVertex(vertex, vertices) {
  return vertices.filter(v => {
    if (v.name !== vertex.name) { return v };
  })
}

function markDistanceAndPredecessor(vertex, adjacentNodes) {
  return adjacentNodes.map(node => {
    node.distance = vertex.distance + 1;
    node.predecessor = vertex;
  });
}
