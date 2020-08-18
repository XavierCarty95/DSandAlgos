
var searchRange = function(nums, target) {
   
  let result = [] 
  result[0] = findStartingIndex(nums, target)
  result[1] = findEndingIndex(nums, target)
  return result
};

function findStartingIndex(nums,target){
   let index = -1
   let start = 0 
   let end = nums.length-1 
   
   while(start <= end){
   let midpoint = start + Math.trunc((end-start)/2)
    if(nums[midpoint] >= target){
        end = midpoint-1
    } else {
        
        start = midpoint+1
        
    }
     
   if(nums[midpoint] === target)index = midpoint
   
   }
   
   
   
   return index
}

function findEndingIndex(nums,target){
   let index = -1
   let start = 0 
   let end = nums.length-1 
   
   while(start <= end){
   let midpoint = start + Math.trunc((end-start)/2)
    if(nums[midpoint] <= target){
        start = midpoint + 1 
    } else {
        
        end = midpoint-1
        
    }
     
   if(nums[midpoint] === target)index = midpoint
   
   }
   
   
   
   return index 
}