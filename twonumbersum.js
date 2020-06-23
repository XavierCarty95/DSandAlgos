// Write a function that takes a non-empty array of integers and find the two numbers in the input
//  array that eqaul the target sum 



function twoNumberSum(array, targetSum) {
    // Write your code here.
      for(let i = 0; i < array.length - 1; i++){
           const firstNum = array[i]
            for(let j = i + 1; j < array.length; j++){
                  const secondNum = array[j]
                  if(firstNum + secondNum === targetSum){
                      return [firstNum , secondNum]
                  }
              }
          }
       return [];
       
  }

//   Solution 2 


  function twoNumberSum(array, targetSum) {
    // Write your code here.
      for(let i = 0; i < array.length - 1; i++){
           const firstNum = array[i]
            for(let j = i + 1; j < array.length; j++){
                  const secondNum = array[j]
                  if(firstNum + secondNum === targetSum){
                      return [firstNum , secondNum]
                  }
              }
          }
       return [];
       
  }