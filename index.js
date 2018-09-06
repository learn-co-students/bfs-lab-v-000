
function findAdjacent(node, vertices, edges) {
  // 1. is there an edge that connects 'node' to another node?
  const nodeEdges = edges.filter(arr => arr.includes(node));
  // from each nodeEdge array, select only those vertices that are not identical with the node whose adjacent nodes we're searching
  let adjacentVertices = nodeEdges.map(edge => edge.find(vertex => vertex != node));
  // adjacentVertices only contains the names of the vertice; now select the objects from the vertices array that match the name and that have not yet been assigned a distance value
  return vertices.filter(vertex => adjacentVertices.includes(vertex.name) && vertex.distance === null)
}

function markDistanceAndPredecessor(startingNode, adjacentNodes) {
  for (let i = 0; i < adjacentNodes.length; i++) {
    adjacentNodes[i].distance += 1;
    adjacentNodes[i].predecessor = startingNode
  }
  return adjacentNodes;
}


function bfs(startingNode, vertices, edges) {
  // initialize the starting.node distance to 0
  startingNode.distance = 0;
  // keep track of all the nodes that have been discovered, starting with the startingNode
  let discovered = [startingNode];
  // create separate array to push items in order, again starting with startingNode
  let ordered = [startingNode]
  // as long as there are items in discovered, take the first item in array and find its adjacent neighbours, and add those to discovered and ordered
  while (discovered.length !== 0) {
    let searchNode = discovered.shift()
    let adjacentNodes = findAdjacent(searchNode.name, vertices, edges)
    ordered = ordered.concat(adjacentNodes)
    markDistanceAndPredecessor(searchNode, adjacentNodes)
    discovered = discovered.concat(adjacentNodes)
  }
  return ordered
}
