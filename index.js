function bfs(rootNode, vertices, edges){
  rootNode.distance = 0;
  let queue = [rootNode];
  let queueOrder = [rootNode];

  while(!queue.length == 0) {
    let currentNode = queue.shift();
    let adjacentNodes = findAdjacent(currentNode.name, vertices, edges);
    queueOrder = queueOrder.concat(adjacentNodes);
    markDistanceAndPredecessor(currentNode, adjacentNodes)
    queue = queue.concat(adjacentNodes)
  }

  return queueOrder;
}

function findAdjacent(node, vertices, edges) {
  let adjacentNodes = [];
  let adjacentVertices = [];

  for (let edge of edges) {
    if(edge[0] === node){
      adjacentNodes.push(edge[1]);
    }
     if(edge[1] === node){
      adjacentNodes.push(edge[0]);
    }
  }

  for (let vertex of vertices) {
    if (vertex.name === adjacentNodes[0] || vertex.name === adjacentNodes[1]) {
      if (vertex.distance === null) {
        adjacentVertices.push(vertex);
      }
    }
  }

  return adjacentVertices;
}

function markDistanceAndPredecessor(node, adjacentNodes) {
  adjacentNodes.map(adjacentNode => {
    adjacentNode.distance = node.distance + 1;
    adjacentNode.predecessor = node;
  })
}
