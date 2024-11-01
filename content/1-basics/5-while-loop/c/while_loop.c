#include <stdio.h>

int main()
{
    int number;

    printf("Enter numbers (enter 0 to stop):\n");

    while (1)
    {
        printf("Enter a number: ");
        scanf("%d", &number);

        if (number == 0)
        {
            break;
        }

        printf("You entered: %d\n", number);
    }

    printf("Loop terminated because you entered 0.\n");

    return 0;
}