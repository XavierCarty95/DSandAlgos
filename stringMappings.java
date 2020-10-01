class Solution {
    public String mostCommonWord(String paragraph, String[] banned) {
    String str = paragraph.replaceAll("[^a-zA-Z0-9]", " ").toLowerCase();
    String[] list = str.split("\s+");
    
        Set<String> ban = new HashSet();
        for(String s: banned)
        {
            ban.add(s);
        }
        
        Map<String, Integer> map = new HashMap<String, Integer>();
        for(String s: list)
        {
            if(!ban.contains(s) && !map.containsKey(s))  
          {
              map.put(s,1);
          }
            else if(!ban.contains(s) && map.containsKey(s))  
          {
              map.put(s,(map.get(s)+1));
          }
        }
        
        String result = Collections.max(map.entrySet(),Map.Entry.comparingByValue()).getKey();
        return result;
    }
    }