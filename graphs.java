
public class BST {
	
	private Node root = null;
	
     private class Node {
		private Node left; 
		private Node right;
		private int value; 
		
	    public Node(int value) {
		this.value = value; 
		}
		
	    @Override
	    public String toString() {
	    	return "Node+" + value;
	    }
		
	}
     
     
     public void insert(int value) {
    	  Node newNode = new Node(value);
    	  Node current = this.root; 
    	  
    	 
    	  if(this.root == null) {
    		  this.root = newNode; 
    		  return; 
    	  } 
    	  
    	  while(true){
    		  
    		  if(current.value > value) {
    			  
    			  if(current.left == null) {
    				  current.left = newNode;
    				  break;
    			  }
    			  
    			  current = current.left;
    			  
    		  } 
    		  else {
    			  
    			  if(current.right == null) {
    				  current.right = newNode;
    				  break;
    			  }
    			  
    			  current = current.right;
    			  
    		  }
    		  
    	  }
    	 
     }
     
     public boolean find(int value) {
    	 
    	 
    	 Node current = root; 
    	
    	 if(this.root == null) return false; 
    	 if(this.root.value == value) return true;  
    	 
    	 while(current != null) {
    	  if(current.value == value) {
    		   return true;
    	  }
    		 if(current.value > value) {
    			 current = current.left;
    			 
    		 } else {
    			 current = current.right; 
    		 }
    		 
    		 
    	}
    	 return false;
     }
     
     public void preOrder() {
    	 preOrder(this.root);
     }
     
     private  void  preOrder(Node root) {
    	 
    	 if(root == null) {
    		 return;
    	 }
    	 
	      System.out.println(root.value);
    	  preOrder(root.left);
    	  preOrder(root.right);
    	 
    	 
     }
     
    public void postOrder() {
    	postOrder(this.root);
    }
     
   private  void  postOrder(Node root) {
    	 
    	 if(root == null) {
    		 return;
    	 }
    	 
	      postOrder(root.left);
    	  postOrder(root.right);
    	  System.out.println(root.value);
    	 
    	 
     }
   
   public void inOrder() {
   	inOrder(this.root);
   }
   
   private  void  inOrder(Node root) {
  	 
  	 if(root == null) {
  		 return;
  	 }
  	 
	      inOrder(root.left);
	      System.out.println(root.value);
  	      inOrder(root.right);
  	  
  	}
   
   public int height() {
	   return height(this.root);
   }
   
   private int height(Node root) {
	   if(root == null) return -1;
	   if(root.left == null && root.right == null) {
		   return 0; 
	   }
	   
	   return 1 + Math.max(height(root.left), height(root.right));
   }
   
//   private boolean isLeaf(Node node) {
//	   return node.left == null && node.right == null; 
//   }
//   
   
   public int min() {
	   return min(root);
//	   if(root == null)
//		   throw new IllegalStateException(); 
//	   var current = root; 
//	   var last = current; 
//	   while(current != null) {
//		   last = current; 
//		   current = current.left; 
//	   }
//	   
//	   return last.value; 
   }
   
   private int min(Node root) {
	   
	  if(root.left == null || root.right == null)
		return root.value;
	  
	  var left = min(root.left); 
	  var right = min(root.right);
	   
	  return  Math.min(Math.min(left, right), root.value);
	   
	   
   }
   
   public boolean equals(BST other) {
	   if(other == null)
		   return false;
		return equals(root, other.root);
   }
   
   private boolean equals(Node first, Node second) {
	   if(first == null && second == null)return true;
	   
	   if(first != null  && second != null)
		   return first.value == second.value
		   && equals(first.left, second.left) && equals(first.right , second.right);
	   
	  return false;
   }
   
   

}
