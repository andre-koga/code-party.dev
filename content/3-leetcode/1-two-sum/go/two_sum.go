package main

func twoSum(nums []int, target int) []int {
    numMap := make(map[int]int)
    for i, num := range nums {
        complement := target - num
        if idx, ok := numMap[complement]; ok {
            return []int{idx, i}
        }
        numMap[num] = i
    }
    return nil
}