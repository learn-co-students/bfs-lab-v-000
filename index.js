let undiscovered = (nodeName, discovered) => {
  return !discovered.map(node => node.name).includes(nodeName) ? true : false;
}

let findAdjacent = (vertexName, vertices, edges) => {
  let adjacentVertices = [];
  let adjacentNodes = [];

  adjacentVertices = edges.filter(edge => edge.includes(vertexName)).map (edge => edge.filter(e => e !== vertexName)).flat();

  adjacentVertices.map(v => {
    adjacentNodes = adjacentNodes.concat(vertices.filter(vertex => vertex.name == v));
  });

  return adjacentNodes.filter(node => node.distance == null);
}

let markDistanceAndPredecessor = (predecessor, adjacentNodes) => {
  return adjacentNodes.map(node => {
    node.distance = predecessor.distance + 1;
    node.predecessor = predecessor;
  });
};

let bfs = (startingNode, vertices, edges) => {
  startingNode.distance = 0;
  let queue = [startingNode];
  let discovered = [];
  while (queue.length != 0) {
    let currentNode = queue.shift();
    let adjacentNodes = findAdjacent(currentNode.name, vertices, edges);
    discovered = undiscovered(currentNode.name, discovered) ? discovered.concat(currentNode): discovered;
    markDistanceAndPredecessor(currentNode, adjacentNodes);
    queue = queue.concat(adjacentNodes);
  }
  return discovered;
}
