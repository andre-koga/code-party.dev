#include <iostream>

int main()
{
    int number;

    std::cout << "Enter numbers (enter 0 to stop):" << std::endl;

    while (true)
    {
        std::cout << "Enter a number: ";
        std::cin >> number;

        if (number == 0)
        {
            break;
        }

        std::cout << "You entered: " << number << std::endl;
    }

    std::cout << "Loop terminated because you entered 0." << std::endl;

    return 0;
}