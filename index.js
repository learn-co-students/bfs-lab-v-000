function bfs(rootNode, vertices, edges){
  return vertices.sort((a,b) => {a.distance < b.distance})
}


function findAdjacent(rootNode, vertices, edges) {
  let adjacentNodes = [];
  let findEdges =[];
  let endPoints = [];

  edges.map(edge => {
    edge.map(e => {e === rootNode ? findEdges.push(edge): null})
  })

  endPoints.push(findEdges[0][0], findEdges[1][1])

    endPoints.map(endPoint => {
      	vertices.map(vertex => {vertex.name === endPoint ? adjacentNodes.push(vertex): null})
    })

  return adjacentNodes.filter(node => node.distance == null);
}

function markDistanceAndPredecessor(vertex, adjacentNodes) {
  adjacentNodes.forEach(adjacentNode => adjacentNode.distance = 1)
  adjacentNodes.forEach(adjacentNode => adjacentNode.predecessor = vertex)
  return adjacentNodes
}
