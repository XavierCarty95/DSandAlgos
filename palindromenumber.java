class Solution {
    public boolean isPalindrome(int x) {
          if(x < 0){
            return false;
        }
        String number = Integer.toString(x); 
        int[] newNum = new int[number.length()];
       
        int start = 0; 
        int end = newNum.length; 
        
        for(int i = 0; i < newNum.length; i++){
            newNum[i] = number.charAt(i) - '0';
        }
        
        while(start < end){
            if(newNum[start] != newNum[end-1] ){
                return false;
            }
            
            start++;
            end--;
        }
        
        return true;
        
    }
}