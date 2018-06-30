function bfs(rootNode, vertices, edges){
  let queue = [];
  let visited = [];
  rootNode = vertices[0];
  rootNode.distance = 0;

  queue.push(rootNode); // add rootNode to queue

  while (queue.length !== 0) {
    let firstNode = queue.shift();
    let adjacentNodes = findAdjacent(firstNode.name, vertices, edges);

    for (let node of adjacentNodes) {
      markDistanceAndPredecessor(rootNode, adjacentNodes);
      queue.push(node);
    }
    visited.push(firstNode);
  }

  return visited;
}

// FINDADJACENT
function findAdjacent(name, vertices, edges) {
  let adjacents = [];

  for (let edge of edges) {
    if (edge[0] === name) {
      let node = vertices.find(vertex => vertex.name === edge[1])

      if (node.distance === null) {
        adjacents.push(node);
      }
    } else if (edge[1] === name) {
      let node = vertices.find(vertex => vertex.name === edge[0])

      if (node.distance === null) {
        adjacents.push(node);
      }
    }
  }

  return adjacents;
}

function markDistanceAndPredecessor(node, adjacentNodes) {
  // distance = one plus the distance of the vertex that led to their discovery
  for (let adjNode of adjacentNodes) {
    adjNode.distance = node.distance + 1;
    adjNode.predecessor = node;
  }

  return adjacentNodes;
}
