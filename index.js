const edges = [
  ['14th&6th', '23rd&6th'],
  ['23rd&6th', '34th&6th'],
  ['34th&6th', '28th&Bwy'],
  ['28th&Bwy', '23rd&Bwy'],
  ['23rd&Bwy', '14th&Lex'],
  ['14th&Lex', '23rd&Lex']
]

const vertices = [
  {name: '34th&6th', distance: null, predecessor: null},
  {name: '23rd&6th', distance: null, predecessor: null},
  {name: '28th&Bwy', distance: null, predecessor: null},

  {name: '14th&6th', distance: null, predecessor: null},
  {name: '23rd&Bwy', distance: null, predecessor: null},
  {name: '14th&Lex', distance: null, predecessor: null},
  {name: '23rd&Lex', distance: null, predecessor: null}
]



function bfs(rootNode, vertices, edges){
  let x = vertices.sort((a,b) => {a.distance < b.distance})
  return x
}

const findAdjacentNodes = (node, vertices, edges) => {
  //finds node and returns the vertices[i] object
  const edgeResult = edges.find(x => x[0] === node)
  const prevResult = edges.find(x => x[1] === node)
  const next = vertices.find(x => x.name === edgeResult[1])
  const prev = vertices.find(x => x.name === prevResult[0])
  if (prev.distance !== null)
  return [next]
  return [prev, next]
}

const markDistanceAndPredecessor = (former, adjacentNodes) => {
    adjacentNodes.map(strName => {
      strName.distance = former.distance+1
      strName.predecessor = former
    })
}

const addToQueue = () => {

}
