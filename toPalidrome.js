var isPalindrome = function(s) {
    let start = 0 
    let end = s.length - 1 
    while(start < end){
        while(!isAlphaNumeric(s[start]))start++
        while(!isAlphaNumeric(s[end]))end--
        if(s.charAt(start).toLowerCase() != s.charAt(end).toLowerCase()){
            return false
        }
        start++ 
        end--
    }
    return true 
};

function isAlphaNumeric(c) {
    return /^[a-zA-Z0-9]*$/.test(c);
}