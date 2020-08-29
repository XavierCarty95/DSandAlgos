
 const rotate = (matrix) => {
  
  let size = matrix.length - 1 
  
  for(let layer = 0; layer < Math.floor(matrix.length/2); layer++){
    for(let i = layer ; i < size - layer; i++){
      let top = matrix[layer][i] 
      let right = matrix[i][size-layer]
      let bottom = matrix[size-layer][size-i]
      let left = matrix[size-i][layer]
      
      
      matrix[layer][i] = left 
        matrix[i][size-layer] = top 
      matrix[size-layer][size-i] = right 
        matrix[size-i][layer] = bottom 
      
     }
  }
  return matrix
}