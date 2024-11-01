def main():
    print("Enter numbers (enter 0 to stop):")

    while True:
        number = int(input("Enter a number: "))

        if number == 0:
            break

        print("You entered:", number)

    print("Loop terminated because you entered 0.")

if __name__ == "__main__":
    main()