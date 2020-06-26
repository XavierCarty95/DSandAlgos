function isValidSubsequence(array, sequence) {
    // Write your code here.
      let arrayIndex = 0; 
      let sequenceIndex = 0; 
      
      while(arrayIndex < array.length && sequenceIndex < sequence.length){
           
                 if(array[arrayIndex] === sequence[sequenceIndex])sequenceIndex++;
                          arrayIndex++ 
         } 
      
         return sequenceIndex  === sequence.length
  }
  
  //solution 2 

  function isValidSubsequence(array, sequence) {
    // Write your code here.
     
      let sequenceIndex = 0; 
      for(const value of array) {
         if(sequenceIndex === sequence.length) break;
         if(sequence[sequenceIndex] === value) sequenceIndex++
      }
    
      
         return sequenceIndex  === sequence.length
  }
  