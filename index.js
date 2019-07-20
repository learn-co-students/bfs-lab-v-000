//
// returns a list of vertices in the order they are first visited.

function bfs(rootNode, vertices, edges){
  let visited = [rootNode]
  let nodeQ = findAdjacentNodes(rootNode.name, vertices, edges)

  rootNode.distance = 0
  markDistanceAndPredecessor(rootNode, nodeQ)

  while (nodeQ.length > 0) {
    let nextAdjNodes = findAdjacentNodes(nodeQ[0].name, vertices, edges)
    markDistanceAndPredecessor(nodeQ[0], nextAdjNodes)
    nodeQ = nodeQ.concat(nextAdjNodes)
    visited = visited.concat(nodeQ.shift())
  }

  return visited
}

function findAdjacentNodes(root, vertices, edges) {
  let vertArray = []
  for (let i = 0; i < edges.length; i++) {
    if (root === edges[i][0]) {
      vertArray = vertArray.concat(vertices.filter(v => v.name === edges[i][1]))
    } else if (root === edges[i][1]) {
      vertArray = vertArray.concat(vertices.filter(v => v.name === edges[i][0]))
    }
  }
  return vertArray.filter(v => v.distance === null)
}


function markDistanceAndPredecessor(rootNode, adjacentNodes) {
  return adjacentNodes.map(n => {
    n.predecessor = rootNode
    n.distance = rootNode.distance + 1
  })
}
