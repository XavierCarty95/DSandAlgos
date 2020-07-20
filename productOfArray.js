function productOfArray(num){
    if(num.length === 0) return 1;
    return num[0] * productOfArray(num.slice(1))
      
}