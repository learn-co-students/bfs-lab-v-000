let edges = [
    ['14th&6th', '23rd&6th'],
    ['23rd&6th', '34th&6th'],
    ['34th&6th', '28th&Bwy'],
    ['28th&Bwy', '23rd&Bwy'],
    ['23rd&Bwy', '14th&Lex'],
    ['14th&Lex', '23rd&Lex']
];

let vertices = [
  {name: '34th&6th', distance: null, predecessor: null},
  {name: '23rd&6th', distance: null, predecessor: null},
  {name: '14th&6th', distance: null, predecessor: null},
  {name: '28th&Bwy', distance: null, predecessor: null},
  {name: '23rd&Bwy', distance: null, predecessor: null},
  {name: '14th&Lex', distance: null, predecessor: null},
  {name: '23rd&Lex', distance: null, predecessor: null},
];

let queue = [];
let visitedList = [];
let visitedNode;
let adjacentNodes;
let current;


let addToQueue = node => {
  queue.push(node);
}

let findAdjacent = (vertexName, vertices, edges) => {
  let adjacentVertices = [];
  let adjacentNodes = [];

  adjacentVertices = edges.filter(edge => edge.includes(vertexName)).flat().filter(neighbor => neighbor !== vertexName);

  adjacentVertices.map(v => {
    adjacentNodes = adjacentNodes.concat(vertices.filter(vertex => vertex.name == v));
  });

  return adjacentNodes.filter(node => node.distance == null);
}

let markDistanceAndPredecessor = (vertexName, adjacentNodes) => {
  return adjacentNodes.map(node => {
    node.distance = 1;
    node.predecessor = vertexName;
  });
};

let bfs = (startingNode, vertices, edges) => {
  current = vertices.filter(vertex => vertex.name == startingNode.name)[0];
  !queue.find(node => node.name == current.name) ? addToQueue(current): null;
  if (!visitedList.includes(current.name)) {
    adjacentNodes = findAdjacent(current.name, vertices, edges).filter(node => !visitedList.includes(node.name))
    markDistanceAndPredecessor(current.name, adjacentNodes);
	  adjacentNodes.map(node => addToQueue(node));
  }

  while (!!queue.length) {
    visitedNode = queue.shift();
		!visitedList.includes(visitedNode)? visitedList.push(visitedNode): null;
    !!queue.length? bfs(queue[0], vertices, edges): null;
  }

  return visitedList;
}
