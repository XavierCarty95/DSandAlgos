function getNthFib(n) {
    // Write your code here.
      if(n === 2) {
          return 1;
      } else if (n === 1) {
          return 0; 
      } else {
          return getNthFib(n-1) + getNthFib(n-2)
      }
  }

//   memoized time

  function getNthFib(n, memoize = {1: 0, 2: 1}) {
    // Write your code here.
      if(n in memoize){
           return memoize[n]
      } else {
          memoize[n] = getNthFib(n-1,memoize) + getNthFib(n-2,memoize);
          return memoize[n]
      }
  }


//iterave solution

  function getNthFib(n) {
    // Write your code here.
      let lastTwo = [0,1]
    let	counter = 3 
      while (counter <= n) { 
       const  nextFib = lastTwo[0] + lastTwo[1]
       lastTwo[0] = lastTwo[1]
       lastTwo[1] = nextFib
       counter ++ }
      return  n > 1 ? lastTwo[1] : lastTwo[0]
      
  }
  
  