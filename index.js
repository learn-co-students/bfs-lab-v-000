function bfs(rootNode, vertices, edges){

}

function findAdjacent(node, vertices, edges) {
  let adjacent = [];
  let adjacent_names = [];
  for (let i=0; i < edges.length; i++) {
    if (edges[i].includes(node)) {
      adjacent_names.push(edges[i].filter((vertex => vertex != node)))
    }
  }
  debugger;
  for (let i=0; i < adjacent_names.length; i++) {
    adjacent.push(vertices.filter((vertex => vertex.name == adjacent_names[i] && vertex.distance == null)))
  }
  return adjacent
}

function markDistanceAndPredecessor(node, adjacentNodes) {
  return node
}
