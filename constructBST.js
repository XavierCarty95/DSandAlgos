const inorderTraversal = (root) => {
    const inorderTraversal = [];
    const stack = [];
  
    let curr = root;
    while (stack.length !== 0 || curr != null) {
      /*
       * Left: go as left as possible, the stack keeps the history of nodes that need
       * searching
       */
      while (curr != null) {
        stack.push(curr);
        curr = curr.left;
      }
  
      // Node: curr is null now, investigate the node on the top of the stack
      curr = stack.pop();
      inorderTraversal.push(curr.val);
  
      // Right: now do this same routine on this node's right subtree
      curr = curr.right;
    }
  
    return inorderTraversal;
  }