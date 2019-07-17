function bfs(rootNode, vertices, edges){
  rootNode.distance = 0;

  let discovered = [rootNode];
  let discoverOrder = [rootNode]

  while(discovered.length != 0) {
    let currentNode = discovered.shift();                                 // grab 1st element
    let adjacentNodes = findAdjacent(currentNode.name, vertices, edges)   // retrive adjacent nodes

    discoverOrder = discoverOrder.concat(adjacentNodes)
    markDistanceAndPredecessor(currentNode, adjacentNodes)
    discovered = discovered.concat(adjacentNodes)
  }
  return discoverOrder
}

function findAdjacent(nodeName, vertices, edges) {
    return edges.filter(function(edge) {  // collects all edges with nodeName
      return edge.includes(nodeName)
    }).map(function(edge) {               // maps filtered edges
      return edge.filter(function(node) { // collects all name of nodes from collected vertices and removes nodeName
        return (node != nodeName)
      })[0]
    }).map(function(name) {               // uses mapped names to retrieve node
      return findNode(name, vertices)
    }).filter(function(node) {            // lastly filters nodes that are adjacent
      return node.distance == null
    })
}

function markDistanceAndPredecessor(predecessor, adjacentNodes) {
  adjacentNodes.map(function(node) {
    node.distance = predecessor.distance + 1;
    node.predecessor = predecessor;
  })
}

function findNode(nodeName, vertices) {   // retrieves vertix of nodeName
  return vertices.find(function(vertex) {
    return vertex.name == nodeName
  })
}
