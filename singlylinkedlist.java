import java.util.Iterator;

class LinkedList <T> implements Iterable <T> {

	private int size = 0; 
	private Node<T> head; 
	private Node<T> tail;
	
	
	private class Node<T> {
		private T data; 
		private Node <T> prev, next;
		public Node(T data, Node <T> prev, Node <T> next) {
			this.data = data; 
			this.prev = prev; 
			this.next = next; 
		}
		
		@Override public String toString() {
			return data.toString();
		}
	}
   
	public void clear() {
		Node <T> trav = head; 
		while(trav != null) {
			Node <T> next = trav.next;
			trav.prev = trav.next = null; 
			trav.data = null; 
			trav = next; 
		}
		
		head = tail = trav = null;
		size = 0;
	}
	
	public int size() {
		return size; 
	}
	
	public boolean isEmpty() {
		return size() == 0; 
	}
	
	public void add(T elem) {
		addLast(elem);
	}
	
	public void addFirst(T elem) {
	     if(isEmpty()) {
	    	 
		   head = tail = new Node <T> (elem, null, null); 
		   
	   } else {
		   head.prev = new Node <T> (elem, null, head);
		   head = head.prev; 
	   }
	     size++;
	}
	
	public void addLast(T elem) {
	if(isEmpty()) {
		head = tail = new Node <T> (elem , null , null);
	 } else {
		 tail.next = new Node <T> (elem, tail, null);
		 tail = tail.next;
	 }
	 size++;
	
	  
	}
	
	public T peekFirst() {
		if(isEmpty()) throw new RuntimeException("Empty List");
		
		return tail.data;
	}
	
	
	public T removeFirst() {
		if(isEmpty()) throw new RuntimeException("Empty List");
		
		T data = head.data; 
		head = head.next; 
		--size; 
		
		if(isEmpty()) tail = null; 
		
		else head.prev = null;
		
		return data; 
	}
	public T removeLast() {
	    // Can't remove data from an empty list
	    if (isEmpty()) throw new RuntimeException("Empty list");

	    // Extract the data at the tail and move
	    // the tail pointer backwards one node
	    T data = tail.data;
	    tail = tail.prev;
	    --size;

	    // If the list is now empty set the head to null
	    if (isEmpty()) head = null;

	    // Do a memory clean of the node that was just removed
	    else tail.next = null;

	    // Return the data that was in the last node we just removed
	    return data;
	  }
	
	private T remove(Node <T> node) {
		
		if(node.prev == null) return removeFirst();
		if(node.next == null) return removeLast();
		
		
		node.next.prev = node.prev; 
		node.prev.next = node.next;
		
		T data = node.data; 
		
		node.data = null ; 
		node = node.prev = node.next = null; 
		
		--size; 
		
		return data; 
		
		
	}
	
	public T removeAt(int index) {
		
		if(index < 0 || index >= size) throw new IllegalArgumentException();
		
		int i; 
		Node <T> trav; 
		
		if(index < size/2) {
			for(i = 0, trav = head; i != index; i++)
				trav = trav.next; 
		} else 
			for(i = size-1, trav = tail; i != index; i--)
				trav = trav.prev; 
		
	  return remove(trav);
		
		
	}
	
	public boolean removeLast(Object obj){
		
		Node <T> trav = head; 
		
		if(obj == null) {
			for(trav = head; trav != null; trav = trav.next) {
				if(trav.data == null) {
					remove(trav);
					return true;
				}
			}
		} else {
			
			for(trav = head; trav != null; trav  = trav.next) {
				if(obj.equals(trav.data)) {
					remove(trav);
					return true;
				}
				
			}
		}
		return false;
		
		
	}
	
	public int indexOf(Object obj) {
		
		int index = 0; 
		Node <T> trav = head;
		
		if(obj == null) {
			
			for(trav = head; trav !=null; trav = trav.next, index++) {
				if(trav.data == null)
				 return index;
			}
			
			
		} else 
			for(trav = head; trav != null; trav = trav.next, index++)
				if(trav.data == null)
				 return index;
				
		
		return -1;
		
	}
	
	public boolean contains(Object obj) {
		return indexOf(obj) != -1;
	}

	
	@Override
	public Iterator<T> iterator() {
		// TODO Auto-generated method stub
		return null;
	}
}
