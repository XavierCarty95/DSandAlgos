


public class MasterJavaJ {

	public static void main (String[] args) {
	
	
	Aircraft delta = new Aircraft(10 , 22, 33.75 , 45.23);
	Aircraft piper = new Aircraft(12 , 33, 42.15, 63.45);
	   

	
	 Aircraft.wings = 2; 
	 System.out.println(Aircraft.wings);
	 
	 delta.setPassengers(10);
	 Aircraft.displayWings();

	}
	
	
}

class Aircraft {
	
	private int passengers; 
	int cruiseSpeed; 
	static int wings; 
	double fuelCapacity; 
	double fuelBurnRate; 
	
	Aircraft(int p , int c , double fc , double fbr ){
		this.passengers = p; 
		this.cruiseSpeed = c; 
		this.fuelCapacity = fc; 
		this.fuelBurnRate = fbr;
		
		
	}
	
	 double enduranceCalc(double fuelCapacity ,double fuelBurnRate) {
		  double endurance; 
		  
		  
		  endurance = fuelCapacity/ fuelBurnRate; 
		  return endurance;
		
	  }
	 
	 double fuelNeeded(double time) {
		 
		 return this.fuelBurnRate * time; 
		 
	 }
	
	 void setPassengers(int p){
		 
		 if((p >= 0) && (p <= 10)) { 
			 this.passengers = p;
		    System.out.println("You have " + passengers);
		 }
		 else System.out.println("Error");
		 
	 }
	 
	 public static void displayWings() {
		 
		     System.out.println("You have " + wings);
	    }
	 
	
	
}