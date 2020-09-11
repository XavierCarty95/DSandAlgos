class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        
        if (matrix == null || matrix.length == 0) {
            return false;
        }
          if(matrix[0].length < 1 || matrix[0] == null) return false;
        if(matrix.length < 1 && matrix[0][0] != target) return false;
        if(matrix.length < 1 && matrix[0][0] == target){
            return true;
            
        }
    
    int column = 0;
    for(int row = 0; row < matrix.length; row++){
           if(searchHelper(matrix , row ,  column, target)){
               return true;
           }
         
        }
        
        return false;
        
    }
    
    public boolean searchHelper(int[][] matrix, int row, int column, int target){
        
        if(column > matrix[row].length - 1 || row > matrix.length - 1){
                return false;
         }
            
            if(matrix[row][column] == target){
                return true;
            } 
        
       return searchHelper(matrix, row, column + 1, target);
        
    }
    
    

}