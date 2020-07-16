function charCount(str){
    let result = {} 
    for(let char of str){
      if((/[0-9a-z]/i).test(str)){
         if(result[char]){
           result[char]++
         } else {
           result[char] = 1
         }
      }
      
    }
  return result
}