const threeSum = (A) => {
    A.sort((a, b) => a - b);
  
    const allThreeSums = new Set();
    const secondToLastIndex = A.length - 2;
  
    for (let i = 0; i < secondToLastIndex; i++) {
      findTwoSum(i, A, allThreeSums);
    }
  
    return Array.from(allThreeSums);
  }
  
  const findTwoSum = (rootIndex, A, allThreeSums) => {
    let left = rootIndex + 1;
    let right = A.length - 1;
  
    while (left < right) {
      const threeNumberSum = A[rootIndex] + A[left] + A[right];
  
      if (threeNumberSum == 0) {
        allThreeSums.add([A[rootIndex], A[left++], A[right--]]);
      } else if (threeNumberSum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }