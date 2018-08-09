function bfs(rootNode, vertices, edges){
  rootNode.distance = 0;
  let visited = [rootNode];
  let visitOrder = [rootNode];

  while(visited.length != 0){
    let currentNode = visited.shift();
    let adjNodes = findAdjacent(currentNode.name, vertices, edges);

    visitOrder = visitOrder.concat(adjNodes);
    markDistanceAndPredecessor(currentNode, adjNodes);
    visited = visited.concat(adjNodes);
  }
  return visitOrder;
}

function findAdjacent(nodeName, vertices, edges){
  return edges.filter(function(edge){
    return edge.includes(nodeName);
  }).map(function(edge){
    return edge.filter(function(node){
      return(node != nodeName);
    })[0]
  }).map(function(name){
    return findNode(name, vertices);
  }).filter(function(node){
    return node.distance == null;
  });
}

function markDistanceAndPredecessor(node, adjacentNodes){
  for(let adjacentNode of adjacentNodes){
    adjacentNode.distance = node.distance + 1;
    adjacentNode.predecessor = node;
  }
}

function findNode(nodeName, vertices){
  return vertices.find(function(vertex){
    return vertex.name == nodeName;
  })
}
