public class MasterJavaJ {

	public static void main (String[] args) {
	       
		 
		double grades[] = {95.4, 85.3 , 69.3, 88.6 , 87.5 , 23.4, 100.23};
		double max = grades[0];
		
		
		
		for(int i = 1; i < grades.length; i++) {
			if(grades[i] > max) {
				max = grades[i];
			}
		}
		
		
		System.out.println(max);
		
	
	}
}