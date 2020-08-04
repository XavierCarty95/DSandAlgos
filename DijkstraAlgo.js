class WeightedGraph {
   constructor(){
       this.adjacenecyList = {} 
   }
   addVertex(vertex){
       if(!this.adjacenecyList[vertex])this.adjacenecyList[vertex] = [] 
   }
   addEdge(vertex1,vertex2, weight){
       this.adjacenecyList[vertex2].push({node:vertex2,weight});
       this.adjacenecyList[vertex1].push({node: vertex1, weight});
   }

}