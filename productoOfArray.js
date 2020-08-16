let temp = 1 
    let product = [] 
    for(let i = 0; i < nums.length; i++){
           
        product[i] = temp
        temp = temp * nums[i]
    }
    
    temp = 1 
    for(let i = nums.length - 1; i > -1; i--){
        
        product[i] *= temp
        temp = temp * nums[i]
        
    }
    
    return product
    
};