function bfs(rootNode, vertices, edges){

}

function findAdjacent(rootNode, vertices, edges) {
  // Filter edges for vertex pairs containing rootNode
  // Remove rootNode and flatten filtered array for adjacent vertices
  // Iterate over vertices for objects where name key matches array elements
  const names = edges.filter(pair => pair.includes(rootNode))
  return names
}
