def kadane_algorithm(nums):
    current_max = global_max = nums[0]

    for num in nums[1:]:
        current_max = max(num, current_max + num)

        global_max = max(global_max, current_max)

    return global_max

# 예시 수열
nums = [3, -2, 5, -1]
# nums = [2, 3, -6, 1, 3, -1, 2, 4]

# 가장 큰 연속 부분 수열의 합을 계산합니다.
max_sum = kadane_algorithm(nums)
print(f"The maximum subarray sum is: {max_sum}")