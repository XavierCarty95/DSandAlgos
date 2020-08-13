class Node {
     constructor(value){
        this.value = value 
        this.next = null
     }

}

class LinkedList {
   constructor(){
      this.head = null 
      this.tail = null
      this.length = 0
   }

   append(value){
    let newNode = new Node(value)

    if(this.head == null){
        this.head = newNode
        this.tail = this.head
    } else {
        let temp = this.tail
         temp.next = newNode
        this.tail  = newNode
        
      }
      this.length++

   }
   prepend(value){

    let newNode = new Node(value)
    if(this.head == null){
        this.head = newNode
        this.tail = this.head
    } else {

        newNode.next = this.head
        this.head = newNode
    }
    this.length++

   }
}

let myLinkedList = new LinkedList();
myLinkedList.append(5);
myLinkedList.append(16)
myLinkedList.prepend(1)
console.log(myLinkedList)