var hasCycle = function(head) {
    if(head === null) return false;
      
      let slow = head; 
      let fast = head.next ; 
       if(head === null) return -1;
      while(slow != null && fast != null && fast.next != null){
          
            if(fast === slow) {
              return true; 
          }
          slow = slow.next;
          fast = fast.next.next;
        
    
     }
      
      return false;
  };