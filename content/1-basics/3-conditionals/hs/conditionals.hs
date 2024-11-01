main :: IO ()
main = do
    putStrLn "Enter a number:"
    input <- getLine
    let number = read input :: Int
    if number > 0
        then putStrLn "The number is positive."
        else if number < 0
            then putStrLn "The number is negative."
            else putStrLn "The number is zero."