use std::io::{self, Write};

fn main() {
    print!("Enter your age: ");
    io::stdout().flush().unwrap();

    let mut input = String::new();
    io::stdin().read_line(&mut input).expect("Failed to read line");

    let age: i32 = input.trim().parse().expect("Please enter a valid number");

    println!("Your age is {}", age);
}