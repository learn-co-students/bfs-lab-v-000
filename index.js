function bfs (rootNode, vertices, edges) {
  rootNode.distance = 0;
  let queue = [rootNode];
  let discovered = [rootNode];

  while (queue.length > 0) {
    const currentVertex = queue.shift();
    const adjacentVertices = findAdjacent(currentVertex.name, vertices, edges);

    markDistanceAndPredecessor(currentVertex, adjacentVertices);

    queue = queue.concat(adjacentVertices);
    discovered = discovered.concat(adjacentVertices);
  }

  return discovered;
}

function findAdjacent(name, vertices, edges) {
  return edges.filter(edge => (
    edge.includes(name)
  )).map(edge => (
    edge.filter(_name => (
      _name !== name
    )).pop()
  )).map(_name => (
    vertices.find(vertex => (
      vertex.name === _name
    ))
  )).filter(node => (
    node.distance === null
  ));
}

function markDistanceAndPredecessor(vertex, adjacentVertices) {
  adjacentVertices.forEach(adjacentVertex => {
    adjacentVertex.distance = vertex.distance + 1;
    adjacentVertex.predecessor = vertex;
  });
}
