function bfs(startingNode, vertices, edges){
  startingNode.distance = 0
  let discover = [startingNode]
  let discoverOrder = [startingNode]
  while (discover.length != 0){
    let firstNode = discover.shift()
    let adjacent = findAdjacent(firstNode.name, vertices, edges)
    discoverOrder = discoverOrder.concat(adjacent)
    markDistanceAndPredecessor(firstNode, adjacent)
    discover = discover.concat(adjacent)
  }
  return discoverOrder
}

function findAdjacent(nodeName, vertices, edges){
  let myEdges = edges.filter(edge => edge.includes(nodeName))
  let myVertNames = myEdges.map(edge => edge.filter(v => v != nodeName)[0])
  let myVertices = myVertNames.map(v => vertices.find(vert => vert.name === v))
  return myVertices.filter(vert => vert.distance == null)
}

function markDistanceAndPredecessor(predecessor, adjacentNodes){
  return adjacentNodes.map(node => {node.distance = predecessor.distance + 1;
    node.predecessor = predecessor})
}
