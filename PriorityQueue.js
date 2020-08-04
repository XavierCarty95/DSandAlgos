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
  Dijkstra(start,finish){
        const nodes = new PriorityQueue()
        const distances = {}; 
        const previous = {};
        let path = [] 
        let smallest;

        for(let vertex in this.adjacenecyList){
            if(vertex === start){
                distances[vertex]=0
                nodes.enqueue(vertex,0)
            }else {
                distances[vertex] = Infinity
                nodes.enqueue(vertex,Infinity)
            }
            previous[vertex] = null; 
        }
      while(nodes.values.length){
          smallest = nodes.dequeue().val
          if(smallest === finish){
              while(previous[smallest]){
                  path.push(smallest)
                  smallest = previous[smallest]
              }
              break;
          }
          if(smallest || distances[smallest] !== Infinity){
              for(let neighbor in this.adjacenecyList[smallest]){
                  let nextNode = this.adjacenecyList[smallest][neighbor]
                  let candidate = distances[smallest] + nextNode.weight
                  let nextNeighbor = nextNode.node 
                  if(candidate < distances[nextNeighbor]){
                      //updating previous neighbor 
                      distances[nextNeighbor] = candidate

                      previous[nextNeighbor] = smallest
                      nodes.enqueue(nextNeighbor,candidate)
                  }
                  
              }
          }

      }
      return path.concat(smallest).reverse()
  }

}
var graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);
graph.Dijkstra("A", "E");


class Node{
    constructor(val , priority){
        this.val = val
        this.priority = priority
    }

}
class PriorityQueue {
    
    constructor(){
        this.values = [] 
    }
 

  enqueue(val , priority){
      let newNode = new Node(val,priority)
      this.values.push(newNode)
    this.bubbleUp()
     
  }
  bubbleUp(){
    let index = this.values.length-1 
    let element = this.values[index]
   while(index > 0){
        let parentIndex = Math.floor((index-1)/2)
        let parent = this.values[parentIndex]
        if(element.priority >= parent.priority)break
          this.values[parentIndex] = element
          this.values[index] = parent
          index = parentIndex
        
    }
  }
  dequeue(){
      const max = this.values[0]
      const end = this.values.pop();
      if(this.values.length > 0){
        this.values[0] = end
      this.sinkDown()  
      }
      return max;
    }
    sinkDown(){
        let index = 0; 
        const length = this.values.length
        const element = this.values[0];
        while(true){
            let leftChildIndex = 2 * index + 1
            let rightChildIndex = 2 * index + 2
            let leftChild, rightChild
            let swap = null 
            if(leftChildIndex < length){
                leftChild = this.values[leftChildIndex]
                if(leftChild.priority <  element.priority){
                    swap = leftChildIndex
                }
            }
            if(rightChildIndex < length){
                rightChild = this.values[rightChildIndex]
                if((swap == null && rightChild.priority < element.priority) || (swap !== null && rightChild.priority < leftChild.priority)) {
                 {
                    swap = rightChildIndex
                }
           }
        }
        if(swap === null) break 
        this.values[index] = this.values[swap]
        this.values[swap] = element
        index = swap
    }
  }
}

