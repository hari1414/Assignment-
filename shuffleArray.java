import java.util.Random;

public class ShuffleArray {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5, 6, 7};

        // Shuffle the array
        Random random = new Random();
        for (int i = arr.length - 1; i > 0; i--) {
            int index = random.nextInt(i + 1);
            int temp = arr[i];
            arr[i] = arr[index];
            arr[index] = temp;
        }

        // Print the shuffled array
        System.out.print("Shuffled array: ");
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }
}
