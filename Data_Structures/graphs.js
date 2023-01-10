class Graph {
    constructor() {
        this.adjacencyList = []
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
        return this;
    }

    addEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
        }
        return this;
    }

    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            let edge1 = this.adjacencyList[vertex1].indexOf(vertex2);
            let edge2 = this.adjacencyList[vertex2].indexOf(vertex1);
            this.adjacencyList[vertex1].splice(edge1, 1);
            this.adjacencyList[vertex2].splice(edge2, 1);
        }
        return this;
    }
}

const graph = new Graph();
graph.addVertex('Tokyo');
graph.addVertex('Berlin');
graph.addEdge('Tokyo', 'Berlin')
graph.removeEdge('Tokyo', 'Berlin')
console.log(graph.adjacencyList)