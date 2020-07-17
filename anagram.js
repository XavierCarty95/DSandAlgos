function validAnagram(str1,str2){
    // add whatever parameters you deem necessary - good luck!
    let anagramOne = {}
    let anagramTwo = {}
    if(str1.length !== str2.length)return false 
    for(let char of str1){
       anagramOne[char] = (anagramOne[char] || 0) + 1 
    }
    
    for(let char of str2){
        anagramTwo[char] = (anagramTwo[char] || 0) + 1 
    }
    
    console.log(anagramOne)
    console.log(anagramTwo)
     for(let key in anagramOne){
        if(!(key in anagramTwo)){ 
          return false
     } 
        if(anagramTwo[key] !== anagramOne[key]){
        return false 
      }
    }
    return true
  }

  //solution 2 
  