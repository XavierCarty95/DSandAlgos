public class Main {

	public static void main(String[] args) {
//		
		String repeated = "sttrinrigs";
		var wordRepeat = repeat(repeated);

	    System.out.print(wordRepeat);
		
		
    }
	
	public static Character repeat(String word) {
		  
		 Set<Character>  map = new HashSet<>();
		 char[] wordArray = word.toCharArray(); 
		 
		 for(char item : wordArray) {
			 
			 if(map.contains(item)) {
				  return item; 
			 } else {
				map.add(item);
			 }
			 
			 
		 }
		 
		 return 'l';
		
	
	}
			
}