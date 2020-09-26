/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package myfirstproject;

/**
 *
 * @author xaviercarty
 */
public class FirstJavaProgram {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        //this is a single line comment
        // TODO code application logic here
        int var = 10;
        testAnotherClass classy = new testAnotherClass();
        int xavier = classy.add(10,20);
        System.out.println(xavier);
        System.out.println("My first java program is very awesome999");
        System.out.println(var);
    }
    
}


class testAnotherClass{
    
    
    
    public int add(int num1, int num2){
        
        int result = num1 + num2; 
        
        return result; 
        
        
    }
    
    
    
}