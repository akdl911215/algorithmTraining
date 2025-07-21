def min_subarray_len(s, arr):
    left = 0
    window_sum = 0
    min_length = float('inf')

    for right in range(len(arr)):
        window_sum += arr[right]
        while window_sum >= s:
            min_length = min(min_length, right - left + 1)
            window_sum -= arr[left]
            left += 1
    return min_length if min_length != float('inf') else 0

arr = [2, 1, 5, 2, 3, 2]
s = 7
print(min_subarray_len(s, arr))  # 출력: 2 ([5,2] 또는 [2,5])
