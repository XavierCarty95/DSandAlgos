class Node {
    constructor(val){
    this.val = val;
    this.prev = null
    this.next = null 
    }
}

class DoubleLinkedList {
     constructor(){
         this.head = null 
         this.tail = null 
         this.length = null 
     }

   push(val){
       let newNode = new Node(val)
       if(!this.head){
           this.head = newNode;
           this.tail = this.head;
       } else {
           this.tail.next = newNode
           newNode.prev = this.tail
           this.tail = newNode
           }
        this.length++
        return this
   }
    pop(){
        if(!this.head)return undefined;
        let temp = this.tail; 
        if(this.length === 1){
            this.head = null
            this.tail = null; 
        } else {
        this.tail = temp.prev
        this.tail.next = null; 
        temp.prev = null;
        this.length--;
        }
        return temp
    }
    shift(){
        if(this.length === 0) return undefined; 
        let temp = this.head 
        if(!this.head){
            this.head = null; 
            this.tail = null; 
        }else{
        this.head = temp.next; 
        this.head.prev = null; 
        temp.next = null; 
        } 
        this.length-- 
        return temp
    }
    unshift(val){
        let newNode = new Node(val)
        if(this.length === 0){
            this.head = newNode
            this.tail = newNode
        }else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
           this.length++
           return this
    }

    get(index){
        if(index <= 0 || index >= this.length) return null;
        let count,current;
        if(index <= this.length/2){
            count = 0; 
            current = this.head;
            while(count != index){
                current = current.next
                count++;
            }
        } else{
            count = this.length - 1;
            current = this.tail; 
            while(count !== index){
                current = current.prev
                count--
            }
        }
        return current
    }
    set(index,val){
        let node = this.get(index)
        if(node){
            node.val = val
            return true;
        } else {
            return false; 
        }
    }
    insert(index,val){
        if(index < 0 || index > this.length)return false 
        if(index === 0) return !!this.unshift(val)
        if(index === this.length) return !!this.push(val)
        let newNode = new Node(val)
        let beforeNode = this.get(index-1)
        let afterNode = beforeNode.next;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev= newNode;
        this.length++
        return true; 
       }
      remove(index){
          if(index <= 0 || index >= this.length){
              return undefined
          }
          if(index === 0) return !!this.shift()
          if(index === this.length-1) return !!this.pop()
          let foundNode = this.get(index)
           foundNode.prev.next = foundNode.next
           foundNode.next.prev = foundNode.prev 
           foundNode.next = null;
           foundNode.prev = null; 
           this.length--
           return foundNode;

      }
}