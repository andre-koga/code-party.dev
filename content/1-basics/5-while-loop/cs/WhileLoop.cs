using System;

class Program
{
    static void Main()
    {
        int number;

        Console.WriteLine("Enter numbers (enter 0 to stop):");

        while (true)
        {
            Console.Write("Enter a number: ");
            number = int.Parse(Console.ReadLine());

            if (number == 0)
            {
                break;
            }

            Console.WriteLine("You entered: " + number);
        }

        Console.WriteLine("Loop terminated because you entered 0.");
    }
}