def two_sum(nums, target)
  seen = {}
  nums.each_with_index do |num, index|
    complement = target - num
    if seen.key?(complement)
      return [seen[complement], index]
    end
    seen[num] = index
  end
  []
end