var merge = function(intervals) {
    
    let output = [] 
    let sorted_intervals = intervals.sort((a,b) => a[0]-b[0])
    for (let interval of sorted_intervals){
        
        if(output.length > 0 && interval[0] <= output[output.length-1][1]){
            output[output.length-1][1] = Math.max(output[output.length-1][1], interval[1])
        
        } else {
            output.push(interval)
        }
    }
    
    return output
};
