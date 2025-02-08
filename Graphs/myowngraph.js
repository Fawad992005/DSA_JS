class Graph {
  constructor() {
    this.numberofnodes = 0;
    this.adjacencylist = {};
  }

  addvertex(node) {
    this.adjacencylist[node] = [];
    this.numberofnodes++;
  }
  addedge(node1, node2) {
    //For directed garph only one direction
    this.adjacencylist[node1].push(node2);

    /*
    For undirected Graph both directions
    this.adjacencylist[node1].push(node2);
    */
  }
  showconnection() {
    const allNodes = Object.keys(this.adjacencylist);
    for (let node of allNodes) {
      let nodeConnections = this.adjacencylist[node];
      let connections = "";
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + " ";
      }
      console.log(node + "-->" + connections);
    }
  }
}

let mygraph = new Graph();
mygraph.addvertex(0);
mygraph.addvertex(1);
mygraph.addvertex(2);
mygraph.addedge(0, 1);
mygraph.addedge(0, 2);
console.log(mygraph.showconnection());
