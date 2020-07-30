class Node {
  constructor(value){
    this.value = value;
    this.left = null; 
    this.right = null;
  }
}
class BinarySearchTree {
  constructor(){
    this.root = null;
  }

  insert(value){
    let newNode = new Node(value)
    if(this.root === null){
      this.root = newNode
      return this;
    } 
      let current = this.root
      while(true){
        if(value === current.value) return undefined
        if(value < current.value){
          if(current.left === null){
              current.left = newNode;
              return this
          } 
            current = current.left
          } else {
                if(current.right === null){
                  current.right = newNode
                  return this;
                } 
                  current = current.right
              
          }
        }
    }

    find(value){
  
      if(this.root === null) return false; 
      let current = this.root
      let found = false; 
      while(current && !found){
        if(value < current.value){
          current = current.left
         } else if(value > current.value){
           current = current.right
         } else {
           found = true
         }
      }
      if(!found) return undefined;
      return current
    }
    BFS(){
      let data = [] 
      let queue = []
      let node = this.root 
      queue.push(node)
      while(queue.length){
        node = queue.shift()
        data.push(node.value)
        if(node.left) queue.push(node.left)
        if(node.right) queue.push(node.right)
      }
      return data;
    }
    DFSPreOrder(){
        let nodeVisted = []
       function helper(node){
          nodeVisted.push(node.value)
          if(node.left) helper(node.left)
          if(node.right) helper(node.right)
        }
        helper(this.root)
        return nodeVisted

    }
    DFSPostOrder(){
      let nodeVisted = []
      
     function helper(node){
      
        if(node.left) helper(node.left)
        if(node.right) helper(node.right)
        nodeVisted.push(node.value)
      }
  
      helper(this.root)
      return nodeVisted

  }
  DFSInOrder(){
    let nodeVisted = []
    
   function helper(node){
    
      if(node.left) helper(node.left)
      nodeVisted.push(node.value)
      if(node.right) helper(node.right)
  }

    helper(this.root)
    return nodeVisted

}

  }






