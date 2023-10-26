public class PangramChecker {
    public static void main(String[] args) {
        String input = "The quick brown fox jumps over the lazy dog";

        // Create an array to mark the presence of each letter (a-z)
        boolean[] letters = new boolean[26];

        // Convert the input to lowercase for case-insensitive check
        input = input.toLowerCase();

        // Iterate through the input string
        for (int i = 0; i < input.length(); i++) {
            char ch = input.charAt(i);

            // Check if the character is a lowercase letter (a-z)
            if (ch >= 'a' && ch <= 'z') {
                // Calculate the index of the letter in the array (a=0, b=1, ..., z=25)
                int index = ch - 'a';

                // Mark the letter as present by setting the corresponding array element to true
                letters[index] = true;
            }
        }

        // Check if all letters (a-z) have been marked as present
        boolean isPangram = true;
        for (boolean letterPresent : letters) {
            if (!letterPresent) {
                // If any letter is not present, it's not a pangram
                isPangram = false;
                break;
            }
        }

        // Print the result
        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }
}
