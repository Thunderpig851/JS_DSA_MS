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

    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentNode = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentNode);
        }
        delete this.adjacencyList[vertex];
    }

    BFS_Recursive(vertex) {
        let order = [];
        let visited = {};
        let ref = this.adjacencyList;

        function DFS(node){

            if (!node) return;

            order.push(node)
            visited[node] = true;

            for (let i = 0; i < ref[node].length; i ++) {
                let current = ref[node][i];
                if (!visited[current]) {
                    DFS(current)
                }
            }
        }
        DFS(vertex);
        return order; 
    }

    DFS_Iterative(vertex) {
        let stack = [];
        let nodes = [];
        let visited = {};

        stack.push(vertex);
        visited[vertex] = true;

        while (stack.length) {
            let current = stack.pop();
            nodes.push(current);

            this.adjacencyList[current].forEach(neighbor => {
                if (!visited[neighbor]) {
                    stack.push(neighbor);
                    visited[neighbor] = true;
                }
            });
        }
        
        return nodes;
    }
}

const graph = new Graph();
graph.addVertex('Aspen');
graph.addVertex('New York');
graph.addVertex('Tokyo');
graph.addVertex('Berlin');
graph.addVertex('Los Angeles');
graph.addEdge('Tokyo', 'Berlin');
graph.addEdge('Los Angeles', 'Berlin');
graph.addEdge('Tokyo', 'Los Angeles');
graph.addEdge('Los Angeles', 'Aspen');
graph.addEdge('New York', 'Aspen');
console.log(graph.DFS_Recursive('Los Angeles'));
console.log(graph.DFS_Iterative('Los Angeles'));
console.log(graph.adjacencyList);