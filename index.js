function bfs(rootNode, vertices, edges){
  rootNode.distance = 0;
  var discovered = [rootNode];
  var discoverOrder = [rootNode];
  while(discovered.length !== 0) {
    var currentNode = discovered.shift();
    var adjacentNodes = findAdjacent(currentNode.name, vertices, edges)
    discoverOrder = discoverOrder.concat(adjacentNodes);
    markDistanceAndPredecessor(currentNode, adjacentNodes);
    discovered = discovered.concat(adjacentNodes);
  }
  return discoverOrder;
}

function findAdjacent(nodeName, vertices, edges) {
  return edges.filter(function(edge){
    return edge.includes(nodeName)
  }).map(function(edge){
    return edge.filter(function(node){
      return (node != nodeName)
    })[0]
  }).map(function(name){
    return findNode(name, vertices)
  }).filter(function(node){
    return node.distance == null;
  })
}

function findNode(nodeName, vertices) {
  return vertices.find(function(vertex) {
    return vertex.name == nodeName
  })
}

function markDistanceAndPredecessor(predecessor, adjacentNodes) {
  adjacentNodes.map(function(node) {
    node.distance = predecessor.distance + 1;
    node.predecessor = predecessor;
  })
}