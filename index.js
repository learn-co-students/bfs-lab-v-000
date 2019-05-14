function bfs(startNode, vertices, edges){
  startNode.distance = 0;
  let queue = [startNode];
  let queueOrder = [startNode];

  while(queue.length != 0) {
    let currentNode = queue.shift();
    let adjacentVertices = findAdjacent(currentNode.name, vertices, edges);
    queueOrder = queueOrder.concat(adjacentVertices);
    markDistanceAndPredecessor(currentNode, adjacentVertices)
    queue = queue.concat(adjacentVertices)
    }
  return queueOrder
}

let findVertex = (vertexName, vertices) => {
  return vertices.find(vertex => {
    return vertex.name == vertexName;
  });
}

let findAdjacent = (vertex, vertices, edges) => {
  return edges.filter(edge => {
    return edge.includes(vertex);
  }).map(edge => {
    return edge.filter(node => {
      return node != vertex;
    });
  }).map(vertexName => {
    return findVertex(vertexName, vertices);
  }).filter(node => {
    return node.distance == null;
  });
}

let markDistanceAndPredecessor = (vertex, adjacentVertices)=> {
  adjacentVertices.map(adjacentVertex => {
    adjacentVertex.distance = vertex.distance + 1;
    adjacentVertex.predecessor = vertex;
  });
}
