function bfs(rootNode, vertices, edges){
  rootNode.distance = 0;
  let visited = [rootNode];
  let visitOrder = [rootNode];
  while (visited.length !== 0) {
    let currentNode = visited.shift();
    let adjNodes = findAdjacent(currentNode.name, vertices, edges);
    visitOrder = visitOrder.concat(adjNodes);
    markDistanceAndPredecessor(currentNode, adjNodes);
    visited = visited.concat(adjNodes);
  }
  return visitOrder;
}

function findAdjacent(rootNode, vertices, edges) {
  let links = edges.filter(edge => edge.includes(rootNode));
  links = [].concat.apply([], links);
  let nodeNames = links.filter(p => p !== rootNode);
  let adjNodes = [];
  for (let i=0; i<nodeNames.length; i++) {
    let node = findNode(nodeNames[i], vertices);
    adjNodes.push(node);
  }
  return adjNodes.filter(node => node.distance === null);
}

function findNode(nodeName, vertices) {
  for (let i=0; i<vertices.length; i++) {
    if (vertices[i].name === nodeName) {
      return vertices[i];
    }
  }
}

function markDistanceAndPredecessor(node, adjacentNodes) {
  adjacentNodes.map(adjNode => {
    adjNode.predecessor = node;
    adjNode.distance = node.distance + 1;
  });
}
