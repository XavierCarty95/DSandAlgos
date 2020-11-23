"class Node {
   constructor(value){
        this.value = value; 
        this.next = null;
   }
}

class SinglyLinkedList{
   constructor(){
        this.length = 0; 
        this.head = null; 
        this.tail = null;
   }

   push(val){
       var newNode = new Node(val)
       if(!this.head){
           this.head = newNode;
           this.tail = this.head;
       }
       this.tail.next = newNode 
       this.tail = newNode
       this.length++;
       return this;
   }

   pop(){
       if(!this.head){
           return undefined; 
       }
       let current = this.head
       let newTail = current; 
       while(current.next){
           newTail = current
           current = current.next; 
          
       }
       this.tail = newTail
       this.tail.next = null;
       this.length--
       if(this.length === 0){
           this.head = null 
           this.tail = null
       }
       return current;

   }

   shift(){
    if(!this.head)return undefined
    let currentHead = this.head; 
    this.head = currentHead.next; 
    this.length--;
    if(this.length === 0) this.tail = null;
    return currentHead;
   }

   unshift(val){
       let newNode = new Node(val)
       if(!this.head) {
           this.head = newNode
           this.tail = this.head
       } else {
       newNode.next = this.head
       this.head = newNode;
       } 
       this.length++;
       return this;
    }

    get(index){
        let counter = 0;
        let current = this.head;
        if(index < 0 || index >= this.length) return null;
        while(counter !== index){
            current = current.next
            count++;
        }
        return current; 
    }

    set(index,val){
       
        let node = this.get(index);
        if(node){
            node.value = val 
            return true; 
        }
        return false; 
      }
    insert(index,val){
       
        if(index < 0 || index > this.length){
            return false
        }
        if(index === this.length) return !!this.push(val)
        if(index === 0){ return !!this.unshift(val)}
        else {
             let newNode = new Node(val)
             let prevNode = this.get(index-1)
             let temp = prevNode.next; 
             prevNode.next = newNode
             newNode.next = temp; 
        }
        this.length++ 
        return true; 

    }
    remove(index,val){
        if(index < 0 || index > this.length){
            return undefined;
        }
        if(index === this.length-1)this.pop();
        if(index === 0)this.shift();
        let prevNode = this.get(index-1,val)
        let temp = prevNode.next; 
        prevNode.next = temp.next
        this.length++
        return temp;
    }

    reverse(){
        let node = this.head
        this.head = this.tail
        this.tail = node
        let prev = null; 
        let next;
       for(let i = 0; i < this.length; i++){
            next = node.next
            node.next = prev; 
            prev = node
            node = next
       }
       return this;
    }
}


