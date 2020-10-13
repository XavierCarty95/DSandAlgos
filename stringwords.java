import java.util.*;

public class bucky {
	
	
	
	
	public static void main (String[] args) {
		String word = "xavier";
		char[][] wordArray = {{'x' , 'b' , 'c'} , {'a' , 'i' , 'e'} , { 'v', 'r','s'}};
	    String result = "";
		HashSet<Character> hash = new HashSet<>(); 
		
		for(int i = 0; i < word.length(); i++) {
			if(!hash.contains(word.charAt(i))){
				
				hash.add(word.charAt(i));
			}
		}
		
		for(int i = 0; i < wordArray.length; i++) {
			for(int j = 0; j < wordArray[i].length; j++){
				
				if(hash.contains(wordArray[i][j])) {
					result += wordArray[i][j];
				}
				
			}
			
		}
		
		if(word.length() != result.length()) {
			System.out.println(false);
		}
		
		 int asciiSum = 0;
			
		 int asciiSum2 = 0;
		 boolean isTrue = false;
         
		 for(int i = 0; i < word.length(); i++) {
        	 asciiSum += (int)word.charAt(i);
        	 asciiSum2 += (int)result.charAt(i);
        	 
         }
         
         if(asciiSum == asciiSum2) {
        	 isTrue = true;
         }
         
         System.out.println(isTrue);
	  
		
	}
	
	
}
