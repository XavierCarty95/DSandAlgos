var isAnagram = function(s, t) {
    if(s.length !== t.length) return false 
    
    let stringHash = {} 
    
    
    for(let i = 0; i < s.length; i++){
        
        let sChar = s[i]
        stringHash[sChar] = stringHash[sChar] + 1 || 1     
    }
    
    for(let i = 0; i < t.length; i++){
         let tchar = t[i]
        if(!stringHash[tchar]) {
            return false
        } else {
        stringHash[tchar]-- 
        }
    }
    
    return true 
};