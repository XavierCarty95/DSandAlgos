class Solution {
    public int search(ArrayReader reader, int target) {
        
        if(reader == null ) return -1;
        
        int searchLen = 2;
        int l=0, r = l+searchLen;
        
        while(reader.get(l) != 2147483647 && l<=r) {
            int mid = l + (r-l)/2;
            
            if(reader.get(mid)==target) {
                return mid;
            }else if(reader.get(mid) > target) {
                r = mid-1;
            }else {
                l = mid+1;
                searchLen = 2*searchLen;
                r = l+searchLen;
            }
        }
        
        return -1;
    }
}