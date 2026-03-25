# Graph Implementation with DFS and BFS

This project implements a graph using an **adjacency list** representation in JavaScript. It supports both **directed** and **undirected** graphs and includes methods for adding/removing edges, checking edges, and traversing the graph using **Depth-First Search (DFS)** and **Breadth-First Search (BFS)**.

## Features

- Add vertices and edges
- Remove edges
- Check if an edge exists between two vertices
- Get neighbors of a vertex
- Print the graph
- DFS traversal (recursive and iterative)
- BFS traversal
- Support for both directed and undirected graphs

## Data Structures

| Component        | Description |
|------------------|-------------|
| Adjacency List   | A `Map` where each key is a vertex and the value is a `Set` of neighboring vertices. |
| DFS              | Uses recursion (or stack) to explore as deep as possible before backtracking. |
| BFS              | Uses a queue to explore neighbors level by level. |

## Time Complexities

| Operation         | Time Complexity |
|-------------------|-----------------|
| Add vertex        | O(1)            |
| Add edge          | O(1)            |
| Remove edge       | O(1) (average)  |
| Has edge          | O(1) (average)  |
| Get neighbors     | O(1)            |
| DFS / BFS         | O(V + E)        |

## Example Output
