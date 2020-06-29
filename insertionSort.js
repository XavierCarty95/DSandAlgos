function insertionSort(array) {
    // Write your code here.
      let sorted = []
      for(let i = 0; i < array.length; i++){
              sorted.push(array[i])
           for(let j = i + 1; j < array.length; j++){
                if(array[j] > sorted[i]){
                       sorted[i+1] = array[j]
                  }
                else {
                       let temp = sorted[i]
                       sorted[i+1] = temp
                       sorted[i] = array[j]
                  }
           }
          
      }
       return sorted
      
  }