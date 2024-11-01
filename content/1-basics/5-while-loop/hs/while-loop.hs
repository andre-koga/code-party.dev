main :: IO ()
main = do
    putStrLn "Enter numbers (enter 0 to stop):"
    loop

loop :: IO ()
loop = do
    putStr "Enter a number: "
    input <- getLine
    let number = read input :: Int
    if number == 0
        then putStrLn "Loop terminated because you entered 0."
        else do
            putStrLn $ "You entered: " ++ show number
            loop