// O(n) time O(1) space

function bubbleSort(array) {
    // Write your code here.
      let isSorted = false
      let counter = 0
      while(!isSorted) {
          isSorted = true; 
          for(let i = 0; i < array.length - 1 - counter; i++){
              if(array[i] > array[i + 1]){
            swap(i, i + 1 , array)
                      isSorted = false; 
            }
        }
       counter++
   } 
    return array 
  }
  [1,3,4,8,9,10]
  function swap(i , j , array) {
     const temp = array[j]
       array[j] = array[i]
       array[i] = temp
  
  }
  
  // solution 2 

  function bubbleSort(array) {
    // Write your code here.
      let temp; 
      
      for(let i = 0; i < array.length; i++){
          for(let j = i + 1; j < array.length; j++){
            if(array[i] > array[j]){
                    temp = array[j]
                    array[j] = array[i]
                      array[i] = temp
              }
          }
      }
        return array 
      
  }
  