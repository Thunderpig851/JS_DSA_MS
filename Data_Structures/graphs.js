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

    BFS(start) {
        let queue = [start];
        let nodes = [];
        let visited = {};
        visited[start] = true;
        let current;

        let adjacencyList = this.adjacencyList;

        while (queue.length) {

            current = queue.shift();
            nodes.push(current);

            adjacencyList[current].forEach(neighbor => {
                if (!visited[neighbor]) {
                    queue.push(neighbor);
                    visited[neighbor] = true;
                }
            });
        }
        return nodes;
    }

    DFS_Recursive(vertex) {
        let order = [];
        let visited = {};
        let ref = this.adjacencyList;

        function DFS(node){
            if (!node) return;
            order.push(node)
            visited[node] = true;

            ref[node].forEach(neighbor => {
                if (!visited[neighbor]) {
                    return DFS(neighbor);
                }
        })
        }
        DFS(vertex);
        return order; 
    }

    DFS_Iterative(start) {
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;
        while(stack.length){
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
               if(!visited[neighbor]){
                   visited[neighbor] = true;
                   stack.push(neighbor)
               } 
            });
        }
        return result;
    }
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');
console.log(graph.DFS_Recursive('A')); 
console.log(graph.DFS_Iterative('A'));
console.log(graph.BFS('A'));