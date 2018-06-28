function bfs(rootNode, vertices, edges){
  rootNode.distance = 0;
  let queue = [rootNode];
  let visited = [];
  while (!queue.length == 0) {
    let firstNode = queue.shift();
    visited.push(firstNode);
    let adjacentVertices = findAdjacent(firstNode.name, vertices, edges);
    adjacentVertices.forEach(vertex => {
      markDistanceAndPredecessor(firstNode, adjacentVertices);
      queue.push(vertex);
    })
  }
  return visited
}

function findAdjacent(rootNode, vertices, edges) {
  let adjacentNames = [];
  let adjacentNodes = [];
  edges.forEach(edge => {
    if (edge[0] === rootNode) {
      adjacentNames.push(edge[1])
    } else if (edge[1] === rootNode) {
      adjacentNames.push(edge[0])
    }
  })
  adjacentNames.forEach(name => {
    vertices.forEach(vertex => {
      if (name === vertex.name && vertex.distance === null) {
        adjacentNodes.push(vertex)
      }
    })
  })
  return adjacentNodes
}

function markDistanceAndPredecessor(rootNode, adjacentNodes) {
  return adjacentNodes.map(node => {
    node.distance += 1;
    node.predecessor = rootNode
  })
}
