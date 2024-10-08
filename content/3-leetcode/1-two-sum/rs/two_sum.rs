use std::collections::HashMap;

impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let mut complements = HashMap::new();
        for (i, &num) in nums.iter().enumerate() {
            if let Some(&j) = complements.get(&num) {
                return vec![j as i32, i as i32];
            }
            complements.insert(target - num, i);
        }
        vec![]
    }
}