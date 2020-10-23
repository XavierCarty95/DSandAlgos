
public class UIControl {
	// as long as we are inside the package; 
	protected boolean isEnabled = true; 
	
	public UIControl(boolean isEnabled) {
		
		this.isEnabled = isEnabled; 
		System.out.println("UI Control");
	}
	
	
	
	
	public void enable() { 
		isEnabled = true; 
		
	}
	
	public void disable() {
		isEnabled = false; 
	}
	
	public boolean isEnable() {
		return isEnabled; 
	}

}
