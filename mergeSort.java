public int[] sortArray(int[] nums) {
        
    if(nums.length <= 1){
        return nums;
    }
    int pivot = nums.length/2; 
    int[] left_array = sortArray(Arrays.copyOfRange(nums, 0 , pivot)); 
    int[] right_array = sortArray(Arrays.copyOfRange(nums,pivot,nums.length));
    return merge(left_array,right_array);
} 
public int[] merge(int[] left_array, int[] right_array){
    
    int[] result = new int[left_array.length + right_array.length];
    int left_cursor = 0, right_cursor = 0, res_cursor = 0; 
    
      while(left_cursor < left_array.length && right_cursor < right_array.length){
         
          if(left_array[left_cursor] < right_array[right_cursor]){
              
              result[res_cursor++] = left_array[left_cursor++];
              
           } else {
              
              result[res_cursor++] = right_array[right_cursor++];
              
            }
          
     }
    
     while(left_cursor < left_array.length){
         
         result[res_cursor++] = left_array[left_cursor++];
         
     }
    
     while(right_cursor < right_array.length){
         result[res_cursor++] = right_array[right_cursor++];
     }
    
    return result; 
    
}
}