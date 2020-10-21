import java.util.Arrays;

public class Main {

	public static void main(String[] args) {
		
	    NewLinkedList list = new NewLinkedList();
		list.addFirst(10);
		list.addFirst(20);
		list.addLast(25);
	
//		list.reverse();
//		System.out.println(list.contains(1));
//		System.out.println(list.indexOf(25));
//		System.out.println(list.size());
//		list.print();
		System.out.println(list.findK(3));
		
	}
	
}
