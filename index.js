function bfs(rootNode, vertices, edges){

}

function findAdjacent(rootNode, vertices, edges) {
  const pairs = edges.filter(e => e.includes(rootNode))
  let names = pairs.map(e => e.find(n => n != rootNode))
  return vertices.filter(v => names.includes(v.name) && v.distance == null)
}

function markDistanceAndPredecessor(predecessor, adjacentNodes) {
  for (var i = 0; i < adjacentNodes.length; i++) {
    adjacentNodes[i].predecessor = predecessor
    adjacentNodes[i].distance = 1
  }
  return adjacentNodes
}
