function bfs(rootNode, vertices, edges){
  rootNode.distance = 0
  let queue = []
  let disco = [rootNode]
  let adjacentNodes
  queue.push(rootNode)
  while (queue.length > 0) {
    let currentNode = queue.shift()
    adjacentNodes = adjacentNodes = findAdjacent(currentNode.name, vertices, edges)
      markDistanceAndPredecessor(currentNode, adjacentNodes)
      queue = queue.concat(adjacentNodes)
      disco = disco.concat(adjacentNodes)
  }
  return disco
}

function findAdjacent(node, vertices, edges){
  const adjacentNodes = []
  let matches
  for (const edge of edges) {
    if (edge.includes(node)) {
      const target = edge.find(vertex =>(
        vertex !== node
      ))
      const targetVertex = vertices.find(myVertex =>(
        myVertex.name === target
      ))
        adjacentNodes.push(targetVertex)
    }
  }
  return adjacentNodes.filter(myNode => (myNode.distance == null))
}

function markDistanceAndPredecessor(OGNode, adjacentNodes){
  for (const adjacentNode of adjacentNodes) {
    adjacentNode.predecessor = OGNode
    adjacentNode.distance = OGNode.distance + 1
  }
}

function addToQueue(){

}