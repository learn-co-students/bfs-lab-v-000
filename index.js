"use strict"

function bfs(rootNode, vertices, edges){
  let queue = [],
      nodes = [];

  rootNode.distance = 0;
  queue.push(rootNode);

  while (queue.length) {
    let firstNode = queue.shift();
    nodes.push(firstNode)
    let adjacentVertices = findAdjacent(firstNode.name, vertices, edges);
    for (let vertex in adjacentVertices) {
      markDistanceAndPredecessor(firstNode, adjacentVertices)
      queue.push(adjacentVertices[vertex]);
    }
  }
  return nodes;
}

function findAdjacent(firstNode, vertices, edges) {
  let adjacents = [];

  edges.forEach(edge => {
    if (edge[0] == firstNode) {
      vertices.forEach(vertex => {
        if (vertex.name == edge[1] && vertex.distance == null) {
          adjacents.push(vertex)
        }
      })
    } else if (edge[1] == firstNode){
      vertices.forEach(vertex => {
        if (vertex.name == edge[0] && vertex.distance == null) {
          adjacents.push(vertex)
        }
      })
    }
  })
  return adjacents;
}

function markDistanceAndPredecessor(firstNode, adjacentVertices) {
  adjacentVertices.forEach(vertex => {
      vertex.distance = firstNode.distance + 1;
      vertex.predecessor = firstNode;
  })
}

// { name: '34th&6th', distance: 0, predecessor: null }, [ { name: '34th&6th', distance: 0, predecessor: null },
//   { name: '23rd&6th', distance: null, predecessor: null },
//   { name: '28th&Bwy', distance: null, predecessor: null },
//   { name: '14th&6th', distance: null, predecessor: null },
//   { name: '23rd&Bwy', distance: null, predecessor: null },
//   { name: '14th&Lex', distance: null, predecessor: null },
//   { name: '23rd&Lex', distance: null, predecessor: null } ], [ [ '14th&6th', '23rd&6th' ],
//   [ '23rd&6th', '34th&6th' ],
//   [ '34th&6th', '28th&Bwy' ],
//   [ '28th&Bwy', '23rd&Bwy' ],
//   [ '23rd&Bwy', '14th&Lex' ],
//   [ '14th&Lex', '23rd&Lex' ] ]
