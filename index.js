function findAdjacendNodes(vertex, vertices, edges){

    
    // loop through the matching vertex temp array and remove any where distance != null

    // loops through edges and extract the names of all the vertices that are adjacent into a temp array
    let matchingVertexNames = []
    for (let edge of edges){
        if (edge[0] === vertex){
            matchingVertexNames.push(edge[1])
        }
        else if (edge[1] === vertex){
            matchingVertexNames.push(edge[2])
        }
    }

    // loop through the vertices array and extract every vertex whose name is present in our matching edges temp array into a matching vertex temp array
    let adjacentVertices = []
    let mvnIndex = - 1
    for (let vertex of vertices){
        mvnIndex = matchingVertexNames.findIndex(function(element) {element === vertex['name']}, this)
        if (-1 !== mvnIndex){

        }
    }
}

function bfs(rootNode, vertices, edges){

}
