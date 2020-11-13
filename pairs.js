/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {   
    
    if(s == "") return true;
    if(s.length == 1 ) return false;
    let stack = [];
    let pairs = {
        "(" : ")",
        "[" : "]",
        "{" : "}"
    }
    for(let char of s){
       if(char in pairs ){
            stack.push(char);  
         } else {
             if(stack.length == 0) return false
             last = stack.pop();
             if(pairs[last] !== char) return false
             
        } 
    }
    if(stack.length) return false
    return true;
};