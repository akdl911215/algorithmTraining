def binary_search_iterative(arr, target):
    low, high = 0, len(arr) - 1

    while low <= high:
        mid = (low + high) // 2

        if arr[mid] == target:
            return mid
        elif arr[mid] > target:
            high = mid - 1
        else:
            low = mid + 1

    return -1



# 정렬된 배열
arr = [1, 3, 5, 7, 9, 11]

# 목표 값
target = 7

print(binary_search_iterative(arr, target))