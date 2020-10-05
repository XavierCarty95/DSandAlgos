package myprojectclasseandobjects;

/**
 *
 * @author xaviercarty
 */
public class Account {
    
   private String accountNumber; 
   private String accountType; 
   protected long amount; 
    
    
    public Account(String accountNumber , String  accountType, long  amount){
        
        this.accountNumber = accountNumber; 
        this.accountType = accountType; 
        this.amount = amount; 
        
        
    }
    
    public boolean withdraw(long amt){
        
        if(amt < amount){
          amount -= amt;
            System.out.println(amount);
          return true; 
        } else {
            System.out.println("Can't withdraw you have insufficient funds");
            return false;
        }
        
        
    }
    
    public long deposit(long amt){
        
        if(amt < 0){
            System.out.println("Cant use negative number");
            return amount;
        } else {
            amount += amt; 
            System.out.println(amount);
            return amount; 
        }
    }
    
     void setAccountNumber(String acctNumber){
        accountNumber = acctNumber; 
    }
     
     public String getAccountNumber(){
         
         return accountNumber;
         
     }
     
     void accountType (String acctType){
        accountType = acctType; 
    }
     
     public String getAccountType(){
         
         return accountType;
         
     }
    
}
