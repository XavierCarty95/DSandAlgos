/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode middleNode(ListNode head) {
        
        int count = 0; 
        
        ListNode cur = head; 
  
        while(cur != null){
            count++; 
            cur = cur.next;
        }
        
        ListNode trav = head;
        
        for(int i = 0; i < count/2; i++){
            
             trav = trav.next;
            
        }
        return trav;
    }
}