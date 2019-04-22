function bfs(rootNode, vertices, edges){
 let queue = [rootNode]
 let adj
 let array = []
 rootNode.distance = 0
 while (queue.length > 0) {
   let nextNode = queue.shift()
   array.push(nextNode)
   const adj = findAdjacent(nextNode.name, vertices, edges)
   markDistanceAndPredecessor(nextNode, adj)
   adj.map(vertex => queue.push(vertex))
 }
 return array
}


function findAdjacent(node, vertices, edges) {
  let adjacentNode = edges.filter(edgeLinked => edgeLinked.includes(node))
  .map(edgeLinked => edgeLinked.filter(vertex => vertex !== node))
  .map(vertex => vertex[0])
  return vertices.filter(vertex => adjacentNode.includes(vertex.name)
  && vertex.distance == null)
}

function markDistanceAndPredecessor(vertex, adjacent) {
  let a = a
  for (a of adjacent) {
    a.predecessor = vertex
    a.distance = vertex.distance + 1
  }
}
