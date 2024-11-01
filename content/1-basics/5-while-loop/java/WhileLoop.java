import java.util.Scanner;

public class WhileLoop {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int number;

        System.out.println("Enter numbers (enter 0 to stop):");

        while (true) {
            System.out.print("Enter a number: ");
            number = scanner.nextInt();

            if (number == 0) {
                break;
            }

            System.out.println("You entered: " + number);
        }

        System.out.println("Loop terminated because you entered 0.");
        scanner.close();
    }
}