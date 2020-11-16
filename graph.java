
public class Graph {
	
	
	private class Node {
		
		
		private String label; 
		
		public  Node(String label) {
			this.label = label;
		}
		
		@Override
		public String toString() {
			return label;
		}
        kcljclcmn.,x
        xxk;jxjx'
        
	}
	
	private Map<String , Node > nodes = new HashMap<>();
	private Map<Node , List<Node>>  adjacencyList = new HashMap<>();
	
	
	public void addNode(String label) {
		
		var node = new Node(label);
	    nodes.putIfAbsent(label, node);
	    adjacencyList.putIfAbsent(node, new ArrayList<>());
		
	}
	 
	public void addEdge(String from , String to) {
		
		var fromNode = nodes.get(from);
        if(fromNode == null)
        	throw new IllegalArgumentException();
		
		var toNode = nodes.get(to);
		if(toNode == null)
			throw new IllegalArgumentException();
		adjacencyList.get(fromNode).add(toNode);
	}
	
	public void print() {
		
		for(var source : adjacencyList.keySet()) {
			var targets  = adjacencyList.get(source);
			if(!targets.isEmpty())
				System.out.println(source + "is connected to " +  targets);
		}
	}
	
	
	public void removeNode(String label) {
		var node = nodes.get(label);
		if(node == null)
			return;
		
		for(var n : adjacencyList.keySet()) {
			adjacencyList.get(n).remove(node);
		}
		
		adjacencyList.remove(node);
		nodes.remove(node);
	}
	
	public void removeEdge(String from, String to) {
		
		var fromNode = nodes.get(from);
		var toNode = nodes.get(to);
		
		if(fromNode == null || toNode == null)
			return;
		
		adjacencyList.get(fromNode).remove(toNode);
	}
	
	public void depthFirstSearch(String root) {
		
		var node = nodes.get(root);
		Stack<Node> stack = new Stack<>();
        HashSet<Node> visited  = new HashSet<>();
        
        stack.push(node);
        
        while(!stack.isEmpty()){
        	var current = stack.pop();
        	
        	if(visited.contains(current))
        		continue;
        	
        	System.out.println(current);
        	visited.add(current);
        	
        	for(var neighbors : adjacencyList.get(current)) {
        		
        		  stack.push(neighbors);
        		
        	}
        	
        	
        	
        	
        }
	}
    	public void breadthFirstSearch(String root) {
    		
    		var node = nodes.get(root);
    		
    		if(node == null) {
    			return;
    		}
    		Queue<Node> queue = new ArrayDeque<>();
            HashSet<Node> visited  = new HashSet<>();
            
            queue.add(node);
            
            while(!queue.isEmpty()){
            	var current = queue.remove();
            	
            	if(visited.contains(current))
            		continue;
            	
            	System.out.println(current);
            	visited.add(current);
            	
            	for(var neighbors : adjacencyList.get(current)) {
            		
            		  queue.add(neighbors);
            		
            	}
            	
            	
            	
            	
            }
//		var node = nodes.get(root);
//		if(node == null)return;
//		
//		depthFirstSearch(nodes.get(root), new HashSet<>());
//   		
		
		
	}
	
//	private void depthFirstSearch(Node root , Set<Node> visited) {
//		
//		System.out.println(root);
//		
//		visited.add(root);
//		
//		
//		for(var node : adjacencyList.get(root)) {
//			if(!visited.contains(node)) {
//				depthFirstSearch(node , visited);
//			}
//		}
//		
//		
//		
//	}
	
	

}