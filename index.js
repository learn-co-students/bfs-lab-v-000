function bfs(rootNode, verticess, edgess) {
    let rNodes = [];
    let queue = [];
    // if (verticess[0] === rootNode) {
    //     rootNode.distance = 0;
    // }

    verticess[0].distance = 0;
    queue.push(rootNode)

    // rNodes.push(rootNode)

    // let nodes = findAdjacent(rootNode, verticess, edgess)
    // let mNodes = markDistanceAndPredecessor(rootNode, nodes)

    // queue.push(mNodes[0])
    // queue.push(mNodes[1])
    console.log("here 1")
    console.log(queue)
    console.log(queue.length)

    while (queue.length > 0) {
        console.log("here 2")
        stuff(rNodes, verticess, edgess, queue)
        // let fNode = queue.shift
        // rNodes.push(fNode)
        // let nnodes = findAdjacent(fNode, verticess, edgess)
        // let mmNodes = markDistanceAndPredecessor(fNode, nnodes)
        // for (let i = 0; i < mmNodes.length; i++) {
        //     if (mmNodes[i]) {
        //         queue.push(mmNodes[i])
        //         stuff(rNodes, verticess, edgess, queue)
        //     }
        // }
    }

    console.log("here 3")

    console.log(rNodes)
    return rNodes





    // mNodes.map((n) => {
    //     return bfs(n, verticess, edgess)
    // })
    // mNodes.forEach((n) => {
    //     bfs(n, verticess, edgess)
    // })

    // for (let i = 0; i < mNodes.length; i++) {
    //     bfs(mNodes[i], verticess, edgess)
    //     return mNodes[i]
    // }


}

function stuff(rNodes, verticess, edgess, queue) {
    console.log("stuff")
    console.log(queue)
    let fNode = queue.shift
    rNodes.push(fNode)
    let nnodes = findAdjacent(fNode, verticess, edgess)
    let mmNodes = markDistanceAndPredecessor(fNode, nnodes)
    for (let i = 0; i < mmNodes.length; i++) {
        queue.push(mmNodes[i])
        stuff(rNodes, verticess, edgess, queue)
    }
}

function findAdjacent(node, vertices, edges) {
    let adjacentNodes = [];

    for (let i = 0; i < edges.length; i++) {
        let e = edges[i];
        if (e[0] === node || e[0] === node.name) {
            vertices.forEach((v) => {
                if (v.name === e[1] && v.distance === null) {
                    adjacentNodes.push(v)
                }
            })
        } else if (e[1] === node || e[1] === node.name) {
            vertices.forEach((v) => {
                if (v.name === e[0] && v.distance === null) {
                    adjacentNodes.push(v)
                }
            })
        }
    }

    return adjacentNodes
}

function markDistanceAndPredecessor(node, adjacentNodes) {
    adjacentNodes.forEach((n) => {
        n.distance = node.distance + 1;
        n.predecessor = node
    })

    return adjacentNodes
}

let edgess = [
    ['14th&6th', '23rd&6th'],
    ['23rd&6th', '34th&6th'],
    ['34th&6th', '28th&Bwy'],
    ['28th&Bwy', '23rd&Bwy'],
    ['23rd&Bwy', '14th&Lex'],
    ['14th&Lex', '23rd&Lex']
]

let verticess = [
    { name: '34th&6th', distance: null, predecessor: null },
    { name: '23rd&6th', distance: null, predecessor: null },
    { name: '28th&Bwy', distance: null, predecessor: null },

    { name: '14th&6th', distance: null, predecessor: null },
    { name: '23rd&Bwy', distance: null, predecessor: null },
    { name: '14th&Lex', distance: null, predecessor: null },
    { name: '23rd&Lex', distance: null, predecessor: null }
]

// console.log(findAdjacentNodes('34th&6th', vertices, edges))
// console.log("Should be")
// console.log([{ name: '23rd&6th', distance: null, predecessor: null },
// { name: '28th&Bwy', distance: null, predecessor: null }
// ])

bfs(verticess[0], verticess, edgess).map((vertex) => {
    console.log(vertex.name)
})