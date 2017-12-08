function bfs(rootNode, vertices, edges) {
  const visited = [];
  const queue = [];
  addToQueue(rootNode, queue);
  let node;
  let adjacentNodes;
  while (!!queue.length) {
    node = queue.shift();
    adjacentNodes = markDistanceAndPredecessor(node, findAdjacent(node.name, vertices, edges));
    adjacentNodes.forEach(n => addToQueue(n, queue));
    visited.push(node);
  }
  return visited.filter((v, index) => visited.indexOf(v) === index);
}

function findAdjacent(vertex, vertices, edges) {
  const vertexEdges = edges.filter(arr => arr.includes(vertex));
  const adjacentVertices = vertexEdges.map(edge => edge.find(v => v != vertex));
  return vertices.filter(v => adjacentVertices.includes(v.name) && v.distance === null);
}

function markDistanceAndPredecessor(vertex, adjacentVertices) {
  for (let i = 0; i < adjacentVertices.length; i++) {
    const adjacentVertex = adjacentVertices[i];
    adjacentVertex.predecessor = vertex;
    adjacentVertex.distance = vertex.distance + 1;
  }
  return adjacentVertices;
}

function addToQueue(node, queue) {
  queue.push(node);
}
