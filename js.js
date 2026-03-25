class Graph {
    constructor(directed = false) {
        this.directed = directed;
        this.adjList = new Map(); // vertex -> Set of neighbors
    }

    // Add a vertex
    addVertex(vertex) {
        if (!this.adjList.has(vertex)) {
            this.adjList.set(vertex, new Set());
        }
    }

    // Add an edge between u and v
    addEdge(u, v) {
        this.addVertex(u);
        this.addVertex(v);
        this.adjList.get(u).add(v);
        if (!this.directed) {
            this.adjList.get(v).add(u);
        }
    }

    // Remove edge between u and v
    removeEdge(u, v) {
        if (this.adjList.has(u)) {
            this.adjList.get(u).delete(v);
        }
        if (!this.directed && this.adjList.has(v)) {
            this.adjList.get(v).delete(u);
        }
    }

    // Check if edge exists between u and v
    hasEdge(u, v) {
        return this.adjList.has(u) && this.adjList.get(u).has(v);
    }

    // Get neighbors of a vertex
    getNeighbors(vertex) {
        return this.adjList.has(vertex) ? Array.from(this.adjList.get(vertex)) : [];
    }

    // Print the graph
    print() {
        for (let [vertex, neighbors] of this.adjList.entries()) {
            console.log(`${vertex} -> ${Array.from(neighbors).join(', ')}`);
        }
    }

    // Depth-First Search (recursive)
    dfs(start, visited = new Set(), result = []) {
        if (!this.adjList.has(start)) return result;
        visited.add(start);
        result.push(start);
        for (let neighbor of this.adjList.get(start)) {
            if (!visited.has(neighbor)) {
                this.dfs(neighbor, visited, result);
            }
        }
        return result;
    }

    // Iterative DFS using stack
    dfsIterative(start) {
        if (!this.adjList.has(start)) return [];
        const visited = new Set();
        const stack = [start];
        const result = [];
        while (stack.length) {
            const vertex = stack.pop();
            if (!visited.has(vertex)) {
                visited.add(vertex);
                result.push(vertex);
                // Push neighbors in reverse order to simulate recursive order
                const neighbors = Array.from(this.adjList.get(vertex)).reverse();
                for (let neighbor of neighbors) {
                    if (!visited.has(neighbor)) {
                        stack.push(neighbor);
                    }
                }
            }
        }
        return result;
    }

    // Breadth-First Search
    bfs(start) {
        if (!this.adjList.has(start)) return [];
        const visited = new Set();
        const queue = [start];
        const result = [];
        visited.add(start);
        while (queue.length) {
            const vertex = queue.shift();
            result.push(vertex);
            for (let neighbor of this.adjList.get(vertex)) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
        return result;
    }
}

// ---------- TESTING ----------
console.log("=== Undirected Graph ===");
const undirectedGraph = new Graph(false);
undirectedGraph.addEdge('A', 'B');
undirectedGraph.addEdge('A', 'C');
undirectedGraph.addEdge('B', 'D');
undirectedGraph.addEdge('C', 'E');
undirectedGraph.addEdge('D', 'E');
undirectedGraph.print();

console.log("\nDFS (recursive) from A:", undirectedGraph.dfs('A'));
console.log("DFS (iterative) from A:", undirectedGraph.dfsIterative('A'));
console.log("BFS from A:", undirectedGraph.bfs('A'));

console.log("\n=== Directed Graph ===");
const directedGraph = new Graph(true);
directedGraph.addEdge('A', 'B');
directedGraph.addEdge('A', 'C');
directedGraph.addEdge('B', 'D');
directedGraph.addEdge('C', 'E');
directedGraph.addEdge('E', 'A'); // cycle
directedGraph.print();

console.log("\nDFS (recursive) from A:", directedGraph.dfs('A'));
console.log("BFS from A:", directedGraph.bfs('A'));

console.log("\n=== Edge Operations ===");
console.log("Has edge A->B?", directedGraph.hasEdge('A', 'B')); // true
directedGraph.removeEdge('A', 'B');
console.log("After removal, has edge A->B?", directedGraph.hasEdge('A', 'B')); // false
console.log("Neighbors of A:", directedGraph.getNeighbors('A')); // ['C']
