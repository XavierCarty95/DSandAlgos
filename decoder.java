public class DuplicateEncoder {
    2
      static String encode(String word){
    3
        
    4
        HashMap<Character, Integer> count = new HashMap<Character,Integer>(); 
    5
        
    6
        char[] letters = word.toCharArray();
    7
        
    8
        for(int i = 0; i < letters.length; i++){
    9
              
    10
              if(!count.containsKey(letters[i])){
    11
                   count.put(letters[i] , count.get(letters[i]) + 1);
    12
              } else {
    13
                   count.put(letters[i], 1);
    14
              }
    15
        }
    16
        
    17
        for(int i = 0; i < word.length; i++){
    18
          
    19
               if(count.get(word.charAt(i)) > 1 ){
    20
                 
    21
                    word.replace(word.charAt(i) , "(" );
    22
              } else {
    23
                    word.replace(word.charAt(i), ")");
    24
               }
    25
        }
    26
        return word;
    27
      }
    28
    } 