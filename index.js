function bfs(rootNode, vertices, edges) {
  let queue = [rootNode]
  let explored = []
  rootNode.distance = 0;
  while (queue.length !== 0) {
    let firstNode = queue.shift()
    let adjacentNodes = findAdjacent(firstNode.name, vertices, edges)
    markDistanceAndPredecessor(firstNode, adjacentNodes);
    for (const vertex of adjacentNodes) {
      queue.push(vertex)
    }
    explored.push(firstNode)
  }
  return explored
}

function findAdjacent(node, vertices, edges) {
  const foundEdges = edges.filter(edge => edge.includes(node))
  let adjacentVertices = foundEdges.map(edge => edge.find(vertex => vertex != node))
  return vertices.filter(vertex => adjacentVertices.includes(vertex.name) && vertex.distance == null)
}

function markDistanceAndPredecessor(startNode, adjacentNodes) {
  for (let i = 0; i < adjacentNodes.length; i++) {
    adjacentNodes[i].distance += 1
    adjacentNodes[i].predecessor = startNode
  }
  return adjacentNodes;
}
