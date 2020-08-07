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
  function letter_combinations_of_phone_number(digits) {
      // WRITE YOUR BRILLIANT CODE HERE
      let res = [];
      dfs(digits, [], res);
      return res;
  
  
  }
  function dfs(digits, path, res) {
      debugger;
      if (path.length === digits.length) {
          res.push(path.join(''));
          return;
      }
      
      let next_number = digits.charAt(path.length);
      for(let i = 0; i < KEYBOARD[next_number].length; i++){
        path.push(KEYBOARD[next_number][i]);
        dfs(digits, path, res);
        path.pop();
      }

  }