import java.util.HashMap;

public class RomanToInteger {
    public static int romanToInt(String s) {
        // Create a mapping of Roman numerals to integers
        HashMap<Character, Integer> romanMap = new HashMap<>();
        romanMap.put('I', 1);
        romanMap.put('V', 5);
        romanMap.put('X', 10);
        romanMap.put('L', 50);
        romanMap.put('C', 100);
        romanMap.put('D', 500);
        romanMap.put('M', 1000);

        int result = 0;
        int prevValue = 0;

        // Iterate through the Roman numeral string from right to left
        for (int i = s.length() - 1; i >= 0; i--) {
            int currentValue = romanMap.get(s.charAt(i));
            if (currentValue < prevValue) {
                // If the current numeral is smaller than the previous one, subtract it
                result -= currentValue;
            } else {
                // Otherwise, add it to the result
                result += currentValue;
            }
            prevValue = currentValue;
        }

        return result;
    }

    public static void main(String[] args) {
        String romanNumber = "IX";
        int integerNumber = romanToInt(romanNumber);
        System.out.println("Integer value of " + romanNumber + " is " + integerNumber);
    }
}
