function bfs(rootNode, vertices, edges){
    //set root node distance to 0 as starting position
    rootNode.distance = 0;

    //add rootNode to queue and discoveredOrder list
    let queue = [rootNode];
    let discoverOrder = [rootNode];

    //while nodes are in queue
    while(queue.length !== 0){
        //set current node to first node in queue, and remove from queue array
        let currentNode = queue.shift();

        //find adjacentNodes to currentNode
        let adjacentNodes = findAdjacent(currentNode.name, vertices, edges);

        //set distance for adjacent nodes from currentNode
        markDistanceAndPredecessor(currentNode, adjacentNodes);

        // add adjacent nodes to discoverOrder
        discoverOrder = [...discoverOrder, ...adjacentNodes];

        //add adjacentNodes to queue
        queue = [...queue, ...adjacentNodes];
    }

    return discoverOrder;
}


const findAdjacent = (nodeName, vertices, edges) => {
    ///filter edges to include only those that contain nodeName
    const adjacentEdgeNames = edges.filter(edge =>
        edge.includes(nodeName)

        // map each returned edge, filtering out submitted nodename
    ).map(edge => edge
        .filter(edgeName => edgeName !== nodeName))

            //combine returned nested array of nodenames
            .reduce((a, b) => [...a, ...b])

    // filter vertices list against adjacentEdgeNames list, ignoring nodes already discovered (aka with distance 
    // set) and return nodes
    return vertices.filter(vertex => adjacentEdgeNames.includes(vertex.name) && vertex.distance === null)
}



const markDistanceAndPredecessor = (predecessor, adjacentNodes) => {
    for (const adjacentNode of adjacentNodes) {
        adjacentNode.predecessor = predecessor;
        adjacentNode.distance = predecessor.distance + 1;
    }
}



