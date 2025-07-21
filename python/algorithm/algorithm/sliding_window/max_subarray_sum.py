def max_subarray_sum(arr, k):
    window_sum = sum(arr[:k])  # 첫 구간의 합
    max_sum = window_sum

    len_arr = len(arr)
    for i in range(k, len_arr):
        arrik =  arr[i - k]
        arri = arr[i]
        window_sum = window_sum - arrik + arri
        max_sum = max(max_sum, window_sum)
    return max_sum

arr = [2, 1, 5, 1, 3, 2]
k = 3
print(max_subarray_sum(arr, k))  # 출력: 9
