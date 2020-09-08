class Solution {
    int count = 0;
    public int countUnivalSubtrees(TreeNode root) {
        if(root == null)    return 0;
        helper(root);
        return count;
    }
    
    private boolean helper(TreeNode root) {
        if(root == null)    return true;
        boolean leftVal = helper(root.left);
        boolean rightVal = helper(root.right);
        if(leftVal && rightVal) {
            if(root.left != null && root.left.val != root.val)  return false;
            if(root.right != null && root.right.val != root.val)    return false;
            count++;
            return true;
        }
        return false;
    }
}