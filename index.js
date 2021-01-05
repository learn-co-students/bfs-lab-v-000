function bfs(rootNode, vertices, edges){
    rootNode.distance = 0
    let queue = [rootNode]
    const visited = []
    while(queue.length > 0){
        const nextNode = queue.shift()
        console.log(nextNode)
        visited.push(nextNode)
        const adjacents = findAdjacent(nextNode.name, vertices, edges)
        queue = queue.concat(adjacents)
        markDistanceAndPredecessor(nextNode, adjacents)
    }
    return visited
}

function findAdjacent(nodeName, vertices, edges){
    return edges.filter(edgePair => edgePair.includes(nodeName))
        .map( edgePair => edgePair.find(v => v !== nodeName))
        .map( name => vertices.find(v => (v.name === name) && (v.distance === null)))
        .filter(node => !!node)
}

function markDistanceAndPredecessor(vertice, adjacents){
    for(let adj of adjacents){
        adj.predecessor = vertice
        adj.distance = vertice.distance + 1
    }
}
