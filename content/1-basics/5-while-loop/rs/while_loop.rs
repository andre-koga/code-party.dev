use std::io;

fn main() {
    println!("Enter numbers (enter 0 to stop):");

    loop {
        let mut input = String::new();
        println!("Enter a number: ");
        io::stdin().read_line(&mut input).expect("Failed to read line");

        let number: i32 = input.trim().parse().expect("Please enter a valid number");

        if number == 0 {
            break;
        }

        println!("You entered: {}", number);
    }

    println!("Loop terminated because you entered 0.");
}