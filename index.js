function bfs(rootNode, vertices, edges){
  rootNode.distance = 0;
  let queue = [rootNode];
  let filteredVertices = findAndRemoveVertex(vertex, vertices);

  while(queue) {
    const firstNode = queue.shift();
    const adjacentVertices = findAdjacent(firstNode, vertices, edges);
    adjacentVertices.forEach(vertex => {
      markDistanceAndPredecessor(vertex);
      queue.push(vertex);
    })
  }
}

function findAdjacent(vertexName, vertices, edges) {
  const adjacentEdges = findEdges(vertexName, edges);
  const adjacentNodeNames = [].concat(adjacentEdges[0], adjacentEdges[1]).filter(e => e !== vertexName);

  return vertices.filter(v => {
    if (adjacentNodeNames.includes(v.name)) { return v };
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
