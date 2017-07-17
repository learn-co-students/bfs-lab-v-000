function bfs(rootNode, vertices, edges){
  rootNode.distance = 0
  var queue = [rootNode];
  var array = [rootNode];
  var visited = {}
  visited[rootNode.name] = true;
  while (queue.length > 0) {
    var firstNode = queue.shift();
    var adjacent = findAdjacent(firstNode.name, vertices, edges);
    for (let i = 0; i < adjacent.length; i++) {
      let vertex = adjacent[i]
      markDistanceAndPredecessor(vertex, adjacent)
      queue.push(vertex);
      if (!visited[vertex.name]) {
         array.push(vertex)
      }
      visited[vertex.name] = true;
    }
  }
  return array;
}

function findAdjacent(name, vertices, edges){
  var adjacent = {};
  var array = [];
  for (let i = 0; i < edges.length; i++) {
    let edge = edges[i]
    if ( edge[0] == name )  {
      adjacent[edge[1]] = edge[1]
    }
    if ( edge[1] == name )  {
      adjacent[edge[0]] = edge[0]
    }
  }

  for ( let i = 0; i < vertices.length; i++ ) {
    let vertex = vertices[i]
    if ( adjacent[vertex.name] && vertex.distance == null ){
      array.push(vertex)
    }
  }

  return array;
}

function markDistanceAndPredecessor(vertex, adjacentNodes){
  for ( let i = 0; i < adjacentNodes.length; i++ ) {
    let node = adjacentNodes[i];
    node.distance = vertex.distance + 1;
    node.predecessor = vertex;
  }
  return adjacentNodes;
}