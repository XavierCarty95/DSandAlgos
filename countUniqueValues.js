function countUniqueValues(array){
    if(array.length === 0) return 0 
   let i = 0;
   let j = i + 1;
   //loop through array
   while(j < array.length){
    //compare i with j
    if(array[i] !== array[j]){
        i++
        array[i] = array[j]
       
    }
    
    j++;
   }
   console.log(array)
   return i + 1
    //if i not equal to j swap
    //move i + 1
  // add whatever parameters you deem necessary - good luck!
}