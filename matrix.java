import java.util.Arrays;

public class Main {

	public static void main(String[] args) {
		
		int[][] array = {{1,2,3,4,5}, 
				         {6,7,8,9,10}};
		 System.out.println(Arrays.toString(array));
		// TODO Auto-generated method stub
		  for(int i = 0; i < array.length; i++) {
			  for(int j = 0; j < array.length; j++) {
				  
				  int temp = array[i][j];
				  array[i][1] = array[i][j];
				  array[i][j] = temp;  
				  
			  }
		  }
		  
		 System.out.println(Arrays.deepToString(array));
	}

}
