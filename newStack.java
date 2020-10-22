import java.util.Stack;

public class Stacks {
  
	
	final int capacity = 100;
	private int top = -1;
	private int[] stack; 
	
	public Stacks() {
		
	  
		stack = new int[capacity];
		
	}
	
	
	


	public void push(int item) {
		
		if(top < capacity)
		stack[++top] = item;
		
		
		
	}
	
	public boolean isEmpty() {
		
		return top == -1;
		
		
	}
	
	public void pop() {
		
		if(isEmpty()){
			System.out.println("stack is empty");
			return;
		}
		
		stack[top] = 0;
		top--;
		
	}
	
	public int peek() {
		if(isEmpty()){
			System.out.println("stack is empty");
			return -1;
		}
		
		return stack[top];
		
	}
	
//	public boolean balancedExpression(String word) {
//		
//		 Stack<Character> stack = new Stack();
//		 
//		 for(int i = 0; i < word.length(); i++) {
//			 
//			 
//			 if(word.charAt(i) == '(' || word.charAt(i) == '[') {
//				 stack.push(word.charAt(i));
//			 }
//			 
//			 if((word.charAt(i) == ')' && stack.pop() != '(') || (word.charAt(i) == ']' && stack.pop() != '[') ) {
//				  return false; 
//			 }
//			 
//			 
//		 }
//		 
//		 return true;
//		
//		
//		
//	}
}
