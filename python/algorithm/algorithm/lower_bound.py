def lower_bound(arr, target):
    left, right = 0, len(arr)

    while left < right:
        mid = (left + right) // 2

        if arr[mid] < target:
                left = mid + 1
        else:
            right = mid
    return left


# arr = [1, 2, 4, 4, 5, 6]
# arr = [1, 2, 4, 4, 4, 6, 7, 9]
arr = [1, 2, 4, 4, 4, 6, 7, 9]

# target = 4
target = 5
print(lower_bound(arr, target))  # Output: 2
