function bfs(rootNode, vertices, edges){
  let queue = [rootNode],
      adjacentVertices,
      result = [];
  rootNode.distance = 0;
  while(queue.length != 0) {
    let node = queue.shift();
    result.push(node);
    adjacentVertices = findAdjacent(node.name, vertices, edges);
    markDistanceAndPredecessor(node, adjacentVertices)
    adjacentVertices.map(vertex => queue.push(vertex));
  }

  return result;
}

function findAdjacent(name, vertices, edges) {
  let adjacent = edges.filter(edge => edge.includes(name))
                    .map(edge => edge.filter(v => v != name)) //remove self
                    .map(v => v[0]); // flatten

  return vertices.filter(vertex => 
                              adjacent.includes(vertex.name) &&
                              vertex.distance === null);
}

function markDistanceAndPredecessor(vertex, adjacentNodes) {
  adjacentNodes.map(node => {
    node.predecessor = vertex;
    node.distance = vertex.distance + 1;
  })
}
