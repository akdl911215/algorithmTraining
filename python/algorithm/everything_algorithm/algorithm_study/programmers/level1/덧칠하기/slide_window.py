def minSubArrayLen(nums, k):
    if not nums:
        return 0

    minLength = float('inf')
    left = 0
    currentSum = 0

    for right in range(len(nums)):
        currentSum += nums[right]

        while currentSum >= k:
            minLength = min(minLength, right - left + 1)
            currentSum -= nums[left]
            left += 1

    return minLength if minLength != float('inf') else 0

# 예시 사용
nums = [2, 3, 1, 2, 4, 3]
k = 7
print(minSubArrayLen(nums, k))
