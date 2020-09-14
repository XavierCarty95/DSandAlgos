const KEYBOARD = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
     }
  var letterCombinations = function(digits) {
        let res = [] 
        if(digits === "")return []
        dfs(digits, [] , res)
        return res 
  };
  
  function dfs(digits, path, res) {
      if (path.length === digits.length) {
          
          res.push(path.join(""));
          return;
      }
     
      let next_number = digits.charAt(path.length);
      
      for (let letter of KEYBOARD[next_number]) {
          
          path.push(letter);
          dfs(digits, path, res);
         
          path.pop();
      }
  }