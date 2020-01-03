function bfs(startingNode, vertices, edges){
  let queue = [startingNode]
  let nodesVisited = [startingNode]
  while(queue.length !== 0) {
    let currentNode = queue.shift()
    if (!nodesVisited.includes(currentNode)) {
      nodesVisited.push(currentNode)
    }
    let adjacentVertices = findAdjacent(currentNode.name, vertices, edges)
      for (let i = 0; i < adjacentVertices.length; i++) {
        markDistanceAndPredecessor(adjacentVertices[i], adjacentVertices)
        queue.push(adjacentVertices[i])
      }
    }
    return nodesVisited
}

function findAdjacent(node, vertices, edges) {
  let adjacentVertices = []
  let adjacentNames = []
  for (let i = 0; i < edges.length; i++) {
    if (edges[i].includes(node)) {
      for (let j = 0; j < edges[i].length; j++) {
        if (edges[i][j] != node) {
          adjacentNames.push(edges[i][j])
        }
      }
    }
  }
  for (let k = 0; k < vertices.length; k++) {
    for (let l = 0; l < adjacentNames.length; l++) {
      if (vertices[k].name == adjacentNames[l] && vertices[k].distance === null) {
        adjacentVertices.push(vertices[k])
      }
    }
  }
  return adjacentVertices
}

function markDistanceAndPredecessor(node, adjacentNodes) {
  for (let i = 0; i < adjacentNodes.length; i++) {
    adjacentNodes[i].distance += 1
    adjacentNodes[i].predecessor = node
  }
  return adjacentNodes
}
