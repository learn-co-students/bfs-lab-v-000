function bfs(rootNode, vertices, edges){
  let queue = [];
  let explored = [];
  let adjacentVertices;
  rootNode.distance = 0;
  queue.push(rootNode);
  while (queue.length !== 0) {
    let firstNode = queue.shift();
    adjacentVertices = findAdjacent(firstNode.name, vertices, edges);
    markDistanceAndPredecessor(firstNode, adjacentVertices);
    for (const vertex of adjacentVertices) {
      queue.push(vertex);
    }
    explored.push(firstNode);
  }
  return explored;
}

function findAdjacent(vertexName, vertices, edges) {
  let adjacentVertices = [];
  for (const edge of edges) {
    if (edge.includes(vertexName)) {
      let adjacentVertexName = edge.filter(name => name !== vertexName)[0];
      let adjacentVertex = vertices.filter(vertex => vertex.name === adjacentVertexName)[0];
      adjacentVertices.push(adjacentVertex);
    }
  }
  return adjacentVertices.filter(vertex => vertex.distance === null);
}

function markDistanceAndPredecessor(prevNode, adjacentNodes) {
  for (const node of adjacentNodes) {
    node.distance = prevNode.distance + 1;
    node.predecessor = prevNode;
  }
}
