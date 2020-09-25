class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        List<List<String>> res = new ArrayList<>();
        if (strs.length > 0) {
            Map<String, List<String>> map = new HashMap<>();
            for (int i=0; i<strs.length; i++) {
                char[] charArr = strs[i].toCharArray();
                Arrays.sort(charArr);
                String key = new String(charArr);
                List<String> currList = map.get(key);
                if (currList == null) {
                    currList = new ArrayList<>();
                }
                currList.add(strs[i]);
                map.put(key, currList);
            }
            
            Iterator itr = map.values().iterator();
            while(itr.hasNext()) {
                res.add((List<String>) itr.next());
            }
        }
        return res;
    }
}