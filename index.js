function bfs(rootNode, vertices, edges){
  rootNode.distance = 0
  let queue = [rootNode]
  let visitOrder=[]

  while (queue.length > 0){
    let curr = queue.shift()
    let adj = findAdjacent(curr.name, vertices, edges)
    markDistanceAndPredecessor(curr, adj)
    queue = queue.concat(adj)
    visitOrder.push(curr)
  }

  return visitOrder
}

function findAdjacent(nData, vertices, edges){
  let adjN =[]
  for (let e of edges){
    if (e.includes(nData)){   //if an edge has vertex data
      let next = e[0]===nData ? e[1] : e[0]     //other v data in edge
      for (let v of vertices){
        if ((v.name === next) && (v.distance === null)){       //add v to arr if not found before (distance = null)
          adjN.push(v)
        }
      }
    }
  }
  return adjN
}

function markDistanceAndPredecessor(n, adjN){
  for (let el of adjN){
    el.distance = n.distance + 1
    el.predecessor = n
  }
}
