class Graph {
    constructor() {
        this.adjacencyList = []
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2) {

        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
        }
    }
}

const graph = new Graph();
graph.addVertex('Tokyo');
graph.addVertex('Berlin');
graph.addEdge('Tokyo', 'Berlin')
console.log(graph.adjacencyList)