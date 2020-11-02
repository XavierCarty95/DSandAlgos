import java.util.Arrays;

public class PriorityQueues {

	
	
	
	private int[] queue; 
	private int capacity; 
	private int size = 0; 
	
	public PriorityQueues(int capacity) {
		
		this.capacity = capacity; 
		this.queue = new int[this.capacity];
		
		
		
	}
	
	public void insert(int item) {
		
		if(size < 1) {
			queue[0] = item; 
			size++; 
			return; 
		}
		
		if(size == 1) {
			
			if(item < queue[0]) {
				int temp = queue[0];
				queue[0] = item;
				queue[1] = temp;
			} else {
				queue[1] = item;
			}
			size++; 
		   return; 
			
		}
		
		for(int i = 2; i <= size; i++) {
				
				if(item  < queue[i]) {
				   int temp = queue[i];
				   queue[i] = item; 
				   queue[i+1] = temp;
				}
				else {
				  queue[i] = item;	
				}
				
				
			}
			
			size++;
			
		
		
	}
	
	public int size() {
		return size;
	}
	
	public String print() {
	
	}
	
	
}

Testing; 

Send you a ruby file and 
two test files 
make sure rspec 
run locally within 
two files ruby file is awful.

find that the test fail 
get the test to pass;
just keep talking; 

uses view , elixir , C#

questions prepared; 
engineers at the 

