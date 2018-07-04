function findAdjacent(vertex, vertices, edges){
    // loops through edges and extract the names of all the vertices that are adjacent into a temp array
    let matchingVertexNames = []
    for (let edge of edges){
        if (edge[0] === vertex){
            matchingVertexNames.push(edge[1])
        }
        else if (edge[1] === vertex){
            matchingVertexNames.push(edge[0])
        }
    }

    // loop through the vertices array and extract every vertex whose name is present in our matching edges temp array into a matching vertex temp array
    let adjacentVertices = []
    let mvnIndex = -1
    for (let vertex of vertices){
        mvnIndex = matchingVertexNames.findIndex(function(el) {return el === vertex['name']})
        if (-1 !== mvnIndex){
            adjacentVertices.push(vertex)
            // remove the elemnt from the matchingVertexNames array, maybe, but this is expensive so maybe not worth it
        }
    }

    // loop through the matching vertex temp array and remove any where distance != null
    let undiscoveredAdjacentVertices = []
    for (let adjacentVertex of adjacentVertices){
      if (null === adjacentVertex['distance']){
        // it is cheaper to push than to splice
        undiscoveredAdjacentVertices.push(adjacentVertex)
      }
    }

    return undiscoveredAdjacentVertices
}

function bfs(rootNode, vertices, edges){

}
