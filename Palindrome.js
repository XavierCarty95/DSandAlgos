function isPalindrome(string) {
    // Write your code here.
       
       if(string.length === 1) { return true }
       var newString = "";
       for(var i = string.length - 1; i >= 0; i--){
           newString += string[i]
     }
      return newString === string; 

  }

  function isPalindrome(string, i = 0) {
    // Write your code here.
      const j = string.length - 1 - i; 
      return i >= j ? true : string[i] == string[j] && isPalindrome(string, i+1)
  }


