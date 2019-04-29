function bfs(rootNode, vertices, edges){

  let que = [rootNode]
  let result=[]
  let adjacentNodes
  rootNode.distance = 0
  while(que.length != 0){
    let node = que.shift()
    result.push(node)
    adjacentNodes = findAdjacent(node.name, vertices, edges)
    markDistanceAndPredecessor(node, adjacentNodes)
     adjacentNodes.map(vertex=> que.push(vertex))
  }
  return result
}


function findAdjacent(node, vertices, edges){
  let allAdjacent=[]
  let b = []
  let adjacent= edges.filter(edge=> edge.includes(node))
  adjacent.map(edge=>{
    edge.map(vertex=> vertex !== node ? allAdjacent.push(vertex) : false)
  })

  return vertices.filter(vertex=>{
    return allAdjacent.includes(vertex.name) && vertex.distance === null
  })

}


function markDistanceAndPredecessor(vertex, adjacentNodes){
  let predecessor
  adjacentNodes.map(node=>{
    node.predecessor = vertex
    node.distance = node.predecessor.distance +1
  })
}
