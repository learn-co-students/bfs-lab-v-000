function bfs(rootNode, vertices, edges){
    let queue = []; 
    let visitedNodes = []; 
    queue.push(rootNode); 

    while(queue.length > 0) {
        let firstNode = queue.shift(); 
        visitedNodes.push(firstNode); 
        let adjacentNodes = findAdjacent(firstNode.name, vertices, edges); 
        markDistanceAndPredecessor(firstNode, adjacentNodes)
        queue = queue.concat(adjacentNodes); 
    }    
    return visitedNodes; 
}


/* rootNode = vertices[0]
queue = []
addVertexToQueue(rootNode)
    // queue = [rootNode]
while(!queue.length == 0) {
    let firstNode = queue.shift()
adjacentVertices = findAdjacent(firstNode)
    for vertex in adjacentVertices {
        markDistanceAndPredecessor(vertex)
        addToQueue(vertex)
    }
} */


function findAdjacent(verticeName, vertices, edges){
    let adjacentNodes = []; 

    for(let i = 0; i < edges.length; i++){
        let currentEdge = edges[i];
        let verticeA = currentEdge[0]; 
        let verticeB = currentEdge[1]; 

        if(verticeA == verticeName){
            let adjacentVertixIndex = findVerticeIndexByName(verticeB, vertices); 
            if (isVerticeUndiscovered(vertices[adjacentVertixIndex])) {
                adjacentNodes.push(vertices[adjacentVertixIndex])
            }
        } else if(verticeB == verticeName){
            let adjacentVertixIndex = findVerticeIndexByName(verticeA, vertices); 
            if (isVerticeUndiscovered(vertices[adjacentVertixIndex])) {
                adjacentNodes.push(vertices[adjacentVertixIndex])
            }
        }
     }

    return adjacentNodes; 
}

function findVerticeIndexByName(name, vertices) {
    let index = 0
    while(vertices[index].name != name){
        index++
    }
    return index   
}

function isVerticeUndiscovered(vertix) {
    if (vertix.distance != null) {
        return false; 
    } else {
        return true; 
    } 
}

function markDistanceAndPredecessor(vertice, adjacentNodes){
    for(let i = 0; i < adjacentNodes.length; i++){
        adjacentNodes[i].predecessor = vertice; 
        adjacentNodes[i].distance = 1;
     }
}
