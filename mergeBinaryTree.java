class Solution {
    public TreeNode mergeTrees(TreeNode t1, TreeNode t2) {
         return merge(t1, t2);
    }
    
    private TreeNode merge(TreeNode node1, TreeNode node2){

        if(node1 == null && node2 == null)
            return null;

        if(node1 == null && node2 != null)
            return node2;

        if(node2 == null && node1 != null)
            return node1;

        TreeNode root = new TreeNode(node1.val +  node2.val);
        root.left = mergeTrees(node1.left, node2.left);
        root.right = mergeTrees(node1.right, node2.right);
        return root;
    }
}