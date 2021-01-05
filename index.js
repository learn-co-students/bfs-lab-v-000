function bfs(rootNode, vertices, edges){
  rootNode.distance = 0
  let discovered = [rootNode]
  let discoverOrder = [rootNode]
  while(discovered.length != 0){
    let currentNode = discovered.shift()
    let adjacentNodes = findAdjacent(currentNode.name, vertices, edges)
    discoverOrder = discoverOrder.concat(adjacentNodes);
    markDistanceAndPredecessor(currentNode, adjacentNodes)
    discovered = discovered.concat(adjacentNodes)
  }
  return discoverOrder
}

function findAdjacent(firstNode, vertices, edges) {
  let adjEdge = edges.filter(x => x.includes(`${firstNode}`))
  let adjArray = adjEdge.map(x => x.find(function(element) {return element != firstNode}))
  return vertices.filter(x => adjArray.includes(x.name) && x.distance === null)
}

function markDistanceAndPredecessor(predecessor, adjNodes) {
  return adjNodes.map(function(node) {
    node.predecessor = predecessor;
    node.distance = predecessor.distance + 1
  })
}
