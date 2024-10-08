bubbleSort :: Ord a => [a] -> [a]
bubbleSort xs = foldr (\_ -> bubble) xs [1..length xs - 1]
  where bubble [] = []
        bubble [x] = [x]
        bubble (x:y:xs) = if x > y then y : bubble (x:xs) else x : bubble (y:xs)