class PriorityQueue {
    constructor(){
        this.values = [];
    }

    enqueue(value, priority) {
        this.values.push({value, priority});
        this.sort;
    }

    dequeue(){
        return this.values.shift();
    }

    sort() {
        this.values.sort((a,b) => a.priority - b.priority); 
    }
}
class WeightedGraph {
    constructor() {
        this.adjacencyList = [];
    }
    
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({node: vertex2, weight});
        this.adjacencyList[vertex2].push({node: vertex1, weight});
    }

    Dijkstra(start, end){
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let smallest;

        // Build initial state
        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
        while (nodes.values.length) {
            let smallest = nodes.dequeue().value;
            if (smallest === end) {
                // Done and build
                // path to return
            }
            if (smallest || distance[smallest] !== Infinity) {
                for (let neighbor in this.adjacencyList[smallest]) {
                    // Find neighbor node
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    // Calculate distance to neighboring node
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node
                    if (candidate < distances[nextNode.node]) {
                        distances[nextNeighbor] = candidate;
                        previous[nextNeighbor] = smallest;
                        nodes.enqueue(nextNeighbor, candidate)
                    }
                }
            }
        }
    }

}
const graph = new WeightedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');
graph.addEdge('A', 'B', 4);
graph.addEdge('B', 'E', 3);
graph.addEdge('A', 'C', 2);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'F', 1);
graph.addEdge('D', 'E', 3);
graph.Dijkstra('A', 'E');