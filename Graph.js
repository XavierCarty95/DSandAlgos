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
}