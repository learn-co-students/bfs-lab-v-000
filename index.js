function bfs(startingNode, vertices, edges){
  let queue = []
  let nodesVisited = []
  queue.push(startingNode)
  while (!queue.length == 0) {
    let firstNode = queue.shift()
    if (!nodesVisited.includes(firstNode)) {
      nodesVisited.push(firstNode)
    }
    let adjacentVertices = findAdjacent(firstNode.name, vertices, edges)
    for (let i in adjacentVertices) {
      markDistanceAndPredecessor(adjacentVertices[i], adjacentVertices)
      queue.push(adjacentVertices[i])
    }
  }
  return(nodesVisited)
}

function findAdjacent(currentNode, vertices, edges) {
  let adjacentNodes = []
  let adjacentVerticesNames = []
  //1 go through the edges and find the edges that includes the vertex
  for (let i in edges) {
    if (edges[i].includes(currentNode)) {
  //2 if an edge contains the vertex, return the other element and store the analogous vertex in an temp array until the search is done
      for (let j in edges[i]) {
        if (edges[i][j] != currentNode) {
          adjacentVerticesNames.push(edges[i][j])
        }
      }
    }
  }
  //3 look up the analogous vertex in vertices and push matching vertices.name into an array
  for (let x in vertices) {
    for (let y in adjacentVerticesNames) {
      if (vertices[x].name === adjacentVerticesNames[y] && vertices[x].distance === null) {
        console.log(vertices[x])
        adjacentNodes.push(vertices[x])
      }
    }
  }
  //4 return array of adjacentNodes
  return adjacentNodes
}

function markDistanceAndPredecessor(vertex, adjacentVertices) {
  for (let i in adjacentVertices) {
    adjacentVertices[i].distance = 1
    adjacentVertices[i].predecessor = vertex
  }
  return adjacentVertices
}
