function findThreeLargestNumbers(array) {
    // Write your code here.
      let i;  
      let first; 
      let second; 
      let third; 
     
      /* There should be atleast three elements */
    
     third = first = second = Number.MIN_SAFE_INTEGER
       for (i = 0; i < array.length ; i++) 
      { 
          /* If current element is greater than first*/
          if (array[i] > first) 
          { 
              third = second; 
              second = first; 
              first = array[i]; 
          } 
     
          /* If arr[i] is in between first and second then update second  */
          else if (array[i] > second) 
          { 
              third = second; 
              second = array[i]; 
          } 
     
          else if (array[i] > third) 
              third = array[i]; 
      } 
      debugger;
      return [first,second,third].sort((a, b) => a - b)
        
  }
  