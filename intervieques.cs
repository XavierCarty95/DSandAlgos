using System.Linq;
using System.Text.RegularExpressions;
					
public class Program
{
	public static void Main()
	{
		Console.WriteLine("Enter a string");
		//get input
		var input = Console.ReadLine().ToUpper();
		//strip whitespace 
		string text = Regex.Replace(input, @"\s+", "");
		//use dictionary for best case scenario time 0(N) space 0(N)
		Dictionary<char, int> dict = new Dictionary<char, int>();
		//counter
		int count = 0;
		//loop through string to see if character exist then increment value if not add character and value
		foreach(char c in text){
			if(!dict.ContainsKey(c)){
			    dict.Add(c, count);
			}
			dict[c]++;
		}
		//optional loop through dictionary and count letters
		int sum = 0 ;
		foreach (KeyValuePair<char, int> letter in dict)  
         {  
			 sum = letter.Value + sum;
             //Console.WriteLine("Key: {0}, Value: {1}", letter.Key, letter.Value);  
		}
		Console.WriteLine("The total amount of letters: {0}",sum);
	}
}