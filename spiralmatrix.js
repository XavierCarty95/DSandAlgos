// "/**
//  * @param {number[][]} matrix
//  * @return {number[]}
//  */
var spiralOrder = function(matrix) {
    let result = []
let rowBegin = 0 
let rowEnd = matrix.length-1
let columnBegin = 0 
let columnEnd = matrix[0].length-1

if(matrix.length == 0 || matrix[0].length-1 == 0 ) return

 while(rowBegin <= rowEnd && columnBegin <= columnEnd){
     
    
        for(let i = columnBegin; i <= columnEnd; i++){
                result.push(matrix[rowBegin][i])
            }
      
     rowBegin++
     
     for(let i = rowBegin; i <= rowEnd; i++){
  result.push(matrix[i][columnEnd])
     
     }
     
     columnEnd--
     
     if(rowBegin <= rowEnd){
         for(let i = columnEnd; i >= columnBegin; i--){
                result.push(matrix[rowEnd][i])
         }
     }
     
     rowEnd--
     
     if(columnBegin <= columnEnd){
         for(let i = rowEnd; i >= rowBegin; i--){
             result.push(matrix[i][columnBegin])
         }
     }
     columnBegin++
    }
 return result
};