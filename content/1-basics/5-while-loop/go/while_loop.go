package main

import (
    "fmt"
)

func main() {
    var number int

    fmt.Println("Enter numbers (enter 0 to stop):")

    for {
        fmt.Print("Enter a number: ")
        fmt.Scan(&number)

        if number == 0 {
            break
        }

        fmt.Println("You entered:", number)
    }

    fmt.Println("Loop terminated because you entered 0.")
}