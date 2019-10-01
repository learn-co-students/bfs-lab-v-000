function findAdjacent(nodeName, vertices, edges) {
  let adjacentEdgePairs = edges.filter(edgePair => edgePair.includes(nodeName))
  let adjacentEdges = [].concat(...adjacentEdgePairs.map(edgePair => {
      return edgePair.filter(edge => edge != nodeName)
  }))
  let adjacents = []
  adjacentEdges.forEach(edge => {
    vertices.forEach(vertex => {
      if (vertex.name === edge) adjacents.push(vertex)
    })
  })
  return adjacents.filter(vertex => vertex.distance === null)
}

function markDistanceAndPredecessor(vertex, adjacentNodes) {
  adjacentNodes.forEach(node => {
    node.distance = vertex.distance + 1
    node.predecessor = vertex
  })
}

function bfs(startNode, vertices, edges){
  startNode.distance = 0

  let queue = [startNode]
  let visited = [startNode]

  while(queue.length != 0) {
    let currentNode = queue.shift()
    let adjacentVertices = findAdjacent(currentNode.name, vertices, edges)
    markDistanceAndPredecessor(currentNode, adjacentVertices)
    visited = [...visited, ...adjacentVertices]
    queue = [...queue, ...adjacentVertices]
  }
  return visited
}
