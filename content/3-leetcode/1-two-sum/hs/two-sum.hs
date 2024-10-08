import qualified Data.Map.Strict as Map

twoSum :: [Int] -> Int -> [(Int, Int)]
twoSum nums target = 
    [(x, y) | (x, y) <- zip nums [0..], 
              y' <- Map.lookup (target - x) seen, 
              y /= y']
  where seen = Map.fromList $ zip nums [0..]