from typing import List

def min_subarray_len_at_least(target: int, nums: List[int]) -> int:
    INF = 10**18
    best = INF
    left = 0
    window_sum = 0

    for right, val in enumerate(nums):
        window_sum += val

        # 조건(window_sum >= target)을 만족하는 동안 왼쪽을 당겨 길이 최소화
        while window_sum >= target:
            best = min(best, right - left + 1)
            print(best)

            nums_left = nums[left]
            print(nums_left)

            window_sum -= nums_left
            print(window_sum)

            left += 1

    return 0 if best == INF else best


# 사용 예시
if __name__ == "__main__":
    print(min_subarray_len_at_least(7, [2, 3, 1, 2, 4, 3]))  # 2 (예: [4,3])
