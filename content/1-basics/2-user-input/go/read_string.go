package main

import (
    "bufio"
    "fmt"
    "os"
    "strconv"
    "strings"
)

func main() {
    reader := bufio.NewReader(os.Stdin)

    fmt.Print("Enter your age: ")
    input, _ := reader.ReadString('\n')
    input = strings.TrimSpace(input)
    age, _ := strconv.Atoi(input)

    fmt.Println("Your age is", age)
}