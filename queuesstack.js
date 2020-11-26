/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
        
    if(root == null){
        return [];
    }
    
    let queue = [root];
    let result =  [] 
      let currentLevel = []
    while(queue.length > 0){
        let level = queue.length;
         let currentLevel = []
         
        for(let i = 0; i < level; i++){
          let current = queue.shift();
          if(current.left !== null)queue.push(current.left)
          if(current.right !== null )queue.push(current.right)
         
         currentLevel.push(current.val)
        }
          result.push(currentLevel)
    }
    
    return result
};