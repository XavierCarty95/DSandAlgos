import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Array {
	
	private int[] arrays;
	private int size = 0; 
	
	public Array(int capacity) {
		
		this.arrays = new int[capacity];
	}
	
	
	public void insert(int item) {
		
		     
	      if(this.arrays.length == this.size) {
	    	  int[] newItems = new int[this.size * 2];
	      
	    	  
	    	 for(int i = 0; i < this.size; i++) {
	    	      newItems[i] = this.arrays[i];  
	    	  }
	    	 
	    	    this.arrays = newItems;
	         }
	      this.arrays[this.size++] = item; 
	    	  
	}
	
	public int indexOf(int item) {
		
	    for(int i = 0; i < this.arrays.length; i++) {
	    	
	        if(this.arrays[i] == item) {
	        	System.out.println(i);
	            return i;  	
	    	
	        } 
		} 
	    
	    System.out.println(-1);
	    return -1; 
	}
	
	public void removeAt(int index) {
		
	        if(index < 0 || index > this.size) 
	        throw new IllegalArgumentException();
	        
	        	
	        for(int i = index; i < this.size; i++) 
	          this.arrays[i] = this.arrays[i + 1]; 
	           
	     this.size--; 
	       
	       
	     
		
	}
	
	public void reverse() {
		
		for(int i = this.size-1; i >= 0; i--) {
			System.out.println(this.arrays[i]);
		}
		
	}
	
	public void max() {
		
		int max = this.arrays[0];
		for(int i = 0; i < this.arrays.length; i++) {
			if(this.arrays[i] > max) {
				max = this.arrays[i];
			}
			
		}
		
		System.out.println(max);
		
	}
	
	public void insertAt(int item, int index) {
		
		if(index > size  || index < 0) {
			throw new IllegalArgumentException();
		}
		
//		5 , 6 , 11 , 30 , 40
		//insert a given index , every index after shifted one space

		  int[] newArr = new int[this.size + 1]; 
		  for(int i = 0; i < index; i++) {
			  if(i == index)
				 newArr[i] = item;
             else {
			   newArr[i] = this.arrays[i];
			 }
		  }
		  
		  for(int i = index ; i < newArr.length; i++) {
			   newArr[i] = this.arrays[i];
		  }
		  
		  this.arrays = newArr;
		 
	}
	
	public String intersect(int[] arr1 , int[] arr2) {
		
		List<Integer> list = new ArrayList<Integer>();
	    for (int i = 0; i < arr1.length; i++) {
	        for (int j = 0; j < arr2.length; j++) {
	            if (arr1[i] == arr2[j]) {
	                list.add(arr1[i]);
	            }
	        }
	    }
	    Object[] mylist = list.toArray();
	    
	    return Arrays.toString(mylist);
		
		
		
	}
		
	public void print() {
		
		
		for(int i = 0; i < this.size; i++) {
			System.out.println(this.arrays[i]);
		}
	}

}