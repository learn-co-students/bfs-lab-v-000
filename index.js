function bfs(rootNode, vertices, edges){
  var queue = [rootNode]
  var visited = []
  var out = []
  while(queue.length > 0){
    var current = queue.shift()
    visited.push(current.name)
    var connections = edges.filter((val) => {
      return val[0] === current.name || val[1] === current.name
    });
    var vertConnects = connections.map((edge) => {
      var name = edge[0] === current.name ? edge[1] : edge[0];
      return vertices.find((vertex) => {
        return vertex.name === name
      })
    })
    vertConnects.forEach((vertex) => {
      if(!visited.includes(vertex.name)){
        vertex.distance = current.distance + 1;
        vertex.predecessor = current;
        queue.push(vertex)
      }
    })
    out.push(current)
  }
  return out
}

function findAdjacent(current, vertices, edges){
  var queue = []
  var realCurrent = vertices.find((vert) => vert.name === current)
  var connections = edges.filter((val) => {
    return val[0] === current || val[1] === current
  });
  var vertConnects = connections.map((edge) => {
    var name = edge[0] === current ? edge[1] : edge[0];
    return vertices.find((vertex) => {
      return vertex.name === name
    })
  })
  return vertConnects.filter((vertex) => vertex.distance === null)
}

function markDistanceAndPredecessor(current, adjacent){
  return adjacent.map((vertex) => {
    if(vertex.distance === null){
      vertex.distance = current.distance + 1;
      vertex.predecessor = current;
      return vertex;
    }
  })
}
