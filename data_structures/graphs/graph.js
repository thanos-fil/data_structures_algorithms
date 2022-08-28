class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
  }

  removeVertex(vertex) {
    while(this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }

    delete this.adjacencyList[vertex];
  }

  depthFirstRecursive(start) {
    const result = [];
    const visited = {};

    const dfs = (vertex) => {
      if (!vertex) {
        return null;
      }
      visited[vertex] = true;
      result.push(vertex);
      this.adjacencyList[vertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          return dfs(neighbour);
        }
      });
    };

    dfs(start);

    return result;
  }

  depthFirstIterative(start) {
    const candidates = [start];
    const result = [];
    const visited = { start: true };
    let next;
    while (candidates.length > 0) {
      next = candidates.pop();
      result.push(next);
      this.adjacencyList[next].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          candidates.push(neighbor);
        }
      });
    }

    return result;
  }

  breadthFirst(start) {
    const candidates = [start];
    const visited = { start: true };
    const result = [];
    let next;

    while (candidates.length > 0) {
      next = candidates.shift();
      result.push(next);
      this.adjacencyList[next].forEach((neighbor) => {
        if (!visited[next]) {
          visited[next] = true;
          candidates.push(neighbor);
        }
      });
    }

    return result;
  }
}