class Graph {
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
       if(!this.adjacencyList[vertex])  this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2){
         this.adjacencyList[vertex1].push(vertex2)
          this.adjacencyList[vertex2].push(vertex1)
    }
    removeEdge(vertex1,vertex2){
           this.adjacencyList[vertex1].splice(this.adjacencyList[vertex1].indexOf(vertex2),1)
           this.adjacencyList[vertex2].splice(this.adjacencyList[vertex2].indexOf(vertex1),1)
    }
    removeVertex(vertex){
       while(this.adjacencyList[vertex].length){
           const adjacentVertex = this.adjacencyList[vertex].pop
           this.removeEdge(vertex,adjacentVertex)
       }

       delete this.adjacencyList[vertex]

    }
    DFSRecursive(startingVertex){
        let list = [] 
        let visited = {}
        let adjacencyList = this.adjacencyList;
        (function DFS(vertex){
            if(!vertex) return null;
            visited[vertex] = true
            list.push(vertex)
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    return dfs(neighbor)
                }
            })
            
        })(startingVertex)
        return list 
    }

    DFSIterative(start){
        let stack = []  
        let result = [] 
        let visited = {}
        let current
        stack.push(start)
        visited[start] = true; 
        while(stack.length > 0 ){
              current = stack.pop()
              result.push(current)
             this.adjacencyList[current].forEach(neighbor => {
                 if(!visited[neighbor]){
                 visited[neighbor] = true
                 stack.push(neighbor)
                 }
             })
         }
        return result
     }
     BFS(start){
         let queue = [start]
         let stored = [] 
         let visited = {}
         let current;
         visited[start] = true  
         while(queue > 0){
            current = queue.shift() 
            stored.push(current)
            this.adjacencyList[current].forEach(neighbor => {
                    if(!visited[neighbor]){
                        visited[neighbor] = true
                        queue.push(neighbor)
                    }
            })
         }
         return stored

     }
}