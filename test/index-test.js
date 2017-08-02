var chai = require('chai');
var sinon = require('sinon');

let edges;
let vertices;
beforeEach(function() {
	edges = [
		['14th&6th', '23rd&6th'],
		['23rd&6th', '34th&6th'],
		['34th&6th', '28th&Bwy'],
		['28th&Bwy', '23rd&Bwy'],
		['23rd&Bwy', '14th&Lex'],
		['14th&Lex', '23rd&Lex']
	]

	vertices = [
	  {name: '34th&6th', distance: null, predecessor: null},
	  {name: '23rd&6th', distance: null, predecessor: null},
		{name: '28th&Bwy', distance: null, predecessor: null},

	  {name: '14th&6th', distance: null, predecessor: null},
	  {name: '23rd&Bwy', distance: null, predecessor: null},
	  {name: '14th&Lex', distance: null, predecessor: null},
	  {name: '23rd&Lex', distance: null, predecessor: null}
	]
})

describe('#findAdjacent', function() {
  it("should return an array of adjacent nodes", function() {
    expect(findAdjacent('34th&6th',  vertices, edges)).toEqual([
      {name: '23rd&6th', distance: null, predecessor: null},
      {name: '28th&Bwy', distance: null, predecessor: null}
    ])
  });

  it("excludes discovered nodes", function() {
		let thirtyFourthAndSixth = vertices[0]
		thirtyFourthAndSixth.distance = 0
    expect(findAdjacent('28th&Bwy',  vertices, edges)).toEqual([
      {name: '23rd&Bwy', distance: null, predecessor: null}
    ])
    // but these nodes are not in the node list?
    // 23rd&Broadway
  })
});

describe('#markDistanceAndPredecessor', function() {
  it("should mark distance and predecessor on adjacent nodes", function() {
    let twentyThirdAndSixth = vertices[1]
    let twentyEigthAndBroadway = vertices[2]
    let thirtyFourthAndSixth = vertices[0]
    let adjacentNodes = [twentyThirdAndSixth, twentyEigthAndBroadway]

    markDistanceAndPredecessor(thirtyFourthAndSixth, adjacentNodes)

    expect(twentyThirdAndSixth.distance).toEqual(1)
    expect(twentyEigthAndBroadway.distance).toEqual(1)
    expect(twentyEigthAndBroadway.predecessor).toEqual(thirtyFourthAndSixth)
  });
});


describe('#bfs', function() {
	it("should return an array of nodes in the order they were visited", function() {
		let startingNode = vertices[0]
		expect(bfs(startingNode, vertices, edges).map(function(vertex){ return vertex.name; })).toEqual(['34th&6th', '23rd&6th', '28th&Bwy', '14th&6th', '23rd&Bwy', '14th&Lex', '23rd&Lex'])
	})
})
