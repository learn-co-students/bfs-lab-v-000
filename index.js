function bfs(rootNode, vertices, edges){ //returns an array of nodes in the order they were visited
  let queue = []
  let visited = []
  rootNode.distance = 0
  addToQueue(rootNode, queue)
  while(!queue.length == 0) {
    let firstNode = queue.shift()//grabs the first node in the queue
    visited.push(firstNode)
    let adjacentVertices = findAdjacent(firstNode.name, vertices, edges) //finds adjacent nodes returns array
    markDistanceAndPredecessor(firstNode, adjacentVertices)
    for(let i = 0; i < adjacentVertices.length; i++) {
      addToQueue(adjacentVertices[i], queue)
    }
  }
  return visited
}

function addToQueue(node, queue) { //sets value of queue
  queue.push(node)
}

function findAdjacent(nodeName, vertices, edges) { //returns an array of adjacent nodes
  let adjacents = []
  for(let i = 0; i < edges.length; i++) {
    if(nodeName == edges[i][0]){
      let adjacentNodeName = edges[i][1]
      for(let i = 0; i < vertices.length; i++){
        if(vertices[i].name == adjacentNodeName && vertices[i].distance == null) {
          adjacents.push(vertices[i])
        }
      }
    }else if(nodeName == edges[i][1]){
      let adjacentNodeName = edges[i][0]
      for(let i = 0; i < vertices.length; i++){
        if(vertices[i].name == adjacentNodeName && vertices[i].distance == null) {
          adjacents.push(vertices[i])
        }
      }
    }
  }
  return adjacents
}

function markDistanceAndPredecessor(node, adjacentNodes) { //returns an array of adjacent no
  for(let i = 0; i < adjacentNodes.length; i++) {
    adjacentNodes[i].distance = node.distance + 1;
    adjacentNodes[i].predecessor = node
  }
  return adjacentNodes
}
